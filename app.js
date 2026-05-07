// Exam Categories Data
const EXAM_DATA = {
    sme: {
        name: "中小企業診断士",
        categories: [
            "企業経営理論",
            "財務・会計",
            "運営管理",
            "経済学・経済政策",
            "経営情報システム",
            "経営法務",
            "中小企業経営・中小企業政策"
        ]
    },
    fp1: {
        name: "FP1級 (学科)",
        categories: [
            "ライフプランニングと資金計画",
            "リスク管理",
            "金融資産運用",
            "タックスプランニング",
            "不動産",
            "相続・事業承継"
        ]
    }
};

// State
let currentQuiz = null;
let currentExam = 'sme';
let currentCategory = '';
let isReviewMode = false;
let stats = JSON.parse(localStorage.getItem('quagenius_stats')) || { total: 0, correct: 0, categories: {} };
let mistakes = JSON.parse(localStorage.getItem('quagenius_mistakes')) || [];
let nextQuizPromise = null;

// DOM Elements
const settingsBtn = document.getElementById('settingsBtn');
const statsBtn = document.getElementById('statsBtn');
const apiModal = document.getElementById('apiModal');
const statsModal = document.getElementById('statsModal');

const engineRadios = document.getElementsByName('aiEngine');
const geminiKeyGroup = document.getElementById('geminiKeyGroup');
const openaiKeyGroup = document.getElementById('openaiKeyGroup');
const geminiApiKeyInput = document.getElementById('geminiApiKeyInput');
const openaiApiKeyInput = document.getElementById('openaiApiKeyInput');
const saveApiBtn = document.getElementById('saveApiBtn');
const toast = document.getElementById('toast');

const examSelect = document.getElementById('examSelect');
const categorySelect = document.getElementById('categorySelect');
const calcOptionCheckbox = document.getElementById('calcOptionCheckbox');

const generateBtn = document.getElementById('generateBtn');
const reviewBtn = document.getElementById('reviewBtn');
const mistakeCountSpan = document.getElementById('mistakeCount');
const btnText = generateBtn.querySelector('.btn-text');
const spinner = generateBtn.querySelector('.spinner');

const quizSection = document.getElementById('quizSection');
const engineBadge = document.getElementById('engineBadge');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');

const resultSection = document.getElementById('resultSection');
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const explanationText = document.getElementById('explanationText');
const nextBtn = document.getElementById('nextBtn');
const nextBtnText = nextBtn.querySelector('.btn-text');
const nextBtnSpinner = nextBtn.querySelector('.spinner');

// Initialize
function init() {
    // Load Settings
    const engine = localStorage.getItem('ai_engine') || 'gemini';
    const geminiKey = localStorage.getItem('gemini_api_key') || '';
    const openaiKey = localStorage.getItem('openai_api_key') || '';
    
    geminiApiKeyInput.value = geminiKey;
    openaiApiKeyInput.value = openaiKey;

    engineRadios.forEach(r => {
        if (r.value === engine) r.checked = true;
        r.addEventListener('change', updateApiModalUI);
    });
    updateApiModalUI();

    if (!geminiKey && !openaiKey) {
        apiModal.classList.remove('hidden');
    }

    // Populate Categories initially
    updateCategories();
    renderStats();
    updateReviewBtnState();

    // Event Listeners
    settingsBtn.addEventListener('click', () => apiModal.classList.remove('hidden'));
    statsBtn.addEventListener('click', () => {
        renderStats();
        statsModal.classList.remove('hidden');
    });

    document.getElementById('closeStatsBtn').addEventListener('click', () => statsModal.classList.add('hidden'));
    
    document.getElementById('resetStatsBtn').addEventListener('click', () => {
        if(confirm('今までの統計データと「間違えた問題ストック」をすべてリセットしますか？')) {
            stats = { total: 0, correct: 0, categories: {} };
            mistakes = [];
            localStorage.setItem('quagenius_stats', JSON.stringify(stats));
            localStorage.setItem('quagenius_mistakes', JSON.stringify(mistakes));
            renderStats();
            updateReviewBtnState();
            showToast('すべてのデータをリセットしました');
        }
    });

    saveApiBtn.addEventListener('click', saveApiSettings);
    examSelect.addEventListener('change', () => {
        updateCategories();
        nextQuizPromise = null;
    });
    categorySelect.addEventListener('change', () => {
        nextQuizPromise = null;
    });
    calcOptionCheckbox.addEventListener('change', () => {
        nextQuizPromise = null;
    });
    
    // 初回生成ボタン
    generateBtn.addEventListener('click', async () => {
        isReviewMode = false;
        setLoading(true);
        quizSection.classList.add('hidden');
        resultSection.classList.add('hidden');
        
        try {
            const data = await fetchQuizData();
            displayQuiz(data);
        } catch (e) {
            console.error(e);
            if (e.message === 'RATE_LIMIT') {
                showToast('APIの制限(短時間にリクエストしすぎ)にかかりました。数秒待ってお試しください。');
            } else {
                showToast('AIが不正なデータを返したため、生成に失敗しました。再度お試しください。');
            }
        } finally {
            setLoading(false);
        }
    });

    // 復習モードボタン
    reviewBtn.addEventListener('click', () => {
        if (mistakes.length === 0) return;
        isReviewMode = true;
        quizSection.classList.add('hidden');
        resultSection.classList.add('hidden');
        
        // ストックからランダムに1問取得
        const randomIndex = Math.floor(Math.random() * mistakes.length);
        const reviewQuiz = mistakes[randomIndex];
        // 復習用にindexを保持しておく
        reviewQuiz.mistakeIndex = randomIndex; 
        
        engineBadge.textContent = '復習モード';
        displayQuiz(reviewQuiz);
    });

    // 「次の問題へ」ボタン
    nextBtn.addEventListener('click', async () => {
        if (isReviewMode) {
            // 復習モード継続
            reviewBtn.click();
            return;
        }

        if (!nextQuizPromise) return;

        setNextBtnLoading(true);
        try {
            const data = await nextQuizPromise;
            resultSection.classList.add('hidden');
            quizSection.classList.add('hidden');
            displayQuiz(data);
        } catch (e) {
            console.error(e);
            if (e.message === 'RATE_LIMIT') {
                showToast('APIの制限にかかりました。数秒待ってからボタンを押してください。');
            } else {
                showToast('次の問題の生成に失敗しました。もう一度生成をお試しください。');
            }
            nextQuizPromise = fetchQuizData();
        } finally {
            setNextBtnLoading(false);
        }
    });

    [apiModal, statsModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    });
}

function updateReviewBtnState() {
    mistakeCountSpan.textContent = mistakes.length;
    if (mistakes.length > 0) {
        reviewBtn.disabled = false;
    } else {
        reviewBtn.disabled = true;
    }
}

function updateApiModalUI() {
    const selectedEngine = Array.from(engineRadios).find(r => r.checked).value;
    if (selectedEngine === 'gemini') {
        geminiKeyGroup.classList.remove('hidden');
        openaiKeyGroup.classList.add('hidden');
    } else {
        geminiKeyGroup.classList.add('hidden');
        openaiKeyGroup.classList.remove('hidden');
    }
}

function saveApiSettings() {
    const selectedEngine = Array.from(engineRadios).find(r => r.checked).value;
    const gKey = geminiApiKeyInput.value.trim();
    const oKey = openaiApiKeyInput.value.trim();

    localStorage.setItem('ai_engine', selectedEngine);
    if (gKey) localStorage.setItem('gemini_api_key', gKey);
    if (oKey) localStorage.setItem('openai_api_key', oKey);

    apiModal.classList.add('hidden');
    showToast('設定を保存しました');
}

function updateCategories() {
    currentExam = examSelect.value;
    const categories = EXAM_DATA[currentExam].categories;
    
    categorySelect.innerHTML = '';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

function setLoading(isLoading) {
    generateBtn.disabled = isLoading;
    if (isLoading) {
        btnText.classList.add('hidden');
        spinner.classList.remove('hidden');
    } else {
        btnText.classList.remove('hidden');
        spinner.classList.add('hidden');
    }
}

function setNextBtnLoading(isLoading) {
    nextBtn.disabled = isLoading;
    if (isLoading) {
        nextBtnText.classList.add('hidden');
        nextBtnSpinner.classList.remove('hidden');
    } else {
        nextBtnText.classList.remove('hidden');
        nextBtnSpinner.classList.add('hidden');
    }
}

async function fetchQuizData() {
    const engine = localStorage.getItem('ai_engine') || 'gemini';
    const apiKey = localStorage.getItem(`${engine}_api_key`);
    
    if (!apiKey) {
        apiModal.classList.remove('hidden');
        throw new Error('API Key missing');
    }

    currentExam = examSelect.value;
    currentCategory = categorySelect.value;
    const isCalcMode = calcOptionCheckbox.checked;
    const examName = EXAM_DATA[currentExam].name;

    engineBadge.textContent = engine === 'gemini' ? 'Gemini 2.5' : 'GPT-4o-mini';

    let prompt = `あなたは「${examName}」の専門講師です。
以下の要件に従って、「${currentCategory}」分野の本試験レベルの4択問題を1問作成してください。

【厳守事項】
1. 本試験の過去問傾向に沿った実践的で良質な問題であること。
2. 選択肢は4つ（正解は1つ）。
3. 解説(explanation)は、必ず各選択肢（1〜4）ごとに段落を分け、それぞれの冒頭に【適切】または【不適切】と明記した上で、なぜそうなるのかを詳細に解説すること。改行を用いて視覚的に読みやすく整理すること。
4. ※重要：問題および解説は、最新の法令および税制（現在施行されている基準）に完全に準拠した内容にしてください。古い法令に基づいた出題は絶対に避けてください。
5. 出力は必ず以下のJSON形式のみとすること（マークダウン不要）。

{
  "question": "問題文",
  "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
  "correct_index": 0,
  "explanation": "詳細な解説をここに記述"
}`;

    // 計算問題・表問題の強制オプション
    if (isCalcMode) {
        prompt += `\n\n【特別指示】\n必ず「具体的な数値を用いた計算問題」または「表やデータを用いた分析問題」を出題してください。問題文の中に具体的な数値条件を含めてください。`;
    }

    // 自動リトライ用のラッパー関数
    const fetchWithRetry = async (fetcher, retries = 2) => {
        try {
            return await fetcher(prompt, apiKey);
        } catch (e) {
            if (e.message === 'RATE_LIMIT' && retries > 0) {
                console.warn('Rate limited. Retrying in 3 seconds...');
                await new Promise(resolve => setTimeout(resolve, 3000));
                return await fetchWithRetry(fetcher, retries - 1);
            }
            throw e;
        }
    };

    if (engine === 'gemini') {
        return await fetchWithRetry(fetchGemini);
    } else {
        return await fetchWithRetry(fetchOpenAI);
    }
}

// AIが余計な文字（マークダウン等）を含めても強制的にJSONを抽出する関数
function parseRobustJSON(text) {
    try {
        return JSON.parse(text);
    } catch (e) {
        // マークダウンブロック ```json ... ``` を取り除く
        const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        if (match) {
            return JSON.parse(match[1]);
        }
        // それでもダメなら最初の { から最後の } までを抽出
        const start = text.indexOf('{');
        const end = text.lastIndexOf('}');
        if (start !== -1 && end !== -1) {
            return JSON.parse(text.substring(start, end + 1));
        }
        throw new Error('JSON parsing failed completely');
    }
}

async function fetchGemini(prompt, apiKey) {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                temperature: 0.7,
                responseMimeType: "application/json",
            }
        })
    });

    if (!response.ok) {
        if (response.status === 429) throw new Error('RATE_LIMIT');
        throw new Error(`Gemini API Error: ${response.status}`);
    }
    const data = await response.json();
    let quiz = parseRobustJSON(data.candidates[0].content.parts[0].text);
    quiz.exam = currentExam;
    quiz.category = currentCategory;
    return quiz;
}

async function fetchOpenAI(prompt, apiKey) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            response_format: { type: "json_object" },
            messages: [
                { role: "system", "content": "You are a strict JSON output generator for educational quizzes." },
                { role: "user", "content": prompt }
            ],
            temperature: 0.7
        })
    });

    if (!response.ok) {
        if (response.status === 429) throw new Error('RATE_LIMIT');
        throw new Error(`OpenAI API Error: ${response.status}`);
    }
    const data = await response.json();
    let quiz = parseRobustJSON(data.choices[0].message.content);
    quiz.exam = currentExam;
    quiz.category = currentCategory;
    return quiz;
}

function displayQuiz(quiz) {
    currentQuiz = quiz;
    questionText.textContent = quiz.question;
    optionsContainer.innerHTML = '';

    // バッジにカテゴリ情報も表示
    const examLabel = quiz.exam === 'sme' ? '診断士' : 'FP1';
    engineBadge.textContent = isReviewMode ? `復習: [${examLabel}] ${quiz.category}` : engineBadge.textContent;

    quiz.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="font-weight:bold; margin-right:8px;">${index + 1}.</span> ${option}`;
        btn.addEventListener('click', () => handleAnswer(index, btn));
        optionsContainer.appendChild(btn);
    });

    quizSection.classList.remove('hidden');
}

function handleAnswer(selectedIndex, selectedBtn) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const isCorrect = selectedIndex === currentQuiz.correct_index;

    // Update Stats & Mistakes Stock
    updateStatsAndMistakes(isCorrect);

    // Highlight selected
    selectedBtn.classList.add('selected');

    // Highlight correct/incorrect
    buttons.forEach((btn, index) => {
        if (index === currentQuiz.correct_index) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show Result
    resultSection.className = `glass-card result-section ${isCorrect ? 'result-correct' : 'result-incorrect'}`;
    resultIcon.textContent = isCorrect ? '🎉' : '💡';
    resultTitle.textContent = isCorrect ? '正解！' : '不正解...';
    
    explanationText.innerHTML = marked.parse(currentQuiz.explanation);
    
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // 先読み生成の開始 (復習モード以外の場合)
    if (!isReviewMode) {
        nextQuizPromise = fetchQuizData().catch(e => {
            console.error("Background fetch failed:", e);
            throw e;
        });
    }
}

function updateStatsAndMistakes(isCorrect) {
    // 1. 統計データの更新 (復習モードでも正答率は反映される)
    stats.total += 1;
    if (isCorrect) stats.correct += 1;

    const catKey = `${currentQuiz.exam}_${currentQuiz.category}`;
    if (!stats.categories[catKey]) {
        stats.categories[catKey] = { total: 0, correct: 0 };
    }
    
    stats.categories[catKey].total += 1;
    if (isCorrect) stats.categories[catKey].correct += 1;

    localStorage.setItem('quagenius_stats', JSON.stringify(stats));

    // 2. 復習ストックの更新
    if (!isCorrect && !isReviewMode) {
        // 新規で間違えた場合はストックに追加
        mistakes.push(currentQuiz);
        localStorage.setItem('quagenius_mistakes', JSON.stringify(mistakes));
        showToast('間違えた問題としてストックしました');
    } else if (isCorrect && isReviewMode) {
        // 復習モードで正解した場合はストックから削除（消化）
        if (currentQuiz.mistakeIndex !== undefined) {
            mistakes.splice(currentQuiz.mistakeIndex, 1);
            localStorage.setItem('quagenius_mistakes', JSON.stringify(mistakes));
            showToast('正解しました！ストックから削除されました');
        }
    }
    updateReviewBtnState();
}

function renderStats() {
    const totalStat = document.getElementById('totalQuestionsStat');
    const accStat = document.getElementById('overallAccuracyStat');
    const list = document.getElementById('categoryStatsList');

    totalStat.textContent = stats.total;
    const overallAcc = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    accStat.textContent = `${overallAcc}%`;

    list.innerHTML = '';

    if (stats.total === 0) {
        list.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 1rem;">まだデータがありません</p>';
        return;
    }

    const sortedCats = Object.entries(stats.categories).sort((a, b) => {
        const accA = a[1].correct / a[1].total;
        const accB = b[1].correct / b[1].total;
        return accA - accB;
    });

    sortedCats.forEach(([catKey, data]) => {
        const [exam, cat] = catKey.split('_');
        const examName = exam === 'sme' ? '診断士' : 'FP1';
        const acc = Math.round((data.correct / data.total) * 100);
        
        let color = 'var(--error-color)';
        if (acc >= 80) color = 'var(--success-color)';
        else if (acc >= 50) color = '#fbbf24';

        const item = document.createElement('div');
        item.className = 'category-stat-item';
        item.innerHTML = `
            <div class="category-stat-header">
                <span><small>[${examName}]</small> ${cat}</span>
                <span>${acc}% (${data.correct}/${data.total})</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${acc}%; background: ${color}"></div>
            </div>
        `;
        list.appendChild(item);
    });
}

// Start app
init();
