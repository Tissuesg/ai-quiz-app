// Exam Categories Data
const EXAM_DATA = {
    sme: {
        name: "中小企業診断士",
        formatType: "choice_primary", // 1次は4択が原則、財務会計等の計算特訓で記述可
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
        formatType: "hybrid", // 基礎編(4択) & 応用編(計算記述・数値記入)
        categories: [
            "ライフプランニングと資金計画",
            "リスク管理",
            "金融資産運用",
            "タックスプランニング",
            "不動産",
            "相続・事業承継"
        ]
    },
    tax: {
        name: "税理士",
        formatType: "hybrid", // 簿記論・財務諸表論・税法(計算・記述・論述中心)
        categories: [
            "簿記論",
            "財務諸表論",
            "所得税法",
            "法人税法",
            "相続税法",
            "消費税法"
        ]
    },
    boki2: {
        name: "日商簿記2級",
        formatType: "hybrid", // 仕訳・計算数値入力 & 選択
        categories: [
            "商業簿記 - 勘定科目・仕訳総合",
            "商業簿記 - 決算整理・財務諸表",
            "商業簿記 - 連結会計・本支店会計",
            "工業簿記 - 費目別計算・個別原価計算",
            "工業簿記 - 総合原価計算 (仕損・減損)",
            "工業簿記 - 標準原価計算・直接原価計算(CVP)"
        ]
    },
    boki1: {
        name: "日商簿記1級",
        formatType: "hybrid", // 仕訳・計算数値入力 & 選択
        categories: [
            "商業簿記 - 企業結合・事業分離・連結会計",
            "商業簿記 - リース・金融商品・税効果・退職給付",
            "会計学 - 会計基準・概念フレームワーク・純資産",
            "工業簿記 - 標準原価計算・差異分析の深掘り",
            "原価計算 - 業務的意思決定・設備投資意思決定",
            "原価計算 - 活動基準原価計算(ABC)・戦略的原価計算"
        ]
    },
    itpass: {
        name: "ITパスポート",
        formatType: "choice_only", // 完全4択CBT試験 (本試験に記述なし)
        categories: [
            "ストラテジ系",
            "マネジメント系",
            "テクノロジ系"
        ]
    },
    takken: {
        name: "宅地建物取引士",
        formatType: "choice_only", // 完全4択マークシート試験 (本試験に記述なし)
        categories: [
            "権利関係",
            "宅建業法",
            "法令上の制限",
            "税・その他"
        ]
    }
};

// Changelog Data (v1.00 - v1.11)
const CHANGELOG_DATA = [
    {
        version: "v1.11",
        date: "2026/09/16",
        tag: "最新",
        latest: true,
        items: [
            "日商簿記2級・日商簿記1級の追加（商業簿記・工業簿記・原価計算・会計学を完全網羅）",
            "問題文のマークダウン表組みレンダリング対応（残高試算表や資料データが崩れず綺麗に表示）",
            "記述・数値入力問題（仕訳・金額・用語をキーボードで直接解答、表記ゆれ許容採点＆自己採点救済ボタン搭載）",
            "仕訳問題用カードレイアウトの適用（借方・貸方が整理された見やすい選択肢表示）",
            "更新履歴（Changelog）モーダルの追加（バージョンバッジをクリックでいつでも閲覧可能）"
        ]
    },
    {
        version: "v1.10",
        date: "2026/07/28",
        tag: "機能追加",
        latest: false,
        items: [
            "マルチLLMプロバイダー対応（Groq Llama 3.3 70B, OpenRouter無料モデル, OpenAI GPT-4o-mini）",
            "AIエンジンごとのプロンプト最適化とエラー自動リカバリ"
        ]
    },
    {
        version: "v1.09",
        date: "2026/07/21",
        tag: "資格追加",
        latest: false,
        items: [
            "宅地建物取引士（宅建）を追加（権利関係、宅建業法、法令上の制限、税・その他）"
        ]
    },
    {
        version: "v1.08",
        date: "2026/07/21",
        tag: "資格追加",
        latest: false,
        items: [
            "ITパスポートを追加（ストラテジ系、マネジメント系、テクノロジ系）"
        ]
    },
    {
        version: "v1.07",
        date: "2026/07/21",
        tag: "機能改善",
        latest: false,
        items: [
            "音声読み上げ（TTS）速度調整スライダー（0.5x〜2.0x）の追加",
            "成績ダッシュボードの2カラム化およびレスポンシブ最適化"
        ]
    },
    {
        version: "v1.06",
        date: "2026/07/21",
        tag: "資格・機能追加",
        latest: false,
        items: [
            "税理士（簿記論、財務諸表論、所得税法、法人税法、相続税法、消費税法）を追加",
            "Web Speech APIによる解説の音声読み上げ機能（TTS）",
            "解説・問題のPDF保存 / 印刷機能",
            "学習時間トラッキング＆直近7日間の学習状況チャート"
        ]
    },
    {
        version: "v1.00",
        date: "2026/07/20",
        tag: "初期リリース",
        latest: false,
        items: [
            "QuaGenius 正式リリース",
            "中小企業診断士・FP1級対応",
            "Google Gemini 2.5 Flash 連携によるリアルタイム過去問レベル問題生成",
            "復習ストックモード・成績ダッシュボード"
        ]
    }
];

// State
let currentQuiz = null;
let currentExam = 'sme';
let currentCategory = '';
let isReviewMode = false;
let stats = JSON.parse(localStorage.getItem('quagenius_stats')) || { total: 0, correct: 0, categories: {} };
if (!stats.dailyHistory) {
    stats.dailyHistory = {};
}
let mistakes = JSON.parse(localStorage.getItem('quagenius_mistakes')) || [];
let nextQuizPromise = null;

// Learning Tracking & TTS State
let sessionSeconds = 0;
let isSpeaking = false;

// DOM Elements
const settingsBtn = document.getElementById('settingsBtn');
const statsBtn = document.getElementById('statsBtn');
const apiModal = document.getElementById('apiModal');
const statsModal = document.getElementById('statsModal');
const versionBadge = document.getElementById('versionBadge');
const changelogModal = document.getElementById('changelogModal');
const closeChangelogBtn = document.getElementById('closeChangelogBtn');
const closeChangelogFooterBtn = document.getElementById('closeChangelogFooterBtn');
const changelogList = document.getElementById('changelogList');

const engineRadios = document.getElementsByName('aiEngine');
const geminiKeyGroup = document.getElementById('geminiKeyGroup');
const groqKeyGroup = document.getElementById('groqKeyGroup');
const openrouterKeyGroup = document.getElementById('openrouterKeyGroup');
const openaiKeyGroup = document.getElementById('openaiKeyGroup');
const geminiApiKeyInput = document.getElementById('geminiApiKeyInput');
const groqApiKeyInput = document.getElementById('groqApiKeyInput');
const openrouterApiKeyInput = document.getElementById('openrouterApiKeyInput');
const openaiApiKeyInput = document.getElementById('openaiApiKeyInput');
const saveApiBtn = document.getElementById('saveApiBtn');
const toast = document.getElementById('toast');

const examSelect = document.getElementById('examSelect');
const categorySelect = document.getElementById('categorySelect');
const formatSelect = document.getElementById('formatSelect');
const calcOptionCheckbox = document.getElementById('calcOptionCheckbox');

const generateBtn = document.getElementById('generateBtn');
const reviewBtn = document.getElementById('reviewBtn');
const mistakeCountSpan = document.getElementById('mistakeCount');
const btnText = generateBtn.querySelector('.btn-text');
const spinner = generateBtn.querySelector('.spinner');

const skipBtn = document.getElementById('skipBtn');
const skipBtnText = skipBtn.querySelector('.btn-text');
const skipBtnSpinner = skipBtn.querySelector('.spinner');

const quizSection = document.getElementById('quizSection');
const engineBadge = document.getElementById('engineBadge');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');

// Input Question Elements
const inputAnswerContainer = document.getElementById('inputAnswerContainer');
const inputPromptLabel = document.getElementById('inputPromptLabel');
const answerInput = document.getElementById('answerInput');
const inputUnitBadge = document.getElementById('inputUnitBadge');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');

// Result Elements
const resultSection = document.getElementById('resultSection');
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const explanationText = document.getElementById('explanationText');
const inputResultFeedback = document.getElementById('inputResultFeedback');
const userAnswerDisplay = document.getElementById('userAnswerDisplay');
const correctAnswerDisplay = document.getElementById('correctAnswerDisplay');
const overrideCorrectBtn = document.getElementById('overrideCorrectBtn');

const nextBtn = document.getElementById('nextBtn');
const nextBtnText = nextBtn.querySelector('.btn-text');
const nextBtnSpinner = nextBtn.querySelector('.spinner');
const ttsBtn = document.getElementById('ttsBtn');
const printBtn = document.getElementById('printBtn');
const ttsSpeed = document.getElementById('ttsSpeed');
const ttsSpeedVal = document.getElementById('ttsSpeedVal');

// Initialize
function init() {
    // Load Settings
    const engine = localStorage.getItem('ai_engine') || 'gemini';
    const geminiKey = localStorage.getItem('gemini_api_key') || '';
    const groqKey = localStorage.getItem('groq_api_key') || '';
    const openrouterKey = localStorage.getItem('openrouter_api_key') || '';
    const openaiKey = localStorage.getItem('openai_api_key') || '';
    
    geminiApiKeyInput.value = geminiKey;
    if (groqApiKeyInput) groqApiKeyInput.value = groqKey;
    if (openrouterApiKeyInput) openrouterApiKeyInput.value = openrouterKey;
    openaiApiKeyInput.value = openaiKey;

    engineRadios.forEach(r => {
        if (r.value === engine) r.checked = true;
        r.addEventListener('change', updateApiModalUI);
    });
    updateApiModalUI();

    if (!geminiKey && !groqKey && !openrouterKey && !openaiKey) {
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
    
    // Changelog Modal Listeners
    if (versionBadge) {
        versionBadge.addEventListener('click', () => {
            renderChangelog();
            changelogModal.classList.remove('hidden');
        });
    }
    if (closeChangelogBtn) {
        closeChangelogBtn.addEventListener('click', () => changelogModal.classList.add('hidden'));
    }
    if (closeChangelogFooterBtn) {
        closeChangelogFooterBtn.addEventListener('click', () => changelogModal.classList.add('hidden'));
    }
    if (changelogModal) {
        changelogModal.addEventListener('click', (e) => {
            if (e.target === changelogModal) changelogModal.classList.add('hidden');
        });
    }

    // 記述解答・自己採点救済リスナー
    if (submitAnswerBtn) {
        submitAnswerBtn.addEventListener('click', handleInputAnswer);
    }
    if (answerInput) {
        answerInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleInputAnswer();
        });
    }
    if (overrideCorrectBtn) {
        overrideCorrectBtn.addEventListener('click', handleSelfGradeOverride);
    }

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
    if (formatSelect) {
        formatSelect.addEventListener('change', () => {
            nextQuizPromise = null;
        });
    }
    calcOptionCheckbox.addEventListener('change', () => {
        nextQuizPromise = null;
    });
    
    // 初回生成ボタン
    generateBtn.addEventListener('click', async () => {
        stopSpeaking(); // 音声を停止
        isReviewMode = false;
        setLoading(true);
        quizSection.classList.add('hidden');
        resultSection.classList.add('hidden');
        
        try {
            const data = await fetchQuizData();
            displayQuiz(data);
        } catch (e) {
            console.error('[QuaGenius Error]', e);
            if (e.message === 'RATE_LIMIT') {
                showToast('APIの制限(短時間にリクエストしすぎ)にかかりました。数秒待ってお試しください。');
            } else if (e.message && e.message.startsWith('OPENROUTER_PARSE_FAIL:')) {
                const detail = e.message.replace('OPENROUTER_PARSE_FAIL:', '').trim();
                showToast(`OpenRouter: JSON解析失敗。ブラウザのコンソール(F12)で詳細を確認してください。`);
                console.error('[OpenRouter Raw Response]', detail);
            } else {
                showToast(`生成エラー: ${e.message || '不明なエラー'}`);
            }
        } finally {
            setLoading(false);
        }
    });

    // 復習モードボタン
    reviewBtn.addEventListener('click', () => {
        stopSpeaking(); // 音声を停止
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
        stopSpeaking(); // 音声を停止
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

    // 「この問題をスキップ」ボタン
    skipBtn.addEventListener('click', async () => {
        stopSpeaking(); // 音声を停止
        if (isReviewMode) {
            reviewBtn.click();
            return;
        }

        skipBtn.disabled = true;
        skipBtnText.classList.add('hidden');
        skipBtnSpinner.classList.remove('hidden');

        try {
            const data = await fetchQuizData();
            displayQuiz(data);
        } catch (e) {
            console.error(e);
            showToast('問題の生成に失敗しました。再度お試しください。');
        } finally {
            skipBtn.disabled = false;
            skipBtnText.classList.remove('hidden');
            skipBtnSpinner.classList.add('hidden');
        }
    });

    [apiModal, statsModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    });

    // 音声読み上げボタンのリスナー
    ttsBtn.addEventListener('click', () => {
        if (isSpeaking) {
            stopSpeaking();
        } else {
            startSpeaking();
        }
    });

    // PDFエクスポート・印刷ボタンのリスナー
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // 読み上げ速度スライダーの監視
    if (ttsSpeed) {
        // ドラッグ中はテキスト表示のみ更新
        ttsSpeed.addEventListener('input', () => {
            const speed = parseFloat(ttsSpeed.value).toFixed(1);
            if (ttsSpeedVal) {
                ttsSpeedVal.textContent = `${speed}x`;
            }
        });

        // ドラッグ完了時（指を離した時）に、再生中なら新しい速度で再起動
        ttsSpeed.addEventListener('change', () => {
            if (isSpeaking) {
                startSpeaking(); // 新しい速度で再スタート
            }
        });
    }

    // 学習時間トラッキングタイマーの開始 (1秒ごと)
    setInterval(() => {
        sessionSeconds++;
        updateTodayStudyTimeData();
    }, 1000);
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
    if (geminiKeyGroup) geminiKeyGroup.classList.toggle('hidden', selectedEngine !== 'gemini');
    if (groqKeyGroup) groqKeyGroup.classList.toggle('hidden', selectedEngine !== 'groq');
    if (openrouterKeyGroup) openrouterKeyGroup.classList.toggle('hidden', selectedEngine !== 'openrouter');
    if (openaiKeyGroup) openaiKeyGroup.classList.toggle('hidden', selectedEngine !== 'openai');
}

function saveApiSettings() {
    const selectedEngine = Array.from(engineRadios).find(r => r.checked).value;
    const gKey = geminiApiKeyInput.value.trim();
    const groqKey = groqApiKeyInput ? groqApiKeyInput.value.trim() : '';
    const openrouterKey = openrouterApiKeyInput ? openrouterApiKeyInput.value.trim() : '';
    const oKey = openaiApiKeyInput.value.trim();

    localStorage.setItem('ai_engine', selectedEngine);
    if (gKey) localStorage.setItem('gemini_api_key', gKey);
    if (groqKey) localStorage.setItem('groq_api_key', groqKey);
    if (openrouterKey) localStorage.setItem('openrouter_api_key', openrouterKey);
    if (oKey) localStorage.setItem('openai_api_key', oKey);

    apiModal.classList.add('hidden');
    showToast('設定を保存しました');
}

function updateFormatSelectUI() {
    if (!formatSelect) return;
    const examConfig = EXAM_DATA[examSelect.value];
    const isChoiceOnly = examConfig && examConfig.formatType === 'choice_only';

    const autoOpt = formatSelect.querySelector('option[value="auto"]');
    const choiceOpt = formatSelect.querySelector('option[value="choice"]');
    const inputOpt = formatSelect.querySelector('option[value="input"]');

    if (isChoiceOnly) {
        if (autoOpt) autoOpt.textContent = '🎲 おまかせ (本試験4択形式)';
        if (choiceOpt) choiceOpt.textContent = '🔘 4択問題 (本試験形式)';
        if (inputOpt) inputOpt.textContent = '✍️ 記述・用語入力 (暗記特訓ドリル)';
    } else if (examSelect.value === 'fp1') {
        if (autoOpt) autoOpt.textContent = '🎲 おまかせ (4択 / 応用編記述)';
        if (choiceOpt) choiceOpt.textContent = '🔘 4択問題 (基礎編)';
        if (inputOpt) inputOpt.textContent = '✍️ 記述・数値入力 (応用編計算)';
    } else if (examSelect.value === 'boki2' || examSelect.value === 'boki1' || examSelect.value === 'tax') {
        if (autoOpt) autoOpt.textContent = '🎲 おまかせ (4択 / 記述・仕訳)';
        if (choiceOpt) choiceOpt.textContent = '🔘 4択問題 (仕訳カード形式)';
        if (inputOpt) inputOpt.textContent = '✍️ 記述・数値入力 (仕訳・金額)';
    } else {
        if (autoOpt) autoOpt.textContent = '🎲 おまかせ (4択 / 記述)';
        if (choiceOpt) choiceOpt.textContent = '🔘 4択問題';
        if (inputOpt) inputOpt.textContent = '✍️ 記述・数値入力問題';
    }
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

    // 資格ごとの出題形式表示の更新
    updateFormatSelectUI();
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
    const selectedFormat = formatSelect ? formatSelect.value : 'auto';
    const examName = EXAM_DATA[currentExam].name;
    const isBookkeeping = currentExam === 'boki2' || currentExam === 'boki1' || currentExam === 'tax';

    const badgeNames = {
        gemini: 'Gemini 2.5',
        groq: 'Groq (Llama 3.3)',
        openrouter: 'OpenRouter (Free)',
        openai: 'GPT-4o-mini'
    };
    engineBadge.textContent = badgeNames[engine] || 'Gemini 2.5';

    const examConfig = EXAM_DATA[currentExam];
    const isChoiceOnly = examConfig && examConfig.formatType === 'choice_only';

    let formatInstruction = '';
    if (selectedFormat === 'choice') {
        formatInstruction = `・出題形式は必ず【4択問題（type: "choice"）】としてください。選択肢は4つ、正解は1つです。`;
    } else if (selectedFormat === 'input') {
        if (isChoiceOnly) {
            formatInstruction = `・出題形式は【記述・重要用語(数値)入力問題（type: "input"）】としてください。（※重要指示：この試験の本試験は4択マークシートですが、本問は受験生の暗記定着度を高めるための「重要用語・重要数値の穴埋め・短答特訓ドリル」として特別に作成してください）。正解の語句や具体的な数値を直接キーボードで入力させる問題にしてください。`;
        } else {
            formatInstruction = `・出題形式は必ず【記述・数値入力問題（type: "input"）】としてください。解答者に具体的な金額・計算数値、または特定の勘定科目・専門用語を直接入力させる問題にしてください。`;
        }
    } else {
        // auto (おまかせ)
        if (isChoiceOnly) {
            // 宅建・ITパスポートなど「専ら4択」の試験に対する厳格な出題ガード
            formatInstruction = `・重要厳守：この資格試験（${examName}）の本試験は【完全マークシート4択試験】です。本試験に記述式問題は一切存在しないため、出題形式は必ず【4択問題（type: "choice"）】として作成してください。絶対に記述式問題を出題してはいけません。`;
        } else if (currentExam === 'sme' && !isCalcMode) {
            // 中小企業診断士1次試験（計算モードOFF時）
            formatInstruction = `・この資格試験の1次試験はマークシート方式が基本であるため、原則として【4択問題（type: "choice"）】として作成してください。`;
        } else {
            // 簿記、税理士、FP1級（応用編含む）、診断士（計算モードON時）
            formatInstruction = `・出題形式は、この出題分野の本試験傾向（マークシートまたは記述・計算）に合わせて【4択問題（type: "choice"）】または【記述・数値入力問題（type: "input"）】のいずれかを適切に選択してください。${isBookkeeping ? '（特に仕訳や計算数値・決算整理では記述・数値入力を積極的に採用してください）' : ''}${currentExam === 'fp1' ? '（タックスや相続・不動産等の具体的税額・各種係数計算では応用編に準じた記述・数値入力を積極的に採用してください）' : ''}`;
        }
    }

    let bookkeepingInstruction = '';
    if (isBookkeeping) {
        bookkeepingInstruction = `
【簿記・会計科目の特別指示】
- 取引資料、決算整理前残高試算表、原価資料などの資料データは、必ずマークダウンのテーブル形式（| 項目 | 金額 | 等）を用いて見やすく整形してください。
- 工業簿記の総合原価計算・原価差異分析などのデータも、表形式または整然としたリストで記載してください。
- 4択で仕訳を出題する場合、選択肢は「（借）現金 100,000 / （貸）売上 100,000」のように借方・貸方を明確に区切って記述してください。
- 記述・数値入力問題の場合、正解の数値（例: "120,000"）に加え、カンマなしや単位付きのゆらぎを "acceptable_answers" 配列に複数記載してください。また単位（例: "円"）を "unit" に指定してください。`;
    }

    let prompt = `あなたは「${examName}」の専門講師です。
以下の要件に従って、「${currentCategory}」分野の本試験レベルの実践的な問題を1問作成してください。

【出題要件】
${formatInstruction}
${bookkeepingInstruction}
${isCalcMode ? '・必ず「具体的な数値を用いた計算問題」または「表やデータを用いた分析問題」を出題してください。問題文の中に具体的な数値条件を含めてください。' : ''}
・問題および解説は、最新の法令、会計基準および税制に完全に準拠した内容にしてください。
・解説(explanation)は、必ず以下の構成（マークダウン形式）で出力すること。
   - 【出題の趣旨】
     （この問題で問われている核心部分を解説）
   - 【詳細解説】（4択の場合は各選択肢の正誤判定と理由、記述式の場合は正解の導出ロジックや計算過程・仕訳手順を深く詳細に解説すること。文字数を惜しまずに解説してください）
   - 【ワンポイントアドバイス】
     （実務や本試験対策に役立つTips）

【出力形式】
出力は必ず以下のJSON形式のみとすること（全体を\`\`\`json等で囲まないこと）。

■ 4択問題の場合 (type: "choice")
{
  "type": "choice",
  "question": "問題文（Markdown形式の表や資料を含めてよい）",
  "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
  "correct_index": 0,
  "explanation": "詳細な解説をここに記述"
}

■ 記述・数値入力問題の場合 (type: "input")
{
  "type": "input",
  "question": "問題文（Markdown形式の表や資料を含めてよい）",
  "answer": "120,000",
  "acceptable_answers": ["120000", "120,000", "120000円", "120,000円"],
  "unit": "円",
  "input_label": "金額を入力してください (半角数字):",
  "explanation": "詳細な解説をここに記述"
}`;

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
    } else if (engine === 'groq') {
        return await fetchWithRetry(fetchGroq);
    } else if (engine === 'openrouter') {
        return await fetchWithRetry(fetchOpenRouter);
    } else {
        return await fetchWithRetry(fetchOpenAI);
    }
}

// AIが余計な文字（思考ログ<think>やマークダウン等）を含めても強制的にJSONを抽出・整形する関数
function parseRobustJSON(text) {
    if (!text || typeof text !== 'string') {
        throw new Error('Empty or non-string response');
    }

    // 1. DeepSeek R1等の思考ブロック <think>...</think> を削除
    let cleaned = text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

    // 2. マークダウンコードブロック ```json ... ``` から中身を取り出す
    const match = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    if (match) {
        cleaned = match[1].trim();
    } else {
        // 最も外側の { から } を抽出
        const start = cleaned.indexOf('{');
        const end = cleaned.lastIndexOf('}');
        if (start !== -1 && end !== -1 && end > start) {
            cleaned = cleaned.substring(start, end + 1);
        }
    }

    // 1回目のパース試行
    try {
        return JSON.parse(cleaned);
    } catch (e1) {
        // 2回目の試行：文字列内の生の改行やタブ・特殊制御文字を自動補正
        try {
            const sanitized = cleaned
                .replace(/[\u0000-\u001F]+/g, (c) => {
                    if (c === '\n') return '\\n';
                    if (c === '\r') return '\\r';
                    if (c === '\t') return '\\t';
                    return '';
                });
            return JSON.parse(sanitized);
        } catch (e2) {
            console.error('Raw LLM response parsing failed:', text);
            throw new Error('JSON parsing failed completely');
        }
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

async function fetchGroq(prompt, apiKey) {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
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
        throw new Error(`Groq API Error: ${response.status}`);
    }
    const data = await response.json();
    let quiz = parseRobustJSON(data.choices[0].message.content);
    quiz.exam = currentExam;
    quiz.category = currentCategory;
    return quiz;
}

async function fetchOpenRouter(prompt, apiKey) {
    // OpenRouterの無料モデルリスト（順次フォールバック）
    const freeModels = [
        'meta-llama/llama-3.3-70b-instruct:free',
        'google/gemma-2-9b-it:free',
        'qwen/qwen-2.5-72b-instruct:free',
    ];

    let lastError = null;

    for (const model of freeModels) {
        console.log(`[OpenRouter] Trying model: ${model}`);
        try {
            const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                    'HTTP-Referer': window.location.href || 'http://localhost',
                    'X-Title': 'QuaGenius'
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        {
                            role: "system",
                            content: `You are an expert quiz generator for Japanese professional certification exams. You MUST output ONLY a single valid JSON object with no other text, no markdown, no preamble. The JSON must have exactly these keys: "question" (string), "options" (array of 4 strings), "correct_index" (integer 0-3), "explanation" (string).`
                        },
                        { role: "user", content: prompt }
                    ],
                    temperature: 0.5
                })
            });

            console.log(`[OpenRouter] Response status: ${response.status} for model: ${model}`);

            if (!response.ok) {
                const errBody = await response.text().catch(() => '(no body)');
                console.warn(`[OpenRouter] model ${model} HTTP error ${response.status}: ${errBody}`);
                if (response.status === 429) throw new Error('RATE_LIMIT');
                lastError = new Error(`HTTP ${response.status}: ${errBody}`);
                continue;
            }

            const data = await response.json();
            console.log(`[OpenRouter] Full API response for ${model}:`, JSON.stringify(data, null, 2));

            // エラーオブジェクトが返ってきた場合
            if (data.error) {
                console.warn(`[OpenRouter] API error object:`, data.error);
                lastError = new Error(`API Error: ${data.error.message || JSON.stringify(data.error)}`);
                continue;
            }

            if (!data.choices || !data.choices[0] || !data.choices[0].message) {
                console.warn(`[OpenRouter] model ${model} returned unexpected structure:`, data);
                lastError = new Error('Unexpected response structure');
                continue;
            }

            const rawContent = data.choices[0].message.content;
            console.log(`[OpenRouter] Raw content from ${model}:`, rawContent);

            if (!rawContent || rawContent.trim() === '') {
                console.warn(`[OpenRouter] model ${model} returned empty content`);
                lastError = new Error('Empty content from model');
                continue;
            }

            try {
                let quiz = parseRobustJSON(rawContent);
                // 必須フィールドの検証
                if (!quiz.question || !Array.isArray(quiz.options) || quiz.options.length < 4 || quiz.correct_index === undefined || !quiz.explanation) {
                    console.warn(`[OpenRouter] model ${model} returned JSON missing required fields:`, quiz);
                    lastError = new Error(`Missing required quiz fields: ${JSON.stringify(quiz)}`);
                    continue;
                }
                quiz.exam = currentExam;
                quiz.category = currentCategory;
                console.log(`[OpenRouter] SUCCESS with model: ${model}`);
                return quiz;
            } catch (parseErr) {
                console.error(`[OpenRouter] JSON parse failed for ${model}. Raw content was:`, rawContent);
                lastError = new Error(`OPENROUTER_PARSE_FAIL: model=${model}, raw=${rawContent.substring(0, 200)}`);
                continue;
            }

        } catch (e) {
            if (e.message === 'RATE_LIMIT') throw e;
            lastError = e;
            console.warn(`[OpenRouter] model ${model} threw exception: ${e.message}`);
        }
    }

    throw lastError || new Error('OpenRouter: all free models failed');
}

// 選択肢の仕訳フォーマット整形
function formatOptionText(option, index) {
    if (!option) return '';
    // 仕訳形式（借・貸）の検出
    if ((option.includes('借') || option.includes('（借）') || option.includes('(借)')) &&
        (option.includes('貸') || option.includes('（貸）') || option.includes('(貸)'))) {
        
        const parts = option.split(/[\/／]/);
        if (parts.length === 2) {
            const debit = parts[0].trim();
            const credit = parts[1].trim();
            return `
                <div class="journal-row">
                    <span class="journal-debit"><span style="font-weight:bold; color:var(--text-secondary); margin-right:6px;">${index + 1}.</span>${debit}</span>
                    <span class="journal-credit">${credit}</span>
                </div>
            `;
        }
    }
    return `<span style="font-weight:bold; margin-right:8px;">${index + 1}.</span> ${option}`;
}

// 解答の表記ゆれ正規化関数
function normalizeAnswer(str) {
    if (!str && str !== 0) return '';
    return str.toString()
        .trim()
        .replace(/[０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
        .replace(/[Ａ-Ｚａ-ｚ]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
        .replace(/[,，、\s]/g, '')
        .replace(/[円¥￥]/g, '')
        .toLowerCase();
}

function displayQuiz(quiz) {
    stopSpeaking(); // 新しい問題が表示されたら読み上げを停止
    currentQuiz = quiz;

    // 問題文をMarkdownとしてパースして表示（表組み・強調・改行を完全再現）
    questionText.innerHTML = marked.parse(quiz.question || '');

    // 前回のリザルト記述フィードバックを非表示化
    if (inputResultFeedback) {
        inputResultFeedback.classList.add('hidden');
    }

    // バッジにカテゴリ情報も表示
    const examLabel = quiz.exam === 'sme' ? '診断士' : 
                      (quiz.exam === 'fp1' ? 'FP1' : 
                      (quiz.exam === 'tax' ? '税理士' : 
                      (quiz.exam === 'boki2' ? '簿記2級' :
                      (quiz.exam === 'boki1' ? '簿記1級' :
                      (quiz.exam === 'itpass' ? 'ITパス' : 
                      (quiz.exam === 'takken' ? '宅建' : ''))))));
    engineBadge.textContent = isReviewMode ? `復習: [${examLabel}] ${quiz.category}` : engineBadge.textContent;

    const isInputType = quiz.type === 'input' || (!quiz.options || quiz.options.length === 0);

    if (isInputType) {
        // 記述・数値入力問題
        optionsContainer.classList.add('hidden');
        inputAnswerContainer.classList.remove('hidden');

        inputPromptLabel.textContent = quiz.input_label || '解答を入力してください:';
        answerInput.value = '';
        answerInput.disabled = false;
        submitAnswerBtn.disabled = false;

        if (quiz.unit) {
            inputUnitBadge.textContent = quiz.unit;
            inputUnitBadge.classList.remove('hidden');
        } else {
            inputUnitBadge.classList.add('hidden');
        }

        setTimeout(() => answerInput.focus(), 150);
    } else {
        // 4択問題
        inputAnswerContainer.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
        optionsContainer.innerHTML = '';

        quiz.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            
            // 仕訳形式なら専用クラスを付与
            if ((option.includes('借') || option.includes('（借）')) && (option.includes('貸') || option.includes('（貸）'))) {
                btn.classList.add('journal-card');
            }

            btn.innerHTML = formatOptionText(option, index);
            btn.addEventListener('click', () => handleAnswer(index, btn));
            optionsContainer.appendChild(btn);
        });
    }

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
    
    // 4択時は記述フィードバックを非表示
    if (inputResultFeedback) {
        inputResultFeedback.classList.add('hidden');
    }

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

// 記述問題の解答送信処理
function handleInputAnswer() {
    const userRaw = answerInput.value.trim();
    if (!userRaw) {
        showToast('解答を入力してください');
        answerInput.focus();
        return;
    }

    answerInput.disabled = true;
    submitAnswerBtn.disabled = true;

    const normalizedUser = normalizeAnswer(userRaw);
    let acceptedList = Array.isArray(currentQuiz.acceptable_answers) ? [...currentQuiz.acceptable_answers] : [];
    if (currentQuiz.answer && !acceptedList.includes(currentQuiz.answer)) {
        acceptedList.push(currentQuiz.answer);
    }
    if (acceptedList.length === 0 && currentQuiz.answer) {
        acceptedList = [currentQuiz.answer];
    }

    const isCorrect = acceptedList.some(ans => normalizeAnswer(ans) === normalizedUser);

    // Update Stats & Mistakes Stock
    updateStatsAndMistakes(isCorrect);

    // Show Result
    resultSection.className = `glass-card result-section ${isCorrect ? 'result-correct' : 'result-incorrect'}`;
    resultIcon.textContent = isCorrect ? '🎉' : '💡';
    resultTitle.textContent = isCorrect ? '正解！' : '不正解...';

    // 記述比較エリアの表示
    const unitStr = currentQuiz.unit ? ` ${currentQuiz.unit}` : '';
    userAnswerDisplay.textContent = `${userRaw}${unitStr}`;
    userAnswerDisplay.style.color = '';
    userAnswerDisplay.style.textDecoration = '';

    correctAnswerDisplay.textContent = `${currentQuiz.answer || acceptedList[0] || '正解'}${unitStr}`;
    inputResultFeedback.classList.remove('hidden');

    // 自己採点救済ボタンの制御
    if (isCorrect) {
        overrideCorrectBtn.classList.add('hidden');
    } else {
        overrideCorrectBtn.classList.remove('hidden');
        overrideCorrectBtn.classList.remove('already-applied');
        overrideCorrectBtn.disabled = false;
        overrideCorrectBtn.textContent = '🔄 正解扱いにする（自己採点救済）';
    }

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

// 自己採点救済（正解への手動補正）
function handleSelfGradeOverride() {
    if (overrideCorrectBtn.classList.contains('already-applied')) return;

    // 統計を正解(+1)に補正
    stats.correct += 1;
    const catKey = `${currentQuiz.exam}_${currentQuiz.category}`;
    if (stats.categories[catKey]) {
        stats.categories[catKey].correct += 1;
    }
    localStorage.setItem('quagenius_stats', JSON.stringify(stats));

    // 復習ストックから直前に追加されたこの問題を削除
    mistakes = mistakes.filter(m => m !== currentQuiz);
    localStorage.setItem('quagenius_mistakes', JSON.stringify(mistakes));

    // UIを正解表示へ変更
    resultSection.className = 'glass-card result-section result-correct';
    resultIcon.textContent = '🎉';
    resultTitle.textContent = '正解！（自己採点を反映）';
    userAnswerDisplay.style.color = 'var(--success-color)';
    userAnswerDisplay.style.textDecoration = 'none';

    overrideCorrectBtn.classList.add('already-applied');
    overrideCorrectBtn.disabled = true;
    overrideCorrectBtn.textContent = '✅ 正解に反映しました';

    renderStats();
    updateReviewBtnState();
    showToast('正解として統計に反映しました');
}

// Changelogレンダリング関数
function renderChangelog() {
    if (!changelogList) return;
    changelogList.innerHTML = '';
    CHANGELOG_DATA.forEach((item) => {
        const itemEl = document.createElement('div');
        itemEl.className = `changelog-item ${item.latest ? 'latest' : ''}`;
        
        const ul = document.createElement('ul');
        item.items.forEach(liText => {
            const li = document.createElement('li');
            li.textContent = liText;
            ul.appendChild(li);
        });

        itemEl.innerHTML = `
            <div class="changelog-item-header">
                <span class="changelog-ver">${item.version}</span>
                <span class="changelog-tag ${item.latest ? 'latest-tag' : ''}">${item.tag}</span>
                <span class="changelog-date">${item.date}</span>
            </div>
            <div class="changelog-desc"></div>
        `;
        itemEl.querySelector('.changelog-desc').appendChild(ul);
        changelogList.appendChild(itemEl);
    });
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

    // 1.5 日別履歴（問題数・時間）の記録
    const todayStr = getTodayString();
    if (!stats.dailyHistory) stats.dailyHistory = {};
    if (!stats.dailyHistory[todayStr]) {
        stats.dailyHistory[todayStr] = { count: 0, time: 0 };
    }
    stats.dailyHistory[todayStr].count += 1;

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
    const todayStudyTimeStat = document.getElementById('todayStudyTimeStat');
    const list = document.getElementById('categoryStatsList');

    totalStat.textContent = stats.total;
    const overallAcc = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    accStat.textContent = `${overallAcc}%`;

    // 本日の学習時間の表示を更新
    const todayStr = getTodayString();
    const todayData = (stats.dailyHistory && stats.dailyHistory[todayStr]) || { time: 0 };
    const todayMin = Math.floor(todayData.time / 60);
    const todaySec = todayData.time % 60;
    if (todayStudyTimeStat) {
        todayStudyTimeStat.textContent = `${todayMin}分 ${todaySec}秒`;
    }

    // 週次グラフのレンダリング
    renderWeeklyChart();

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
        const examName = exam === 'sme' ? '診断士' : 
                         (exam === 'fp1' ? 'FP1' : 
                         (exam === 'tax' ? '税理士' : 
                         (exam === 'boki2' ? '簿記2級' :
                         (exam === 'boki1' ? '簿記1級' :
                         (exam === 'itpass' ? 'ITパス' : 
                         (exam === 'takken' ? '宅建' : ''))))));
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

// --- 音声読み上げ & 学習時間 & グラフ ヘルパー関数 ---

function getTodayString() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

function updateTodayStudyTimeData() {
    const todayStr = getTodayString();
    if (!stats.dailyHistory) stats.dailyHistory = {};
    if (!stats.dailyHistory[todayStr]) {
        stats.dailyHistory[todayStr] = { count: 0, time: 0 };
    }
    stats.dailyHistory[todayStr].time += 1;
    
    // 5秒ごとにlocalStorageに保存してパフォーマンスを維持
    if (sessionSeconds % 5 === 0) {
        localStorage.setItem('quagenius_stats', JSON.stringify(stats));
    }
}

function startSpeaking() {
    if (!currentQuiz || !currentQuiz.explanation) return;
    window.speechSynthesis.cancel(); // 進行中の音声を停止

    // Markdown解説からプレーンテキストを抽出
    let textToSpeak = `解説を読み上げます。${currentQuiz.explanation}`;
    textToSpeak = textToSpeak
        .replace(/#+/g, '') // ヘッダー記号の削除
        .replace(/\*+/g, '') // 太字記号の削除
        .replace(/`+/g, '')  // コード記号の削除
        .replace(/【/g, '\n【') // セクション前での改行
        .replace(/適切/g, 'てきせつ')
        .replace(/不適切/g, 'ふてきせつ');

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'ja-JP';
    
    // 速度調整スライダーから値を取得
    const speed = ttsSpeed ? parseFloat(ttsSpeed.value) : 1.0;
    utterance.rate = speed;

    utterance.onend = () => {
        isSpeaking = false;
        ttsBtn.querySelector('.btn-text').textContent = '🔊 解説を読み上げる';
    };
    utterance.onerror = () => {
        isSpeaking = false;
        ttsBtn.querySelector('.btn-text').textContent = '🔊 解説を読み上げる';
    };

    window.speechSynthesis.speak(utterance);
    isSpeaking = true;
    ttsBtn.querySelector('.btn-text').textContent = '⏹ 読み上げを停止';
}

function stopSpeaking() {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    if (ttsBtn) {
        const btnTextSpan = ttsBtn.querySelector('.btn-text');
        if (btnTextSpan) {
            btnTextSpan.textContent = '🔊 解説を読み上げる';
        }
    }
}

function renderWeeklyChart() {
    const chartContainer = document.getElementById('weeklyChartContainer');
    if (!chartContainer) return;
    chartContainer.innerHTML = '';

    // 直近7日間の日付配列を生成 (今日を含む)
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const dateStr = `${y}-${m}-${day}`;
        const labelStr = `${d.getMonth() + 1}/${d.getDate()}`;
        days.push({ dateStr, labelStr });
    }

    // グラフの最大高さを決めるスケール (最低でも30分=1800秒を基準値の分母にする)
    let maxTime = 1800;
    days.forEach(day => {
        const hist = stats.dailyHistory[day.dateStr] || { time: 0 };
        if (hist.time > maxTime) {
            maxTime = hist.time;
        }
    });

    const chartDiv = document.createElement('div');
    chartDiv.className = 'weekly-chart';

    const barsDiv = document.createElement('div');
    barsDiv.className = 'chart-bars';

    days.forEach(day => {
        const hist = stats.dailyHistory[day.dateStr] || { count: 0, time: 0 };
        const minutes = Math.round(hist.time / 60);
        const percent = Math.min(100, Math.max(0, (hist.time / maxTime) * 100));

        const wrapper = document.createElement('div');
        wrapper.className = 'chart-bar-wrapper';

        const valueText = minutes > 0 ? `${minutes}分` : '0分';
        const tooltipText = `${hist.count}問完了 (学習時間: ${valueText})`;

        wrapper.innerHTML = `
            <div class="chart-bar-value">${valueText}</div>
            <div class="chart-bar" style="height: ${percent}%;" title="${tooltipText}"></div>
            <div class="chart-bar-label">${day.labelStr}</div>
        `;
        barsDiv.appendChild(wrapper);
    });

    chartDiv.appendChild(barsDiv);
    chartContainer.appendChild(chartDiv);
}

// Start app
init();
