import { Language } from './content';

export interface WhyRealQuantTranslation {
  navTitle: string;
  badge: string;
  title: string;
  subtitle: string;
  
  // Section 1: Emotional Trading vs Rule-based Quant
  section1Title: string;
  section1Subtitle: string;
  
  humanLoop: {
    tag: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      desc: string;
      badge: string;
    }[];
    summary: string;
  };

  quantSystem: {
    tag: string;
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      desc: string;
      badge: string;
    }[];
    summary: string;
  };

  // Section 2: Short-term Hype vs Long-term Real Quant
  section2Badge: string;
  section2Title: string;
  section2Subtitle: string;
  
  shortTermHype: {
    badge: string;
    title: string;
    headline: string;
    features: string[];
    resultLabel: string;
    resultText: string;
    graphLabel: string;
  };

  realQuantProof: {
    badge: string;
    title: string;
    headline: string;
    features: string[];
    resultLabel: string;
    resultText: string;
    graphLabel: string;
  };

  // Bottom Callout
  bannerQuote: string;
  bannerCta: string;
  pills: string[];
}

export const whyRealQuantTranslations: Record<Language, WhyRealQuantTranslation> = {
  ko: {
    navTitle: '왜 RealQuant인가?',
    badge: 'WHY REALQUANT',
    title: '직접 매매하면 왜 자꾸 잃을까요?',
    subtitle: '오를 것 같아서 사면 내리고, 내릴 것 같아서 팔면 오르는 끝없는 굴레. 사람은 감정에 흔들리지만, 규칙이 정해진 RealQuant는 흔들리지 않습니다.',
    section1Title: '인간의 감정 매매 악순환 vs 규칙 기반 퀀트 시스템',
    section1Subtitle: '탐욕과 공포에 휘둘리는 뇌의 본능을 이길 수 있는 유일한 방법은 감정을 배제한 100% 알고리즘 매매입니다.',
    humanLoop: {
      tag: '인간 트레이더의 한계',
      title: '감정에 갇힌 4단계 손실 루프',
      description: '통계적으로 95%의 개인 투자자가 겪는 심리적 오류와 자산 감소 과정',
      steps: [
        {
          number: '01',
          title: '추격 매수 (FOMO)',
          desc: '급등하는 차트를 보며 "지금 안 사면 늦는다"는 불안감에 꼭대기에서 매수',
          badge: '탐욕'
        },
        {
          number: '02',
          title: '사자마자 급락',
          desc: '내가 사자마자 시작되는 하락. 당황하며 물타기로 포지션 확대',
          badge: '혼란'
        },
        {
          number: '03',
          title: '손절 실패 & 물림',
          desc: '손실을 확정 짓기 싫어 "언젠간 오르겠지" 버티다 계좌 손실 눈덩이',
          badge: '고집'
        },
        {
          number: '04',
          title: '패닉 셀 & 멘탈 붕괴',
          desc: '공포에 못 이겨 최저점에서 투매. 하루 종일 차트만 붙잡는 일상 파괴',
          badge: '공포'
        }
      ],
      summary: '사람은 감정 때문에 흔들립니다. 차트 앞에 앉아있는 시간이 늘어날수록 손실 확률도 커집니다.'
    },
    quantSystem: {
      tag: 'RealQuant 솔루션',
      title: '100% 감정 배제 원칙 실행 시스템',
      description: '수십만 시간의 빅데이터 백테스트로 검증된 수학적 승률 우위와 철저한 통제',
      steps: [
        {
          number: '01',
          title: '빅데이터 통계 진입',
          desc: '오를 것 같은 느낌이 아닌, 사전에 검증된 확률적 엣지(Edge)에서만 기계적 진입',
          badge: '데이터'
        },
        {
          number: '02',
          title: '철저한 자산 비중 관리',
          desc: '단일 종목 몰빵 금지, 포트폴리오 리스크 허용치에 맞춘 철저한 분할 배분',
          badge: '안전성'
        },
        {
          number: '03',
          title: '기계적 칼손절 & 익절',
          desc: '기준 이탈 시 -2% 내외 기계적 즉각 손절. 손실은 짧게, 수익은 길게 추세 추종',
          badge: '원칙 수호'
        },
        {
          number: '04',
          title: '24/7 스트레스 프리',
          desc: '차트를 종일 감시할 필요 없이, 규칙이 정해진 시스템이 24시간 안전하게 복리 운용',
          badge: '일상 회복'
        }
      ],
      summary: '규칙이 정해진 프로그램은 흔들리지 않습니다. 어떤 변동성 장세에서도 원칙을 100% 사수합니다.'
    },
    section2Badge: '지속 가능한 생존의 차이',
    section2Title: '단기 자극형 자동매매 vs 장기 검증된 진짜 퀀트',
    section2Subtitle: '많은 프로그램이 하루, 일주일, 한 달의 수익률을 화려하게 과장하지만 얼마 못 가 청산됩니다. RealQuant는 장기 수익률을 높이는 방향성을 추구합니다.',
    shortTermHype: {
      badge: '일반적인 단기 자동매매의 맹점',
      title: '단기 수익률 과장 프로그램',
      headline: '"하루 10%, 한 달 100%!" 자극적인 수치의 허상',
      features: [
        '손절 없이 물타기(마틴게일)로 겉보기 승률만 95% 포장',
        '원금 손실 위험을 은폐한 비정상적 고레버리지 설정',
        '수익률 자랑 후 몇 달 지나지 않아 전액 청산(0원) 및 잠적',
        '역사적 폭락장 및 변동성 스트레스 테스트 부재'
      ],
      resultLabel: '결과',
      resultText: '단 한 번의 블랙스완 폭락장에 계좌 전액 강제 청산',
      graphLabel: '단기 급등 후 수직 폭락 (청산)'
    },
    realQuantProof: {
      badge: 'RealQuant의 철학',
      title: '장기 수익률을 추구하는 진짜 퀀트',
      headline: '월 5~15%의 지치지 않는 우상향 복리 마법',
      features: [
        '단 1회의 청산도 용납하지 않는 타협 없는 기계적 손절',
        '최대 낙폭(MDD 15% 이내)을 엄격히 통제하는 방어 중심 설계',
        '골드 5년 이상 전수 백테스트 데이터 투명 공개',
        '실제 운용 계좌 실시간 연동으로 검증된 지속 가능성'
      ],
      resultLabel: '결과',
      resultText: '시장 위기 속에서도 자산을 지켜내며 꾸준히 누적 우상향',
      graphLabel: '안정적 우상향 복리 곡선'
    },
    bannerQuote: '오래 지나지 못해 청산되거나 사라지는 수많은 단기 프로그램들 사이에서, RealQuant는 끝까지 살아남아 장기 수익률을 추구하는 진짜 퀀트 시스템입니다.',
    bannerCta: '수익률 시뮬레이션 해보기',
    pills: ['감정 0% 철저한 원칙 실행', '원금을 지키는 MDD 통제', '검증된 장기 복리 성장']
  },

  en: {
    navTitle: 'Why RealQuant?',
    badge: 'WHY REALQUANT',
    title: 'Why Do Traders Keep Losing When Trading Manually?',
    subtitle: 'Buying at the peak out of greed, selling at the bottom out of panic. Humans are swayed by emotion, but a rule-based algorithm never wavers.',
    section1Title: 'Human Emotional Trading Loop vs Rule-Based Quant System',
    section1Subtitle: 'The only way to defeat the biological instincts of fear and greed is a 100% algorithmic system that strictly eliminates human emotion.',
    humanLoop: {
      tag: 'Limitations of Human Traders',
      title: 'The 4-Step Emotional Loss Trap',
      description: 'The psychological pitfalls and capital depletion experienced by 95% of individual retail traders',
      steps: [
        {
          number: '01',
          title: 'FOMO Panic Buying',
          desc: 'Watching green candles skyrocket and chasing the top out of fear of missing out',
          badge: 'Greed'
        },
        {
          number: '02',
          title: 'Instant Drop & Denial',
          desc: 'Price immediately reverses upon entry. A panic-driven average-down escalates risk',
          badge: 'Confusion'
        },
        {
          number: '03',
          title: 'Stop-Loss Failure & Bagholding',
          desc: 'Unable to accept losses, holding on in hope of recovery until losses snowball',
          badge: 'Stubborn'
        },
        {
          number: '04',
          title: 'Panic Sell & Burnout',
          desc: 'Surrendering at the exact market bottom, staring at charts all day in sheer exhaustion',
          badge: 'Fear'
        }
      ],
      summary: 'Humans are driven by emotion. The more hours spent staring at price charts, the higher the probability of ruin.'
    },
    quantSystem: {
      tag: 'The RealQuant Solution',
      title: '100% Emotion-Free Execution Engine',
      description: 'Proven mathematical edge through hundreds of thousands of hours of big data backtesting',
      steps: [
        {
          number: '01',
          title: 'Statistical Edge Entry',
          desc: 'Never trading on intuition. Entering only when mathematically validated probabilities align',
          badge: 'Data-Driven'
        },
        {
          number: '02',
          title: 'Strict Position Sizing',
          desc: 'No all-in gambles. Every trade strictly conforms to predefined portfolio risk limits',
          badge: 'Security'
        },
        {
          number: '03',
          title: 'Mechanical Stop & Take Profit',
          desc: 'Zero hesitation: instant cutoff at ~-2% stop-loss. Keeping losses tiny, letting gains run',
          badge: 'Discipline'
        },
        {
          number: '04',
          title: '24/7 Stress-Free Living',
          desc: 'No need to monitor charts day and night. The system works silently compounding wealth',
          badge: 'Peace of Mind'
        }
      ],
      summary: 'A programmed rule engine never wavers. It strictly defends risk management principles in any market turmoil.'
    },
    section2Badge: 'Survival Over Hype',
    section2Title: 'Short-Term Hype Bots vs Long-Term Proven True Quant',
    section2Subtitle: 'Countless trading bots brag about daily, weekly, or monthly gains—only to be wiped out by margin calls soon after. RealQuant pursues maximizing long-term profitability.',
    shortTermHype: {
      badge: 'The Trap of Typical Trading Bots',
      title: 'Short-Term Hype Software',
      headline: '"10% daily! 100% in a month!" The illusion of short-term greed',
      features: [
        'Martingale averaging with no stop-loss to fake a 95% win rate',
        'Dangerous hidden leverage disguised as effortless profits',
        'Vanishes or liquidates accounts within months when trends shift',
        'Zero stress-testing against historical black swan crashes'
      ],
      resultLabel: 'Outcome',
      resultText: 'Total account liquidation (to zero) on the very first unexpected flash crash',
      graphLabel: 'Spike up followed by vertical crash (Liquidated)'
    },
    realQuantProof: {
      badge: 'The RealQuant Philosophy',
      title: 'A True Quant System Pursuing Long-Term Yields',
      headline: 'The power of resilient 5~15% monthly compounding growth',
      features: [
        'Zero tolerance for liquidation: non-negotiable mechanical stop-losses',
        'Defense-first architecture capping Maximum Drawdown (MDD) under 15%',
        '100% transparent Gold 5-year historical backtest data',
        'Real accounts verified over multi-year cycles across bear and bull markets'
      ],
      resultLabel: 'Outcome',
      resultText: 'Capital preserved during deep bear markets, steadily compounding over time',
      graphLabel: 'Steady upward compound trajectory'
    },
    bannerQuote: 'While countless short-term bots boast brief gains only to be liquidated and disappear, RealQuant stands firm—a true quant system pursuing sustainable long-term profitability.',
    bannerCta: 'Simulate Compound Returns',
    pills: ['0% Emotion Strict Execution', 'Capital-Preserving MDD Control', 'Proven Long-Term Compounding']
  },

  zh: {
    navTitle: '为什么选择 RealQuant？',
    badge: 'WHY REALQUANT',
    title: '为什么手动交易总是亏损？',
    subtitle: '总觉得要涨追高买入，一买就跌；总觉得要跌恐慌割肉，一卖就涨。人会被情绪左右，但拥有严格规则的程序从不动摇。',
    section1Title: '人类情绪交易恶性循环 vs 规则驱动量化系统',
    section1Subtitle: '战胜贪婪与恐惧本能的唯一途径，就是彻底排除主观情绪的 100% 规则化算法交易。',
    humanLoop: {
      tag: '人工交易者的局限',
      title: '困于情绪的 4 步亏损怪圈',
      description: '95% 散户投资者在心理误区中经历的资产缩水过程',
      steps: [
        {
          number: '01',
          title: '追高买入 (FOMO)',
          desc: '看着持续飙升的K线，唯恐错过行情而在高点冲动追入',
          badge: '贪婪'
        },
        {
          number: '02',
          title: '买入即暴跌',
          desc: '刚买入趋势立即反转，心慌意乱下通过补仓盲目加重仓位',
          badge: '困惑'
        },
        {
          number: '03',
          title: '拒绝止损 & 深套',
          desc: '不愿面对浮亏，心存侥幸“总会涨回来”，导致亏损如雪球般滚大',
          badge: '侥幸'
        },
        {
          number: '04',
          title: '恐慌割肉 & 心态崩溃',
          desc: '忍无可忍在最低点砸盘割肉，整天盯盘身心俱疲、严重影响生活',
          badge: '恐惧'
        }
      ],
      summary: '人会因情绪而摇摆不定。盯盘时间越长，主观决策的失误率就越高。'
    },
    quantSystem: {
      tag: 'RealQuant 解决方案',
      title: '100% 摒除情绪的规则执行系统',
      description: '历经数十万小时海量回测验证的数学胜率优势与极致风险管控',
      steps: [
        {
          number: '01',
          title: '大数据统计入场',
          desc: '绝不靠直觉猜涨跌，仅在经受历史检验的高概率优势区间精准建仓',
          badge: '数据驱动'
        },
        {
          number: '02',
          title: '严苛仓位配比管理',
          desc: '杜绝单边重仓梭哈，根据全盘风险敞口精细化分仓配置',
          badge: '资金安全'
        },
        {
          number: '03',
          title: '机械化极速止损止盈',
          desc: '触及阈值在 -2% 左右坚决机械斩仓，截断亏损，让利润在趋势中奔跑',
          badge: '恪守纪律'
        },
        {
          number: '04',
          title: '24/7 零压力生活',
          desc: '无需日夜盯盘守候，既定规则程序在云端 24 小时全天候稳健复利运作',
          badge: '回归生活'
        }
      ],
      summary: '规则严明的量化程序决不随波逐流。无论市场如何惊涛骇浪，始终 100% 坚守风控底线。'
    },
    section2Badge: '生存力才是核心竞争力',
    section2Title: '短期炒作型假量化 vs 长期穿越周期的真量化',
    section2Subtitle: '市场上许多自动交易程序往往过分夸大一天、一周或一个月的收益率，但很快便因爆仓而销声匿迹。RealQuant 致力于持续提升长期复合收益的方向性。',
    shortTermHype: {
      badge: '市面常见短期脚本的盲区',
      title: '过度炒作短期收益的脚本',
      headline: '“日赚10%、月翻倍！”刺激数字背后的危险深渊',
      features: [
        '采用无止损加倍补仓（马丁格尔策略），营造 95% 胜率假象',
        '隐匿本金爆仓归零风险，诱导使用非理性超高杠杆',
        '往往风光几个月后，遭遇单边行情即全军覆没、爆仓跑路',
        '从未进行过针对极端黑天鹅行情的历史压力测试'
      ],
      resultLabel: '结局',
      resultText: '仅需一次意料之外的极端黑天鹅行情，账户全额强制爆仓归零',
      graphLabel: '急剧飙升后直线坠毁（爆仓归零）'
    },
    realQuantProof: {
      badge: 'RealQuant 的量化哲学',
      title: '追求长期收益率的真正量化系统',
      headline: '月化 5~15% 持之以恒、稳健向上的复利奇迹',
      features: [
        '对爆仓零容忍：不容妥协的毫秒级机械强制止损机制',
        '防御优先架构：将最大回撤（MDD）严格压制在 15% 以内',
        '完全公开透明：黄金 5 年以上全量历史回测',
        '实盘账户多周期穿透验证，牛熊转换中持续稳健盈利'
      ],
      resultLabel: '结局',
      resultText: '在暴跌狂潮中牢牢护住本金，持续稳定复利递增',
      graphLabel: '稳健平滑的指数级复利上行曲线'
    },
    bannerQuote: '在那些不久便爆仓或销声匿迹的众多短期脚本中，RealQuant 始终坚守到底，是坚持追求长期收益率的真正量化系统。',
    bannerCta: '测算复利收益潜力',
    pills: ['0% 情绪严格执行', '守护本金 MDD 严控', '经受考验的长期复利']
  },

  ja: {
    navTitle: 'なぜRealQuantなのか？',
    badge: 'WHY REALQUANT',
    title: '自分で取引すると、なぜ負け続けるのか？',
    subtitle: '上がりそうだから買うと下がり、下がりそうだから売ると上がる無限の悪循環。人は感情に揺らぎますが、厳格なルールのRealQuantは決して揺らぎません。',
    section1Title: '感情トレードの悪循環 vs ルール厳守のクオンツシステム',
    section1Subtitle: '恐怖と欲望という人間の本能に打ち勝つ唯一の手段は、感情を完全に排除したアルゴリズム取引です。',
    humanLoop: {
      tag: '個人トレーダーの限界',
      title: '感情に囚われた4段階の損失ループ',
      description: '95%の個人投資家が陥る心理的トラップと資金減少のプロセス',
      steps: [
        {
          number: '01',
          title: '高値掴み (FOMO)',
          desc: '急騰するチャートに焦り、「今買わなければ」と天井付近で飛びつき買い',
          badge: '強欲'
        },
        {
          number: '02',
          title: '買った途端に急落',
          desc: '購入直後に逆行。パニックのままナンピンしてリスクを肥大化',
          badge: '動揺'
        },
        {
          number: '03',
          title: '損切りできず塩漬け',
          desc: '損失確定を拒み「いつか戻る」と耐え続け、含み損が雪だるま式に膨張',
          badge: '執着'
        },
        {
          number: '04',
          title: '底値での投げ売り & 疲弊',
          desc: '恐怖に耐え兼ねて最安値で損切り。1日中チャートに縛られ日常生活が破綻',
          badge: '恐怖'
        }
      ],
      summary: '人間は感情に支配されます。画面に向かってチャートを見つめる時間が長くなるほど、破滅の確率は高まります。'
    },
    quantSystem: {
      tag: 'RealQuantの解決策',
      title: '100%感情を排除したルール執行エンジン',
      description: '数十万時間のビッグデータ検証に基づく数学的優位性と徹底したリスクヘッジ',
      steps: [
        {
          number: '01',
          title: '統計的優位性によるエントリー',
          desc: '勘に頼らず、バックテストで実証された確率的エッジが揃った局面のみで機械的に執行',
          badge: 'データ主導'
        },
        {
          number: '02',
          title: '厳格なポジション管理',
          desc: '一撃全額ベットを禁止し、ポートフォリオ許容リスクに応じた徹底分散投資',
          badge: '安全性'
        },
        {
          number: '03',
          title: '冷徹な損切り＆利確',
          desc: '基準逸脱時は-2%前後で機械的に損切り。損失は小さく抑え、利益は大きく伸ばす',
          badge: '規律の遵守'
        },
        {
          number: '04',
          title: '24時間ストレスフリー',
          desc: '四六時中チャートに張り付く必要はありません。プログラムが安全に24時間複利運用',
          badge: '安心の日常'
        }
      ],
      summary: 'プログラム化された規律は揺らぎません。相場がいかなる乱高下に見舞われても、リスク原則を100%守り抜きます。'
    },
    section2Badge: '長期生存力の圧倒的な差',
    section2Title: '短期過熱型EA vs 長期検証された真のクオンツ',
    section2Subtitle: '多くの自動売買ソフトが1日・1週間・1ヶ月の派手な利益率を誇張しますが、程なくロスカットされ消えていきます。RealQuantは長期収益率を最大化する方向性を追求します。',
    shortTermHype: {
      badge: '巷に溢れる短期ツールの罠',
      title: '短期利益を誇張するツール',
      headline: '「日利10%、月利100%！」刺激的な数字が招く破綻',
      features: [
        '損切りなしのナンピンマーチンゲールで勝率95%を見せかけ',
        '元本全損リスクを隠蔽した危険極まりないハイレバレッジ設定',
        '数ヶ月持たずに一度の急落で全額強制ロスカット・運営雲隠れ',
        '過去のブラックスワン暴落へのストレステストが皆無'
      ],
      resultLabel: '結末',
      resultText: 'たった一度の予期せぬ相場急変で全資金が強制ロスカット（0円）',
      graphLabel: '急激な上昇後に垂直落下（資金全損）'
    },
    realQuantProof: {
      badge: 'RealQuantの哲学',
      title: '長期収益を追求する本物のクオンツ',
      headline: '月利5〜15%がもたらす揺るぎない長期複利の力',
      features: [
        'ロスカットを絶対許さない妥協なき機械的ストップロス',
        '最大ドローダウン（MDD 15%以内）を厳しく抑え込む防御重視設計',
        'ゴールド5年以上の全期間バックテストデータを完全開示',
        '実際の運用口座連携により複数年にわたる継続性を実証済み'
      ],
      resultLabel: '結末',
      resultText: '下落局面でも元本を守り抜き、継続して右肩上がりの複利成長を維持',
      graphLabel: '安定した右肩上がりの複利曲線'
    },
    bannerQuote: '短期のハイリターンを掲げては消えていく無数のシステムの中で、RealQuantは最後まで生き残り、本物の長期複利利回りを追求し続けるクオンツシステムです。',
    bannerCta: '複利シミュレーションを試す',
    pills: ['感情0%の徹底規律実行', '元本を守るMDD徹底管理', '実証された長期複利成長']
  },

  ru: {
    navTitle: 'Почему RealQuant?',
    badge: 'ПОЧЕМУ REALQUANT',
    title: 'Почему при самостоятельной торговле вы постоянно теряете?',
    subtitle: 'Покупаете на пике в надежде на рост, продаете на дне в панике. Человек подвластен эмоциям, но алгоритм с четкими правилами непоколебим.',
    section1Title: 'Порочный круг эмоциональной торговли vs Квантовая система',
    section1Subtitle: 'Единственный способ победить страх и жадность — доверить управление капиталом 100% алгоритмической системе без человеческого фактора.',
    humanLoop: {
      tag: 'Предел трейдера-человека',
      title: '4 стадии эмоциональной ловушки',
      description: 'Психологические ошибки, через которые проходят 95% частных инвесторов',
      steps: [
        {
          number: '01',
          title: 'Покупка на ажиотаже (FOMO)',
          desc: 'Глядя на резкий рост цен, трейдер в страхе упустить прибыль покупает на самом пике',
          badge: 'Жадность'
        },
        {
          number: '02',
          title: 'Мгновенное падение',
          desc: 'Сразу после сделки рынок разворачивается. В растерянности начинается усреднение',
          badge: 'Растерянность'
        },
        {
          number: '03',
          title: 'Отказ от стоп-лосса',
          desc: 'Нежелание фиксировать убыток приводит к надежде «скоро вернется», убыток растет',
          badge: 'Упрямство'
        },
        {
          number: '04',
          title: 'Панический слив на дне',
          desc: 'На пределе страха позиция закрывается в самый худший момент. Моральное истощение',
          badge: 'Страх'
        }
      ],
      summary: 'Человеком управляют эмоции. Чем больше часов вы проводите у графиков, тем выше риск потерять всё.'
    },
    quantSystem: {
      tag: 'Решение RealQuant',
      title: 'Система 100% дисциплины без эмоций',
      description: 'Математическое превосходство и строгий риск-менеджмент, подтвержденные сотнями тысяч часов бэктестов',
      steps: [
        {
          number: '01',
          title: 'Статистический вход',
          desc: 'Никакой интуиции. Вход только при полном совпадении протестированных вероятностных паттернов',
          badge: 'Данные'
        },
        {
          number: '02',
          title: 'Контроль размера позиций',
          desc: 'Никаких ва-банков. Точное распределение объема строго в рамках лимитов риска',
          badge: 'Безопасность'
        },
        {
          number: '03',
          title: 'Мгновенный стоп-лосс',
          desc: 'Механическое отсечение убытков на уровне ~-2%. Убытки минимальны, прибыль растет по тренду',
          badge: 'Дисциплина'
        },
        {
          number: '04',
          title: 'Жизнь без стресса 24/7',
          desc: 'Не нужно неотрывно следить за котировками. Система безопасно преумножает капитал в облаке',
          badge: 'Спокойствие'
        }
      ],
      summary: 'Запрограммированная система непоколебима. Она на 100% защищает депозит в любых рыночных бурях.'
    },
    section2Badge: 'Выживание важнее хайпа',
    section2Title: 'Краткосрочные боты vs Настоящий долгосрочный квант',
    section2Subtitle: 'Многие программы приукрашивают доходность за день, неделю или месяц, но вскоре сливаются. RealQuant нацелен на повышение долгосрочной доходности.',
    shortTermHype: {
      badge: 'Ловушка типичных роботов',
      title: 'Боты с завышенной доходностью',
      headline: '«10% в день, 100% в месяц!» Опасная иллюзия легких денег',
      features: [
        'Мартингейл и усреднение без стоп-лоссов для рисования винрейта 95%',
        'Скрытый риск полной ликвидации из-за экстремального кредитного плеча',
        'Слив счета до нуля и исчезновение разработчиков через пару месяцев',
        'Полное отсутствие стресс-тестов на исторических обвалах рынка'
      ],
      resultLabel: 'Итог',
      resultText: 'Полная ликвидация счета до нуля при первом же внезапном черном лебеде',
      graphLabel: 'Взлет и последующее обнуление (Ликвидация)'
    },
    realQuantProof: {
      badge: 'Философия RealQuant',
      title: 'Настоящий квант, стремящийся к долгосрочной доходности',
      headline: 'Сила сложного процента: стабильные 5–15% в месяц',
      features: [
        'Нулевая терпимость к ликвидациям: бескомпромиссные механические стопы',
        'Архитектура защиты капитала: ограничение максимальной просадки (MDD < 15%)',
        '100% прозрачные исторические данные бэктеста золота (Gold) за 5+ лет',
        'Подтвержденная устойчивость на реальных счетах через бычьи и медвежьи фазы'
      ],
      resultLabel: 'Итог',
      resultText: 'Сохранение капитала в кризисы и непрерывный сложный рост капитала',
      graphLabel: 'Стабильная экспоненциальная кривая'
    },
    bannerQuote: 'Среди множества однодневных программ, исчезающих после ликвидации, RealQuant выживает до конца и представляет собой настоящий квант, стремящийся к долгосрочной доходности.',
    bannerCta: 'Рассчитать сложный процент',
    pills: ['0% эмоций — строгие правила', 'Защита капитала и контроль MDD', 'Проверенный долгосрочный рост']
  },

  de: {
    navTitle: 'Warum RealQuant?',
    badge: 'WARUM REALQUANT',
    title: 'Warum verliert man beim manuellen Trading immer wieder?',
    subtitle: 'Aus Gier auf dem Höchststand kaufen, aus Panik am Tiefpunkt verkaufen. Menschen lassen sich von Emotionen leiten, ein regelbasiertes System jedoch wankt nie.',
    section1Title: 'Emotionaler Teufelskreis vs. Regelbasiertes Quant-System',
    section1Subtitle: 'Der einzige Weg, die Instinkte von Gier und Angst zu überwinden, ist 100% emotionsloser algorithmischer Handel.',
    humanLoop: {
      tag: 'Grenzen des menschlichen Händlers',
      title: 'Die 4 Stufen der emotionalen Verlustfalle',
      description: 'Psychologische Fehlentscheidungen, die bei 95% der Kleinanleger zum Kapitalverlust führen',
      steps: [
        {
          number: '01',
          title: 'FOMO-Spitzenkauf',
          desc: 'Aus Angst, die Rallye zu verpassen, wird euphorisch genau am Allzeithoch eingestiegen',
          badge: 'Gier'
        },
        {
          number: '02',
          title: 'Sofortiger Absturz',
          desc: 'Direkt nach dem Kauf fällt der Kurs. Verzweifeltes Nachkaufen vergrößert das Verlustrisiko',
          badge: 'Verwirrung'
        },
        {
          number: '03',
          title: 'Kein Stop-Loss & Aussitzen',
          desc: 'Unfähig, Verluste einzugestehen, wird auf Erholung gehofft, während das Minus eskaliert',
          badge: 'Sturheit'
        },
        {
          number: '04',
          title: 'Panikverkauf am Tiefpunkt',
          desc: 'Vor lauter Angst wird am absoluten Tiefpunkt kapituliert. Dauerhafter Stress am Chart',
          badge: 'Panik'
        }
      ],
      summary: 'Menschen handeln emotional. Je mehr Stunden man vor dem Chart verbringt, desto höher die Fehlerquote.'
    },
    quantSystem: {
      tag: 'Die RealQuant-Lösung',
      title: '100% emotionsfreies Regel-Ausführungssystem',
      description: 'Mathematischer Vorteil und kompromissloses Risikomanagement aus Hunderttausenden Stunden Backtesting',
      steps: [
        {
          number: '01',
          title: 'Statistisch validierter Einstieg',
          desc: 'Kein Bauchgefühl. Einstiege erfolgen nur bei historisch nachgewiesenen statistischen Wahrscheinlichkeiten',
          badge: 'Datenbasiert'
        },
        {
          number: '02',
          title: 'Strenge Positionsgrößen',
          desc: 'Keine All-In-Wetten. Jede Position ist präzise auf das maximale Risikobudget abgestimmt',
          badge: 'Sicherheit'
        },
        {
          number: '03',
          title: 'Mechanischer Stop-Loss',
          desc: 'Sofortiger Schnitt bei ca. -2% Verlust. Verluste werden minimiert, Gewinne laufen gelassen',
          badge: 'Disziplin'
        },
        {
          number: '04',
          title: '24/7 stressfreies Leben',
          desc: 'Kein stundenlanges Beobachten nötig. Das System arbeitet rund um die Uhr sicher im Hintergrund',
          badge: 'Lebensqualität'
        }
      ],
      summary: 'Ein programmiertes Regelsystem gerät niemals ins Wanken. Es schützt Ihr Kapital in jeder Marktphase.'
    },
    section2Badge: 'Überlebensfähigkeit zählt',
    section2Title: 'Kurzfristige Hype-Bots vs. Langfristig bewährter echter Quant',
    section2Subtitle: 'Viele Programme übertreiben kurzfristige Tages-, Wochen- oder Monatsrenditen, werden aber bald liquidiert. RealQuant strebt nach einer Maximierung der langfristigen Rentabilität.',
    shortTermHype: {
      badge: 'Die Falle typischer Trading-Bots',
      title: 'Kurzfristige Hype-Programme',
      headline: '„10% pro Tag, 100% im Monat!“ Die Illusion schneller Gewinne',
      features: [
        'Martingale-Strategie ohne Stop-Loss erzeugt künstliche 95% Trefferquote',
        'Verstecktes Totalverlustrisiko durch unkontrollierten Hebeleinsatz',
        'Nach wenigen Monaten bei Trendwechseln vollständig liquidiert',
        'Keinerlei Stresstests gegen historische Black-Swan-Crashs'
      ],
      resultLabel: 'Ergebnis',
      resultText: 'Totalverlust (Liquidierung auf 0 €) beim ersten unvorhergesehenen Crash',
      graphLabel: 'Kurzer Höhenflug, gefolgt von Absturz auf Null'
    },
    realQuantProof: {
      badge: 'Die RealQuant-Philosophie',
      title: 'Echtes Quant-System, das auf langfristigen Ertrag ausgerichtet ist',
      headline: 'Die Kraft von 5–15% monatlichem stetigem Zinseszins',
      features: [
        'Null Toleranz für Liquidationen: kompromisslose mechanische Stop-Loss-Orders',
        'Verteidigungsorientierte Architektur: Begrenzung des maximalen Drawdowns (MDD < 15%)',
        '100% transparente Gold-Backtest-Daten über mehr als 5 Jahre',
        'Auf echten Konten über mehrere Bullen- und Bärenzyklen verifiziert'
      ],
      resultLabel: 'Ergebnis',
      resultText: 'Kapitalschutz in Krisenphasen und kontinuierlicher Zinseszinszuwachs',
      graphLabel: 'Stetig steigende Zinseszins-Kurve'
    },
    bannerQuote: 'Während unzählige kurzlebige Programme nach Liquidationen verschwinden, überlebt RealQuant bis zum Schluss und ist ein echtes Quant-System, das auf langfristigen Ertrag ausgerichtet ist.',
    bannerCta: 'Zinseszins simulieren',
    pills: ['0% Emotionen — Strikte Regeln', 'Kapitalschutz mit MDD-Kontrolle', 'Nachgewiesener Zinseszins']
  },

  fr: {
    navTitle: 'Pourquoi RealQuant ?',
    badge: 'POURQUOI REALQUANT',
    title: 'Pourquoi perd-on constamment en tradant manuellement ?',
    subtitle: 'Acheter au plus haut par peur de rater le train, vendre au plus bas dans la panique. L’être humain est guidé par l’émotion, mais un algorithme rigoureux ne dévie jamais.',
    section1Title: 'Spirale émotionnelle humaine vs Système quantitatif codifié',
    section1Subtitle: 'Le seul moyen de surmonter la cupidité et la panique est d’adopter un système algorithmique 100% impartial.',
    humanLoop: {
      tag: 'Limites du trader humain',
      title: 'Le piège des 4 étapes de pertes émotionnelles',
      description: 'Les biais psychologiques conduisant 95% des investisseurs particuliers à l’érosion de leur capital',
      steps: [
        {
          number: '01',
          title: 'Achat FOMO au sommet',
          desc: 'Voyant les cours s’envoler, achat compulsif au plus haut niveau par peur d’être exclu',
          badge: 'Cupidité'
        },
        {
          number: '02',
          title: 'Chute immédiate',
          desc: 'Dès l’achat, le marché plonge. Tentative désespérée de rachat à la baisse qui aggrave le risque',
          badge: 'Confusion'
        },
        {
          number: '03',
          title: 'Refus du Stop-Loss',
          desc: 'Refusant de concrétiser la perte dans l’espoir d’un rebond, les pertes deviennent colossales',
          badge: 'Obstination'
        },
        {
          number: '04',
          title: 'Vente panique au plus bas',
          desc: 'Capitulation au creux du marché par terreur. Journées entières gâchées devant les graphiques',
          badge: 'Peur'
        }
      ],
      summary: 'L’humain est asservi à ses émotions. Plus vous passez de temps devant les graphiques, plus le risque d’échec augmente.'
    },
    quantSystem: {
      tag: 'La Solution RealQuant',
      title: 'Système d’exécution 100% affranchi de toute émotion',
      description: 'Avantage probabiliste et gestion drastique du risque validés par des centaines de milliers d’heures de backtests',
      steps: [
        {
          number: '01',
          title: 'Entrée statistique ciblée',
          desc: 'Aucune intuition. Entrée uniquement lors de signaux probabilistes rigoureusement validés',
          badge: 'Data-Driven'
        },
        {
          number: '02',
          title: 'Dimensionnement strict des positions',
          desc: 'Aucun pari disproportionné. Chaque position respecte strictement le budget de risque global',
          badge: 'Sécurité'
        },
        {
          number: '03',
          title: 'Stop-Loss mécanique sans hésitation',
          desc: 'Coupure nette à ~-2%. Les pertes sont minimes et les gains s’accumulent au fil des tendances',
          badge: 'Discipline'
        },
        {
          number: '04',
          title: 'Sérénité 24h/24 et 7j/7',
          desc: 'Inutile de surveiller les cours en permanence. Le système fait fructifier votre capital en toute autonomie',
          badge: 'Tranquillité'
        }
      ],
      summary: 'Un système aux règles gravées dans le marbre ne vacille jamais. Il préserve vos capitaux dans toutes les tempêtes.'
    },
    section2Badge: 'La survie avant tout',
    section2Title: 'Bots éphémères vs Vrai système quantitatif durable',
    section2Subtitle: 'De nombreux programmes vantent des rendements spectaculaires sur quelques jours avant d’être liquidés. RealQuant vise à maximiser la rentabilité à long terme.',
    shortTermHype: {
      badge: 'Le piège des robots classiques',
      title: 'Logiciels aux promesses mirifiques',
      headline: '« 10% par jour, 100% par mois ! » L’illusion mortelle du gain facile',
      features: [
        'Martingale sans stop-loss pour afficher un taux de réussite artificiel de 95%',
        'Risque de liquidation totale masqué par des effets de levier démesurés',
        'Disparition et compte liquidé au bout de quelques mois lors d’un changement de tendance',
        'Aucun test de résistance face aux krachs historiques majeurs'
      ],
      resultLabel: 'Bilan',
      resultText: 'Liquidation totale du compte à 0 € au premier choc inattendu',
      graphLabel: 'Flambée temporaire suivie d’une chute verticale'
    },
    realQuantProof: {
      badge: 'La Philosophie RealQuant',
      title: 'Un véritable système quantitatif visant des rendements à long terme',
      headline: 'La puissance d’une croissance composée résiliente de 5 à 15% par mois',
      features: [
        'Zéro tolérance pour la liquidation : stop-loss mécaniques non négociables',
        'Architecture défensive limitant strictement le Drawdown maximal (MDD < 15%)',
        'Données de backtest complètes et transparentes sur l\'or (Gold) depuis plus de 5 ans',
        'Validation sur comptes réels à travers les phases haussières et baissières'
      ],
      resultLabel: 'Bilan',
      resultText: 'Préservation du capital en temps de crise et croissance continue des intérêts composés',
      graphLabel: 'Trajectoire exponentielle régulière'
    },
    bannerQuote: 'Tandis que de multiples outils éphémères disparaissent après liquidation, RealQuant traverse les cycles et reste un véritable système quantitatif visant des rendements à long terme.',
    bannerCta: 'Simuler les rendements composés',
    pills: ['0% d’émotion — Règles d’airain', 'Contrôle MDD & Sécurité du capital', 'Rendement composé éprouvé']
  },

  hi: {
    navTitle: 'RealQuant क्यों?',
    badge: 'WHY REALQUANT',
    title: 'खुद ट्रेडिंग करने पर बार-बार नुकसान क्यों होता है?',
    subtitle: 'लालच में आकर शीर्ष पर खरीदना और डरकर सबसे नीचे बेचना। इंसान भावनाओं में बह जाता है, लेकिन नियमों पर आधारित रियलक्वांट कभी नहीं डगमगाता।',
    section1Title: 'मानवीय भावनात्मक ट्रेडिंग चक्र vs नियम-आधारित क्वांट सिस्टम',
    section1Subtitle: 'डर और लालच पर काबू पाने का एकमात्र तरीका मानवीय भावनाओं से पूरी तरह मुक्त एल्गोरिथम ट्रेडिंग है।',
    humanLoop: {
      tag: 'मानव ट्रेडर की सीमाएं',
      title: '4-चरणीय भावनात्मक नुकसान का चक्र',
      description: '95% व्यक्तिगत ट्रेडर्स द्वारा झेली जाने वाली मनोवैज्ञानिक गलतियाँ',
      steps: [
        {
          number: '01',
          title: 'FOMO में शीर्ष पर खरीद',
          desc: 'चार्ट को तेजी से बढ़ते देख छूटने के डर से सबसे ऊपरी स्तर पर खरीदारी',
          badge: 'लालच'
        },
        {
          number: '02',
          title: 'खरीदते ही भारी गिरावट',
          desc: 'खरीदते ही बाजार गिरना शुरू, घबराहट में एवरेजिंग कर जोखिम बढ़ाना',
          badge: 'भ्रम'
        },
        {
          number: '03',
          title: 'स्टॉप-लॉस न लगाना & फंसना',
          desc: 'नुकसान स्वीकार न करना और वापस बढ़ने की उम्मीद में नुकसान को बड़ा करना',
          badge: 'हठ'
        },
        {
          number: '04',
          title: 'पैनिक सेल & मानसिक तनाव',
          desc: 'डर के मारे सबसे निचले स्तर पर बेचना। पूरे दिन चार्ट देखकर तनावग्रस्त रहना',
          badge: 'डर'
        }
      ],
      summary: 'इंसान भावनाओं से संचालित होता है। चार्ट के सामने जितना समय बिताएंगे, नुकसान की संभावना उतनी ही बढ़ जाती है।'
    },
    quantSystem: {
      tag: 'RealQuant समाधान',
      title: '100% भावना-मुक्त नियम निष्पादन प्रणाली',
      description: 'लाखों घंटों के बिग डेटा बैक-टेस्टिंग से प्रमाणित गणितीय बढ़त और सख्त नियंत्रण',
      steps: [
        {
          number: '01',
          title: 'सांख्यिकीय डेटा प्रविष्टि',
          desc: 'अनुमान पर नहीं, बल्कि सिद्ध गणितीय संभावनाओं पर ही सटीक प्रवेश',
          badge: 'डेटा-संचालित'
        },
        {
          number: '02',
          title: 'सख्त पूंजी आवंटन',
          desc: 'एक ही ट्रेड में पूरा पैसा नहीं, पोर्टफोलियो जोखिम सीमा के अनुसार सटीक विभाजन',
          badge: 'सुरक्षा'
        },
        {
          number: '03',
          title: 'स्वचालित त्वरित स्टॉप-लॉस',
          desc: '-2% पर तत्काल यांत्रिक स्टॉप-लॉस। नुकसान छोटा और मुनाफा बड़ा',
          badge: 'अनुशासन'
        },
        {
          number: '04',
          title: '24/7 तनाव-मुक्त जीवन',
          desc: 'चार्ट पर नजर रखने की आवश्यकता नहीं। सिस्टम 24 घंटे सुरक्षित रूप से पूंजी बढ़ाता है',
          badge: 'शांति'
        }
      ],
      summary: 'एक प्रोग्राम किया गया नियम कभी नहीं डगमगाता। यह हर बाजार परिस्थिति में पूंजी की रक्षा करता है।'
    },
    section2Badge: 'अल्पकालिक दिखावा बनाम दीर्घकालिक अस्तित्व',
    section2Title: 'अल्पकालिक हाइप बॉट्स vs दीर्घकालिक सिद्ध असली क्वांट',
    section2Subtitle: 'कई प्रोग्राम दैनिक, साप्ताहिक या मासिक रिटर्न का अतिशयोक्तिपूर्ण प्रचार करते हैं लेकिन जल्द ही लिक्विडेट हो जाते हैं। RealQuant दीर्घकालिक लाभ को अधिकतम करने की दिशा पर केंद्रित है।',
    shortTermHype: {
      badge: 'साधारण बॉट्स का जाल',
      title: 'अल्पकालिक हाइप प्रोग्राम',
      headline: '"रोजाना 10%, महीने में 100%!" आसान मुनाफे का भ्रम',
      features: [
        'स्टॉप-लॉस के बिना मार्टिंगेल का उपयोग कर 95% विन-रेट का झूठा दिखावा',
        'अत्यधिक लीवरेज के साथ मूलधन शून्य होने के जोखिम को छिपाना',
        'कुछ महीनों में खाता पूरी तरह साफ होकर गायब हो जाना',
        'बाजार के ऐतिहासिक क्रैश के खिलाफ कोई सुरक्षा नहीं'
      ],
      resultLabel: 'परिणाम',
      resultText: 'एक ही अचानक गिरावट में पूरा खाता शून्य (लिक्विडेशन)',
      graphLabel: 'तेज उछाल के बाद सीधा शून्य पर गिरना'
    },
    realQuantProof: {
      badge: 'RealQuant दर्शन',
      title: 'दीर्घकालिक लाभ का लक्ष्य रखने वाला असली क्वांट',
      headline: 'हर महीने 5~15% की निरंतर चक्रवृद्धि शक्ति',
      features: [
        'लिक्विडेशन पर शून्य सहनशीलता: गैर-परक्राम्य यांत्रिक स्टॉप-लॉस',
        'अधिकतम गिरावट (MDD < 15%) को सीमित करने वाला रक्षात्मक ढांचा',
        'गोल्ड (Gold) के 5+ वर्षों के पूर्ण बैकटेस्ट डेटा का पारदर्शी खुलासा',
        'असली खातों पर कई वर्षों के तेजी और मंदी के चक्रों में सत्यापित'
      ],
      resultLabel: 'परिणाम',
      resultText: 'संकट में भी पूंजी सुरक्षित और निरंतर चक्रवृद्धि लाभ',
      graphLabel: 'स्थिर ऊपर की ओर चक्रवृद्धि वक्र'
    },
    bannerQuote: 'जहाँ कई अल्पकालिक बॉट जल्दी खत्म हो जाते हैं, वहीं RealQuant अंत तक टिककर वास्तविक दीर्घकालिक लाभ का लक्ष्य रखने वाला सच्चा क्वांट सिस्टम है।',
    bannerCta: 'चक्रवृद्धि मुनाफे का सिमुलेशन करें',
    pills: ['0% भावना — सख्त नियम', 'पूंजी सुरक्षा व MDD नियंत्रण', 'सिद्ध दीर्घकालिक चक्रवृद्धि']
  },

  es: {
    navTitle: '¿Por qué RealQuant?',
    badge: 'WHY REALQUANT',
    title: '¿Por qué se pierde dinero al operar manualmente?',
    subtitle: 'Comprar en máximos por codicia y vender en mínimos por pánico. Los humanos se dejan llevar por la emoción; un algoritmo con reglas claras nunca titubea.',
    section1Title: 'Bucle emocional humano vs Sistema cuantitativo de reglas',
    section1Subtitle: 'La única forma de vencer la avaricia y el pánico es delegar la operativa en un sistema 100% algorítmico sin sesgo emocional.',
    humanLoop: {
      tag: 'Límites del trader humano',
      title: 'La trampa de 4 etapas de pérdidas emocionales',
      description: 'Los sesgos psicológicos que llevan al 95% de los inversores minoristas a destruir su capital',
      steps: [
        {
          number: '01',
          title: 'Compra por FOMO en la cima',
          desc: 'Viendo subir los precios, compra compulsiva en el punto más alto por temor a perder la ola',
          badge: 'Codicia'
        },
        {
          number: '02',
          title: 'Desplome inmediato',
          desc: 'Nada más comprar, el precio cae. En pánico se promedia a la baja aumentando el riesgo',
          badge: 'Confusión'
        },
        {
          number: '03',
          title: 'Falta de Stop-Loss y atrapado',
          desc: 'Rechazando asumir la pérdida con la esperanza de que vuelva a subir, el pozo se hace gigante',
          badge: 'Terquedad'
        },
        {
          number: '04',
          title: 'Venta de pánico en el fondo',
          desc: 'Incapaz de soportar el dolor, venta masiva en el peor momento. Días agotadores pegado al gráfico',
          badge: 'Pánico'
        }
      ],
      summary: 'El ser humano es dominado por las emociones. Cuanto más tiempo pasa mirando gráficos, mayor es la probabilidad de perder.'
    },
    quantSystem: {
      tag: 'La Solución RealQuant',
      title: 'Sistema de ejecución 100% libre de emociones',
      description: 'Ventaja matemática y riguroso control del riesgo validados por cientos de miles de horas de backtest',
      steps: [
        {
          number: '01',
          title: 'Entrada estadística precisa',
          desc: 'Cero intuición. Entradas ejecutadas únicamente ante ventajas probabilísticas históricas comprobadas',
          badge: 'Datos'
        },
        {
          number: '02',
          title: 'Gestión estricta de posición',
          desc: 'Prohibido apostarlo todo. Asignación fraccionada ajustada al límite de riesgo de la cartera',
          badge: 'Seguridad'
        },
        {
          number: '03',
          title: 'Stop-Loss mecánico sin dudar',
          desc: 'Corte tajante al ~-2%. Pérdidas mínimas y controladas mientras las ganancias crecen con la tendencia',
          badge: 'Disciplina'
        },
        {
          number: '04',
          title: 'Vida libre de estrés 24/7',
          desc: 'No necesitas vigilar el mercado día y noche. El sistema compone tu capital de forma autónoma y segura',
          badge: 'Tranquilidad'
        }
      ],
      summary: 'Un sistema con reglas programadas jamás vacila. Protege tu capital en cualquier tormenta del mercado.'
    },
    section2Badge: 'Supervivencia sobre el bombo publicitario',
    section2Title: 'Bots de hype a corto plazo vs Auténtico Quant a largo plazo',
    section2Subtitle: 'Muchos programas exageran llamativos rendimientos diarios o mensuales, pero acaban siendo liquidados en poco tiempo. RealQuant persigue la dirección de maximizar el rendimiento a largo plazo.',
    shortTermHype: {
      badge: 'La trampa de los bots convencionales',
      title: 'Programas de exageración a corto plazo',
      headline: '«¡10% diario, 100% al mes!» El engaño de los números fáciles',
      features: [
        'Estrategias de martingala sin stop-loss para simular un 95% de acierto',
        'Riesgo oculto de liquidación total con apalancamientos disparatados',
        'Desaparición y cuenta a cero en pocos meses ante un cambio de tendencia',
        'Nula prueba de estrés frente a caídas históricas de tipo cisne negro'
      ],
      resultLabel: 'Desenlace',
      resultText: 'Liquidación total de la cuenta (0 €) ante la primera caída imprevista',
      graphLabel: 'Subida abrupta seguida de desplome a cero'
    },
    realQuantProof: {
      badge: 'La Filosofía RealQuant',
      title: 'Un auténtico sistema cuantitativo enfocado en el rendimiento a largo plazo',
      headline: 'El poder del interés compuesto constante del 5 al 15% mensual',
      features: [
        'Tolerancia cero a la liquidación: órdenes de stop-loss mecánicas innegociables',
        'Arquitectura defensiva limitando el Drawdown Máximo (MDD < 15%)',
        'Divulgación 100% transparente de datos de backtest de Oro (Gold) de más de 5 años',
        'Verificación en cuentas reales a través de ciclos alcistas y bajistas'
      ],
      resultLabel: 'Desenlace',
      resultText: 'Preservación del capital en crisis y crecimiento compuesto continuo',
      graphLabel: 'Curva exponencial ascendente constante'
    },
    bannerQuote: 'Mientras incontables programas efímeros desaparecen tras ser liquidados, RealQuant permanece y es un auténtico sistema cuantitativo enfocado en el rendimiento a largo plazo.',
    bannerCta: 'Simular rendimientos compuestos',
    pills: ['0% Emoción — Reglas Estrictas', 'Control MDD y Protección de Capital', 'Crecimiento Compuesto Comprobado']
  },

  ar: {
    navTitle: 'لماذا RealQuant؟',
    badge: 'لماذا REALQUANT',
    title: 'لماذا يخسر المتداولون باستمرار عند التداول اليدوي؟',
    subtitle: 'الشراء في القمة بدافع الطمع، والبيع في القاع بدافع الذعر. البشر تحركهم العواطف، بينما نظام RealQuant المبرمج بالقواعد الصارمة لا يتزعزع أبداً.',
    section1Title: 'حلقة التداول العاطفي للبشر vs نظام كوانت المبرمج بالقواعد',
    section1Subtitle: 'الطريقة الوحيدة للتغلب على غرائز الخوف والطمع هي التداول الخوارزمي بنسبة 100% دون أي تدخل للعواطف البشرية.',
    humanLoop: {
      tag: 'حدود المتداول البشري',
      title: 'فخ الخسارة العاطفي المكون من 4 مراحل',
      description: 'الأخطاء النفسية وتآكل رأس المال التي يمر بها 95% من المتداولين الأفراد',
      steps: [
        {
          number: '01',
          title: 'الشراء بالقمة (FOMO)',
          desc: 'رؤية الشموع الخضراء تتصاعد والشراء في أعلى نقطة خوفاً من فوات الفرصة',
          badge: 'طمع'
        },
        {
          number: '02',
          title: 'الهبوط المباشر بعد الشراء',
          desc: 'بمجرد الشراء ينعكس السوق، وفي حالة من الارتباك يبدأ التبريد وتزداد المخاطر',
          badge: 'حيرة'
        },
        {
          number: '03',
          title: 'رفض وقف الخسارة والتعليق',
          desc: 'رفض تقبل الخسارة أملاً في ارتداد وهمي، حتى تتفاقم الخسائر ككرة الثلج',
          badge: 'عناد'
        },
        {
          number: '04',
          title: 'البيع بذعر عند أدنى قاع',
          desc: 'الاستسلام والبيع في أسوأ نقطة بالأسفل تحت وطأة الخوف، وضياع اليوم أمام الشاشات',
          badge: 'خوف'
        }
      ],
      summary: 'البشر تحكمهم العواطف. كلما قضيت ساعات أطول في مراقبة الشاشات، زادت احتمالية خسارة كل شيء.'
    },
    quantSystem: {
      tag: 'حل RealQuant',
      title: 'نظام تنفيذ القواعد بنسبة 100% خالٍ من العواطف',
      description: 'أفضلية إحصائية وإدارة مخاطر صارمة مثبتة بمئات آلاف الساعات من الاختبارات التاريخية',
      steps: [
        {
          number: '01',
          title: 'الدخول القائم على الإحصاء',
          desc: 'لا مجال للحدس والتخمين. الدخول فقط عندما تتطابق المؤشرات الإحصائية ذات الاحتمالية العالية',
          badge: 'مبني على البيانات'
        },
        {
          number: '02',
          title: 'إدارة صارمة لحجم المراكز',
          desc: 'منع المجازفة بكامل الرصيد، وتوزيع الصفقات بدقة وفقاً لحدود مخاطر المحفظة',
          badge: 'أمان'
        },
        {
          number: '03',
          title: 'وقف خسارة ميكانيكي حاسم',
          desc: 'قطع آلي فوري عند حوالي -2%. الخسائر صغيرة ومحدودة، بينما الأرباح تستمر مع الاتجاه',
          badge: 'انضباط'
        },
        {
          number: '04',
          title: 'حياة بلا توتر 24/7',
          desc: 'لا داعي لمراقبة الرسوم البيانية ليل نهار. النظام ينمي رأس المال بأمان وبشكل تراكمي',
          badge: 'راحة البال'
        }
      ],
      summary: 'النظام المحكوم بالقواعد لا يتزعزع أبداً. يحمي رأس مالك في جميع تقلبات وعواصف السوق.'
    },
    section2Badge: 'البقاء والاستمرارية',
    section2Title: 'برامج التداول الوهمية القصيرة vs نظام كوانت الحقيقي طويل الأمد',
    section2Subtitle: 'العديد من البرامج تبالغ في عوائد يومية أو شهرية زائفة لكن سرعان ما تتعرض للتصفية. يسعى RealQuant نحو تعظيم العوائد طويلة الأجل.',
    shortTermHype: {
      badge: 'فخ البوتات التقليدية',
      title: 'برامج الترويج اللحظي',
      headline: '«10% يومياً، 100% شهرياً!» وهم الربح السريع الخادع',
      features: [
        'استخدام استراتيجيات مارتينجيل دون وقف خسارة لتزييف نسبة نجاح 95%',
        'إخفاء خطر التصفية الكاملة باستخدام رافعات مالية جنونية',
        'تصفية الحساب واختفاء المطورين في غضون بضعة أشهر عند تغير الاتجاه',
        'غياب كامل لاختبارات الإجهاد ضد انهيارات البجعة السوداء التاريخية'
      ],
      resultLabel: 'النتيجة',
      resultText: 'تصفية الحساب بالكامل إلى الصفر عند أول هبوط مفاجئ وغير متوقع',
      graphLabel: 'صعود مفاجئ يليه هبوط عمودي نحو الصفر'
    },
    realQuantProof: {
      badge: 'فلسفة RealQuant',
      title: 'نظام كوانت حقيقي يسعى لتحقيق عوائد طويلة الأمد',
      headline: 'قوة العائد التراكمي المستقر بنسبة 5~15% شهرياً',
      features: [
        'لا تهاون مع التصفية: أوامر وقف خسارة ميكانيكية غير قابلة للتفاوض',
        'هيكل دفاعي يحد من أقصى تراجع (MDD) بأقل من 15%',
        'كشف شفاف بنسبة 100% لبيانات الاختبارات التاريخية الكاملة للذهب لأكثر من 5 سنوات',
        'متحقق منها على حسابات حقيقية عبر دورات الصعود والهبوط لعدة سنوات'
      ],
      resultLabel: 'النتيجة',
      resultText: 'حماية رأس المال في الأزمات ونمو تراكمي مستمر',
      graphLabel: 'منحنى أرباح تراكمي تصاعدي ثابت'
    },
    bannerQuote: 'بينما تتلاشى البرامج اللحظية بعد التصفية، يظل RealQuant صامداً كنظام كوانت حقيقي يسعى لتحقيق عوائد طويلة الأمد.',
    bannerCta: 'محاكاة الأرباح التراكمية',
    pills: ['0% عواطف — انضباط تام', 'حماية رأس المال وضبط MDD', 'نمو تراكمي مثبت']
  }
};
