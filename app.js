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

// Syllabus Subtopics Data (v2.20: 3階層シラバス「資格 ＞ 出題分野 ＞ 小分類（重要論点）」マッピング)
const SYLLABUS_DATA = {
    sme: {
        "企業経営理論": [
            "経営戦略論（競争戦略・成長戦略・PPM・M&A）",
            "経営組織論（組織構造・組織文化・組織変革）",
            "モチベーション・リーダーシップ理論",
            "人的資源管理（人事評価・報酬制度・労働関連法規）",
            "マーケティング基礎（市場調査・セグメンテーション・STP）",
            "製品・価格戦略（PLC・ブランド戦略・価格設定）",
            "チャネル・プロモーション戦略・デジタルマーケティング",
            "消費者行動論・顧客満足（CS・CRM・サービスマーケティング）"
        ],
        "財務・会計": [
            "財務諸表と企業会計原則（B/S・P/L・C/F計算書）",
            "経営分析（収益性・安全性・生産性・成長性指標）",
            "CVP分析（損益分岐点・限界利益・安全余裕率）",
            "原価計算・管理会計・予算管理",
            "投資の経済性計算（NPV・IRR・回収期間法・タックスシールド）",
            "企業価値評価（DCF法・マルチプル法・フリーキャッシュフロー）",
            "資本コストと最適資本構成（WACC・MM理論・レバレッジ）",
            "現代ポートフォリオ理論（CAPM・リスク分散・デリバティブ）"
        ],
        "運営管理": [
            "生産管理の基礎と工場計画（レイアウト・SLP・マテハン）",
            "生産方式と工程管理（JIT・かんばん方式・ラインバランシング）",
            "作業研究・IE手法（標準時間・動作研究・稼働分析）",
            "品質管理（QC七つ道具・統計的品質管理・ISO9001）",
            "設備管理・資材購買・外注管理（TPM・MRP・ABC分析）",
            "店舗立地・商業集積・店舗施設レイアウトと照明計画",
            "マーチャンダイジング・価格設定・在庫管理（GMROI・交差比率）",
            "物流・サプライチェーンマネジメント（SCM・POS・JAN・EDI）"
        ],
        "経済学・経済政策": [
            "消費者行動と需要曲線（効用最大化・無差別曲線・弾力性）",
            "生産者行動と費用関数（利潤最大化・限界費用・損益分岐・操業停止点）",
            "市場均衡と不完全競争（完全競争・独占・寡占・ゲーム理論）",
            "市場の失敗とミクロ経済政策（外部性・公共財・情報の非対称性）",
            "国民経済計算と財市場（GDP・三面等価・有効需要・乗数理論）",
            "貨幣市場とIS-LM分析（金融政策・財政政策・流動性のわな）",
            "AD-AS分析とインフレ・デフレ・労働市場（フィリップス曲線）",
            "国際マクロ経済（国際収支・為替レート・マンデル＝フレミングモデル）"
        ],
        "経営情報システム": [
            "ハードウェア・CPU・メモリ・ストレージ構成技術",
            "OS・ミドルウェア・仮想化・コンテナ技術",
            "データベース設計（E-R図・正規化・トランザクション管理）",
            "SQL実践とデータウェアハウス・BI・ビッグデータ分析",
            "ネットワーク技術・TCP/IP・無線LAN・クラウド基盤（IaaS/PaaS/SaaS）",
            "システム開発手法（ウォーターフォール・アジャイル・UML・テスト工程）",
            "プロジェクトマネジメント・ITIL・サービスマネジメント・外部委託",
            "情報セキュリティ技術（暗号・認証・マルウェア・ゼロトラスト対策）",
            "システム監査・内部統制・個人情報保護・IT関連法規・統計解析"
        ],
        "経営法務": [
            "会社法：設立・株式・機関設計（株主総会・取締役会・監査役）",
            "会社法：資金調達・組織再編（合併・会社分割・事業譲渡）・持分会社",
            "知的財産権：特許法・実用新案法・意匠法",
            "知的財産権：商標法・著作権法・不正競争防止法",
            "民法：契約総論・意思表示・代理・債権債務・担保物権",
            "民法：売買・賃貸借・請負・不法行為・相続・事業承継法制",
            "独占禁止法・下請法・消費者保護法制（景表法・特商法・PL法）",
            "倒産法制（破産・民事再生・会社更生）・国際法務・英文契約"
        ],
        "中小企業経営・中小企業政策": [
            "中小企業白書：マクロ経済動向・業況・企業数・従業者数の構造",
            "中小企業白書：人手不足対応・生産性向上・DX・GX推進の動向",
            "中小企業白書：価格転嫁・取引適正化・事業承継・M&A・スタートアップ",
            "小規模企業白書：小規模事業者の動向・地域経済・伴走支援の取組",
            "中小企業基本法（定義・基本理念）と中小企業憲章",
            "金融支援策（マル経融資・日本政策金融公庫・信用保証協会制度）",
            "経営革新・ものづくり補助金・事業再構築・小規模事業者持続化補助金",
            "中小企業税制・経営強化法・事業承継円滑化法・下請振興策"
        ]
    },
    fp1: {
        "ライフプランニングと資金計画": [
            "FP倫理・関連法規（著作権・税理士法・弁護士法・金商法）",
            "ライフプランニング手法と6つの係数・キャッシュフロー表",
            "公的医療保険・後期高齢者医療制度・介護保険制度",
            "公的年金制度（国民年金・厚生年金の受給要件と年金額計算）",
            "障害年金・遺族年金・在職老齢年金・離婚時の年金分割",
            "企業年金・個人年金（確定拠出年金iDeCo/企業型DC・確定給付企業年金・中退共）",
            "雇用保険・労災保険（給付内容・高年齢雇用継続・育児介護休業給付）",
            "住宅取得資金計画（フラット35・住宅ローン返済方式）・教育資金・中小企業資金調達"
        ],
        "リスク管理": [
            "保険法・保険業法・ソルベンシーマージン比率・契約者保護機構",
            "生命保険商品の仕組み・約款・保険料算定原則（3利源）",
            "個人向け生命保険の税務（保険料控除・満期・死亡保険金の課税関係）",
            "法人契約の生命保険の経理処理（定期保険・養老保険・解約返戻金ピーク時区分）",
            "損害保険商品の仕組み（火災保険・地震保険・自動車保険）",
            "賠償責任保険・傷害保険・所得補償保険の補償範囲",
            "損害保険の税務（個人・法人の保険金受取・圧縮記帳・損金算入）",
            "第三分野の保険（医療保険・がん保険・介護保険）とリスクマネジメント"
        ],
        "金融資産運用": [
            "経済・景気指標（日銀短観・GDP・マネーストック・金利動向）",
            "貯蓄型金融商品・債券投資（利回り計算・デュレーション・格付け）",
            "株式投資と企業価値指標（PER・PBR・ROE・配当利回り・信用取引）",
            "投資信託の仕組み・分類・運用手法・コストと分配金計算",
            "外貨建て金融商品・為替予約・国際収支・カントリーリスク",
            "デリバティブ取引（先物・オプション・スワップ）とヘッジ手法",
            "ポートフォリオ理論（期待収益率・標準偏差・相関係数・シャープ・レシオ）",
            "金融商品と税金（上場株式等の譲渡損益・損益通算・NISA）・金商法・消費者保護"
        ],
        "タックスプランニング": [
            "所得税の基本仕組みと各種所得の分類（利子・配当・不動産・事業所得）",
            "給与所得・退職所得・山林所得・譲渡所得・一時所得・雑所得の計算",
            "損益通算と純損失・雑損失の繰越控除の適用要件",
            "所得控除（医療費・社会保険料・扶養・配偶者・基礎控除等）",
            "税額控除（住宅ローン控除・配当控除・政党等寄附金控除）と青色申告制度",
            "法人税の仕組み（益金・損金・役員給与・交際費・寄附金・減価償却）",
            "法人税の税額計算・グループ通算制度・欠損金の繰越控除・繰戻し還付",
            "消費税の仕組み（課税取引・仕入税額控除・簡易課税・インボイス制度）"
        ],
        "不動産": [
            "不動産の価格と鑑定評価（原価法・取引事例比較法・収益還元法・公的価格）",
            "不動産取引の法律（宅建業法・媒介契約・重要事項説明・手付金・契約不適合責任）",
            "借地借家法（普通借地権・定期借地権・普通借家権・定期借家権）",
            "区分所有法・不動産登記制度（表示に関する登記・権利に関する登記・公信力）",
            "都市計画法・建築基準法（用途地域・建ぺい率・容積率・道路斜線・日影規制）",
            "不動産の取得・保有にかかる税金（不動産取得税・登録免許税・固定資産税）",
            "不動産の譲渡所得と特例（3,000万円特別控除・軽減税率・買換え特例・収用等）",
            "不動産の有効活用方式（事業受託・等価交換・建設協力金）と投資採算分析（NOI・CCR）"
        ],
        "相続・事業承継": [
            "民法上の相続制度（法定相続人・法定相続分・代襲相続・承認と放棄）",
            "遺産分割・遺言制度（自筆証書遺言保管制度・公正証書遺言）・遺留分侵害額請求",
            "相続税の課税財産・みなし相続財産・非課税財産・債務控除",
            "相続税の税額計算（基礎控除・総額計算・2割加算・配偶者の税額軽減・各種控除）",
            "贈与税の仕組み（暦年課税・生前贈与加算・相続時精算課税制度）",
            "贈与税の非課税特例（住宅取得等資金・教育資金・結婚子育て・おしどり贈与）",
            "財産評価：宅地および宅地の上に存する権利（路線価方式・小規模宅地等の特例）",
            "非上場株式の評価（類似業種比準方式・純資産価額方式・配当還元）と事業承継税制"
        ]
    },
    tax: {
        "簿記論": [
            "現金預金・銀行勘定調整表・金銭債権と貸倒引当金",
            "商品売買（収益認識基準・割賦・委託・試用販売）と棚卸資産の評価",
            "有形固定資産（取得・減価償却・圧縮記帳・除却・資産除去債務・減損）",
            "有価証券・デリバティブ・外貨建取引の換算と決算処理",
            "リース会計・研究開発費とソフトウェア・繰延資産・引当金（賞与・退職給付）",
            "純資産会計（増資・自己株式・剰余金の配当・ストックオプション）",
            "本支店会計・帳簿組織・伝票会計・誤謬の訂正",
            "総合問題対策（決算整理後残高試算表・精算表の作成プロセス）"
        ],
        "財務諸表論": [
            "企業会計原則（一般原則・損益計算書原則・貸借対照表原則）と概念フレームワーク",
            "収益認識に関する会計基準（5ステップ・本人と代理人・変動対価・契約資産）",
            "金融商品会計基準（有価証券の評価差額・ヘッジ会計・貸倒見積高の算定）",
            "棚卸資産の評価基準（正味売却価額・後入先出法廃止の論点）と固定資産の減損会計",
            "リース会計基準・資産除去債務会計基準・研究開発費とソフトウェア",
            "退職給付会計基準（退職給付債務・勤務費用・数理計算上の差異）・税効果会計",
            "純資産の部の表示区分・株主資本等変動計算書・自己株式および準備金の額の減少",
            "企業結合・事業分離・連結財務諸表の理論と注記事項"
        ],
        "所得税法": [
            "納税義務者の区分・非課税所得・実質所得者課税の原則",
            "利子所得・配当所得・不動産所得の収入計上時期と必要経費",
            "事業所得（棚卸資産・減価償却・引当金・専従者給与・家事関連費）",
            "給与所得（特定支出控除・経済的利益）・退職所得・山林所得",
            "譲渡所得（取得費・譲渡費用・総合課税と分離課税・居住用財産の特例）",
            "一時所得・雑所得・損益通算の順序と純損失・雑損失の繰越控除",
            "各種所得控除（雑損・医療費・社会保険料・小規模企業共済・配偶者・扶養等）",
            "税額計算・税額控除（配当・外国税額・住宅借入金等特別控除）・源泉徴収と確定申告"
        ],
        "法人税法": [
            "各事業年度の所得の金額と益金の額（収益認識・受取配当等の益金不算入）",
            "資産の評価益・評価損・有価証券の譲渡損益と棚卸資産の評価方法",
            "減価償却資産の償却限度額・少額減価償却資産・資本的支出と修繕費・繰延資産",
            "役員給与（定期同額・事前確定届出・業績連動）・使用人兼務役員・過大役員給与",
            "交際費等の損金不算入・寄附金の損金算入限度額・租税公課（法人税・住民税等）",
            "圧縮記帳（国庫補助金・保険差益・交換・買換え）・貸倒損失と貸倒引当金",
            "欠損金の繰越控除・災害損失・グループ法人税制・組織再編税制",
            "法人税額の計算（中小企業軽減税率・試験研究費・賃上げ促進税制・同族会社の留保金課税）"
        ],
        "相続税法": [
            "相続税の納税義務者（無制限・制限）と本来の相続財産・みなし相続財産",
            "生命保険金等・退職手当金等の非課税限度額と課税価格への算入",
            "生前贈与加算（歴年課税分の加算期間と対象者）および相続時精算課税の適用財産",
            "非課税財産（弔慰金・公益事業用財産等）と債務控除・葬式費用の範囲",
            "小規模宅地等の特例（特定居住用・特定事業用・貸付事業用の要件と限度面積）",
            "相続税の総額計算・配偶者の税額軽減・未成年者控除・障害者控除・相次相続控除",
            "贈与税の課税価格・特例税率と一般税率・住宅取得等資金や配偶者控除の特例",
            "財産評価基本通達（路線価方式・倍率方式・貸家建付地・取引相場のない株式・申告と延納物納）"
        ],
        "消費税法": [
            "課税の対象（国内取引の4要件・事業者の定義・対価性の有無・輸入取引）",
            "非課税取引（土地の譲渡貸付け・有価証券・利子保険料・医療介護教育・住宅貸付）",
            "輸出免税取引・非居住者に対する役務の提供・国境を越えるデジタルサービス",
            "納税義務の免除・基準期間・特定期間・新設法人の特例・適格請求書発行事業者の登録",
            "資産の譲渡等の時期・課税標準（みなし譲渡・一括譲渡・下取り）と税率（軽減税率制度）",
            "仕入税額控除（インボイス保存要件・少額特例・2割特例・帳簿のみの保存特例）",
            "個別対応方式と一括比例配分方式・課税売上割合の計算・固定資産の調整対象",
            "簡易課税制度（みなし仕入率と事業区分）・貸倒れ・売上げ返還・中間申告と確定申告"
        ]
    },
    boki2: {
        "商業簿記 - 勘定科目・仕訳総合": [
            "現金預金・銀行勘定調整表・クレジット売掛金・電子記録債権（債務）",
            "商品売買（三分法・売上原価対立法・返品・リベート・役務収益と役務原価）",
            "有価証券の取得・売却・端数利息・期末評価（売買目的・満期保有・その他有価証券）",
            "有形固定資産（取得・割賦購入・減価償却200%定率法・圧縮記帳・除却・廃棄）",
            "リース取引（ファイナンス・リースとオペレーティング・リース）",
            "無形固定資産・ソフトウェア・研究開発費",
            "外貨建取引（取引発生時・決済時・決算時の換算・為替予約）",
            "引当金（貸倒・賞与・製品保証・修繕・退職給付）・純資産（増資・合併・配当）・法人税等"
        ],
        "商業簿記 - 決算整理・財務諸表": [
            "売上原価の算定と棚卸減耗損・商品評価損の計上区分",
            "経過勘定項目（前払・未払・前受・未収）の再振替仕訳と決算整理",
            "金銭債権に対する貸倒引当金の設定（差額補充法・個別評価と一括評価）",
            "減価償却費・ソフトウェア償却・満期保有目的債券の償却原価法（定額法）",
            "その他有価証券の評価差額と税効果会計（繰延税金資産・繰延税金負債）",
            "損益計算書（段階利益の算定）と貸借対照表（流動・固定分類基準）の作成",
            "株主資本等変動計算書の作成（剰余金の配当・利益準備金の積立・別途積立金）",
            "製造業を営む会社の決算処理（製造勘定・未成工事支出金等の勘定連絡）"
        ],
        "商業簿記 - 連結会計・本支店会計": [
            "連結会計の基本と支配獲得日の開始仕訳（100%子会社・部分所有子会社・のれん）",
            "支配獲得後1年目・2年目の連結修正仕訳（開始仕訳・のれんの償却・子会社当期純利益の按分）",
            "子会社の剰余金の配当と非支配株主持分の増減処理",
            "内部取引高と債権債務の相殺消去・手形の割引と裏書",
            "未実現損益の消去（商品のダウンストリーム・アップストリームと期末・期首商品）",
            "土地・備品等の固定資産の未実現損益消去と減価償却費の修正",
            "連結貸借対照表・連結損益計算書・連結株主資本等変動計算書の作成",
            "本支店会計（本店集中計算制度・未達事項の整理・内部利益の控除・合併財務諸表）"
        ],
        "工業簿記 - 費目別計算・個別原価計算": [
            "工業簿記の本質・原価の分類（製造直接費と製造間接費・変動費と固定費）と勘定連絡",
            "材料費会計（購入原価・先入先出法と移動平均法・材料副費の予定配賦・棚卸減耗）",
            "労務費会計（支払賃金・消費賃率・直接工の直接作業時間と間接作業時間・手待時間）",
            "経費会計（外注加工賃・特許権使用料・月割経費・測定経費・発生経費）",
            "製造間接費の配賦（実際配賦と予定配賦・配賦差異の把握と原価差異の処理）",
            "製造間接費の予算差異と操業度差異の分析（公式法変動予算・固定予算）",
            "部門別計算（補助部門費の配賦：直接配賦法・相互配賦法・予定配賦）",
            "個別原価計算（製造指図書別原価計算表・仕損費の直接経費処理と間接経費処理・作業くず）"
        ],
        "工業簿記 - 総合原価計算 (仕損・減損)": [
            "単純総合原価計算（月末仕掛品の評価：平均法・先入先出法・完成品換算量）",
            "総合原価計算における正常仕損・減損の処理（度外視法と非度外視法の基礎）",
            "始点投入・工程を通じて平均的投入における進捗度と原価配分",
            "工程別総合原価計算（累加法による第1工程・第2工程の完成品原価計算）",
            "組別総合原価計算（組直接費の直課と組間接費の配賦基準）",
            "等級別総合原価計算（等価係数・積数による完成品原価または一括計算）",
            "副産物の処理と評価（副産物価額の控除）および連産品の基礎知識",
            "製造原価報告書（C/R）と損益計算書（P/L）の作成と月末仕掛品・製品勘定連絡"
        ],
        "工業簿記 - 標準原価計算・直接原価計算(CVP)": [
            "標準原価計算の目的・原価標準の設定と標準原価カードの読み取り",
            "標準原価計算の勘定記入方法（パーシャル・プランとシングル・プラン）",
            "直接材料費差異の分析（価格差異と数量差異・ボックス図による算定）",
            "直接労務費差異の分析（賃率差異と作業時間差異）",
            "製造間接費差異の分析（公式法変動予算による予算差異・能率差異・操業度差異）",
            "全部原価計算と直接原価計算の損益計算書の比較と固定費調整（期末・期首在庫増減）",
            "CVP分析（損益分岐点売上高・目標営業利益達成売上高・貢献利益率・変動費率）",
            "安全余裕率・損益分岐点比率・営業レバレッジ係数と高低点法による固変分解"
        ]
    },
    boki1: {
        "商業簿記 - 企業結合・事業分離・連結会計": [
            "企業結合会計（吸収合併・新設合併・取得の会計処理・条件付取得対価・段階取得）",
            "事業分離・会社分割（投資の継続と清算・受取対価が現金や株式の場合の分離元・分離先処理）",
            "連結会計：段階取得による支配獲得・追加取得・一部売却（支配継続と支配喪失）",
            "連結会計：未実現損益の消去と税効果会計・貸倒引当金の調整・債権債務と手形取引",
            "連結会計：在外子会社の財務諸表換算（決算日レート法・為替換算調整勘定）",
            "持分法の適用（関連会社株式の評価・のれん相当額・未実現損益の消去）",
            "連結キャッシュ・フロー計算書（直接法・間接法）と包括利益計算書の作成",
            "1株当たり当期純利益（EPS・潜在株式調整後EPS）とセグメント情報開示"
        ],
        "商業簿記 - リース・金融商品・税効果・退職給付": [
            "金融商品会計：有価証券（償却原価法：利息法・その他有価証券・減損処理・保有目的変更）",
            "金融商品会計：デリバティブ取引・ヘッジ会計（繰延ヘッジ・時価ヘッジ・金利スワップ特例）",
            "金融商品会計：金銭債権の貸倒見積高（財務内容評価法・キャッシュ・フロー見積法）",
            "リース会計（所有権移転・移転外ファイナンス・リース、セール・アンド・リースバック、貸手側処理）",
            "固定資産の減損会計（兆候の把握・認識の判定・回収可能価額の算定・共用資産とのれんの配分）",
            "資産除去債務（割引価値の算定・時の経過による調整・見積りの変更）と賃貸等不動産",
            "退職給付会計（退職給付債務・年金資産・数理計算上の差異・過去勤務費用・連結での未認識項目）",
            "税効果会計（将来減算・加算一時差異、繰延税金資産の回収可能性、法定実効税率の変更）"
        ],
        "会計学 - 会計基準・概念フレームワーク・純資産": [
            "財務会計の概念フレームワーク（財務報告の目的・意思決定有用性・質的特性・構成要素・測定属性）",
            "収益認識に関する会計基準（履行義務の識別・取引価格の算定・一定期間と一時点の充足）",
            "棚卸資産の評価に関する会計基準・工事契約・研究開発費とソフトウェアの理論",
            "純資産の部の表示と株主資本等変動計算書（自己株式の取得・処分・消却・その他資本剰余金）",
            "ストック・オプション等に関する会計基準（公正な評価単価・権利確定条件の変更・失効処理）",
            "会計上の変更及び誤謬の訂正に関する会計基準（遡及適用・修正再表示・見積りの変更）",
            "外貨建取引等会計処理基準（外貨建有価証券・振当処理・独立処理・在外支店と在外子会社）",
            "四半期財務諸表・キャッシュ・フロー計算書・関連当事者の開示に関する会計基準"
        ],
        "工業簿記 - 標準原価計算・差異分析の深掘り": [
            "費目別計算の深掘り（購入原価計算・予定価格法・労務費の予定賃率・経費の測定）",
            "部門別計算の深掘り（複数基準配賦法・階梯式配賦法・相互配賦法・補助部門費の差異分析）",
            "総合原価計算の深掘り（非度外視法による正常仕損・異常仕損・減損の安定発生と平均的発生）",
            "工程別総合原価計算（累加法と非累加法・工程間振替価格・半製品と追加材料の投入）",
            "連産品の原価計算（正常市価基準・正味実現可能価額NRV基準・追加加工の意思決定）",
            "標準原価計算における仕損・減損の処理（標準消費量への組込み・配合差異と歩留差異）",
            "原価差異の会計処理（売上原価賦課法と当期売上原価・期末棚卸資産への追加配賦法）",
            "製造間接費の4分法・3分法・2分法および固定予算・公式法変動予算・実査法変動予算"
        ],
        "原価計算 - 業務的意思決定・設備投資意思決定": [
            "直接原価計算と固定費調整・セグメント別損益計算書（貢献利益・追跡可能固定費・共通固定費）",
            "多品種製品のCVP分析（セールス・ミックス・加重平均貢献利益率）と不確実性下のCVP分析",
            "業務的意思決定（差額原価収益分析・機会原価・埋没原価の識別）",
            "特別注文の引受可否・自製か外注（購入）かの選択・追加加工かそのまま販売かの選択",
            "セールス・ミックスの最適決定（単一制約条件・複数制約条件と線形計画法LP）",
            "設備投資意思決定の基礎（キャッシュ・フローの算定・タックスシールド・運転資本の増減）",
            "設備投資の評価指標（正味現在価値法NPV・内部利益率法IRR・収益性指数法PI・回収期間法）",
            "取替投資・拡張投資・相互排他的投資案の選択・耐用年数が異なる投資案の評価"
        ],
        "原価計算 - 活動基準原価計算(ABC)・戦略的原価計算": [
            "活動基準原価計算（ABC）の意義・コストドライバー・伝統的原価計算との比較と内部相互補助",
            "活動基準経営管理（ABM）と顧客別収益性分析・業務改善への活用",
            "品質原価計算（予防原価・評価原価・内部失敗原価・外部失敗原価のトレードオフ）",
            "ライフサイクル・コスティング（LCC：企画設計から廃棄までのトータルコスト管理）",
            "原価企画（ターゲット・コスティング・許容原価と成行原価・VE価値工学）",
            "原価維持と原価改善（カイゼン・コスティング）・バックフラッシュ・コスティング（JIT会計）",
            "スループット会計（制約理論TOC・スループット・投資・業務費用）",
            "事業部制会計（投資利益率ROI・残余利益RI・内部振替価格の設定基準）"
        ]
    },
    itpass: {
        "ストラテジ系": [
            "企業活動と経営組織（経営理念・CSR・SDGs・コーポレートガバナンス・BCP）",
            "会計・財務の基礎（損益計算書・貸借対照表・キャッシュフロー・損益分岐点計算）",
            "知的財産権とセキュリティ関連法規（著作権・産業財産権・不正アクセス禁止法・個人情報保護法）",
            "労働関連法規・取引関連法規（労働基準法・労働者派遣法・請負と委任・下請法・PL法）",
            "標準化とコンプライアンス（ISO・JIS・デファクトスタンダード・グリーンIT）",
            "経営戦略手法（SWOT分析・PPM・3C・ファイブフォース・ブルーオーシャン・マーケティング）",
            "技術戦略とビジネスシステム（イノベーション・ロードマップ・SCM・CRM・ERP・EC・FinTech）",
            "システム戦略とシステム企画（EA・BPR・DX・AI利活用・クラウド調達・RFI/RFP）"
        ],
        "マネジメント系": [
            "システム開発技術（要件定義・システム設計・プログラミング・単体/結合/システムテスト）",
            "開発プロセス・手法（ウォーターフォール・プロトタイピング・アジャイル開発・スクラム・DevOps）",
            "プロジェクトマネジメント（PMBOK・スコープ・WBS・スケジュール・アローダイアグラム・クリティカルパス）",
            "プロジェクトのコスト・品質・リスク・調達・ステークホルダーマネジメント",
            "サービスマネジメント（ITIL・SLA・インシデント管理・問題管理・変更管理・可用性管理）",
            "ファシリティマネジメント（データセンター・UPS・自家発電・空調・入退室管理）",
            "システム監査（監査人の独立性・監査計画・監査手続・監査証拠・監査報告とフォローアップ）",
            "内部統制とITガバナンス（業務処理統制・IT全般統制・モニタリング・職務分掌）"
        ],
        "テクノロジ系": [
            "基礎理論（2進数・基数変換・集合と論理演算・確率統計・AI機械学習とディープラーニング）",
            "アルゴリズムとプログラミング（データ構造・探索と整列・擬似言語トレース・Web技術HTML/CSS/JS）",
            "コンピュータ構成要素（CPUの動作とクロック・メモリ階層とキャッシュ・SSD/HDD・入出力インタフェース）",
            "システム構成要素（クライアントサーバ・仮想化・RAID・デュプレックス/デュアル・稼働率計算）",
            "ソフトウェアとOS（OSの役割・ファイル管理・OSSライセンス・オフィスツール表計算関数）",
            "データベース（関係データベース・主キーと外部キー・正規化・E-R図・SQL操作・排他制御とロールバック）",
            "ネットワーク（LANとWAN・OSI基本参照モデル・TCP/IP・IPアドレスとDNS・DHCP・NAT・無線LAN規格）",
            "情報セキュリティ（CIA機密性/完全性/可用性・暗号方式と公開鍵基盤PKI・デジタル署名・多要素認証・マルウェアとファイアウォール/WAF）"
        ]
    },
    takken: {
        "権利関係": [
            "制限行為能力者・意思表示（心裡留保・虚偽表示・錯誤・詐欺・強迫）・代理（無権代理・表見代理）",
            "時効（取得時効・消滅時効の更新と完成猶予）・物権変動（対抗要件・登記と第三者）",
            "担保物権（抵当権・根抵当権・法定地上権・留置権・先取特権・質権）と共有",
            "債権総論（連帯債務・保証債務・債権譲渡・相殺・債務不履行と解除・危険負担）",
            "売買（手付・契約不適合責任）・賃貸借（敷金・修繕・転貸借）・請負・委任・不法行為",
            "相続（法定相続分・遺留分・配偶者居住権・遺言・遺産分割の効力）",
            "借地借家法：借地（普通借地権の存続期間・更新・建物買取請求権・定期借地権3類型）",
            "借地借家法：借家（対抗要件・更新拒絶と正当事由・造作買取・定期建物賃貸借）・区分所有法・不動産登記法"
        ],
        "宅建業法": [
            "宅建業の定義・免許制度（免許権者・免許換え・欠格事由・廃業届・名簿登載事項の変更）",
            "宅地建物取引士（登録・欠格事由・宅建士証の交付と更新・専任の宅建士の設置義務）",
            "営業保証金制度と弁済業務保証金制度（供託額・分担金・還付・取戻し・保管替え）",
            "事務所・案内所等の規制（標識の掲示・帳簿の備付け・従業者名簿・従業者証明書・クーリング・オフ）",
            "媒介契約規制（一般・専任・専属専任媒介契約の有効期間・指定流通機構レインズ・業務処理状況報告）",
            "広告の開始時期・誇大広告の禁止・取引態様の明示・不当な履行遅延や守秘義務等の業務上の規制",
            "重要事項説明書（35条書面：対象事項・IT重説・交付と説明義務）と契約締結時書面（37条書面：必要的記載事項）",
            "自ら売主制限（8種制限：手付金等の保全措置・手付額の制限・損害賠償予定額・契約不適合責任特約）・報酬額の制限・監督罰則・住宅瑕疵担保履行法"
        ],
        "法令上の制限": [
            "都市計画法：都市計画区域・区域区分（市街化区域・市街化調整区域）・地域地区（用途地域等）",
            "都市計画法：開発許可制度（開発行為の定義・許可不要の例外・33条基準・34条立地基準・建築制限）",
            "建築基準法：単体規定・集団規定（道路と接道義務・用途制限・建ぺい率・容積率の緩和と前面道路制限）",
            "建築基準法：高さ制限（斜線制限・日影規制）・防火地域と準防火地域・建築確認と建築協定",
            "国土利用計画法（事後届出制・事前届出制の面積要件・契約当事者と届出期限・勧告）",
            "農地法（3条許可・4条許可・5条許可の許可権者と市街化区域内農地の特例）",
            "宅地造成及び特定盛土等規制法（盛土規制法：規制区域・工事の許可と届出・標識掲示）",
            "土地区画整理法（仮換地の指定・建築行為等の制限・換地処分と精算金）・その他の法令制限"
        ],
        "税・その他": [
            "不動産取得税（課税主体・課税標準の特例・住宅および住宅用土地の軽減措置・免税点）",
            "固定資産税（賦課期日・納税義務者・住宅用地の課税標準の特例・新築住宅の税額軽減）",
            "所得税（不動産譲渡所得・居住用財産の3,000万円特別控除・軽減税率・買換え特例・住宅ローン控除）",
            "印紙税（課税文書・記載金額・契約変更書・国等との契約）・登録免許税・贈与税の特例",
            "地価公示法（公示価格の効力・標準地の選定・鑑定評価）と不動産鑑定評価基準（原価法・取引事例比較法・収益還元法）",
            "独立行政法人住宅金融支援機構法（証券化支援業務【買取型・保証型】・直接融資業務）",
            "不当景品類及び不当表示防止法（不動産の表示に関する公正競争規約・徒歩所要時間・新築の定義・おとり広告）",
            "土地・建物の基礎知識（地形と地盤・鉄骨造と鉄筋コンクリート造・耐震/免震/制震）と不動産統計データ"
        ]
    }
};

// Changelog Data (v1.00 - v2.20)
const CHANGELOG_DATA = [
    {
        version: "v2.20",
        date: "2026/11/11",
        tag: "最新・3階層シラバス＆学習現在地マップ",
        latest: true,
        items: [
            "📚 全7資格・38出題分野をさらに細分化した「3階層シラバス（資格 ＞ 出題分野 ＞ 小分類・重要論点）」を搭載（例：診断士の経営情報システムをハード・DB・ネットワーク・開発・セキュリティ・法規等9論点に細分化し、特定テーマへの出題偏りを完全解消）",
            "🎲 3つのスマート出題モード（『🗺️ 未学習・手薄な論点を優先（網羅モード）』『🎯 苦手・誤答が多い論点を優先（弱点特化モード）』『🎲 分野内から完全ランダム（直近5問の重複排除）』）＋個別論点のピンポイント指定に対応",
            "⏭️ 「どうスキップするか」を選べる2種類のインテリジェント・スキップボタン（『⏭️ 別テーマへスキップ（この論点を除外）』と『🔄 同じ論点で別問題に切替』）を搭載",
            "🗺️ テキストなしでも「どこまで学習したか」が一目でわかる「シラバス網羅マップ（塗りつぶし機能）」を搭載（⬜未学習・🟨学習中・🟥要復習・🟩マスター済の4段階カラータイル表示＆クリックで即座にその論点を出題）",
            "🎯 正答・誤答の傾向分析＆特化すべき重点項目パネルを搭載（苦手・要注意の小分類ランキングTop 5、4択 vs 記述・計算 vs 理論の得点傾向診断、未着手論点のレコメンドをAPI消費ゼロで即時分析）"
        ]
    },
    {
        version: "v2.1.2",
        date: "2026/11/06",
        tag: "API安定化＆取得マニュアル搭載",
        latest: false,
        items: [
            "🔧 短時間のリクエスト集中時に「404エラー」が頻発する不具合を修正（1番目のモデルが429レート制限に達した際、提供終了の旧フォールバックモデルの404エラーで上書きされ自動リトライが止まっていた問題を解消）",
            "⚡ 全AIエンジンの使用モデルリストを最新・安定稼働版へ更新し、レート制限(429)発生時のクールダウン待機および先読み通信の衝突防止ディレイを導入",
            "📖 アプリ内に「無料APIキー取得＆『本当に無料か』確認マニュアル」（英語画面の読み方・Groq/Geminiの無料プラン確認手順・OpenRouterの404防止Privacy設定ガイド）を搭載（ヘッダーの📖ボタンまたは⚙️設定画面からいつでも閲覧可能）"
        ]
    },
    {
        version: "v2.1.1",
        date: "2026/11/06",
        tag: "UI表示改善",
        latest: false,
        items: [
            "📊 成績・統計ダッシュボード画面のディスプレイ解像度適応＆マウスホイールスクロール対応（ヘッダー固定＋内部スクロール構造化により、ノートPCや高倍率スケーリング環境でも下部ボタンが見切れずスムーズにスクロール・操作可能に改善）",
            "実績サマリー（総出題数・総合正答率・本日の学習時間）の3カラム1行レイアウト化とグラフ高さの自動調整（clamp）により、標準ディスプレイで拡大縮小なしに一画面で全体を見渡せるよう最適化",
            "全モーダルウィンドウのキーボード（Escキー）閉じる操作およびスクロール位置自動リセットに対応"
        ]
    },
    {
        version: "v2.10",
        date: "2026/11/05",
        tag: "学習ノート強化",
        latest: false,
        items: [
            "⭐ ブックマーク（良問・解説ストック）機能を搭載（正解・不正解を問わず良問や重要解説をワンタップ保存、資格別フィルタ・解説即時閲覧・ブックマーク演習に対応）",
            "💬 AI専門講師チャットの自動記録＆復元機能（質問・回答履歴を問題データと紐づけて自動保存し、ブックマークや復習モードでいつでも再確認可能）",
            "📋 チャット文章・図表のワンクリック保存（各AI回答ごとの「コピー」「MD保存」ボタン、および問題・解説・全チャットを統合した「ノート全文コピー」「Markdown保存(.md)」を搭載）",
            "🖨️ PDF保存・印刷時のAIチャット領域見切れを完全修正（スクロール枠を全展開し、問題・解説・AI講師質疑応答・図表を途切れず一括PDF化）",
            "💾 学習データの外部バックアップ＆復元（JSONエクスポート／インポート）機能を搭載（GoogleドライブやiCloud等への外部保管・端末間移行に対応）"
        ]
    },
    {
        version: "v2.0.1",
        date: "2026/11/01",
        tag: "解説改善",
        latest: false,
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
let isBookmarkMode = false;
let stats = JSON.parse(localStorage.getItem('quagenius_stats')) || { total: 0, correct: 0, categories: {} };
if (!stats.dailyHistory) {
    stats.dailyHistory = {};
}
if (!stats.subtopics) {
    stats.subtopics = {};
}
if (!stats.formatStats) {
    stats.formatStats = {
        choice: { total: 0, correct: 0 },
        input: { total: 0, correct: 0 },
        calc: { total: 0, correct: 0 },
        theory: { total: 0, correct: 0 }
    };
}
let mistakes = JSON.parse(localStorage.getItem('quagenius_mistakes')) || [];
let bookmarks = JSON.parse(localStorage.getItem('quagenius_bookmarks')) || [];
let nextQuizPromise = null;
let prefetchTimer = null;
let recentSubtopics = [];

// Learning Tracking, TTS & AI Tutor State
let sessionSeconds = 0;
let isSpeaking = false;
let currentTutorHistory = [];
let isTutorLoading = false;

// DOM Elements
const settingsBtn = document.getElementById('settingsBtn');
const statsBtn = document.getElementById('statsBtn');
const syllabusHeaderBtn = document.getElementById('syllabusHeaderBtn');
const bookmarksHeaderBtn = document.getElementById('bookmarksHeaderBtn');
const apiGuideHeaderBtn = document.getElementById('apiGuideHeaderBtn');
const openApiGuideBtn = document.getElementById('openApiGuideBtn');
const apiModal = document.getElementById('apiModal');
const closeApiModalBtn = document.getElementById('closeApiModalBtn');
const apiGuideModal = document.getElementById('apiGuideModal');
const closeApiGuideBtn = document.getElementById('closeApiGuideBtn');
const closeApiGuideFooterBtn = document.getElementById('closeApiGuideFooterBtn');
const statsModal = document.getElementById('statsModal');
const versionBadge = document.getElementById('versionBadge');
const changelogModal = document.getElementById('changelogModal');
const closeChangelogBtn = document.getElementById('closeChangelogBtn');
const closeChangelogFooterBtn = document.getElementById('closeChangelogFooterBtn');
const changelogList = document.getElementById('changelogList');

// Syllabus Modal & Coverage Controls (v2.20)
const subtopicSelect = document.getElementById('subtopicSelect');
const syllabusMiniBar = document.getElementById('syllabusMiniBar');
const syllabusMiniText = document.getElementById('syllabusMiniText');
const openSyllabusMapBtn = document.getElementById('openSyllabusMapBtn');
const syllabusMiniTiles = document.getElementById('syllabusMiniTiles');
const subtopicBadge = document.getElementById('subtopicBadge');
const syllabusModal = document.getElementById('syllabusModal');
const closeSyllabusBtn = document.getElementById('closeSyllabusBtn');
const closeSyllabusFooterBtn = document.getElementById('closeSyllabusFooterBtn');
const syllabusExamSelect = document.getElementById('syllabusExamSelect');
const syllabusCategoryFilter = document.getElementById('syllabusCategoryFilter');
const syllabusOverallTitle = document.getElementById('syllabusOverallTitle');
const syllabusOverallPercent = document.getElementById('syllabusOverallPercent');
const syllabusMasteredBar = document.getElementById('syllabusMasteredBar');
const syllabusLearningBar = document.getElementById('syllabusLearningBar');
const syllabusWeakBar = document.getElementById('syllabusWeakBar');
const countMastered = document.getElementById('countMastered');
const countLearning = document.getElementById('countLearning');
const countWeak = document.getElementById('countWeak');
const countUnstudied = document.getElementById('countUnstudied');
const weakSubtopicsList = document.getElementById('weakSubtopicsList');
const formatTendencySummary = document.getElementById('formatTendencySummary');
const unstudiedSubtopicsList = document.getElementById('unstudiedSubtopicsList');
const syllabusMapContainer = document.getElementById('syllabusMapContainer');

// Bookmark Modal & Controls
const bookmarkModal = document.getElementById('bookmarkModal');
const closeBookmarkBtn = document.getElementById('closeBookmarkBtn');
const closeBookmarkFooterBtn = document.getElementById('closeBookmarkFooterBtn');
const bookmarkFilterExam = document.getElementById('bookmarkFilterExam');
const startBookmarkPracticeBtn = document.getElementById('startBookmarkPracticeBtn');
const bookmarkListContainer = document.getElementById('bookmarkListContainer');
const bookmarkModeBtn = document.getElementById('bookmarkModeBtn');
const bookmarkCountSpan = document.getElementById('bookmarkCount');
const bookmarkToggleBtn = document.getElementById('bookmarkToggleBtn');

// Backup & Restore Controls
const exportDataBtn = document.getElementById('exportDataBtn');
const importDataBtn = document.getElementById('importDataBtn');
const importDataInput = document.getElementById('importDataInput');

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
const skipSameTopicBtn = document.getElementById('skipSameTopicBtn');
const skipSameTopicBtnText = skipSameTopicBtn ? skipSameTopicBtn.querySelector('.btn-text') : null;
const skipSameTopicBtnSpinner = skipSameTopicBtn ? skipSameTopicBtn.querySelector('.spinner') : null;

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
const copyTutorNoteBtn = document.getElementById('copyTutorNoteBtn');
const downloadTutorMdBtn = document.getElementById('downloadTutorMdBtn');

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
    updateBookmarkBtnState();

    // Event Listeners
    settingsBtn.addEventListener('click', () => apiModal.classList.remove('hidden'));
    if (closeApiModalBtn) {
        closeApiModalBtn.addEventListener('click', () => apiModal.classList.add('hidden'));
    }

    const openApiGuide = () => {
        if (!apiGuideModal) return;
        apiGuideModal.classList.remove('hidden');
        const guideBody = apiGuideModal.querySelector('.stats-modal-body');
        if (guideBody) guideBody.scrollTop = 0;
    };
    if (apiGuideHeaderBtn) {
        apiGuideHeaderBtn.addEventListener('click', openApiGuide);
    }
    if (openApiGuideBtn) {
        openApiGuideBtn.addEventListener('click', openApiGuide);
    }
    if (closeApiGuideBtn) {
        closeApiGuideBtn.addEventListener('click', () => apiGuideModal.classList.add('hidden'));
    }
    if (closeApiGuideFooterBtn) {
        closeApiGuideFooterBtn.addEventListener('click', () => apiGuideModal.classList.add('hidden'));
    }
    if (apiGuideModal) {
        apiGuideModal.addEventListener('click', (e) => {
            if (e.target === apiGuideModal) apiGuideModal.classList.add('hidden');
        });
    }

    statsBtn.addEventListener('click', () => {
        renderStats();
        statsModal.classList.remove('hidden');
        const statsBody = statsModal.querySelector('.stats-modal-body');
        if (statsBody) statsBody.scrollTop = 0;
    });

    document.getElementById('closeStatsBtn').addEventListener('click', () => statsModal.classList.add('hidden'));

    // シラバス網羅マップ＆傾向分析モーダルのリスナー (v2.20)
    const handleOpenSyllabus = () => openSyllabusModal();
    if (syllabusHeaderBtn) {
        syllabusHeaderBtn.addEventListener('click', handleOpenSyllabus);
    }
    if (openSyllabusMapBtn) {
        openSyllabusMapBtn.addEventListener('click', handleOpenSyllabus);
    }
    if (closeSyllabusBtn) {
        closeSyllabusBtn.addEventListener('click', () => syllabusModal.classList.add('hidden'));
    }
    if (closeSyllabusFooterBtn) {
        closeSyllabusFooterBtn.addEventListener('click', () => syllabusModal.classList.add('hidden'));
    }
    if (syllabusModal) {
        syllabusModal.addEventListener('click', (e) => {
            if (e.target === syllabusModal) syllabusModal.classList.add('hidden');
        });
    }
    if (syllabusExamSelect) {
        syllabusExamSelect.addEventListener('change', () => {
            populateSyllabusCategoryFilter(syllabusExamSelect.value);
            renderSyllabusModal();
        });
    }
    if (syllabusCategoryFilter) {
        syllabusCategoryFilter.addEventListener('change', () => {
            renderSyllabusModal();
        });
    }

    // Escキーで開いているモーダルを閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            [syllabusModal, apiGuideModal, statsModal, bookmarkModal, changelogModal, apiModal].forEach(m => {
                if (m && !m.classList.contains('hidden')) {
                    m.classList.add('hidden');
                }
            });
        }
    });

    // Bookmark Modal & Action Listeners
    if (bookmarksHeaderBtn) {
        bookmarksHeaderBtn.addEventListener('click', openBookmarkModal);
    }
    if (bookmarkModeBtn) {
        bookmarkModeBtn.addEventListener('click', openBookmarkModal);
    }
    if (closeBookmarkBtn) {
        closeBookmarkBtn.addEventListener('click', () => bookmarkModal.classList.add('hidden'));
    }
    if (closeBookmarkFooterBtn) {
        closeBookmarkFooterBtn.addEventListener('click', () => bookmarkModal.classList.add('hidden'));
    }
    if (bookmarkModal) {
        bookmarkModal.addEventListener('click', (e) => {
            if (e.target === bookmarkModal) bookmarkModal.classList.add('hidden');
        });
    }
    if (bookmarkFilterExam) {
        bookmarkFilterExam.addEventListener('change', renderBookmarkList);
    }
    if (startBookmarkPracticeBtn) {
        startBookmarkPracticeBtn.addEventListener('click', startBookmarkPractice);
    }
    if (bookmarkToggleBtn) {
        bookmarkToggleBtn.addEventListener('click', toggleCurrentQuizBookmark);
    }

    // Study Note Export Listeners (AI Tutor Toolbar)
    if (copyTutorNoteBtn) {
        copyTutorNoteBtn.addEventListener('click', copyStudyNoteToClipboard);
    }
    if (downloadTutorMdBtn) {
        downloadTutorMdBtn.addEventListener('click', downloadStudyNoteMarkdown);
    }

    // Backup & Restore Listeners
    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', exportAllData);
    }
    if (importDataBtn && importDataInput) {
        importDataBtn.addEventListener('click', () => importDataInput.click());
        importDataInput.addEventListener('change', (e) => {
            const file = e.target.files && e.target.files[0];
            if (file) {
                importAllData(file);
                importDataInput.value = '';
            }
        });
    }
    
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
        if(confirm('今までの統計データ（シラバス網羅状況を含む）と「間違えた問題ストック」をリセットしますか？\n（※保存済みのブックマークは保持されます）')) {
            stats = {
                total: 0,
                correct: 0,
                categories: {},
                dailyHistory: {},
                subtopics: {},
                formatStats: {
                    choice: { total: 0, correct: 0 },
                    input: { total: 0, correct: 0 },
                    calc: { total: 0, correct: 0 },
                    theory: { total: 0, correct: 0 }
                }
            };
            mistakes = [];
            localStorage.setItem('quagenius_stats', JSON.stringify(stats));
            localStorage.setItem('quagenius_mistakes', JSON.stringify(mistakes));
            renderStats();
            updateSubtopicsUI();
            renderSyllabusMiniBar();
            updateReviewBtnState();
            showToast('統計データと復習ストックをリセットしました');
        }
    });

    saveApiBtn.addEventListener('click', saveApiSettings);
    examSelect.addEventListener('change', () => {
        updateCategories();
        cancelBackgroundPrefetch();
    });
    categorySelect.addEventListener('change', () => {
        currentCategory = categorySelect.value;
        updateSubtopicsUI();
        renderSyllabusMiniBar();
        cancelBackgroundPrefetch();
    });
    if (subtopicSelect) {
        subtopicSelect.addEventListener('change', () => {
            renderSyllabusMiniBar();
            cancelBackgroundPrefetch();
        });
    }
    if (formatSelect) {
        formatSelect.addEventListener('change', () => {
            cancelBackgroundPrefetch();
        });
    }
    calcOptionCheckbox.addEventListener('change', () => {
        cancelBackgroundPrefetch();
    });
    if (searchGroundingCheckbox) {
        searchGroundingCheckbox.addEventListener('change', () => {
            cancelBackgroundPrefetch();
        });
    }
    
    // 初回生成ボタン
    generateBtn.addEventListener('click', async () => {
        stopSpeaking(); // 音声を停止
        cancelBackgroundPrefetch();
        isReviewMode = false;
        isBookmarkMode = false;
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
        cancelBackgroundPrefetch();
        if (mistakes.length === 0) return;
        isReviewMode = true;
        isBookmarkMode = false;
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
        if (isBookmarkMode) {
            startBookmarkPractice();
            return;
        }

        if (prefetchTimer) {
            clearTimeout(prefetchTimer);
            prefetchTimer = null;
        }
        if (!nextQuizPromise) {
            nextQuizPromise = fetchQuizData();
        }

        setNextBtnLoading(true);
        try {
            const data = await nextQuizPromise;
            nextQuizPromise = null;
            resultSection.classList.add('hidden');
            quizSection.classList.add('hidden');
            displayQuiz(data);
        } catch (e) {
            console.error('[QuaGenius Next Error]', e);
            showToast(formatUserErrorMessage(e));
            nextQuizPromise = null;
        } finally {
            setNextBtnLoading(false);
        }
    });

    // 「⏭️ 別テーマへスキップ（この論点を除外）」ボタン
    skipBtn.addEventListener('click', async () => {
        stopSpeaking(); // 音声を停止
        cancelBackgroundPrefetch();
        if (isReviewMode) {
            reviewBtn.click();
            return;
        }
        if (isBookmarkMode) {
            startBookmarkPractice();
            return;
        }

        const excludedSub = currentQuiz && currentQuiz.subtopic ? currentQuiz.subtopic : null;
        // もし個別論点ピンポイント選択中に「別テーマへスキップ」が押された場合は、別の論点も選べるよう一旦除外指定を渡す
        skipBtn.disabled = true;
        if (skipSameTopicBtn) skipSameTopicBtn.disabled = true;
        skipBtnText.classList.add('hidden');
        skipBtnSpinner.classList.remove('hidden');

        try {
            const data = await fetchQuizData({
                excludeSubtopic: excludedSub,
                avoidQuestionText: currentQuiz ? currentQuiz.question : null
            });
            resultSection.classList.add('hidden');
            displayQuiz(data);
            if (excludedSub && data.subtopic && data.subtopic !== excludedSub) {
                showToast(`⏭️ 「${data.subtopic}」へテーマを切り替えました`);
            }
        } catch (e) {
            console.error('[QuaGenius Skip Error]', e);
            showToast(formatUserErrorMessage(e));
        } finally {
            skipBtn.disabled = false;
            if (skipSameTopicBtn) skipSameTopicBtn.disabled = false;
            skipBtnText.classList.remove('hidden');
            skipBtnSpinner.classList.add('hidden');
        }
    });

    // 「🔄 同じ論点で別問題に切替」ボタン (v2.20)
    if (skipSameTopicBtn) {
        skipSameTopicBtn.addEventListener('click', async () => {
            stopSpeaking();
            cancelBackgroundPrefetch();
            if (isReviewMode) {
                reviewBtn.click();
                return;
            }
            if (isBookmarkMode) {
                startBookmarkPractice();
                return;
            }

            const targetSub = currentQuiz && currentQuiz.subtopic ? currentQuiz.subtopic : null;
            skipSameTopicBtn.disabled = true;
            skipBtn.disabled = true;
            if (skipSameTopicBtnText) skipSameTopicBtnText.classList.add('hidden');
            if (skipSameTopicBtnSpinner) skipSameTopicBtnSpinner.classList.remove('hidden');

            try {
                const data = await fetchQuizData({
                    forceSubtopic: targetSub,
                    avoidQuestionText: currentQuiz ? currentQuiz.question : null
                });
                resultSection.classList.add('hidden');
                displayQuiz(data);
                if (data.subtopic) {
                    showToast(`🔄 「${data.subtopic}」の別パターンの問題に切り替えました`);
                }
            } catch (e) {
                console.error('[QuaGenius Skip Same Topic Error]', e);
                showToast(formatUserErrorMessage(e));
            } finally {
                skipSameTopicBtn.disabled = false;
                skipBtn.disabled = false;
                if (skipSameTopicBtnText) skipSameTopicBtnText.classList.remove('hidden');
                if (skipSameTopicBtnSpinner) skipSameTopicBtnSpinner.classList.add('hidden');
            }
        });
    }

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

function updateBookmarkBtnState() {
    if (bookmarkCountSpan) {
        bookmarkCountSpan.textContent = bookmarks.length;
    }
    if (bookmarkModeBtn) {
        bookmarkModeBtn.disabled = false; // 一覧モーダルを開けるよう常に有効化
    }
    updateBookmarkToggleUI();
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
    currentCategory = categorySelect.value;

    // 資格ごとの出題形式表示の更新
    updateFormatSelectUI();
    // 小分類（論点）リストとミニ進捗バーの更新 (v2.20)
    updateSubtopicsUI();
    renderSyllabusMiniBar();
}

// ==========================================================================
// v2.20: 3階層シラバス管理・小分類スマート抽選・ミニ進捗バー
// ==========================================================================

function getSubtopicsForCategory(exam, category) {
    if (SYLLABUS_DATA[exam] && Array.isArray(SYLLABUS_DATA[exam][category])) {
        return SYLLABUS_DATA[exam][category];
    }
    return [];
}

function getSubtopicKey(exam, category, subtopic) {
    return `${exam}::${category}::${subtopic}`;
}

function getSubtopicRecord(exam, category, subtopic) {
    if (!stats.subtopics) stats.subtopics = {};
    const key = getSubtopicKey(exam, category, subtopic);
    return stats.subtopics[key] || { total: 0, correct: 0, lastAt: null };
}

// 4段階ステータス判定: 'unstudied' (⬜未学習) | 'learning' (🟨学習中) | 'weak' (🟥要復習) | 'mastered' (🟩マスター済)
function getSubtopicState(exam, category, subtopic) {
    const rec = getSubtopicRecord(exam, category, subtopic);
    if (!rec || rec.total === 0) return 'unstudied';
    const acc = (rec.correct / rec.total) * 100;
    if (acc < 50) return 'weak';
    if (rec.total >= 2 && acc >= 80) return 'mastered';
    return 'learning';
}

function getSubtopicStateSymbol(state) {
    if (state === 'mastered') return '🟩';
    if (state === 'weak') return '🟥';
    if (state === 'learning') return '🟨';
    return '⬜';
}

function updateSubtopicsUI(preserveSelection = false) {
    if (!subtopicSelect) return;
    const prevValue = preserveSelection ? subtopicSelect.value : 'mode_coverage';
    const exam = examSelect.value;
    const category = categorySelect.value;
    const subtopics = getSubtopicsForCategory(exam, category);

    subtopicSelect.innerHTML = '';

    const modeOptions = [
        { value: 'mode_coverage', text: '🗺️ おまかせ：未学習・手薄な論点を優先（網羅モード）' },
        { value: 'mode_weak', text: '🎯 おまかせ：苦手・誤答が多い論点を優先（弱点特化モード）' },
        { value: 'mode_random', text: '🎲 おまかせ：分野内から完全ランダム（重複回避）' }
    ];
    modeOptions.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.value;
        opt.textContent = m.text;
        subtopicSelect.appendChild(opt);
    });

    if (subtopics.length > 0) {
        const sep = document.createElement('option');
        sep.disabled = true;
        sep.textContent = '──────── 📌 個別の小分類（重要論点）を指定 ────────';
        subtopicSelect.appendChild(sep);

        subtopics.forEach((sub, idx) => {
            const rec = getSubtopicRecord(exam, category, sub);
            const state = getSubtopicState(exam, category, sub);
            const sym = getSubtopicStateSymbol(state);
            const statSuffix = rec.total > 0
                ? ` (${Math.round((rec.correct / rec.total) * 100)}% - ${rec.correct}/${rec.total}問)`
                : ' (未学習)';
            const opt = document.createElement('option');
            opt.value = `subtopic::${idx}`;
            opt.textContent = `${sym} ${idx + 1}. ${sub}${statSuffix}`;
            subtopicSelect.appendChild(opt);
        });
    }

    const canRestore = Array.from(subtopicSelect.options).some(o => o.value === prevValue && !o.disabled);
    subtopicSelect.value = canRestore ? prevValue : 'mode_coverage';
}

function renderSyllabusMiniBar() {
    if (!syllabusMiniBar || !syllabusMiniText || !syllabusMiniTiles) return;
    const exam = examSelect.value;
    const category = categorySelect.value;
    const subtopics = getSubtopicsForCategory(exam, category);

    if (subtopics.length === 0) {
        syllabusMiniBar.classList.add('hidden');
        return;
    }
    syllabusMiniBar.classList.remove('hidden');

    let touchedCount = 0;
    let masteredCount = 0;
    syllabusMiniTiles.innerHTML = '';

    const selectedVal = subtopicSelect ? subtopicSelect.value : 'mode_coverage';

    subtopics.forEach((sub, idx) => {
        const state = getSubtopicState(exam, category, sub);
        const rec = getSubtopicRecord(exam, category, sub);
        if (state !== 'unstudied') touchedCount++;
        if (state === 'mastered') masteredCount++;

        const tile = document.createElement('span');
        const isCurrentSelected = selectedVal === `subtopic::${idx}`;
        tile.className = `mini-tile state-${state}${isCurrentSelected ? ' active-selected' : ''}`;
        const accText = rec.total > 0 ? `正答率 ${Math.round((rec.correct / rec.total) * 100)}% (${rec.correct}/${rec.total}問)` : '未学習 (クリックでこの論点を選択)';
        tile.title = `${idx + 1}. ${sub} — ${accText}`;
        tile.addEventListener('click', () => {
            if (subtopicSelect) {
                subtopicSelect.value = `subtopic::${idx}`;
                renderSyllabusMiniBar();
                cancelBackgroundPrefetch();
                showToast(`📌 出題論点を「${sub}」に設定しました`);
            }
        });
        syllabusMiniTiles.appendChild(tile);
    });

    const pct = Math.round((touchedCount / subtopics.length) * 100);
    syllabusMiniText.textContent = `📊 この分野の網羅率: ${touchedCount}/${subtopics.length}論点 (${pct}%) ｜ 🟩マスター: ${masteredCount}`;
}

function pickSubtopicForQuiz(exam, category, options = {}) {
    const { excludeSubtopic = null, forceSubtopic = null } = options;
    const subtopics = getSubtopicsForCategory(exam, category);
    if (subtopics.length === 0) return '';

    if (forceSubtopic && subtopics.includes(forceSubtopic)) {
        return forceSubtopic;
    }

    const modeOrVal = subtopicSelect ? subtopicSelect.value : 'mode_coverage';

    // 個別の小分類がピンポイント指定されている場合（ただし「別テーマへスキップ」でその論点がexcludeされた場合は他から選ぶ）
    if (modeOrVal && modeOrVal.startsWith('subtopic::')) {
        const idx = parseInt(modeOrVal.split('::')[1], 10);
        const manualSub = subtopics[idx];
        if (manualSub && manualSub !== excludeSubtopic) {
            return manualSub;
        }
    }

    // 候補リストからまず excludeSubtopic と直近出題された recentSubtopics を除外して重複を防ぐ
    let pool = subtopics.filter(s => s !== excludeSubtopic);
    if (pool.length === 0) pool = [...subtopics];

    const nonRecentPool = pool.filter(s => !recentSubtopics.includes(s));
    const candidatePool = nonRecentPool.length > 0 ? nonRecentPool : pool;

    if (modeOrVal === 'mode_weak') {
        // 🎯 弱点特化モード: 要復習(weak: 正答率<50%) > 学習中(正答率が低い順) > 未学習
        const weakList = candidatePool.filter(s => getSubtopicState(exam, category, s) === 'weak');
        if (weakList.length > 0) {
            return weakList[Math.floor(Math.random() * weakList.length)];
        }
        const learningList = candidatePool
            .filter(s => getSubtopicState(exam, category, s) === 'learning')
            .sort((a, b) => {
                const ra = getSubtopicRecord(exam, category, a);
                const rb = getSubtopicRecord(exam, category, b);
                return (ra.correct / ra.total) - (rb.correct / rb.total);
            });
        if (learningList.length > 0) {
            return learningList[0];
        }
        const unstudiedList = candidatePool.filter(s => getSubtopicState(exam, category, s) === 'unstudied');
        if (unstudiedList.length > 0) {
            return unstudiedList[Math.floor(Math.random() * unstudiedList.length)];
        }
    } else if (modeOrVal === 'mode_coverage') {
        // 🗺️ 網羅優先モード（デフォルト）: 未学習(unstudied) > 要復習(weak) > 回答数が少ない学習中(learning) > マスター済
        const unstudiedList = candidatePool.filter(s => getSubtopicState(exam, category, s) === 'unstudied');
        if (unstudiedList.length > 0) {
            return unstudiedList[Math.floor(Math.random() * unstudiedList.length)];
        }
        const weakList = candidatePool.filter(s => getSubtopicState(exam, category, s) === 'weak');
        if (weakList.length > 0) {
            return weakList[Math.floor(Math.random() * weakList.length)];
        }
        const learningList = candidatePool
            .filter(s => getSubtopicState(exam, category, s) === 'learning')
            .sort((a, b) => getSubtopicRecord(exam, category, a).total - getSubtopicRecord(exam, category, b).total);
        if (learningList.length > 0) {
            return learningList[0];
        }
    }

    // 🎲 完全ランダムモード（またはフォールバック）: 直近履歴を除いた候補から均等抽選
    return candidatePool[Math.floor(Math.random() * candidatePool.length)];
}

function recordRecentSubtopic(subtopic) {
    if (!subtopic) return;
    recentSubtopics = recentSubtopics.filter(s => s !== subtopic);
    recentSubtopics.push(subtopic);
    if (recentSubtopics.length > 5) {
        recentSubtopics.shift();
    }
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

function cancelBackgroundPrefetch() {
    if (prefetchTimer) {
        clearTimeout(prefetchTimer);
        prefetchTimer = null;
    }
    nextQuizPromise = null;
}

function scheduleBackgroundPrefetch() {
    cancelBackgroundPrefetch();
    // 解答直後のAI講師質問や連続操作とAPIリクエストが衝突して429レート制限になるのを防ぐため1.8秒遅延させる
    prefetchTimer = setTimeout(() => {
        prefetchTimer = null;
        if (!isReviewMode && !isBookmarkMode) {
            nextQuizPromise = fetchQuizData({ isPrefetch: true }).catch(e => {
                console.warn('Background prefetch skipped/failed:', e.message);
                nextQuizPromise = null;
            });
        }
    }, 1800);
}

async function fetchQuizData(fetchOptions = {}) {
    const {
        isPrefetch = false,
        excludeSubtopic = null,
        forceSubtopic = null,
        avoidQuestionText = null
    } = fetchOptions;
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

    // v2.20: 今回の出題対象となる小分類（重要論点）を決定し、直近履歴に記録
    const targetSubtopic = pickSubtopicForQuiz(currentExam, currentCategory, { excludeSubtopic, forceSubtopic });
    const excludedRecentList = recentSubtopics.filter(s => s && s !== targetSubtopic);
    if (excludeSubtopic && excludeSubtopic !== targetSubtopic && !excludedRecentList.includes(excludeSubtopic)) {
        excludedRecentList.push(excludeSubtopic);
    }
    recordRecentSubtopic(targetSubtopic);

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

    let subtopicInstruction = '';
    if (targetSubtopic) {
        subtopicInstruction = `\n【今回の重点出題テーマ（小分類・論点）】\n・必ず「${currentCategory}」分野のうち、『${targetSubtopic}』に焦点を当てた具体的な問題を作成してください。`;
        if (excludedRecentList.length > 0) {
            subtopicInstruction += `\n・【重要：出題テーマの重複排除】直近で出題済みのテーマ（${excludedRecentList.map(s => `『${s}』`).join('、')}）に偏らないよう、今回は必ず『${targetSubtopic}』の固有の知識・論点から出題してください。`;
        }
        if (avoidQuestionText) {
            const shortAvoid = avoidQuestionText.replace(/\s+/g, ' ').slice(0, 90);
            subtopicInstruction += `\n・【別パターン出題指示】直前の問題（「${shortAvoid}...」）がスキップされたため、同じ切り口や同一の事例・数値は避け、異なる角度・別の重要条文・別の計算パターンから新しく作問してください。`;
        }
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
${subtopicInstruction}

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
    // バックグラウンド先読み(isPrefetch)時はAPI枠を浪費しないようリトライ回数を0〜1回に抑える
    const initialRetries = isPrefetch ? 0 : 2;
    const fetchWithRetry = async (fetcher, retries = initialRetries, attempt = 1) => {
        try {
            return await fetcher(prompt, apiKey, { useSearchGrounding, selectedFormat, isChoiceOnly });
        } catch (e) {
            const msg = e && e.message ? e.message : '';
            const isNetworkErr = e instanceof TypeError || msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg === 'NETWORK_ERROR';
            const isRetryable = msg === 'RATE_LIMIT' || msg === 'SERVER_OVERLOAD' || msg === 'INVALID_QUIZ_FORMAT' || isNetworkErr;

            if (isRetryable && retries > 0) {
                const waitMs = msg === 'RATE_LIMIT' ? 3000 * attempt : 1500 * attempt;
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

    let quizResult;
    if (engine === 'gemini') {
        quizResult = await fetchWithRetry(fetchGemini);
    } else if (engine === 'groq') {
        quizResult = await fetchWithRetry(fetchGroq);
    } else if (engine === 'openrouter') {
        quizResult = await fetchWithRetry(fetchOpenRouter);
    } else {
        quizResult = await fetchWithRetry(fetchOpenAI);
    }

    if (quizResult && typeof quizResult === 'object') {
        quizResult.subtopic = targetSubtopic || quizResult.subtopic || '';
        quizResult.isCalc = Boolean(isCalcMode);
    }
    return quizResult;
}

// フォールバック中に発生したエラーの優先度判定関数
// （1番目のモデルで発生した429レート制限や503過負荷が、後続の予備モデルの404エラー等で上書きされて消えるのを防ぐ）
function selectPriorityError(prevErr, nextErr) {
    if (!prevErr) return nextErr;
    if (!nextErr) return prevErr;

    const getRank = (err) => {
        const m = (err && err.message) ? err.message : '';
        if (m === 'AUTH_ERROR') return 100;
        if (m === 'OPENROUTER_PRIVACY_404') return 90;
        if (m === 'RATE_LIMIT' || m.includes('429')) return 80;
        if (m === 'SERVER_OVERLOAD' || m.includes('503') || m.includes('502')) return 70;
        if (m === 'INVALID_QUIZ_FORMAT' || m.startsWith('OPENROUTER_PARSE_FAIL:')) return 60;
        return 10; // 404等のモデル個別エラーは最も優先度を低くし、429等を上書きさせない
    };

    return getRank(nextErr) >= getRank(prevErr) ? nextErr : prevErr;
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
    if (msg === 'OPENROUTER_PRIVACY_404') {
        return 'OpenRouterの無料モデル利用設定(Privacy)がOFFのため404が返されました。右上の「📖」マニュアル内のリンクから「Enable free endpoints」をONにしてください。';
    }
    if (msg === 'RATE_LIMIT' || msg.includes('429')) {
        return '短時間のリクエスト集中により無料枠のスピード制限（1分あたりの上限）に達しました。10〜20秒ほど待ってから再度お試しください。';
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
    if (msg.includes('404')) {
        return 'AIモデルが見つからない(404)か、短時間のリクエスト集中により一時制限されています。数秒待って再試行するか、右上の「📖」マニュアルをご確認ください。';
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

    // Gemini マルチモデル・フォールバック（廃止された2.0系を除外し、現行稼働の2.5系2モデルで安定運用）
    const geminiModels = [
        'gemini-2.5-flash',
        'gemini-2.5-flash-lite'
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
                console.warn(`[Gemini] Model ${model} returned HTTP ${response.status}. Trying fallback...`);
                let stepErr;
                if (response.status === 429) {
                    stepErr = new Error('RATE_LIMIT');
                    await new Promise(r => setTimeout(r, 1200)); // 連続リクエスト緩和のクールダウン
                } else if (response.status >= 500) {
                    stepErr = new Error('SERVER_OVERLOAD');
                } else {
                    stepErr = new Error(`Gemini API Error: ${response.status}`);
                }
                lastError = selectPriorityError(lastError, stepErr);
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
            lastError = selectPriorityError(lastError, e);
            console.warn(`[Gemini] Model ${model} failed: ${e.message}`);
        }
    }

    throw lastError || new Error('SERVER_OVERLOAD');
}

async function fetchOpenAI(prompt, apiKey, options = {}) {
    // OpenAI マルチモデル・フォールバック（安定のgpt-4o-miniとgpt-4.1-miniを順次試行）
    const openaiModels = [
        'gpt-4o-mini',
        'gpt-4.1-mini'
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
                let stepErr;
                if (response.status === 429) {
                    stepErr = new Error('RATE_LIMIT');
                    await new Promise(r => setTimeout(r, 1200));
                } else if (response.status >= 500) {
                    stepErr = new Error('SERVER_OVERLOAD');
                } else {
                    stepErr = new Error(`OpenAI API Error: ${response.status}`);
                }
                lastError = selectPriorityError(lastError, stepErr);
                continue;
            }

            const data = await response.json();
            let quiz = validateAndNormalizeQuiz(parseRobustJSON(data?.choices?.[0]?.message?.content), options);
            quiz.exam = currentExam;
            quiz.category = currentCategory;
            return quiz;
        } catch (e) {
            if (e.message === 'AUTH_ERROR') throw e;
            lastError = selectPriorityError(lastError, e);
            console.warn(`[OpenAI] Model ${model} failed: ${e.message}`);
        }
    }

    throw lastError || new Error('SERVER_OVERLOAD');
}

async function fetchGroq(prompt, apiKey, options = {}) {
    // Groq マルチモデル・フォールバック（長期安定稼働のProductionモデル2種を使用）
    const groqModels = [
        'llama-3.3-70b-versatile',
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
                let stepErr;
                if (response.status === 429) {
                    stepErr = new Error('RATE_LIMIT');
                    await new Promise(r => setTimeout(r, 1200));
                } else if (response.status >= 500) {
                    stepErr = new Error('SERVER_OVERLOAD');
                } else {
                    stepErr = new Error(`Groq API Error: ${response.status}`);
                }
                lastError = selectPriorityError(lastError, stepErr);
                continue;
            }

            const data = await response.json();
            let quiz = validateAndNormalizeQuiz(parseRobustJSON(data?.choices?.[0]?.message?.content), options);
            quiz.exam = currentExam;
            quiz.category = currentCategory;
            return quiz;
        } catch (e) {
            if (e.message === 'AUTH_ERROR') throw e;
            lastError = selectPriorityError(lastError, e);
            console.warn(`[Groq] Model ${model} failed: ${e.message}`);
        }
    }

    throw lastError || new Error('SERVER_OVERLOAD');
}

async function fetchOpenRouter(prompt, apiKey, options = {}) {
    // OpenRouterの無料モデルリスト（公式自動ルーター openrouter/free を最優先に現行の無料モデルへフォールバック）
    const freeModels = [
        'openrouter/free',
        'meta-llama/llama-3.3-70b-instruct:free',
        'google/gemma-3-27b-it:free',
        'deepseek/deepseek-r1:free'
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
                let stepErr;
                if (response.status === 429) {
                    stepErr = new Error('RATE_LIMIT');
                    await new Promise(r => setTimeout(r, 1200));
                } else if (response.status === 404 && (errBody.includes('data policy') || errBody.includes('Privacy'))) {
                    stepErr = new Error('OPENROUTER_PRIVACY_404');
                } else if (response.status >= 500) {
                    stepErr = new Error('SERVER_OVERLOAD');
                } else {
                    stepErr = new Error(`HTTP ${response.status}: ${errBody}`);
                }
                lastError = selectPriorityError(lastError, stepErr);
                continue;
            }

            const data = await response.json();

            // エラーオブジェクトが返ってきた場合
            if (data.error) {
                console.warn(`[OpenRouter] API error object:`, data.error);
                const errCode = Number(data.error.code) || 0;
                const errMsg = String(data.error.message || '');
                let stepErr;
                if (errCode === 429 || errMsg.includes('rate') || errMsg.includes('Rate limit')) {
                    stepErr = new Error('RATE_LIMIT');
                } else if (errCode === 404 && (errMsg.includes('data policy') || errMsg.includes('Privacy'))) {
                    stepErr = new Error('OPENROUTER_PRIVACY_404');
                } else {
                    stepErr = new Error(`API Error: ${errMsg || JSON.stringify(data.error)}`);
                }
                lastError = selectPriorityError(lastError, stepErr);
                continue;
            }

            const rawContent = data?.choices?.[0]?.message?.content;
            if (!rawContent || rawContent.trim() === '') {
                console.warn(`[OpenRouter] model ${model} returned empty content`);
                lastError = selectPriorityError(lastError, new Error('INVALID_QUIZ_FORMAT'));
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
                lastError = selectPriorityError(lastError, new Error(`OPENROUTER_PARSE_FAIL: model=${model}, raw=${rawContent.substring(0, 200)}`));
                continue;
            }

        } catch (e) {
            if (e.message === 'AUTH_ERROR') throw e;
            lastError = selectPriorityError(lastError, e);
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
    ensureQuizId(quiz);
    currentQuiz = quiz;
    resetTutorChat(); // 新しい問題に切り替わったらAI家庭教師チャット履歴を初期化
    if (Array.isArray(quiz.tutorHistory) && quiz.tutorHistory.length > 0) {
        restoreTutorChat(quiz.tutorHistory);
    }
    updateBookmarkToggleUI();

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
    if (isReviewMode) {
        engineBadge.textContent = `復習: [${examLabel}] ${quiz.category}`;
    } else if (isBookmarkMode) {
        engineBadge.textContent = `⭐ ブックマーク: [${examLabel}] ${quiz.category}`;
    }

    // 小分類（論点）バッジの表示制御 (v2.20)
    if (subtopicBadge) {
        if (quiz.subtopic) {
            subtopicBadge.textContent = `📌 ${quiz.subtopic}`;
            subtopicBadge.classList.remove('hidden');
        } else {
            subtopicBadge.textContent = '';
            subtopicBadge.classList.add('hidden');
        }
    }

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
    updateBookmarkToggleUI();
    
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // 先読み生成の開始 (復習モード・ブックマーク演習モード以外の場合、1.8秒遅延でリクエスト集中を回避)
    if (!isReviewMode && !isBookmarkMode) {
        scheduleBackgroundPrefetch();
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
    updateBookmarkToggleUI();
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // 先読み生成の開始 (復習モード・ブックマーク演習モード以外の場合、1.8秒遅延でリクエスト集中を回避)
    if (!isReviewMode && !isBookmarkMode) {
        scheduleBackgroundPrefetch();
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
    if (currentQuiz.subtopic) {
        if (!stats.subtopics) stats.subtopics = {};
        const subKey = getSubtopicKey(currentQuiz.exam, currentQuiz.category, currentQuiz.subtopic);
        if (stats.subtopics[subKey]) {
            stats.subtopics[subKey].correct += 1;
        }
    }
    if (!stats.formatStats) {
        stats.formatStats = {
            choice: { total: 0, correct: 0 },
            input: { total: 0, correct: 0 },
            calc: { total: 0, correct: 0 },
            theory: { total: 0, correct: 0 }
        };
    }
    const fmtKey = currentQuiz.type === 'input' ? 'input' : 'choice';
    if (stats.formatStats[fmtKey]) stats.formatStats[fmtKey].correct += 1;
    const calcKey = currentQuiz.isCalc ? 'calc' : 'theory';
    if (stats.formatStats[calcKey]) stats.formatStats[calcKey].correct += 1;

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
    updateSubtopicsUI(true);
    renderSyllabusMiniBar();
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
// v2.00 / v2.10: AI専門講師への深掘り質問（AI家庭教師チャット＆記録・保存）機能
// ==========================================================================

function resetTutorChat() {
    currentTutorHistory = [];
    isTutorLoading = false;
    if (aiTutorSection) {
        aiTutorSection.classList.remove('has-chat-history');
    }
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

function appendUserChatBubble(questionStr) {
    if (!tutorChatHistory) return;
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
}

function renderTutorAiBubbleContent(aiMsgEl, questionStr, answerMarkdown) {
    aiMsgEl.innerHTML = `
        <div class="tutor-msg-header">
            <span class="tutor-msg-role">🎓 AI専門講師</span>
            <div class="tutor-bubble-actions">
                <button type="button" class="tutor-mini-btn btn-copy-turn" title="この回答（図表・テキスト）をコピー">📋 コピー</button>
                <button type="button" class="tutor-mini-btn btn-save-turn-md" title="この質疑応答をMarkdown(.md)で保存">💾 MD保存</button>
            </div>
        </div>
        <div class="markdown-body question-markdown" style="margin-bottom:0; font-size:0.95rem;">${marked.parse(answerMarkdown || '')}</div>
    `;
    const copyBtn = aiMsgEl.querySelector('.btn-copy-turn');
    const saveMdBtn = aiMsgEl.querySelector('.btn-save-turn-md');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            copyTextToClipboard(`【質問】\n${questionStr}\n\n【AI専門講師の回答】\n${answerMarkdown}`, 'AI講師の回答をクリップボードにコピーしました');
        });
    }
    if (saveMdBtn) {
        saveMdBtn.addEventListener('click', () => {
            const examName = (currentQuiz && EXAM_DATA[currentQuiz.exam] && EXAM_DATA[currentQuiz.exam].name) || '資格試験';
            const catName = (currentQuiz && currentQuiz.category) || '';
            const md = `# 🎓 AI専門講師 質疑応答メモ (${examName} - ${catName})\n\n## 🙋 質問\n${questionStr}\n\n## 💡 AI専門講師の回答\n${answerMarkdown}\n`;
            downloadMarkdownFile(md, `QuaGenius_AI講師回答_${getTodayString()}.md`);
            showToast('AI講師の回答をMarkdown(.md)で保存しました');
        });
    }
}

function restoreTutorChat(savedHistory) {
    if (!Array.isArray(savedHistory) || savedHistory.length === 0 || !tutorChatHistory) return;
    currentTutorHistory = savedHistory.map(h => ({ role: h.role, content: h.content }));
    tutorChatHistory.innerHTML = '';
    tutorChatHistory.classList.remove('hidden');
    if (aiTutorSection) {
        aiTutorSection.classList.add('has-chat-history');
    }

    let lastUserQ = '';
    for (const item of currentTutorHistory) {
        if (item.role === 'user') {
            lastUserQ = item.content;
            appendUserChatBubble(item.content);
        } else if (item.role === 'assistant') {
            const aiMsgEl = document.createElement('div');
            aiMsgEl.className = 'tutor-msg tutor-msg-ai';
            renderTutorAiBubbleContent(aiMsgEl, lastUserQ, item.content);
            tutorChatHistory.appendChild(aiMsgEl);
        }
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
    if (aiTutorSection) {
        aiTutorSection.classList.add('has-chat-history');
    }

    // ユーザーの質問バブルを追加
    appendUserChatBubble(questionStr);

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

        // 現在の問題オブジェクトにチャット履歴を記録＆保存済みデータ（ブックマーク・復習ストック）へ即時同期
        currentQuiz.tutorHistory = [...currentTutorHistory];
        syncQuizToStorage(currentQuiz);

        renderTutorAiBubbleContent(aiMsgEl, questionStr, answerMarkdown);
        tutorChatHistory.scrollTop = tutorChatHistory.scrollHeight;
    } catch (e) {
        console.error('[AI Tutor Error]', e);
        aiMsgEl.innerHTML = `<span class="tutor-msg-role">🎓 AI専門講師</span><div style="color:var(--error-color);">${formatUserErrorMessage(e)}</div>`;
    } finally {
        setTutorLoadingState(false);
        if (tutorInput) tutorInput.focus();
    }
}

// ==========================================================================
// v2.10: 学習ノート保存（全文コピー & Markdownファイル保存）機能
// ==========================================================================

function buildStudyNoteMarkdown(quiz) {
    if (!quiz) return '';
    const examName = (EXAM_DATA[quiz.exam] && EXAM_DATA[quiz.exam].name) || EXAM_DATA[currentExam].name;
    const catName = quiz.category || currentCategory;
    const dateStr = getTodayString();

    let md = `# 📚 QuaGenius 学習ノート: ${examName}（${catName}）\n`;
    md += `- 記録日: ${dateStr}\n\n`;
    md += `## 📝 問題\n${quiz.question}\n\n`;

    if (quiz.type === 'input') {
        md += `## 🎯 模範解答\n**${quiz.answer}${quiz.unit || ''}**\n\n`;
    } else if (Array.isArray(quiz.options)) {
        md += `## 🔢 選択肢\n`;
        quiz.options.forEach((opt, idx) => {
            const isAns = idx === Number(quiz.correct_index);
            md += `${idx + 1}. ${opt}${isAns ? ' **【🎯正解】**' : ''}\n`;
        });
        md += `\n**正解: 選択肢 ${Number(quiz.correct_index) + 1}**\n\n`;
    }

    md += `## 📖 解説\n${quiz.explanation || ''}\n`;

    const history = (Array.isArray(currentTutorHistory) && currentTutorHistory.length > 0)
        ? currentTutorHistory
        : (Array.isArray(quiz.tutorHistory) ? quiz.tutorHistory : []);

    if (history.length > 0) {
        md += `\n---\n\n## 🎓 AI専門講師との深掘り質疑応答 (${Math.floor(history.length / 2)}件)\n\n`;
        let qNum = 1;
        for (const turn of history) {
            if (turn.role === 'user') {
                md += `### Q${qNum}. ${turn.content}\n\n`;
            } else if (turn.role === 'assistant') {
                md += `${turn.content}\n\n`;
                qNum++;
            }
        }
    }

    return md;
}

async function copyTextToClipboard(text, successMsg) {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
        } else {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        showToast(successMsg || 'クリップボードにコピーしました');
    } catch (e) {
        console.error('Clipboard copy failed:', e);
        showToast('コピーに失敗しました');
    }
}

function copyStudyNoteToClipboard() {
    if (!currentQuiz) return;
    const md = buildStudyNoteMarkdown(currentQuiz);
    const hasChat = currentTutorHistory.length > 0;
    copyTextToClipboard(md, hasChat ? '問題・解説・AIチャット全文をコピーしました！' : '問題・解説ノートをコピーしました！');
}

function downloadMarkdownFile(content, filename) {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function downloadStudyNoteMarkdown() {
    if (!currentQuiz) return;
    const md = buildStudyNoteMarkdown(currentQuiz);
    const examLabel = (EXAM_DATA[currentQuiz.exam] && EXAM_DATA[currentQuiz.exam].name) || '資格試験';
    const safeExam = examLabel.replace(/[\\/:*?"<>|\s]/g, '');
    downloadMarkdownFile(md, `QuaGenius_学習ノート_${safeExam}_${getTodayString()}.md`);
    showToast('学習ノート(.md)をダウンロードしました');
}

// ==========================================================================
// v2.10: ブックマーク（良問・解説・AIチャット記録）機能
// ==========================================================================

function ensureQuizId(quiz) {
    if (!quiz) return;
    if (!quiz.id) {
        quiz.id = `qg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    }
}

function isSameQuiz(a, b) {
    if (!a || !b) return false;
    if (a.id && b.id && a.id === b.id) return true;
    return Boolean(a.question && b.question && a.question === b.question && a.exam === b.exam);
}

function isQuizBookmarked(quiz) {
    if (!quiz) return false;
    return bookmarks.some(b => isSameQuiz(b, quiz));
}

function syncQuizToStorage(quiz) {
    if (!quiz) return;
    let bmUpdated = false;
    bookmarks = bookmarks.map(b => {
        if (isSameQuiz(b, quiz)) {
            bmUpdated = true;
            return { ...b, tutorHistory: Array.isArray(quiz.tutorHistory) ? [...quiz.tutorHistory] : b.tutorHistory };
        }
        return b;
    });
    if (bmUpdated) {
        localStorage.setItem('quagenius_bookmarks', JSON.stringify(bookmarks));
    }

    let mkUpdated = false;
    mistakes = mistakes.map(m => {
        if (isSameQuiz(m, quiz)) {
            mkUpdated = true;
            return { ...m, tutorHistory: Array.isArray(quiz.tutorHistory) ? [...quiz.tutorHistory] : m.tutorHistory };
        }
        return m;
    });
    if (mkUpdated) {
        localStorage.setItem('quagenius_mistakes', JSON.stringify(mistakes));
    }
}

function updateBookmarkToggleUI() {
    if (!bookmarkToggleBtn) return;
    const saved = isQuizBookmarked(currentQuiz);
    bookmarkToggleBtn.classList.toggle('is-bookmarked', saved);
    const span = bookmarkToggleBtn.querySelector('.btn-text');
    if (span) {
        span.textContent = saved ? '🌟 ブックマーク済み' : '⭐ ブックマーク保存';
    }
}

function toggleCurrentQuizBookmark() {
    if (!currentQuiz) return;
    ensureQuizId(currentQuiz);

    if (currentTutorHistory.length > 0) {
        currentQuiz.tutorHistory = [...currentTutorHistory];
    }

    const existingIdx = bookmarks.findIndex(b => isSameQuiz(b, currentQuiz));
    if (existingIdx >= 0) {
        bookmarks.splice(existingIdx, 1);
        localStorage.setItem('quagenius_bookmarks', JSON.stringify(bookmarks));
        updateBookmarkBtnState();
        showToast('ブックマークを解除しました');
    } else {
        const bookmarkEntry = {
            ...currentQuiz,
            tutorHistory: Array.isArray(currentQuiz.tutorHistory) ? [...currentQuiz.tutorHistory] : [],
            savedAt: new Date().toISOString()
        };
        bookmarks.unshift(bookmarkEntry);
        localStorage.setItem('quagenius_bookmarks', JSON.stringify(bookmarks));
        updateBookmarkBtnState();
        showToast('⭐ 問題・解説・チャット履歴をブックマークに保存しました');
    }
}

function openBookmarkModal() {
    if (!bookmarkModal) return;
    renderBookmarkList();
    bookmarkModal.classList.remove('hidden');
}

function renderBookmarkList() {
    if (!bookmarkListContainer) return;
    const filterVal = bookmarkFilterExam ? bookmarkFilterExam.value : 'all';
    const filtered = filterVal === 'all'
        ? bookmarks
        : bookmarks.filter(b => b.exam === filterVal);

    if (startBookmarkPracticeBtn) {
        startBookmarkPracticeBtn.disabled = filtered.length === 0;
    }

    bookmarkListContainer.innerHTML = '';

    if (filtered.length === 0) {
        bookmarkListContainer.innerHTML = `
            <div class="bookmark-empty">
                <p style="font-size: 1.05rem; margin-bottom: 0.4rem;">⭐ 保存されたブックマークはまだありません</p>
                <p style="font-size: 0.85rem;">問題の解答後に表示される「⭐ ブックマーク保存」ボタンを押すと、良問・解説・AI講師とのチャット履歴をここに永久保存できます。</p>
            </div>
        `;
        return;
    }

    filtered.forEach((bm) => {
        const examName = (EXAM_DATA[bm.exam] && EXAM_DATA[bm.exam].name) || bm.exam || '資格試験';
        const chatTurns = Array.isArray(bm.tutorHistory) ? Math.floor(bm.tutorHistory.length / 2) : 0;
        const savedDate = bm.savedAt ? bm.savedAt.slice(0, 10).replace(/-/g, '/') : '';
        const plainQuestion = (bm.question || '').replace(/[#*|>`\-]/g, ' ').replace(/\s+/g, ' ').trim();

        const card = document.createElement('div');
        card.className = 'bookmark-card';
        card.innerHTML = `
            <div class="bookmark-card-header">
                <div class="bookmark-meta-badges">
                    <span class="bookmark-exam-badge">[${examName}] ${bm.category || ''}</span>
                    ${chatTurns > 0 ? `<span class="bookmark-chat-badge">💬 AI講師チャット記録 (${chatTurns}件)</span>` : ''}
                </div>
                <span class="bookmark-date">${savedDate}</span>
            </div>
            <div class="bookmark-question-preview">${plainQuestion}</div>
            <div class="bookmark-card-actions">
                <button type="button" class="bookmark-action-btn primary-action btn-view-bm">📖 解説・チャットを見る</button>
                <button type="button" class="bookmark-action-btn btn-solve-bm">✍️ 問題を解く</button>
                <button type="button" class="bookmark-action-btn delete-action btn-delete-bm">🗑️ 削除</button>
            </div>
        `;

        card.querySelector('.btn-view-bm').addEventListener('click', () => {
            openBookmarkItemWithExplanation(bm);
        });
        card.querySelector('.btn-solve-bm').addEventListener('click', () => {
            openBookmarkItemForPractice(bm);
        });
        card.querySelector('.btn-delete-bm').addEventListener('click', () => {
            bookmarks = bookmarks.filter(item => !isSameQuiz(item, bm));
            localStorage.setItem('quagenius_bookmarks', JSON.stringify(bookmarks));
            updateBookmarkBtnState();
            renderBookmarkList();
            showToast('ブックマークから削除しました');
        });

        bookmarkListContainer.appendChild(card);
    });
}

function openBookmarkItemForPractice(bm) {
    if (!bm) return;
    if (bookmarkModal) bookmarkModal.classList.add('hidden');
    isReviewMode = false;
    isBookmarkMode = true;
    resultSection.classList.add('hidden');
    displayQuiz(bm);
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openBookmarkItemWithExplanation(bm) {
    if (!bm) return;
    if (bookmarkModal) bookmarkModal.classList.add('hidden');
    isReviewMode = false;
    isBookmarkMode = true;
    displayQuiz(bm);

    // 選択肢や入力欄を解答済み状態にし、即座に解説＆保存済みAIチャット履歴を表示する
    const isInputType = bm.type === 'input' || (!bm.options || bm.options.length === 0);
    if (isInputType) {
        if (answerInput) {
            answerInput.value = bm.answer || '';
            answerInput.disabled = true;
        }
        if (submitAnswerBtn) submitAnswerBtn.disabled = true;
        const unitStr = bm.unit ? ` ${bm.unit}` : '';
        if (userAnswerDisplay) {
            userAnswerDisplay.textContent = `（ブックマーク閲覧）`;
            userAnswerDisplay.style.color = 'var(--text-secondary)';
        }
        if (correctAnswerDisplay) {
            correctAnswerDisplay.textContent = `${bm.answer || ''}${unitStr}`;
        }
        if (inputResultFeedback) inputResultFeedback.classList.remove('hidden');
        if (overrideCorrectBtn) overrideCorrectBtn.classList.add('hidden');
    } else {
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === Number(bm.correct_index)) {
                btn.classList.add('correct');
            }
        });
        if (inputResultFeedback) inputResultFeedback.classList.add('hidden');
    }

    resultSection.className = 'glass-card result-section result-correct';
    resultIcon.textContent = '🌟';
    resultTitle.textContent = 'ブックマーク（問題・解説・チャット記録）';
    explanationText.innerHTML = formatExplanationHTML(bm.explanation, bm);
    renderGroundingInfo(bm);
    updateBookmarkToggleUI();
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function startBookmarkPractice() {
    const filterVal = bookmarkFilterExam ? bookmarkFilterExam.value : 'all';
    const pool = filterVal === 'all'
        ? bookmarks
        : bookmarks.filter(b => b.exam === filterVal);

    if (pool.length === 0) {
        showToast('対象のブックマーク問題がありません');
        return;
    }
    if (bookmarkModal) bookmarkModal.classList.add('hidden');
    isReviewMode = false;
    isBookmarkMode = true;
    resultSection.classList.add('hidden');
    const randomBm = pool[Math.floor(Math.random() * pool.length)];
    displayQuiz(randomBm);
}

// ==========================================================================
// v2.10: 学習データの外部バックアップ（JSONエクスポート＆インポート）機能
// ==========================================================================

function exportAllData() {
    const backupPayload = {
        app: 'QuaGenius',
        version: '2.20',
        exportedAt: new Date().toISOString(),
        stats,
        mistakes,
        bookmarks
    };
    const jsonStr = JSON.stringify(backupPayload, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quagenius_backup_${getTodayString()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('💾 全学習データ（成績・シラバス進捗・復習・ブックマーク）を書き出しました');
}

function importAllData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            if (!parsed || (typeof parsed !== 'object') || (!parsed.stats && !parsed.mistakes && !parsed.bookmarks)) {
                throw new Error('INVALID_BACKUP_FILE');
            }
            if (parsed.stats && typeof parsed.stats === 'object') {
                stats = {
                    total: Number(parsed.stats.total) || 0,
                    correct: Number(parsed.stats.correct) || 0,
                    categories: parsed.stats.categories || {},
                    dailyHistory: parsed.stats.dailyHistory || {},
                    subtopics: parsed.stats.subtopics || {},
                    formatStats: parsed.stats.formatStats || {
                        choice: { total: 0, correct: 0 },
                        input: { total: 0, correct: 0 },
                        calc: { total: 0, correct: 0 },
                        theory: { total: 0, correct: 0 }
                    }
                };
                localStorage.setItem('quagenius_stats', JSON.stringify(stats));
            }
            if (Array.isArray(parsed.mistakes)) {
                mistakes = parsed.mistakes;
                localStorage.setItem('quagenius_mistakes', JSON.stringify(mistakes));
            }
            if (Array.isArray(parsed.bookmarks)) {
                bookmarks = parsed.bookmarks;
                localStorage.setItem('quagenius_bookmarks', JSON.stringify(bookmarks));
            }
            renderStats();
            updateSubtopicsUI(true);
            renderSyllabusMiniBar();
            updateReviewBtnState();
            updateBookmarkBtnState();
            showToast(`✅ バックアップを復元しました（ブックマーク${bookmarks.length}件・復習${mistakes.length}件）`);
        } catch (err) {
            console.error('[Backup Import Error]', err);
            showToast('⚠️ バックアップファイルの形式が正しくありません');
        }
    };
    reader.readAsText(file);
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
        const geminiModels = ['gemini-2.5-flash', 'gemini-2.5-flash-lite'];
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
                    if (res.status === 429) await new Promise(r => setTimeout(r, 1200));
                    lastErr = selectPriorityError(lastErr, new Error(res.status === 429 ? 'RATE_LIMIT' : 'SERVER_OVERLOAD'));
                    continue;
                }
                const data = await res.json();
                const parts = data?.candidates?.[0]?.content?.parts || [];
                const text = parts.map(p => p.text || '').join('\n').trim();
                if (text) return text;
            } catch (e) {
                if (e.message === 'AUTH_ERROR') throw e;
                lastErr = selectPriorityError(lastErr, e);
            }
        }
        throw lastErr || new Error('SERVER_OVERLOAD');
    }

    if (engine === 'groq') {
        const groqModels = ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'];
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
                    if (res.status === 429) await new Promise(r => setTimeout(r, 1200));
                    lastErr = selectPriorityError(lastErr, new Error(res.status === 429 ? 'RATE_LIMIT' : 'SERVER_OVERLOAD'));
                    continue;
                }
                const data = await res.json();
                const text = data?.choices?.[0]?.message?.content?.trim();
                if (text) return text;
            } catch (e) {
                if (e.message === 'AUTH_ERROR') throw e;
                lastErr = selectPriorityError(lastErr, e);
            }
        }
        throw lastErr || new Error('SERVER_OVERLOAD');
    }

    if (engine === 'openrouter') {
        const freeModels = ['openrouter/free', 'meta-llama/llama-3.3-70b-instruct:free', 'google/gemma-3-27b-it:free', 'deepseek/deepseek-r1:free'];
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
                    const errBody = await res.text().catch(() => '');
                    if (res.status === 401) throw new Error('AUTH_ERROR');
                    if (res.status === 429) await new Promise(r => setTimeout(r, 1200));
                    if (res.status === 404 && (errBody.includes('data policy') || errBody.includes('Privacy'))) {
                        lastErr = selectPriorityError(lastErr, new Error('OPENROUTER_PRIVACY_404'));
                        continue;
                    }
                    lastErr = selectPriorityError(lastErr, new Error(res.status === 429 ? 'RATE_LIMIT' : 'SERVER_OVERLOAD'));
                    continue;
                }
                const data = await res.json();
                const text = data?.choices?.[0]?.message?.content?.trim();
                if (text) return text;
            } catch (e) {
                if (e.message === 'AUTH_ERROR') throw e;
                lastErr = selectPriorityError(lastErr, e);
            }
        }
        throw lastErr || new Error('SERVER_OVERLOAD');
    }

    // OpenAI
    const openaiModels = ['gpt-4o-mini', 'gpt-4.1-mini'];
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

    // 1.2 小分類（シラバス論点）単位の正答・誤答記録 (v2.20)
    if (!stats.subtopics) stats.subtopics = {};
    if (currentQuiz.subtopic) {
        const subKey = getSubtopicKey(currentQuiz.exam, currentQuiz.category, currentQuiz.subtopic);
        if (!stats.subtopics[subKey]) {
            stats.subtopics[subKey] = { total: 0, correct: 0, lastAt: null };
        }
        stats.subtopics[subKey].total += 1;
        if (isCorrect) stats.subtopics[subKey].correct += 1;
        stats.subtopics[subKey].lastAt = new Date().toISOString();
    }

    // 1.3 出題形式別（4択 vs 記述、計算 vs 理論）の傾向記録 (v2.20)
    if (!stats.formatStats) {
        stats.formatStats = {
            choice: { total: 0, correct: 0 },
            input: { total: 0, correct: 0 },
            calc: { total: 0, correct: 0 },
            theory: { total: 0, correct: 0 }
        };
    }
    const fmtKey = currentQuiz.type === 'input' ? 'input' : 'choice';
    stats.formatStats[fmtKey].total += 1;
    if (isCorrect) stats.formatStats[fmtKey].correct += 1;

    const calcKey = currentQuiz.isCalc ? 'calc' : 'theory';
    stats.formatStats[calcKey].total += 1;
    if (isCorrect) stats.formatStats[calcKey].correct += 1;

    // 1.5 日別履歴（問題数・時間）の記録
    const todayStr = getTodayString();
    if (!stats.dailyHistory) stats.dailyHistory = {};
    if (!stats.dailyHistory[todayStr]) {
        stats.dailyHistory[todayStr] = { count: 0, time: 0 };
    }
    stats.dailyHistory[todayStr].count += 1;

    localStorage.setItem('quagenius_stats', JSON.stringify(stats));

    // メイン画面の小分類プルダウン＆ミニ進捗バーを最新状態に更新
    updateSubtopicsUI(true);
    renderSyllabusMiniBar();

    // 2. 復習ストックの更新（ブックマーク自体は正解しても削除されない）
    if (!isCorrect && !isReviewMode) {
        // 新規で間違えた場合はストックに追加（重複防止）
        if (!mistakes.some(m => isSameQuiz(m, currentQuiz))) {
            mistakes.push(currentQuiz);
            localStorage.setItem('quagenius_mistakes', JSON.stringify(mistakes));
            showToast('間違えた問題としてストックしました');
        }
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

// ==========================================================================
// v2.20: シラバス網羅マップ（塗りつぶし機能）＆ 正答・誤答の傾向分析モーダル
// ==========================================================================

function openSyllabusModal() {
    if (!syllabusModal) return;
    if (syllabusExamSelect) {
        syllabusExamSelect.value = examSelect.value || 'sme';
        populateSyllabusCategoryFilter(syllabusExamSelect.value);
    }
    renderSyllabusModal();
    syllabusModal.classList.remove('hidden');
    const bodyEl = syllabusModal.querySelector('.syllabus-modal-body');
    if (bodyEl) bodyEl.scrollTop = 0;
}

function populateSyllabusCategoryFilter(examKey) {
    if (!syllabusCategoryFilter) return;
    const categories = (EXAM_DATA[examKey] && EXAM_DATA[examKey].categories) || [];
    syllabusCategoryFilter.innerHTML = '<option value="all">すべての出題分野を表示</option>';
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        syllabusCategoryFilter.appendChild(opt);
    });
}

async function startSubtopicQuiz(examKey, categoryName, subtopicName) {
    if (syllabusModal) syllabusModal.classList.add('hidden');
    stopSpeaking();
    cancelBackgroundPrefetch();

    if (examSelect.value !== examKey) {
        examSelect.value = examKey;
        updateCategories();
    }
    if (categorySelect.value !== categoryName) {
        categorySelect.value = categoryName;
        currentCategory = categoryName;
        updateSubtopicsUI();
    }

    const subList = getSubtopicsForCategory(examKey, categoryName);
    const subIdx = subList.indexOf(subtopicName);
    if (subtopicSelect && subIdx >= 0) {
        subtopicSelect.value = `subtopic::${subIdx}`;
    }
    renderSyllabusMiniBar();

    isReviewMode = false;
    isBookmarkMode = false;
    setLoading(true);
    quizSection.classList.add('hidden');
    resultSection.classList.add('hidden');

    try {
        const data = await fetchQuizData({ forceSubtopic: subtopicName });
        displayQuiz(data);
        quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (e) {
        console.error('[QuaGenius Subtopic Start Error]', e);
        showToast(formatUserErrorMessage(e));
    } finally {
        setLoading(false);
    }
}

function renderSyllabusModal() {
    if (!syllabusMapContainer) return;
    const examKey = syllabusExamSelect ? syllabusExamSelect.value : currentExam;
    const catFilter = syllabusCategoryFilter ? syllabusCategoryFilter.value : 'all';
    const examInfo = EXAM_DATA[examKey];
    if (!examInfo) return;

    const allCategories = examInfo.categories || [];
    const targetCategories = catFilter === 'all'
        ? allCategories
        : allCategories.filter(c => c === catFilter);

    // 1. 資格全体（またはフィルタ対象分野）の網羅率集計
    let totalSubCount = 0;
    let masteredCount = 0;
    let learningCount = 0;
    let weakCount = 0;
    let unstudiedCount = 0;

    const allSubItems = [];
    allCategories.forEach(cat => {
        const subs = getSubtopicsForCategory(examKey, cat);
        subs.forEach((sub, idx) => {
            const rec = getSubtopicRecord(examKey, cat, sub);
            const state = getSubtopicState(examKey, cat, sub);
            allSubItems.push({ examKey, category: cat, subtopic: sub, idx, rec, state });
            if (catFilter === 'all' || cat === catFilter) {
                totalSubCount++;
                if (state === 'mastered') masteredCount++;
                else if (state === 'learning') learningCount++;
                else if (state === 'weak') weakCount++;
                else unstudiedCount++;
            }
        });
    });

    const touchedCount = masteredCount + learningCount + weakCount;
    const coveragePct = totalSubCount > 0 ? Math.round((touchedCount / totalSubCount) * 100) : 0;

    if (syllabusOverallTitle) {
        syllabusOverallTitle.textContent = catFilter === 'all'
            ? `${examInfo.name} 全体の学習現在地（全${allCategories.length}分野・${totalSubCount}論点）`
            : `${examInfo.name} ＞ ${catFilter} の学習現在地（${totalSubCount}論点）`;
    }
    if (syllabusOverallPercent) {
        syllabusOverallPercent.textContent = `着手率 ${coveragePct}% (${touchedCount} / ${totalSubCount} 論点)`;
    }
    if (syllabusMasteredBar) {
        syllabusMasteredBar.style.width = totalSubCount > 0 ? `${(masteredCount / totalSubCount) * 100}%` : '0%';
    }
    if (syllabusLearningBar) {
        syllabusLearningBar.style.width = totalSubCount > 0 ? `${(learningCount / totalSubCount) * 100}%` : '0%';
    }
    if (syllabusWeakBar) {
        syllabusWeakBar.style.width = totalSubCount > 0 ? `${(weakCount / totalSubCount) * 100}%` : '0%';
    }
    if (countMastered) countMastered.textContent = masteredCount;
    if (countLearning) countLearning.textContent = learningCount;
    if (countWeak) countWeak.textContent = weakCount;
    if (countUnstudied) countUnstudied.textContent = unstudiedCount;

    // 2. 傾向分析パネルの描画
    // (A) 弱点・特化すべき重点項目 Top 5
    if (weakSubtopicsList) {
        weakSubtopicsList.innerHTML = '';
        const scopedItems = allSubItems.filter(it => catFilter === 'all' || it.category === catFilter);
        const attemptedProblems = scopedItems
            .filter(it => it.rec.total > 0 && (it.rec.correct / it.rec.total) < 0.8)
            .sort((a, b) => {
                const accA = a.rec.correct / a.rec.total;
                const accB = b.rec.correct / b.rec.total;
                if (accA !== accB) return accA - accB;
                return b.rec.total - a.rec.total;
            })
            .slice(0, 5);

        if (attemptedProblems.length === 0) {
            const p = document.createElement('p');
            p.className = 'trend-empty';
            p.textContent = touchedCount === 0
                ? 'まだ解答データがありません。下のマップまたは出題画面から問題を解くと弱点論点を自動抽出します。'
                : '🎉 現在、正答率80%未満の弱点論点はありません！未学習論点の塗りつぶしを進めましょう。';
            weakSubtopicsList.appendChild(p);
        } else {
            attemptedProblems.forEach(item => {
                const acc = Math.round((item.rec.correct / item.rec.total) * 100);
                const row = document.createElement('div');
                row.className = 'trend-item';
                row.innerHTML = `
                    <div class="trend-item-info">
                        <span class="trend-item-cat">${item.category}</span>
                        <span class="trend-item-name" title="${item.subtopic}">${item.subtopic}</span>
                        <span class="trend-item-stat">${acc < 50 ? '🟥 要復習' : '🟨 学習中'}: 正答率 ${acc}% (${item.rec.correct}/${item.rec.total}問)</span>
                    </div>
                    <button type="button" class="trend-practice-btn">🎯 特訓出題</button>
                `;
                row.querySelector('.trend-practice-btn').addEventListener('click', () => {
                    startSubtopicQuiz(item.examKey, item.category, item.subtopic);
                });
                weakSubtopicsList.appendChild(row);
            });
        }
    }

    // (B) 出題形式・分野別の得点傾向診断
    if (formatTendencySummary) {
        const fs = stats.formatStats || {
            choice: { total: 0, correct: 0 },
            input: { total: 0, correct: 0 },
            calc: { total: 0, correct: 0 },
            theory: { total: 0, correct: 0 }
        };
        const fmtAcc = (obj) => (obj && obj.total > 0 ? `${Math.round((obj.correct / obj.total) * 100)}% (${obj.correct}/${obj.total})` : '未解答');

        // 資格内の分野別で最も正答率が低い分野と高い分野を特定
        const catPerf = [];
        allCategories.forEach(cat => {
            const cData = stats.categories[`${examKey}_${cat}`];
            if (cData && cData.total > 0) {
                catPerf.push({ cat, acc: Math.round((cData.correct / cData.total) * 100), total: cData.total });
            }
        });
        catPerf.sort((a, b) => a.acc - b.acc);

        let adviceText = '各分野をまんべんなく演習し、まずは⬜未学習タイルを🟨学習中・🟩マスター済へ塗りつぶしていきましょう。';
        if (fs.calc.total >= 2 && fs.theory.total >= 2) {
            const calcAcc = (fs.calc.correct / fs.calc.total) * 100;
            const theoryAcc = (fs.theory.correct / fs.theory.total) * 100;
            if (calcAcc + 15 < theoryAcc) {
                adviceText = '💡 理論問題に比べて「計算・データ分析問題」で失点が多い傾向があります。「🔢 計算問題を優先」にチェックを入れて計算特訓を行うのが効果的です。';
            } else if (theoryAcc + 15 < calcAcc) {
                adviceText = '💡 計算問題は得意ですが、知識・条文系の「理論問題」で取りこぼしが見られます。未学習や🟥要復習の理論テーマを重点的に演習しましょう。';
            }
        }
        if (catPerf.length >= 2 && catPerf[0].acc < 60) {
            adviceText = `💡 分野別では「${catPerf[0].cat}」（正答率 ${catPerf[0].acc}%）が最優先の補強分野です。`;
        }

        formatTendencySummary.innerHTML = `
            <div class="tendency-row"><span>🔘 4択マーク形式</span><strong>${fmtAcc(fs.choice)}</strong></div>
            <div class="tendency-row"><span>✍️ 記述・数値入力</span><strong>${fmtAcc(fs.input)}</strong></div>
            <div class="tendency-row"><span>🔢 計算・分析問題</span><strong>${fmtAcc(fs.calc)}</strong></div>
            <div class="tendency-row"><span>📖 理論・知識問題</span><strong>${fmtAcc(fs.theory)}</strong></div>
            <div class="tendency-advice">${adviceText}</div>
        `;
    }

    // (C) 未学習の重要論点レコメンド（最大4件）
    if (unstudiedSubtopicsList) {
        unstudiedSubtopicsList.innerHTML = '';
        const scopedUnstudied = allSubItems.filter(it => (catFilter === 'all' || it.category === catFilter) && it.state === 'unstudied');
        if (scopedUnstudied.length === 0) {
            const p = document.createElement('p');
            p.className = 'trend-empty';
            p.textContent = '🎉 この範囲のすべての小分類（論点）に着手済みです！全論点🟩マスターを目指しましょう！';
            unstudiedSubtopicsList.appendChild(p);
        } else {
            // 各分野からバランスよくピックアップ
            const picked = [];
            const seenCats = new Set();
            for (const item of scopedUnstudied) {
                if (!seenCats.has(item.category) && picked.length < 4) {
                    picked.push(item);
                    seenCats.add(item.category);
                }
            }
            for (const item of scopedUnstudied) {
                if (picked.length >= 4) break;
                if (!picked.includes(item)) picked.push(item);
            }

            picked.forEach(item => {
                const row = document.createElement('div');
                row.className = 'trend-item';
                row.innerHTML = `
                    <div class="trend-item-info">
                        <span class="trend-item-cat">${item.category}</span>
                        <span class="trend-item-name" title="${item.subtopic}">${item.subtopic}</span>
                        <span class="trend-item-stat" style="color:var(--text-secondary);">⬜ 未学習（クリックで演習開始）</span>
                    </div>
                    <button type="button" class="trend-practice-btn">🚀 出題する</button>
                `;
                row.querySelector('.trend-practice-btn').addEventListener('click', () => {
                    startSubtopicQuiz(item.examKey, item.category, item.subtopic);
                });
                unstudiedSubtopicsList.appendChild(row);
            });
        }
    }

    // 3. 分野別シラバス塗りつぶしマップ（タイル一覧）の描画
    syllabusMapContainer.innerHTML = '';
    targetCategories.forEach(cat => {
        const subs = getSubtopicsForCategory(examKey, cat);
        let catTouched = 0;
        let catMastered = 0;
        subs.forEach(s => {
            const st = getSubtopicState(examKey, cat, s);
            if (st !== 'unstudied') catTouched++;
            if (st === 'mastered') catMastered++;
        });
        const catPct = subs.length > 0 ? Math.round((catTouched / subs.length) * 100) : 0;

        const block = document.createElement('div');
        block.className = 'syllabus-category-block';

        const header = document.createElement('div');
        header.className = 'syllabus-category-header';
        header.innerHTML = `
            <span class="syllabus-category-name">📂 ${cat}</span>
            <span class="syllabus-category-progress">網羅 ${catTouched}/${subs.length}論点 (${catPct}%) ｜ 🟩マスター ${catMastered}</span>
        `;
        block.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'syllabus-tiles-grid';

        subs.forEach((sub, idx) => {
            const rec = getSubtopicRecord(examKey, cat, sub);
            const state = getSubtopicState(examKey, cat, sub);
            const sym = getSubtopicStateSymbol(state);
            const stateLabel = state === 'mastered' ? 'マスター済' : (state === 'weak' ? '要復習・弱点' : (state === 'learning' ? '学習中' : '未学習'));
            const statText = rec.total > 0
                ? `正答率 ${Math.round((rec.correct / rec.total) * 100)}% (${rec.correct}/${rec.total}問)`
                : 'まだ解いていません';

            const tile = document.createElement('div');
            tile.className = `syllabus-tile state-${state}`;
            tile.innerHTML = `
                <div class="syllabus-tile-top">
                    <span class="syllabus-tile-title">${idx + 1}. ${sub}</span>
                    <span class="syllabus-tile-badge">${sym} ${stateLabel}</span>
                </div>
                <div class="syllabus-tile-bottom">
                    <span>${statText}</span>
                    <span class="syllabus-tile-action">▶ この論点を出題</span>
                </div>
            `;
            tile.addEventListener('click', () => {
                startSubtopicQuiz(examKey, cat, sub);
            });
            grid.appendChild(tile);
        });

        block.appendChild(grid);
        syllabusMapContainer.appendChild(block);
    });
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
