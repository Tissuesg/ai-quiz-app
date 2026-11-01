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

// Changelog Data (v1.00 - v2.0.1)
const CHANGELOG_DATA = [
    {
        version: "v2.0.1",
        date: "2026/11/01",
        tag: "最新・解説改善",
        latest: true,
        items: [
            "解説文の各選択肢に【正】正しい選択肢（正しい記述）／【誤】誤った選択肢（誤りの記述）および【🎯本問の正解】のカラーバッジを自動付与し、一目で正誤が判別できるよう視認性を大幅向上",
            "Web検索連動（Google検索グラウンディング）利用時に解説文の正誤ラベルが省略されたり改行が空いたりする現象を、プロンプト改善とクライアント側自動構造化パーサーの二重対策で完全解消",
            "Web検索連動・通常モード・全AIエンジン・全7資格×出題形式の組み合わせにおけるJSON解析および出題形式ガードの堅牢化"
        ]
    },
    {
        version: "v2.00",
        date: "2026/11/01",
        tag: "メジャーアップデート",
        latest: false,
        items: [
            "🎓 AI専門講師への深掘り質問（AI家庭教師チャット）機能を搭載（解説画面からワンタップ質問チップや自由入力で疑問点を対話形式で即座に解消）",
            "🌐 Google検索グラウンディング連動モードを搭載（Gemini APIのWeb検索ツールにより最新の法改正・税制改正・会計基準・統計データを参照して作問・解説し、参照元リンクを表示）",
            "📐 Structured Outputs（厳格JSONスキーマ指定 responseSchema）へ完全移行し、AI出力の構造エラーを排除"
        ]
    },
    {
        version: "v1.12",
        date: "2026/11/01",
        tag: "安定性・AI更新",
        latest: false,
        items: [
            "全AIエンジンのマルチモデル自動フォールバック対応（Gemini 2.5 Flash / Lite / 2.0、Groq Llama 3.3 / Llama 4 Scout、OpenRouter Auto-Free Router、OpenAI GPT-4.1-mini / 4o-mini）",
            "通信切断（スリープ復帰直後）・サーバー一時過負荷（503等）・JSON整形崩れに対する自動リトライ＆自己修復ロジックの強化",
            "OpenRouter利用時に記述・数値入力問題（type: input）がエラーとして弾かれる不具合を修正",
            "全AIエンジン共通のJSON構造バリデーションおよび原因別日本語エラーメッセージの精緻化"
        ]
    },
    {
        version: "v1.11",
        date: "2026/09/16",
        tag: "大型アップデート",
        latest: false,
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

// Learning Tracking, TTS & AI Tutor State
let sessionSeconds = 0;
let isSpeaking = false;
let currentTutorHistory = [];
let isTutorLoading = false;

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
const searchGroundingCheckbox = document.getElementById('searchGroundingCheckbox');

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
const groundingInfoBox = document.getElementById('groundingInfoBox');
const groundingSourcesList = document.getElementById('groundingSourcesList');
const inputResultFeedback = document.getElementById('inputResultFeedback');
const userAnswerDisplay = document.getElementById('userAnswerDisplay');
const correctAnswerDisplay = document.getElementById('correctAnswerDisplay');
const overrideCorrectBtn = document.getElementById('overrideCorrectBtn');

// AI Tutor Elements
const aiTutorSection = document.getElementById('aiTutorSection');
const tutorChatHistory = document.getElementById('tutorChatHistory');
const tutorInput = document.getElementById('tutorInput');
const tutorSendBtn = document.getElementById('tutorSendBtn');
const tutorChipBtns = document.querySelectorAll('.tutor-chip-btn');

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

    // AI家庭教師（深掘り質問）リスナー
    if (tutorSendBtn) {
        tutorSendBtn.addEventListener('click', () => {
            if (tutorInput && tutorInput.value.trim()) {
                handleTutorQuestion(tutorInput.value.trim());
            }
        });
    }
    if (tutorInput) {
        tutorInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && tutorInput.value.trim()) {
                handleTutorQuestion(tutorInput.value.trim());
            }
        });
    }
    if (tutorChipBtns && tutorChipBtns.length > 0) {
        tutorChipBtns.forEach(chip => {
            chip.addEventListener('click', () => {
                const promptText = chip.getAttribute('data-prompt');
                if (promptText) {
                    handleTutorQuestion(promptText);
                }
            });
        });
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
    if (searchGroundingCheckbox) {
        searchGroundingCheckbox.addEventListener('change', () => {
            nextQuizPromise = null;
        });
    }
    
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
            showToast(formatUserErrorMessage(e));
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

        if (!nextQuizPromise) {
            nextQuizPromise = fetchQuizData();
        }

        setNextBtnLoading(true);
        try {
            const data = await nextQuizPromise;
            resultSection.classList.add('hidden');
            quizSection.classList.add('hidden');
            displayQuiz(data);
        } catch (e) {
            console.error('[QuaGenius Next Error]', e);
            showToast(formatUserErrorMessage(e));
            nextQuizPromise = fetchQuizData().catch(err => {
                console.warn('Retry prefetch failed:', err);
                throw err;
            });
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
            console.error('[QuaGenius Skip Error]', e);
            showToast(formatUserErrorMessage(e));
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
    const useSearchGrounding = (searchGroundingCheckbox && searchGroundingCheckbox.checked && engine === 'gemini');
    const selectedFormat = formatSelect ? formatSelect.value : 'auto';
    const examName = EXAM_DATA[currentExam].name;
    const isBookkeeping = currentExam === 'boki2' || currentExam === 'boki1' || currentExam === 'tax';

    const badgeNames = {
        gemini: useSearchGrounding ? 'Gemini 2.5 (🌐Web検索連動)' : 'Gemini 2.5 Flash',
        groq: 'Groq (Llama 3.3 / 4)',
        openrouter: 'OpenRouter (Free)',
        openai: 'GPT-4.1 / 4o mini'
    };
    engineBadge.textContent = badgeNames[engine] || 'Gemini 2.5 Flash';

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

    const forceChoice = selectedFormat === 'choice' || (selectedFormat === 'auto' && isChoiceOnly);
    const forceInput = selectedFormat === 'input';

    const choiceSchemaBlock = `■ 4択問題 (type: "choice")
{
  "type": "choice",
  "question": "問題文（Markdown形式の表や資料を含めてよい）",
  "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
  "correct_index": 0,
  "explanation": "【出題の趣旨】\\n...\\n\\n【詳細解説】\\n選択肢1：【正】（正しい選択肢）【★本問の正解】\\n理由の解説...\\n\\n選択肢2：【誤】（誤った選択肢）\\n理由の解説...\\n\\n選択肢3：【誤】（誤った選択肢）\\n理由の解説...\\n\\n選択肢4：【誤】（誤った選択肢）\\n理由の解説...\\n\\n【ワンポイントアドバイス】\\n..."
}`;

    const inputSchemaBlock = `■ 記述・数値入力問題 (type: "input")
{
  "type": "input",
  "question": "問題文（Markdown形式の表や資料を含めてよい）",
  "answer": "120,000",
  "acceptable_answers": ["120000", "120,000", "120000円", "120,000円"],
  "unit": "円",
  "input_label": "金額を入力してください (半角数字):",
  "explanation": "【出題の趣旨】\\n...\\n\\n【詳細解説】\\n【模範解答と結論】\\n正解の導出ロジックや計算過程・仕訳手順の詳細解説...\\n\\n【ワンポイントアドバイス】\\n..."
}`;

    const outputSchemaSection = forceChoice
        ? choiceSchemaBlock
        : (forceInput ? inputSchemaBlock : `${choiceSchemaBlock}\n\nまたは\n\n${inputSchemaBlock}`);

    let prompt = `あなたは「${examName}」の専門講師です。
以下の要件に従って、「${currentCategory}」分野の本試験レベルの実践的な問題を1問作成してください。

【出題要件】
${formatInstruction}
${bookkeepingInstruction}
${isCalcMode ? '・必ず「具体的な数値を用いた計算問題」または「表やデータを用いた分析問題」を出題してください。問題文の中に具体的な数値条件を含めてください。' : ''}
${useSearchGrounding ? '・【Google検索グラウンディング連動】必ずGoogle検索ツールを用いて、最新の法改正・税制改正・会計基準・公的統計データを確認し、現行の最新制度に基づいた問題および解説を作成してください。解説内で参照した最新の改正点や制度の根拠にも触れてください。' : ''}
・問題および解説は、最新の法令、会計基準および税制に完全に準拠した内容にしてください。
・解説(explanation)は、必ず以下の構成（マークダウン形式）で出力すること。
   - 【出題の趣旨】
     （この問題で問われている核心部分を解説）
   - 【詳細解説】
     ・4択問題の場合は、各選択肢の先頭に必ず「選択肢1：【正】（正しい選択肢）」または「選択肢1：【誤】（誤った選択肢）」（※本問の正解となる選択肢にはさらに「【★本問の正解】」も併記）のように、パッと見で各選択肢の正誤が判別できる見出しラベルを必ず明記してから理由を詳しく解説すること。
     ・記述式問題の場合は、冒頭に「【模範解答と結論】」を明示した上で、正解の導出ロジックや計算過程・仕訳手順を深く詳細に解説すること。
   - 【ワンポイントアドバイス】
     （実務や本試験対策に役立つTips）

【出力形式】
出力は必ず以下のJSON形式のみとすること（全体を\`\`\`json等で囲まないこと。前置きや後書きも一切出力しないこと）。

${outputSchemaSection}`;

    // 自動リトライ用のラッパー関数（429レート制限、503サーバー過負荷、スリープ復帰直後のネットワーク切断、JSONパース崩れに対応）
    const fetchWithRetry = async (fetcher, retries = 2, attempt = 1) => {
        try {
            return await fetcher(prompt, apiKey, { useSearchGrounding, selectedFormat, isChoiceOnly });
        } catch (e) {
            const msg = e && e.message ? e.message : '';
            const isNetworkErr = e instanceof TypeError || msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg === 'NETWORK_ERROR';
            const isRetryable = msg === 'RATE_LIMIT' || msg === 'SERVER_OVERLOAD' || msg === 'INVALID_QUIZ_FORMAT' || isNetworkErr;

            if (isRetryable && retries > 0) {
                const waitMs = msg === 'RATE_LIMIT' ? 2500 * attempt : 1500 * attempt;
                console.warn(`[QuaGenius Retry] Reason: ${msg || 'Network'}. Retrying in ${waitMs}ms... (${retries} retries left)`);
                await new Promise(resolve => setTimeout(resolve, waitMs));
                return await fetchWithRetry(fetcher, retries - 1, attempt + 1);
            }
            if (isNetworkErr) {
                throw new Error('NETWORK_ERROR');
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

// ユーザー向けの分かりやすい日本語エラーメッセージ変換関数
function formatUserErrorMessage(e) {
    const msg = (e && e.message) ? e.message : '';
    if (msg === 'API Key missing') {
        return 'APIキーが設定されていません。右上の⚙️ボタンから設定してください。';
    }
    if (msg === 'AUTH_ERROR' || msg.includes('401') || msg.includes('403') || msg.includes('API_KEY_INVALID')) {
        return 'APIキーが無効または権限がありません。右上の⚙️設定からAPIキーをご確認ください。';
    }
    if (msg === 'RATE_LIMIT' || msg.includes('429')) {
        return 'APIの利用制限（短時間のリクエスト上限）に達しました。数秒待ってから再度お試しください。';
    }
    if (msg === 'SERVER_OVERLOAD' || msg.includes('503') || msg.includes('502') || msg.includes('504')) {
        return 'AIサーバーが一時的に混雑しています。数秒待ってから再度お試しいただくか、別のAIエンジンをお試しください。';
    }
    if (msg === 'NETWORK_ERROR' || msg.includes('Failed to fetch') || msg.includes('NetworkError')) {
        return 'ネットワーク通信エラーが発生しました。スリープ復帰直後や通信環境をご確認のうえ再度お試しください。';
    }
    if (msg === 'INVALID_QUIZ_FORMAT' || msg.startsWith('OPENROUTER_PARSE_FAIL:') || msg.includes('JSON parsing failed')) {
        return 'AIが不正な形式のデータを返しました。もう一度ボタンを押して再生成してください。';
    }
    return `生成エラー: ${msg || '不明なエラーが発生しました'}`;
}

// 4択・記述の両形式に対応した共通クイズ構造バリデーション＆正規化関数
function validateAndNormalizeQuiz(quiz, options = {}) {
    const { selectedFormat = 'auto', isChoiceOnly = false } = options;
    const forceChoice = selectedFormat === 'choice' || (selectedFormat === 'auto' && isChoiceOnly);
    const forceInput = selectedFormat === 'input';

    if (!quiz || typeof quiz !== 'object') {
        throw new Error('INVALID_QUIZ_FORMAT');
    }
    if (!quiz.question || typeof quiz.question !== 'string' || !quiz.explanation || typeof quiz.explanation !== 'string') {
        throw new Error('INVALID_QUIZ_FORMAT');
    }

    const isInput = quiz.type === 'input' || (!Array.isArray(quiz.options) || quiz.options.length === 0);

    // 4択専用試験（宅建・ITパス等）のおまかせ時や4択指定時に記述問題が返ってきた場合は不正としてリトライさせる
    if (forceChoice && isInput) {
        throw new Error('INVALID_QUIZ_FORMAT');
    }
    // 記述指定時に4択問題が返ってきた場合も不正としてリトライさせる
    if (forceInput && !isInput) {
        throw new Error('INVALID_QUIZ_FORMAT');
    }

    if (isInput) {
        if (quiz.answer === undefined || quiz.answer === null || String(quiz.answer).trim() === '') {
            throw new Error('INVALID_QUIZ_FORMAT');
        }
        quiz.type = 'input';
        quiz.answer = String(quiz.answer).trim();
        if (!Array.isArray(quiz.acceptable_answers) || quiz.acceptable_answers.length === 0) {
            quiz.acceptable_answers = [quiz.answer];
        } else {
            quiz.acceptable_answers = quiz.acceptable_answers.map(a => String(a).trim());
        }
    } else {
        if (!Array.isArray(quiz.options) || quiz.options.length < 4) {
            throw new Error('INVALID_QUIZ_FORMAT');
        }
        quiz.type = 'choice';
        quiz.options = quiz.options.slice(0, 4).map(o => String(o));
        const idx = Number(quiz.correct_index);
        quiz.correct_index = (!Number.isNaN(idx) && idx >= 0 && idx < 4) ? idx : 0;
    }

    return quiz;
}

// JSON文字列リテラルの内部にある未エスケープの改行・タブ・制御文字のみを安全にエスケープする関数
function escapeControlCharsInJsonStrings(str) {
    let result = '';
    let inString = false;
    let isEscaped = false;

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if (!inString) {
            if (ch === '"') {
                inString = true;
            }
            result += ch;
        } else {
            if (isEscaped) {
                isEscaped = false;
                result += ch;
            } else if (ch === '\\') {
                isEscaped = true;
                result += ch;
            } else if (ch === '"') {
                inString = false;
                result += ch;
            } else if (ch === '\n') {
                result += '\\n';
            } else if (ch === '\r') {
                result += '\\r';
            } else if (ch === '\t') {
                result += '\\t';
            } else if (ch.charCodeAt(0) < 0x20) {
                result += '';
            } else {
                result += ch;
            }
        }
    }
    return result;
}

// AIが余計な文字（思考ログ<think>やマークダウン等）を含めても強制的にJSONを抽出・整形する関数
function parseRobustJSON(text) {
    if (!text || typeof text !== 'string') {
        throw new Error('INVALID_QUIZ_FORMAT');
    }

    // 1. DeepSeek R1 / Qwen QwQ等の思考ブロック <think>...</think> を削除
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
        // 2回目の試行：JSON文字列リテラル内の生の改行やタブ・特殊制御文字を安全にエスケープ補正
        try {
            const sanitized = escapeControlCharsInJsonStrings(cleaned);
            return JSON.parse(sanitized);
        } catch (e2) {
            console.error('Raw LLM response parsing failed:', text);
            throw new Error('INVALID_QUIZ_FORMAT');
        }
    }
}

// v2.00: Structured Outputs 用の厳格なJSONスキーマ生成関数
function buildGeminiResponseSchema(selectedFormat, isChoiceOnly) {
    const forceChoice = selectedFormat === 'choice' || (selectedFormat === 'auto' && isChoiceOnly);
    const forceInput = selectedFormat === 'input';

    if (forceChoice) {
        return {
            type: "OBJECT",
            properties: {
                type: { type: "STRING", enum: ["choice"] },
                question: { type: "STRING", description: "問題文（Markdown形式の表や資料を含む）" },
                options: {
                    type: "ARRAY",
                    items: { type: "STRING" },
                    description: "4つの選択肢の配列"
                },
                correct_index: { type: "INTEGER", description: "正解の選択肢インデックス (0〜3)" },
                explanation: { type: "STRING", description: "Markdown形式の詳細な解説" }
            },
            required: ["type", "question", "options", "correct_index", "explanation"]
        };
    }

    if (forceInput) {
        return {
            type: "OBJECT",
            properties: {
                type: { type: "STRING", enum: ["input"] },
                question: { type: "STRING", description: "問題文（Markdown形式の表や資料を含む）" },
                answer: { type: "STRING", description: "模範解答（金額または用語）" },
                acceptable_answers: {
                    type: "ARRAY",
                    items: { type: "STRING" },
                    description: "表記ゆれを許容する正解リスト"
                },
                unit: { type: "STRING", description: "単位（円、%、人など。不要なら空文字）" },
                input_label: { type: "STRING", description: "入力欄のラベル" },
                explanation: { type: "STRING", description: "Markdown形式の詳細な解説" }
            },
            required: ["type", "question", "answer", "acceptable_answers", "explanation"]
        };
    }

    // ハイブリッド（おまかせ）時
    return {
        type: "OBJECT",
        properties: {
            type: { type: "STRING", enum: ["choice", "input"] },
            question: { type: "STRING" },
            options: { type: "ARRAY", items: { type: "STRING" } },
            correct_index: { type: "INTEGER" },
            answer: { type: "STRING" },
            acceptable_answers: { type: "ARRAY", items: { type: "STRING" } },
            unit: { type: "STRING" },
            input_label: { type: "STRING" },
            explanation: { type: "STRING" }
        },
        required: ["type", "question", "explanation"]
    };
}

// Gemini レスポンスから Google検索グラウンディングの参照情報を抽出する関数
function extractGeminiGrounding(candidate) {
    const meta = candidate?.groundingMetadata;
    if (!meta) return null;

    const queries = Array.isArray(meta.webSearchQueries) ? meta.webSearchQueries.filter(Boolean) : [];
    const sources = [];
    if (Array.isArray(meta.groundingChunks)) {
        meta.groundingChunks.forEach(chunk => {
            if (chunk?.web?.uri) {
                sources.push({
                    title: chunk.web.title || chunk.web.uri,
                    uri: chunk.web.uri
                });
            }
        });
    }
    if (queries.length === 0 && sources.length === 0) return null;
    return { queries, sources };
}

async function fetchGemini(prompt, apiKey, options = {}) {
    const { useSearchGrounding = false, selectedFormat = 'auto', isChoiceOnly = false } = options;

    // Gemini マルチモデル・フォールバック（特定モデルの混雑・新規キー制限・世代移行に自動対応）
    const geminiModels = [
        'gemini-2.5-flash',
        'gemini-2.5-flash-lite',
        'gemini-2.0-flash'
    ];

    let lastError = null;
    const responseSchema = buildGeminiResponseSchema(selectedFormat, isChoiceOnly);

    for (const model of geminiModels) {
        try {
            // Google検索グラウンディングON時は tools: [{ google_search: {} }] を付与
            // （※Gemini API仕様上、toolsとresponseMimeType: "application/json"の同時指定は400エラーになるため排他制御）
            const requestBody = useSearchGrounding
                ? {
                    contents: [{ parts: [{ text: prompt }] }],
                    tools: [{ google_search: {} }],
                    generationConfig: {
                        temperature: 0.5
                    }
                }
                : {
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.7,
                        responseMimeType: "application/json",
                        responseSchema: responseSchema
                    }
                };

            let response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            // もし検索グラウンディングが対象モデル・キー環境で非対応(400)だった場合は、即座にStructured Outputsモードで再試行
            if (!response.ok && response.status === 400 && useSearchGrounding) {
                const errCheck = await response.text().catch(() => '');
                if (!errCheck.includes('API_KEY_INVALID')) {
                    console.warn(`[Gemini] Search grounding unsupported on ${model}, falling back to Structured Outputs.`);
                    response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: prompt }] }],
                            generationConfig: {
                                temperature: 0.7,
                                responseMimeType: "application/json",
                                responseSchema: responseSchema
                            }
                        })
                    });
                } else {
                    throw new Error('AUTH_ERROR');
                }
            }

            if (!response.ok) {
                const errText = await response.text().catch(() => '');
                if (response.status === 400 && errText.includes('API_KEY_INVALID')) {
                    throw new Error('AUTH_ERROR');
                }
                if (response.status === 401) {
                    throw new Error('AUTH_ERROR');
                }
                // 404(モデル制限/廃止), 403(モデル単位のアクセス制限), 429(レート制限), 503(過負荷)は次のモデルへフォールバック
                console.warn(`[Gemini] Model ${model} returned HTTP ${response.status}. Trying fallback...`);
                if (response.status === 429) {
                    lastError = new Error('RATE_LIMIT');
                } else if (response.status >= 500) {
                    lastError = new Error('SERVER_OVERLOAD');
                } else {
                    lastError = new Error(`Gemini API Error: ${response.status}`);
                }
                continue;
            }

            const data = await response.json();
            const candidate = data?.candidates?.[0];
            const parts = candidate?.content?.parts || [];
            const rawText = parts.map(p => p.text || '').join('\n');
            let quiz = validateAndNormalizeQuiz(parseRobustJSON(rawText), options);
            quiz.exam = currentExam;
            quiz.category = currentCategory;
            quiz.grounding = extractGeminiGrounding(candidate);
            return quiz;
        } catch (e) {
            if (e.message === 'AUTH_ERROR') throw e;
            lastError = e;
            console.warn(`[Gemini] Model ${model} failed: ${e.message}`);
        }
    }

    throw lastError || new Error('SERVER_OVERLOAD');
}

async function fetchOpenAI(prompt, apiKey, options = {}) {
    // OpenAI マルチモデル・フォールバック（最新のgpt-4.1-miniとgpt-4o-miniを順次試行）
    const openaiModels = [
        'gpt-4.1-mini',
        'gpt-4o-mini'
    ];

    let lastError = null;

    for (const model of openaiModels) {
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: model,
                    response_format: { type: "json_object" },
                    messages: [
                        { role: "system", content: "You are a strict JSON output generator for Japanese professional certification quizzes." },
                        { role: "user", content: prompt }
                    ],
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                if (response.status === 401) throw new Error('AUTH_ERROR');
                console.warn(`[OpenAI] Model ${model} returned HTTP ${response.status}. Trying fallback...`);
                if (response.status === 429) {
                    lastError = new Error('RATE_LIMIT');
                } else if (response.status >= 500) {
                    lastError = new Error('SERVER_OVERLOAD');
                } else {
                    lastError = new Error(`OpenAI API Error: ${response.status}`);
                }
                continue;
            }

            const data = await response.json();
            let quiz = validateAndNormalizeQuiz(parseRobustJSON(data?.choices?.[0]?.message?.content), options);
            quiz.exam = currentExam;
            quiz.category = currentCategory;
            return quiz;
        } catch (e) {
            if (e.message === 'AUTH_ERROR') throw e;
            lastError = e;
            console.warn(`[OpenAI] Model ${model} failed: ${e.message}`);
        }
    }

    throw lastError || new Error('SERVER_OVERLOAD');
}

async function fetchGroq(prompt, apiKey, options = {}) {
    // Groq マルチモデル・フォールバック（Llama 3.3 70B -> Llama 4 Scout -> Llama 3.1 8B）
    const groqModels = [
        'llama-3.3-70b-versatile',
        'meta-llama/llama-4-scout-17b-16e-instruct',
        'llama-3.1-8b-instant'
    ];

    let lastError = null;

    for (const model of groqModels) {
        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: model,
                    response_format: { type: "json_object" },
                    messages: [
                        { role: "system", content: "You are a strict JSON output generator for Japanese professional certification quizzes." },
                        { role: "user", content: prompt }
                    ],
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                if (response.status === 401) throw new Error('AUTH_ERROR');
                console.warn(`[Groq] Model ${model} returned HTTP ${response.status}. Trying fallback...`);
                if (response.status === 429) {
                    lastError = new Error('RATE_LIMIT');
                } else if (response.status >= 500) {
                    lastError = new Error('SERVER_OVERLOAD');
                } else {
                    lastError = new Error(`Groq API Error: ${response.status}`);
                }
                continue;
            }

            const data = await response.json();
            let quiz = validateAndNormalizeQuiz(parseRobustJSON(data?.choices?.[0]?.message?.content), options);
            quiz.exam = currentExam;
            quiz.category = currentCategory;
            return quiz;
        } catch (e) {
            if (e.message === 'AUTH_ERROR') throw e;
            lastError = e;
            console.warn(`[Groq] Model ${model} failed: ${e.message}`);
        }
    }

    throw lastError || new Error('SERVER_OVERLOAD');
}

async function fetchOpenRouter(prompt, apiKey, options = {}) {
    // OpenRouterの無料モデルリスト（公式自動ルーター openrouter/free を最優先に順次フォールバック）
    const freeModels = [
        'openrouter/free',
        'meta-llama/llama-3.3-70b-instruct:free',
        'deepseek/deepseek-chat:free',
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
                            content: `You are an expert quiz generator for Japanese professional certification exams. You MUST output ONLY a single valid JSON object with no other text, no markdown, no preamble. Follow the exact JSON schema requested in the user prompt (either type: "choice" with 4 options, or type: "input" with answer and acceptable_answers).`
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
                if (response.status === 401) throw new Error('AUTH_ERROR');
                if (response.status === 429) {
                    lastError = new Error('RATE_LIMIT');
                    continue;
                }
                if (response.status >= 500) {
                    lastError = new Error('SERVER_OVERLOAD');
                    continue;
                }
                lastError = new Error(`HTTP ${response.status}: ${errBody}`);
                continue;
            }

            const data = await response.json();

            // エラーオブジェクトが返ってきた場合
            if (data.error) {
                console.warn(`[OpenRouter] API error object:`, data.error);
                lastError = new Error(`API Error: ${data.error.message || JSON.stringify(data.error)}`);
                continue;
            }

            const rawContent = data?.choices?.[0]?.message?.content;
            if (!rawContent || rawContent.trim() === '') {
                console.warn(`[OpenRouter] model ${model} returned empty content`);
                lastError = new Error('INVALID_QUIZ_FORMAT');
                continue;
            }

            try {
                let quiz = validateAndNormalizeQuiz(parseRobustJSON(rawContent), options);
                quiz.exam = currentExam;
                quiz.category = currentCategory;
                console.log(`[OpenRouter] SUCCESS with model: ${model}`);
                return quiz;
            } catch (parseErr) {
                console.error(`[OpenRouter] JSON validation failed for ${model}. Raw content was:`, rawContent);
                lastError = new Error(`OPENROUTER_PARSE_FAIL: model=${model}, raw=${rawContent.substring(0, 200)}`);
                continue;
            }

        } catch (e) {
            if (e.message === 'AUTH_ERROR') throw e;
            lastError = e;
            console.warn(`[OpenRouter] model ${model} threw exception: ${e.message}`);
        }
    }

    throw lastError || new Error('SERVER_OVERLOAD');
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
    resetTutorChat(); // 新しい問題に切り替わったらAI家庭教師チャット履歴をリセット

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

    explanationText.innerHTML = formatExplanationHTML(currentQuiz.explanation, currentQuiz);
    renderGroundingInfo(currentQuiz);
    
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

    explanationText.innerHTML = formatExplanationHTML(currentQuiz.explanation, currentQuiz);
    renderGroundingInfo(currentQuiz);
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

// ==========================================================================
// v2.0.1: 解説文の自動構造化＆【正】/【誤】バッジ付与フォーマッター
// ==========================================================================

function hasLeadingVerdictLabel(text) {
    if (!text) return false;
    const s = text.trim().replace(/^[\s\*・:：\-—]+/, '');
    return /^(?:【\s*(?:正|誤|正しい[^】]*|誤り[^】]*|誤った[^】]*|不適切[^】]*)\s*】|\[(?:正|誤|正しい|誤り)\]|（(?:正|誤|正しい[^）]*|誤り[^）]*|誤った[^）]*)）|\((?:正|誤|正しい[^)]*|誤り[^)]*|誤った[^)]*)\)|[○◯⭕×✕❌]|(?:正しい選択肢|誤った選択肢|正しい記述|誤った記述|誤りの記述))/u.test(s);
}

function detectOptionVerdict(headLine, bodyText, quiz, optIdx) {
    const firstLine = (headLine || bodyText.split('\n').find(l => l.trim() !== '') || '').trim()
        .replace(/^[\s\*・:：\-—]+/, '');

    // 1. 先頭ラベルによる明示的な【正】【誤】判定
    if (/^(?:【\s*(?:正|正しい[^】]*)\s*】|\[(?:正|正しい)\]|（(?:正|正しい[^）]*)）|\((?:正|正しい[^)]*)\)|[○◯⭕]|正しい選択肢|正しい記述|正しい(?=[。．・\s]|です))/u.test(firstLine)) {
        return 'true';
    }
    if (/^(?:【\s*(?:誤|誤り|誤った[^】]*|不適切[^】]*)\s*】|\[(?:誤|誤り)\]|（(?:誤|誤り|誤った[^）]*)）|\((?:誤|誤り|誤った[^)]*)\)|[×✕❌]|誤った選択肢|誤った記述|誤りの記述|誤り(?=[。．・\s]|です)|不適切(?=[。．・\s]|です))/u.test(firstLine)) {
        return 'false';
    }

    // 2. 本文中の結論センテンスによる判定（Web検索連動時など「選択肢1：... \n この記述は正しいです。」のパターン）
    const combined = `${headLine}\n${bodyText}`;
    const headFirstSentence = (headLine.trim().split(/[。\n]/)[0] || '').trim();
    const bodyFirstSentence = (bodyText.trim().split(/[。\n]/)[0] || '').trim();

    const falseSentenceRegex = /(?:この記述は|本肢は|本選択肢は|当該記述は|記述は|選択肢[1-4１-４]は)?\s*(?:誤りです|誤っています|誤った記述です|誤った選択肢です|不適切です|妥当ではありません|誤りとなります|誤りである|不適切である|正しくありません)|【誤】|【誤り】|【誤った選択肢】/u;
    const trueSentenceRegex = /(?:この記述は|本肢は|本選択肢は|当該記述は|記述は|選択肢[1-4１-４]は)?\s*(?:正しいです|正しい記述です|正しい選択肢です|適切です|妥当です|正しいといえます|正しいとなります|正しいである|適切である)|【正】|【正しい】|【正しい選択肢】/u;

    for (const s of [headFirstSentence, bodyFirstSentence]) {
        if (!s) continue;
        // 「前半は正しいですが、後半が誤りです」のような複文では後半の結論を優先
        if (/(?:ですが|ものの|が、)[^。]*?(?:誤り|不適切|正しくない)/u.test(s)) return 'false';
        if (/(?:ですが|ものの|が、)[^。]*?(?:正しい|適切|妥当)/u.test(s)) return 'true';
        if (falseSentenceRegex.test(s)) return 'false';
        if (trueSentenceRegex.test(s)) return 'true';
    }

    if (/(?:したがって|よって|ゆえに)[^。]*?(?:誤り|不適切|正しくない)/u.test(combined) || falseSentenceRegex.test(combined)) {
        return 'false';
    }
    if (/(?:したがって|よって|ゆえに)[^。]*?(?:正しい|適切|妥当)/u.test(combined) || trueSentenceRegex.test(combined)) {
        return 'true';
    }

    // 3. 問題文の問い方（「誤っているものはどれか」等）と correct_index からのフォールバック推論
    if (quiz && quiz.correct_index !== undefined) {
        const isAnswer = (optIdx === Number(quiz.correct_index));
        const asksForFalse = /誤っている|不適切な|妥当でない|誤りの|正しくない/.test(quiz.question || '');
        if (asksForFalse) {
            return isAnswer ? 'false' : 'true';
        }
        return isAnswer ? 'true' : 'false';
    }

    return null;
}

function stripLeadingVerdictLabels(text) {
    if (!text) return '';
    let s = text.trim();
    // 先頭の【正】【誤】【正しい選択肢】【誤った選択肢】【★本問の正解】等を繰り返し除去
    const labelPattern = /^(?:[\s\*・:：\-—🎯⭕❌○◯×✕]+|【\s*(?:正|誤|正しい[^】]*|誤り[^】]*|誤った[^】]*|不適切[^】]*|★?本問の正解|正解)\s*】|\[(?:正|誤|正しい|誤り|正解)\]|（(?:正|誤|正しい選択肢|誤った選択肢|正しい記述|誤った記述|誤りの記述|本問の正解|正解)）|\((?:正|誤|正しい選択肢|誤った選択肢|正しい記述|誤った記述|正解)\)|(?:正しい選択肢|誤った選択肢|正しい記述|誤った記述)(?=[\s:：・。．]|$))+/u;
    s = s.replace(labelPattern, '').replace(/^[\s\*・:：\-—]+/, '').trim();
    return s;
}

function renderOptionExplanationCard(optBlock, quiz) {
    const circledMap = { '①': '1', '②': '2', '③': '3', '④': '4' };
    const numStr = (circledMap[optBlock.num] || optBlock.num).replace(/[１-４]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0));
    const num = parseInt(numStr, 10);
    const optIdx = num - 1;
    const isAnswerChoice = quiz && Number(quiz.correct_index) === optIdx;

    const rawHead = (optBlock.headLine || '').trim();
    const rawBody = optBlock.bodyLines.join('\n').trim();
    const verdict = detectOptionVerdict(rawHead, rawBody, quiz, optIdx);

    const headHadBadge = hasLeadingVerdictLabel(rawHead);
    const cleanedHead = stripLeadingVerdictLabels(rawHead);
    const cleanedBody = stripLeadingVerdictLabels(rawBody);

    let badgeHtml = '';
    if (verdict === 'true') {
        badgeHtml += `<span class="exp-badge exp-badge-true">⭕ 【正】正しい選択肢</span>`;
    } else if (verdict === 'false') {
        badgeHtml += `<span class="exp-badge exp-badge-false">❌ 【誤】誤った選択肢</span>`;
    }
    if (isAnswerChoice) {
        badgeHtml += `<span class="exp-badge exp-badge-answer">🎯 本問の正解</span>`;
    }

    let contentHtml = '';
    // 1行目に【正】【誤】ラベルが無く、かつ2行目以降に「この記述は正しいです」等の解説本文がある場合は、1行目を「選択肢文の引用」として分離表示
    if (!headHadBadge && cleanedHead && cleanedBody) {
        contentHtml = `
            <div class="exp-option-statement">${marked.parseInline(cleanedHead)}</div>
            <div class="exp-option-reason">${marked.parse(cleanedBody)}</div>
        `;
    } else {
        const mergedReason = [cleanedHead, cleanedBody].filter(Boolean).join('\n\n');
        contentHtml = `<div class="exp-option-reason">${marked.parse(mergedReason)}</div>`;
    }

    return `
        <div class="exp-option-card ${isAnswerChoice ? 'is-answer-choice' : ''}">
            <div class="exp-option-header">
                <span class="exp-option-num">選択肢 ${num}</span>
                ${badgeHtml}
            </div>
            ${contentHtml}
        </div>
    `;
}

function formatExplanationHTML(rawExplanation, quiz) {
    if (!rawExplanation || typeof rawExplanation !== 'string') return '';

    // 過剰な連続改行を整理
    const normalized = rawExplanation
        .replace(/\r\n/g, '\n')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();

    const lines = normalized.split('\n');
    const isChoiceQuiz = !quiz || (quiz.type !== 'input' && Array.isArray(quiz.options) && quiz.options.length > 0);

    const secHeaderRegex = /^[\s>\-\*#]*\**【(出題の趣旨|詳細解説|ワンポイントアドバイス|模範解答[^】]*)】\**[\s:：]*(.*)$/;
    const explicitOptRegex = /^[\s>\-\*]*\**(?:選択肢|肢)\s*([1-4１-４])\**[\s:：・\-—]*(.*)$/;
    const numberedOptRegex = /^[\s>\-\*]*\**(?:([1-4１-４])[\.．:：）\)]|([①②③④]))\**[\s:：・\-—]*(.*)$/;

    let htmlParts = [];
    let mdBuffer = [];
    let currentOptBlock = null;
    let inDetailSection = false;

    const flushMdBuffer = () => {
        const text = mdBuffer.join('\n').trim();
        if (text) {
            htmlParts.push(marked.parse(text));
        }
        mdBuffer = [];
    };

    const flushOptBlock = () => {
        if (currentOptBlock) {
            htmlParts.push(renderOptionExplanationCard(currentOptBlock, quiz));
            currentOptBlock = null;
        }
    };

    for (const line of lines) {
        const secMatch = line.match(secHeaderRegex);
        if (secMatch) {
            flushOptBlock();
            flushMdBuffer();
            const secTitle = secMatch[1];
            const secRest = (secMatch[2] || '').trim();
            inDetailSection = secTitle.includes('詳細');
            const icon = secTitle.includes('趣旨') ? '🎯' : (secTitle.includes('詳細') ? '📖' : (secTitle.includes('アドバイス') ? '💡' : '✅'));
            htmlParts.push(`<div class="exp-section-title">${icon} 【${secTitle}】</div>`);
            if (secRest) {
                mdBuffer.push(secRest);
            }
            continue;
        }

        if (isChoiceQuiz) {
            const optMatch = line.match(explicitOptRegex);
            if (optMatch) {
                flushOptBlock();
                flushMdBuffer();
                currentOptBlock = {
                    num: optMatch[1],
                    headLine: optMatch[2] || '',
                    bodyLines: []
                };
                continue;
            }
            if (inDetailSection) {
                const numMatch = line.match(numberedOptRegex);
                if (numMatch) {
                    flushOptBlock();
                    flushMdBuffer();
                    currentOptBlock = {
                        num: numMatch[1] || numMatch[2],
                        headLine: numMatch[3] || '',
                        bodyLines: []
                    };
                    continue;
                }
            }
        }

        if (currentOptBlock) {
            currentOptBlock.bodyLines.push(line);
        } else {
            mdBuffer.push(line);
        }
    }

    flushOptBlock();
    flushMdBuffer();

    return htmlParts.join('\n');
}

// Google検索グラウンディング参照元の描画関数
function renderGroundingInfo(quiz) {
    if (!groundingInfoBox || !groundingSourcesList) return;
    groundingSourcesList.innerHTML = '';

    const g = quiz && quiz.grounding;
    if (!g || ((!g.sources || g.sources.length === 0) && (!g.queries || g.queries.length === 0))) {
        groundingInfoBox.classList.add('hidden');
        return;
    }

    if (Array.isArray(g.queries)) {
        g.queries.slice(0, 4).forEach(q => {
            const qChip = document.createElement('span');
            qChip.className = 'grounding-query-chip';
            qChip.textContent = `🔍 ${q}`;
            groundingSourcesList.appendChild(qChip);
        });
    }

    if (Array.isArray(g.sources)) {
        g.sources.slice(0, 5).forEach(src => {
            const a = document.createElement('a');
            a.className = 'grounding-source-chip';
            a.href = src.uri;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = `🔗 ${src.title}`;
            groundingSourcesList.appendChild(a);
        });
    }

    groundingInfoBox.classList.remove('hidden');
}

// ==========================================================================
// v2.00: AI専門講師への深掘り質問（AI家庭教師チャット）機能
// ==========================================================================

function resetTutorChat() {
    currentTutorHistory = [];
    isTutorLoading = false;
    if (tutorChatHistory) {
        tutorChatHistory.innerHTML = '';
        tutorChatHistory.classList.add('hidden');
    }
    if (tutorInput) {
        tutorInput.value = '';
        tutorInput.disabled = false;
    }
    if (tutorSendBtn) {
        tutorSendBtn.disabled = false;
        const tText = tutorSendBtn.querySelector('.btn-text');
        const tSpin = tutorSendBtn.querySelector('.spinner');
        if (tText) tText.classList.remove('hidden');
        if (tSpin) tSpin.classList.add('hidden');
    }
    if (tutorChipBtns) {
        tutorChipBtns.forEach(c => c.disabled = false);
    }
}

function setTutorLoadingState(loading) {
    isTutorLoading = loading;
    if (tutorInput) tutorInput.disabled = loading;
    if (tutorSendBtn) {
        tutorSendBtn.disabled = loading;
        const tText = tutorSendBtn.querySelector('.btn-text');
        const tSpin = tutorSendBtn.querySelector('.spinner');
        if (tText) tText.classList.toggle('hidden', loading);
        if (tSpin) tSpin.classList.toggle('hidden', !loading);
    }
    if (tutorChipBtns) {
        tutorChipBtns.forEach(c => c.disabled = loading);
    }
}

async function handleTutorQuestion(questionStr) {
    if (!currentQuiz || isTutorLoading || !questionStr) return;

    if (tutorInput) tutorInput.value = '';
    setTutorLoadingState(true);
    tutorChatHistory.classList.remove('hidden');

    // ユーザーの質問バブルを追加
    const userMsgEl = document.createElement('div');
    userMsgEl.className = 'tutor-msg tutor-msg-user';
    const roleSpan = document.createElement('span');
    roleSpan.className = 'tutor-msg-role';
    roleSpan.textContent = '🙋 あなたの質問';
    const bodyDiv = document.createElement('div');
    bodyDiv.textContent = questionStr;
    userMsgEl.appendChild(roleSpan);
    userMsgEl.appendChild(bodyDiv);
    tutorChatHistory.appendChild(userMsgEl);

    // AIのローディングバブルを追加
    const aiMsgEl = document.createElement('div');
    aiMsgEl.className = 'tutor-msg tutor-msg-ai';
    aiMsgEl.innerHTML = `<span class="tutor-msg-role">🎓 AI専門講師</span><div class="markdown-body" style="color:var(--text-secondary);">回答を作成しています...</div>`;
    tutorChatHistory.appendChild(aiMsgEl);
    tutorChatHistory.scrollTop = tutorChatHistory.scrollHeight;

    try {
        const answerMarkdown = await fetchTutorAnswer(questionStr);
        currentTutorHistory.push({ role: 'user', content: questionStr });
        currentTutorHistory.push({ role: 'assistant', content: answerMarkdown });

        aiMsgEl.innerHTML = `<span class="tutor-msg-role">🎓 AI専門講師</span><div class="markdown-body question-markdown" style="margin-bottom:0; font-size:0.95rem;">${marked.parse(answerMarkdown)}</div>`;
        tutorChatHistory.scrollTop = tutorChatHistory.scrollHeight;
    } catch (e) {
        console.error('[AI Tutor Error]', e);
        aiMsgEl.innerHTML = `<span class="tutor-msg-role">🎓 AI専門講師</span><div style="color:var(--error-color);">${formatUserErrorMessage(e)}</div>`;
    } finally {
        setTutorLoadingState(false);
        if (tutorInput) tutorInput.focus();
    }
}

async function fetchTutorAnswer(userQuestion) {
    const engine = localStorage.getItem('ai_engine') || 'gemini';
    const apiKey = localStorage.getItem(`${engine}_api_key`);
    if (!apiKey) {
        apiModal.classList.remove('hidden');
        throw new Error('API Key missing');
    }

    const examName = (EXAM_DATA[currentQuiz.exam] && EXAM_DATA[currentQuiz.exam].name) || EXAM_DATA[currentExam].name;
    const categoryName = currentQuiz.category || currentCategory;
    const useSearchGrounding = (searchGroundingCheckbox && searchGroundingCheckbox.checked && engine === 'gemini');

    let quizContext = `【対象資格・科目】${examName}（${categoryName}）\n【問題文】\n${currentQuiz.question}\n`;
    if (currentQuiz.type === 'input') {
        quizContext += `【模範解答】${currentQuiz.answer}${currentQuiz.unit || ''}\n`;
    } else if (Array.isArray(currentQuiz.options)) {
        quizContext += `【選択肢】\n${currentQuiz.options.map((o, i) => `${i + 1}. ${o}`).join('\n')}\n【正解】選択肢 ${Number(currentQuiz.correct_index) + 1}\n`;
    }
    quizContext += `【解説】\n${currentQuiz.explanation}\n`;

    let historyText = '';
    if (currentTutorHistory.length > 0) {
        historyText = '\n【これまでの質疑応答】\n' + currentTutorHistory.map(h => `${h.role === 'user' ? '受験生' : '講師'}: ${h.content}`).join('\n\n') + '\n';
    }

    const tutorPrompt = `あなたは「${examName}」の経験豊富で親身な専門講師です。
現在、受験生が以下の過去問演習に取り組み、解説を読んだうえで追加の質問をしています。

${quizContext}${historyText}
【受験生からの今回の質問】
${userQuestion}

【回答のルール】
- 受験生の疑問にピンポイントで答え、本試験で得点力に直結するように分かりやすく解説してください。
- 必要に応じてMarkdownの箇条書き、太字、表（テーブル）、具体例、仕訳例などを活用して視覚的に整理してください。
- JSONではなく、そのまま読めるMarkdownテキストとして出力してください。`;

    if (engine === 'gemini') {
        const geminiModels = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash'];
        let lastErr = null;
        for (const model of geminiModels) {
            try {
                const reqBody = {
                    contents: [{ parts: [{ text: tutorPrompt }] }],
                    generationConfig: { temperature: 0.6 }
                };
                if (useSearchGrounding) {
                    reqBody.tools = [{ google_search: {} }];
                }
                let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(reqBody)
                });
                if (!res.ok && res.status === 400 && useSearchGrounding) {
                    delete reqBody.tools;
                    res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(reqBody)
                    });
                }
                if (!res.ok) {
                    if (res.status === 401) throw new Error('AUTH_ERROR');
                    lastErr = new Error(res.status === 429 ? 'RATE_LIMIT' : 'SERVER_OVERLOAD');
                    continue;
                }
                const data = await res.json();
                const parts = data?.candidates?.[0]?.content?.parts || [];
                const text = parts.map(p => p.text || '').join('\n').trim();
                if (text) return text;
            } catch (e) {
                if (e.message === 'AUTH_ERROR') throw e;
                lastErr = e;
            }
        }
        throw lastErr || new Error('SERVER_OVERLOAD');
    }

    if (engine === 'groq') {
        const groqModels = ['llama-3.3-70b-versatile', 'meta-llama/llama-4-scout-17b-16e-instruct', 'llama-3.1-8b-instant'];
        let lastErr = null;
        for (const model of groqModels) {
            try {
                const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
                    body: JSON.stringify({
                        model,
                        messages: [{ role: 'user', content: tutorPrompt }],
                        temperature: 0.6
                    })
                });
                if (!res.ok) {
                    if (res.status === 401) throw new Error('AUTH_ERROR');
                    lastErr = new Error(res.status === 429 ? 'RATE_LIMIT' : 'SERVER_OVERLOAD');
                    continue;
                }
                const data = await res.json();
                const text = data?.choices?.[0]?.message?.content?.trim();
                if (text) return text;
            } catch (e) {
                if (e.message === 'AUTH_ERROR') throw e;
                lastErr = e;
            }
        }
        throw lastErr || new Error('SERVER_OVERLOAD');
    }

    if (engine === 'openrouter') {
        const freeModels = ['openrouter/free', 'meta-llama/llama-3.3-70b-instruct:free', 'deepseek/deepseek-chat:free', 'qwen/qwen-2.5-72b-instruct:free'];
        let lastErr = null;
        for (const model of freeModels) {
            try {
                const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                        'HTTP-Referer': window.location.href || 'http://localhost',
                        'X-Title': 'QuaGenius'
                    },
                    body: JSON.stringify({
                        model,
                        messages: [{ role: 'user', content: tutorPrompt }],
                        temperature: 0.6
                    })
                });
                if (!res.ok) {
                    if (res.status === 401) throw new Error('AUTH_ERROR');
                    lastErr = new Error(res.status === 429 ? 'RATE_LIMIT' : 'SERVER_OVERLOAD');
                    continue;
                }
                const data = await res.json();
                const text = data?.choices?.[0]?.message?.content?.trim();
                if (text) return text;
            } catch (e) {
                if (e.message === 'AUTH_ERROR') throw e;
                lastErr = e;
            }
        }
        throw lastErr || new Error('SERVER_OVERLOAD');
    }

    // OpenAI
    const openaiModels = ['gpt-4.1-mini', 'gpt-4o-mini'];
    let lastErr = null;
    for (const model of openaiModels) {
        try {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
                body: JSON.stringify({
                    model,
                    messages: [{ role: 'user', content: tutorPrompt }],
                    temperature: 0.6
                })
            });
            if (!res.ok) {
                if (res.status === 401) throw new Error('AUTH_ERROR');
                lastErr = new Error(res.status === 429 ? 'RATE_LIMIT' : 'SERVER_OVERLOAD');
                continue;
            }
            const data = await res.json();
            const text = data?.choices?.[0]?.message?.content?.trim();
            if (text) return text;
        } catch (e) {
            if (e.message === 'AUTH_ERROR') throw e;
            lastErr = e;
        }
    }
    throw lastErr || new Error('SERVER_OVERLOAD');
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
