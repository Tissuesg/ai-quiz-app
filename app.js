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
let stats = JSON.parse(localStorage.getItem('quagenius_stats')) || { total: 0, correct: 0, categories: {} };
let nextQuizPromise = null; // ★ 先読み用のプロミスを保持

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
const generateBtn = document.getElementById('generateBtn');
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

    // Event Listeners
    settingsBtn.addEventListener('click', () => apiModal.classList.remove('hidden'));
    statsBtn.addEventListener('click', () => {
        renderStats();
        statsModal.classList.remove('hidden');
    });

    document.getElementById('closeStatsBtn').addEventListener('click', () => statsModal.classList.add('hidden'));
    
    document.getElementById('resetStatsBtn').addEventListener('click', () => {
        if(confirm('今までの統計データをすべてリセットしますか？')) {
            stats = { total: 0, correct: 0, categories: {} };
            localStorage.setItem('quagenius_stats', JSON.stringify(stats));
            renderStats();
            showToast('統計データをリセットしました');
        }
    });

    saveApiBtn.addEventListener('click', saveApiSettings);
    examSelect.addEventListener('change', () => {
        updateCategories();
        nextQuizPromise = null; // カテゴリが変わったら先読みを破棄
    });
    categorySelect.addEventListener('change', () => {
        nextQuizPromise = null; // カテゴリが変わったら先読みを破棄
    });
    
    // 初回生成ボタン
    generateBtn.addEventListener('click', async () => {
        setLoading(true);
        quizSection.classList.add('hidden');
        resultSection.classList.add('hidden');
        
        try {
            const data = await fetchQuizData();
            displayQuiz(data);
        } catch (e) {
            console.error(e);
            showToast('問題の生成に失敗しました。');
        } finally {
            setLoading(false);
        }
    });

    // 「次の問題へ」ボタン（先読みデータを使用）
    nextBtn.addEventListener('click', async () => {
        if (!nextQuizPromise) return;

        setNextBtnLoading(true);
        try {
            // 裏側で走っている生成処理を待つ（すでに終わっていれば一瞬で解決する）
            const data = await nextQuizPromise;
            
            resultSection.classList.add('hidden');
            quizSection.classList.add('hidden');
            
            displayQuiz(data);
        } catch (e) {
            console.error(e);
            showToast('次の問題の生成に失敗しました。もう一度生成をお試しください。');
            nextQuizPromise = fetchQuizData(); // 失敗した場合は再フェッチを仕掛けておく
        } finally {
            setNextBtnLoading(false);
        }
    });

    // Close modal on outside click
    [apiModal, statsModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    });
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

// 実際のAPI通信を行う関数
async function fetchQuizData() {
    const engine = localStorage.getItem('ai_engine') || 'gemini';
    const apiKey = localStorage.getItem(`${engine}_api_key`);
    
    if (!apiKey) {
        apiModal.classList.remove('hidden');
        throw new Error('API Key missing');
    }

    currentExam = examSelect.value;
    currentCategory = categorySelect.value;
    const examName = EXAM_DATA[currentExam].name;

    engineBadge.textContent = engine === 'gemini' ? 'Gemini 2.5' : 'GPT-4o-mini';

    const prompt = `あなたは「${examName}」の専門講師です。
以下の要件に従って、「${currentCategory}」分野の本試験レベルの4択問題を1問作成してください。

【厳守事項】
1. 本試験の過去問傾向に沿った実践的で良質な問題であること。
2. 選択肢は4つ（正解は1つ）。
3. 各選択肢について、なぜそれが正解・不正解なのかを深く理解できるように、丁寧で詳細な解説(explanation)を作成すること（文字数制限なし）。
4. ※重要：問題および解説は、最新の法令および税制（現在施行されている基準）に完全に準拠した内容にしてください。古い法令に基づいた出題は絶対に避けてください。
5. 出力は必ず以下のJSON形式のみとすること（マークダウン不要）。

{
  "question": "問題文",
  "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
  "correct_index": 0,
  "explanation": "詳細な解説をここに記述"
}`;

    if (engine === 'gemini') {
        return await fetchGemini(prompt, apiKey);
    } else {
        return await fetchOpenAI(prompt, apiKey);
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

    if (!response.ok) throw new Error(`Gemini API Error: ${response.status}`);
    const data = await response.json();
    return JSON.parse(data.candidates[0].content.parts[0].text);
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

    if (!response.ok) throw new Error(`OpenAI API Error: ${response.status}`);
    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
}

function displayQuiz(quiz) {
    currentQuiz = quiz;
    questionText.textContent = quiz.question;
    optionsContainer.innerHTML = '';

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

    // Update Stats
    updateStats(isCorrect);

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

    // ★ ここで即座に裏側（バックグラウンド）で次の問題を生成開始する
    nextQuizPromise = fetchQuizData().catch(e => {
        console.error("Background fetch failed:", e);
        throw e;
    });
}

function updateStats(isCorrect) {
    stats.total += 1;
    if (isCorrect) stats.correct += 1;

    const catKey = `${currentExam}_${currentCategory}`;
    if (!stats.categories[catKey]) {
        stats.categories[catKey] = { total: 0, correct: 0 };
    }
    
    stats.categories[catKey].total += 1;
    if (isCorrect) stats.categories[catKey].correct += 1;

    localStorage.setItem('quagenius_stats', JSON.stringify(stats));
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

    // Sort categories by lowest accuracy first (to highlight weaknesses)
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
