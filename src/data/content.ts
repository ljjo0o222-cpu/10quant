export const translations = {
  ko: {
    nav: {
      home: '홈',
      partners: '파트너',
      strategies: 'RealQuant 전략',
      quantStrategies: 'RealQuant 전략',
      performance: '백테스트',
      actualReturns: '실제 수익률',
      admin: '관리자',
    },
    hero: {
      title: '데이터로 증명하는 리얼한 수익. 리얼퀀트',
      subtitle: 'RealQuant는 고도화된 알고리즘과 빅데이터 분석을 통해 감정을 배제하고, 수익에만 집중하여 안정적인 수익을 창출합니다.',
      cta: '커뮤니티 입장하기',
    },
    partners: {
      tag: '01 / 파트너',
      title: '글로벌 외환 규제기관에 등록된 거래소들의 지원을 받습니다',
      desc: '전세계 글로벌 CFD·FX 거래소들과 기술 파트너들의 신뢰를 받고 있습니다.',
      viewMore: '더 보기 +',
    },
    features: {
      title: 'RealQuant 전략',
      items: [
        {
          title: '머신러닝 기반 예측 모델',
          desc: '수백만 개의 시장 데이터를 실시간으로 분석하여 최적의 매매 타이밍을 포착합니다.',
        },
        {
          title: '리스크 관리 시스템',
          desc: '시장 변동성에 대응하는 동적 자산 배분으로 포트폴리오의 안정성을 극대화합니다.',
        },
        {
          title: '순환매 시스템',
          desc: '시장의 자금 흐름을 추적하여 순환매가 발생하는 섹터와 종목을 선제적으로 포착합니다.',
        },
        {
          title: '추세+역추세 혼합 작동',
          desc: '강한 추세 구간과 박스권 역추세 구간을 구분하여 최적의 로직을 자동으로 전환합니다.',
        },
        {
          title: '적응형 회복 논리',
          desc: '손실 발생 시 시장 상황에 맞춰 회복 속도를 조절하는 지능형 복구 알고리즘을 가동합니다.',
        },
        {
          title: '초고속 매매 인프라',
          desc: '지연 시간을 최소화한 시스템 트레이딩으로 시장의 미세한 기회를 선점합니다.',
        },
      ],
    },
    quantStrategies: {
      title: 'RealQuant 전략',
      items: [
        { name: '알파 전략', desc: 'AUD/CAD 통화쌍' },
        { name: '베타 전략', desc: 'MultiFOREX 다중 통화쌍' },
        { name: '감마 전략', desc: 'XAU/USD 금선물' },
        { name: '델타 전략', desc: 'EUR/USD 통화쌍' },
        { name: '엡실론 전략', desc: 'MultiFOREX2 다중 통화쌍' },
        { name: '헥사 전략', desc: 'USDJPY 통화쌍' },
      ],
    },
    performance: {
      notice: '해당 백테스트의 상세 거래내역은 커뮤니티에서 확인 가능합니다.',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: '잔액 그래프(Balance Graph)',
      stats: {
        currency: '통화',
        deposit: '입금액',
        totalProfit: '수익',
        finalBalance: '최종 잔액',
        roe: '총 수익률',
        annualReturn: '연 환산 수익률',
        monthlyReturn: '월 환산 수익률',
        dailyReturn: '일 환산 수익률',
        totalTrades: '총 거래횟수',
        winRate: '승률',
        maxDrawdown: '최대하락률',
        profitFactor: '이익 요인'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    actualReturns: {
      title: '실제 수익률',
      viewAll: '전체보기',
      viewLess: '줄여서보기',
      weeklyNotice: '상세한 수익률 내용은 커뮤니티에서 확인이 가능합니다.',
    },
    operableItems: {
      title: '운용가능 종목',
      commodities: '원자재',
      currencyPairs: '통화쌍',
    },
    chatSupport: {
      title: '자주 묻는 질문',
      faqList: 'FAQ List',
      chatTitle: '1:1 채팅 서비스',
      chatDesc: '답을 찾을 수 없으신가요? 지원팀과 대화를 시작하세요.',
      chatButton: '채팅 시작',
      floatingButton: '1:1 채팅',
      faqs: [
        { question: '백테스팅과 실제 수익률은 진짜인가요?', answer: '백테스팅과 실제 수익률은 100% 사실이며, 거래 플랫폼에서 제공하는 화면이기 때문에 조작할 수 없습니다.' },
        { question: 'RealQuant는 무료인가요?', answer: '네. 100% 무료입니다. 수익에 대한 운용보수를 받거나, 프로그램의 월결제 비용 등을 별도로 받지 않습니다.' },
        { question: '최소 투자 금액은 얼마인가요?', answer: '포지션의 최소 계약 수량이 있기 때문에 500 USDT(테더)부터 가능합니다.' },
        { question: '내 투자금은 안전한가요?', answer: 'RealQuant는 고객의 자금을 직접 수취하지 않습니다. 고객님의 거래소 계정과 RealQuant가 연동되는 시스템이며, 저희는 포지션에 대한 진입과 청산 권한만 가질 뿐 입출금 권한은 없기 때문에 고객님의 자산은 안전합니다.' },
        { question: '어떤 전략으로 수익을 내나요?', answer: 'RealQuant는 고도화된 알고리즘(순환매 시스템, 동적 변동성 적응, 추세+역추세 혼합 작동, 적응형 회복 논리)을 결합하여 만든 퀀트 프로그램입니다. AUDCAD(호주달러/캐나다달러 통화쌍)와 XAUUSD(금)를 거래하여 수익을 창출합니다.' },
        { question: '전략 설정은 어떻게 하나요?', answer: '전략 설정은 고객 개개인의 의사가 필요하지 않으며 별도의 설정이 필요 없습니다. (100% 자동화 24/7) 커뮤니티 입장 시 가이드가 준비되어 있습니다. 가이드를 참고해 주세요.' },
        { question: '수익금 출금은 어떻게 하나요?', answer: '커뮤니티 입장 시 가이드가 준비되어 있습니다. 가이드를 참고해 주세요.' }
      ]
    },
    footer: {
      desc: 'RealQuant는 데이터 기반의 계량 투자 솔루션을 제공하는 퀀트 전문 기업입니다.',
      disclaimer: '자동 매매 시스템 및 솔루션은 수익을 보장하는 상품이 아닙니다. 시장의 특성상 주기성이 존재하기 때문에 수익이 발생하는 주기와 손실이 발생하는 주기가 공존합니다. 확률과 통계학을 바탕으로 시드가 점진적으로 우상향하는 것을 지향하고 있으며, 본 웹사이트에 표현된 백테스트와 실제 수익률은 과거의 성과에 해당합니다. 과거 성과는 향후 성과를 단편적으로 예측할 수 있을 뿐, 고객의 원금을 보장하지 아니하고, 수익을 보장하지 않는다는 점을 인지해 주시기 바랍니다.',
      rights: '© 2026 RealQuant. All rights reserved.',
    },
    admin: { title: '관리자 대시보드', tabs: { posts: '게시물 관리', settings: '디자인 설정' }, posts: { add: '새 게시물 추가', edit: '수정', delete: '삭제', save: '저장', cancel: '취소', titleLabel: '제목', contentLabel: '내용', imageLabel: '이미지 URL' }, settings: { themeColor: '메인 테마 컬러', fontFamily: '메인 폰트', save: '설정 저장' } }
  },
  en: {
    nav: { home: 'Home', partners: 'Partners', strategies: 'RealQuant Strategy', quantStrategies: 'RealQuant Strategy', performance: 'Backtest', actualReturns: 'Actual Returns', admin: 'Admin' },
    hero: { title: 'Real Returns Proven by Data. RealQuant', subtitle: 'RealQuant creates stable returns by excluding emotions and focusing solely on profit through advanced algorithms and big data analysis.', cta: 'Join Community' },
    partners: { tag: '01 / Partners', title: 'Supported by Industry Leaders and Institutions', desc: 'Trusted by the world\'s leading financial institutions and technology partners.', viewMore: 'View More +' },
    features: { title: 'RealQuant Strategy', items: [{ title: 'Machine Learning-Based Prediction Model', desc: 'Analyzes millions of market data points in real-time to capture optimal trading timing.' }, { title: 'Risk Management System', desc: 'Maximizes portfolio stability with dynamic asset allocation responding to market volatility.' }, { title: 'Rotation System', desc: 'Tracks market fund flows to capture sectors and stocks where rotation occurs.' }, { title: 'Trend + Counter-Trend Hybrid Operation', desc: 'Distinguishes between strong trend sections and box-range counter-trend sections to automatically switch optimal logic.' }, { title: 'Adaptive Recovery Logic', desc: 'Operates an intelligent recovery algorithm that adjusts the recovery speed according to market conditions when a loss occurs.' }, { title: 'Ultra-Low Latency Infrastructure', desc: 'Seizes minute opportunities in the market through system trading that minimizes latency.' }] },
    quantStrategies: { title: 'RealQuant Strategy', items: [{ name: 'Alpha Strategy', desc: 'AUD/CAD Currency Pair' }, { name: 'Beta Strategy', desc: 'MultiFOREX Multi-Currency Pair' }, { name: 'Gamma Strategy', desc: 'XAU/USD Gold Futures' }, { name: 'Delta Strategy', desc: 'EUR/USD Currency Pair' }, { name: 'Epsilon Strategy', desc: 'MultiFOREX2 Multi-Currency Pair' }, { name: 'Hexa Strategy', desc: 'USDJPY Currency Pair' }] },
    performance: {
      notice: 'Detailed backtest trading history can be checked in the community',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: 'Balance Graph',
      stats: {
        currency: 'Currency',
        deposit: 'Deposit amount',
        totalProfit: 'Total profit',
        finalBalance: 'Final balance',
        roe: 'ROE',
        annualReturn: 'Annual rate of return',
        monthlyReturn: 'Monthly rate of return',
        dailyReturn: 'Daily return',
        totalTrades: 'Total trades',
        winRate: 'Win rate',
        maxDrawdown: 'Max drawdown',
        profitFactor: 'Profit factor'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: 'Frequently Asked Questions',
      faqList: 'FAQ List',
      chatTitle: '1:1 Chat Service',
      chatDesc: 'Can\'t find the answer? Start a conversation with our support team.',
      chatButton: 'Start Chat',
      floatingButton: '1:1 Chat',
      faqs: [
        { question: 'Are backtests and actual returns real?', answer: 'Backtests and actual returns are 100% real, and since they are screens provided by the trading platform, they cannot be manipulated.' },
        { question: 'Is RealQuant free?', answer: 'Yes. It is 100% free. We do not receive management fees for profits, nor do we charge separate monthly fees for the program.' },
        { question: 'What is the minimum investment amount?', answer: 'Since there is a minimum contract quantity for positions, it is possible from 500 USDT (Tether).' },
        { question: 'Is my investment safe?', answer: 'RealQuant does not directly receive customer funds. It is a system where your exchange account and RealQuant are linked, and we only have the authority to make buy and sell decisions for positions, not the authority to deposit or withdraw funds, so your assets are safe.' },
        { question: 'What strategy do you use to make profit?', answer: 'RealQuant is a quant program created by combining advanced algorithms (Rotation System, Dynamic Volatility Adaptation, Trend + Counter-Trend Mixed Operation, Adaptive Recovery Logic). It creates profit by trading AUDCAD (AUD/CAD currency pair) and XAUUSD (Gold).' },
        { question: 'How do I set up the strategy?', answer: 'Setting up the strategy does not require the customer\'s individual intention and no separate setting is required. (100% automated 24/7) A guide is prepared when you enter the community. Please refer to the guide.' },
        { question: 'How do I withdraw profits?', answer: 'A guide is prepared when you enter the community. Please refer to the guide.' }
      ]
    },
    actualReturns: { title: 'Actual Returns', viewAll: 'View All', viewLess: 'View Less', weeklyNotice: 'Detailed return information can be checked in the community.' },
    operableItems: { title: 'Operable Items', commodities: 'Commodities', currencyPairs: 'Currency Pairs' },
    footer: {
      desc: 'RealQuant is a quant investment company that provides data-driven quantitative investment solutions.',
      disclaimer: 'Automated trading systems and solutions are not products that guarantee profits. Due to the nature of the market, periodicity exists, so profit periods and loss periods coexist. Based on probability and statistics, we aim for the seed to gradually trend upward, and the backtests and actual returns expressed on this website correspond to past performance. Please clearly understand that past performance can only predict future performance and does not absolutely guarantee the customer\'s principal or profit.',
      rights: '© 2026 RealQuant. All rights reserved.',
    },
    admin: { title: 'Admin Dashboard', tabs: { posts: 'Post Management', settings: 'Design Settings' }, posts: { add: 'Add New Post', edit: 'Edit', delete: 'Delete', save: 'Save', cancel: 'Cancel', titleLabel: 'Title', contentLabel: 'Content', imageLabel: 'Image URL' }, settings: { themeColor: 'Main Theme Color', fontFamily: 'Main Font', save: 'Save Settings' } }
  },
  zh: {
    nav: { home: '首页', partners: '合作伙伴', strategies: 'RealQuant 策略', quantStrategies: 'RealQuant 策略', performance: '回测', actualReturns: '实际收益', admin: '管理员' },
    hero: { title: '数据证明的真实收益。RealQuant', subtitle: 'RealQuant 通过先进的算法和大数据分析，排除情感干扰，专注于盈利，创造稳定的收益。', cta: '加入社区' },
    partners: { tag: '01 / 合作伙伴', title: '受到行业领导者和机构的支持', desc: '深受全球领先金融机构和技术合作伙伴的信赖。', viewMore: '查看更多 +' },
    features: { title: 'RealQuant 策略', items: [{ title: '基于机器学习的预测模型', desc: '实时分析数百万个市场数据点，捕捉最佳交易时机。' }, { title: '风险管理系统', desc: '通过响应市场波动的动态资产配置，最大限度地提高投资组合的稳定性。' }, { title: '轮动系统', desc: '通过追踪市场资金流向，抢先捕捉发生轮动的行业和个股。' }, { title: '趋势+逆趋势混合运行', desc: '区分强趋势区间和震荡逆趋势区间，自动切换最佳逻辑。' }, { title: '自适应恢复逻辑', desc: '启动智能恢复算法，根据市场情况调节亏损时的恢复速度。' }, { title: '超低延迟基础设施', desc: '通过最小化延迟的系统交易，抓住市场中的微小机会。' }] },
    quantStrategies: { title: 'RealQuant 策略', items: [{ name: 'Alpha 策略', desc: 'AUD/CAD 货币对' }, { name: 'Beta 策略', desc: 'MultiFOREX 多货币对' }, { name: 'Gamma 策略', desc: 'XAU/USD 黄金期货' }, { name: 'Delta 策略', desc: 'EUR/USD 货币对' }, { name: 'Epsilon 策略', desc: 'MultiFOREX2 多货币对' }, { name: 'Hexa 策略', desc: 'USDJPY 货币对' }] },
    performance: {
      notice: '详细的回测交易历史可以在社区中查看',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: '余额图表 (Balance Graph)',
      stats: {
        currency: '货币 (Currency)',
        deposit: '存款金额 (Deposit amount)',
        totalProfit: '总利润 (Total profit)',
        finalBalance: '最终余额 (Final balance)',
        roe: '总收益率 (ROE)',
        annualReturn: '年化收益率 (Annual rate of return)',
        monthlyReturn: '月化收益率 (Monthly rate of return)',
        dailyReturn: '日化收益率 (Daily rate of return)',
        totalTrades: '总交易次数 (Total trades)',
        winRate: '胜率 (Win rate)',
        maxDrawdown: '最大回撤 (Max drawdown)',
        profitFactor: '利润因子 (Profit factor)'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: '常见问题',
      faqList: '常见问题列表',
      chatTitle: '1:1 聊天服务',
      chatDesc: '找不到答案？与我们的支持团队开始对话。',
      chatButton: '开始聊天',
      floatingButton: '1:1 聊天',
      faqs: [
        { question: '回测和实际收益是真实的吗？', answer: '回测和实际收益是 100% 真实的，由于它们是交易平台提供的屏幕，因此无法操纵。' },
        { question: 'RealQuant 是免费的吗？', answer: '是的。它是 100% 免费的。我们不收取利润管理费，也不收取程序的单独月费。' },
        { question: '最低投资金额是多少？', answer: '由于头寸有最低合约数量，因此可以从 500 USDT（泰达币）开始。' },
        { question: '我的投资安全吗？', answer: 'RealQuant 不直接接收客户资金。这是一个您的交易所账户和 RealQuant 连接的系统，我们只有权对头寸做出买卖决策，而无权存款或取款，因此您的资产是安全的。' },
        { question: '使用什么策略来实现利润？', answer: 'RealQuant 是一个通过结合先进算法（轮换系统、动态波动率适应、趋势 + 逆趋势混合操作、自适应恢复逻辑）创建的量化程序。它通过交易 AUDCAD（澳元/加元货币对）和 XAUUSD（黄金）来创造利润。' },
        { question: '我该如何设置策略？', answer: '设置策略不需要客户的个人意愿，也不需要单独设置。（100% 全自动 24/7）当您进入社区时，会准备一份指南。请参考该指南。' },
        { question: '我该如何提取利润？', answer: '当您进入社区时，会准备一份指南。请参考该指南。' }
      ]
    },
    actualReturns: { title: '实际收益', viewAll: '全部查看', viewLess: '收起', weeklyNotice: '详细的收益率内容可以在社区中查看。' },
    operableItems: { title: '可操作项目', commodities: '大宗商品', currencyPairs: '货币对' },
    footer: { desc: 'RealQuant 是一家提供数据驱动的量化投资解决方案的量化投资公司。', disclaimer: '自动化交易系统和解决方案不是保证利润的产品。由于市场的性质，存在周期性，因此利润期和亏损期并存。基于概率和统计学，我们的目标是种子资金逐渐呈上升趋势，本网站上表达的回测和实际收益对应于过去的表现。请清楚地理解，过去的表现只能预测未来的表现，绝对不保证客户的本金或利润。', rights: '© 2026 RealQuant. 版权所有।' },
    admin: { title: '管理员控制面板', tabs: { posts: '帖子管理', settings: '设计设置' }, posts: { add: '添加新帖子', edit: '编辑', delete: '删除', save: '保存', cancel: '取消', titleLabel: '标题', contentLabel: '内容', imageLabel: '图片 URL' }, settings: { themeColor: '主主题颜色', fontFamily: '主要字体', save: '保存设置' } }
  },
  ja: {
    nav: { home: 'ホーム', partners: 'パートナー', strategies: 'RealQuant 戦略', quantStrategies: 'RealQuant 戦略', performance: 'バックテスト', actualReturns: '実際の収益', admin: '管理者' },
    hero: { title: 'データで証明するリアルな収益。RealQuant', subtitle: 'RealQuant は、高度なアルゴリズムとビッグデータ分析を通じて感情を排除し、利益のみに集中することで、安定した収益を創出します。', cta: 'コミュニティに参加' },
    partners: { tag: '01 / パートナー', title: '業界のリーダーや機関からサポートを受けています', desc: '世界をリードする金融機関や技術パートナーから信頼されています。', viewMore: 'もっと見る +' },
    features: { title: 'RealQuant 戦略', items: [{ title: '機械学習ベースの予測モデル', desc: '数百万の市場データポイントをリアルタイムで分析し、最適な売買タイミングを捉えます。' }, { title: 'リスク管理システム', desc: '市場の変動に対応する動的な資産配分により、ポートフォリオの安定性を最大化します。' }, { title: '循環物色システム', desc: '市場の資金の流れを追跡し、循環物色が発生するセクターや銘柄を先取りして捉えます。' }, { title: 'トレンド+逆トレンド混合作動', desc: '強いトレンド区間とボックス圏の逆トレンド区間を区別し、最適なロジックを自動的に切り替えます。' }, { title: '適応型回復ロジック', desc: '損失発生時に市場状況に合わせて回復速度を調節するインテリジェントな復旧アルゴリズムを稼働させます。' }, { title: '超低遅延インフラストラクチャ', desc: '遅延を最小限に抑えたシステムトレードにより、市場の微細な機会を先取りします。' }] },
    quantStrategies: { title: 'RealQuant 戦略', items: [{ name: 'アルファ戦略', desc: 'AUD/CAD 通貨ペア' }, { name: 'ベータ戦略', desc: 'MultiFOREX 多通貨ペア' }, { name: 'ガンマ戦略', desc: 'XAU/USD 金先物' }, { name: 'デルタ戦略', desc: 'EUR/USD 通貨ペア' }, { name: 'イプシロン戦略', desc: 'MultiFOREX2 多通貨ペア' }, { name: 'ヘキサ戦略', desc: 'USDJPY 通貨ペア' }] },
    performance: {
      notice: '詳細なバックテストの取引履歴はコミュニティで確認できます',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: '残高グラフ (Balance Graph)',
      stats: {
        currency: '通貨 (Currency)',
        deposit: '入金額 (Deposit amount)',
        totalProfit: '利益 (Total profit)',
        finalBalance: '最終残高 (Final balance)',
        roe: '総収益率 (ROE)',
        annualReturn: '年換算収益率 (Annual rate of return)',
        monthlyReturn: '月換算収益率 (Monthly rate of return)',
        dailyReturn: '日換算収益率 (Daily rate of return)',
        totalTrades: '総取引回数 (Total trades)',
        winRate: '勝率 (Win rate)',
        maxDrawdown: '最大ドローダウン (Max drawdown)',
        profitFactor: '利益要因 (Profit factor)'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: 'よくある質問',
      faqList: 'FAQリスト',
      chatTitle: '1:1 チャットサービス',
      chatDesc: '答えが見つかりませんか？サポートチームとチャットを開始してください。',
      chatButton: 'チャットを開始',
      floatingButton: '1:1 チャット',
      faqs: [
        { question: 'バックテストと実際の収益は本物ですか？', answer: 'バックテストと実際の収益は100%本物であり、取引プラットフォームが提供する画面であるため、偽造することはできません。' },
        { question: 'RealQuantは無料ですか？', answer: 'はい。100%無料です。収益に対する運用報酬を受け取ったり、プログラムの月額費用などを別途受け取ることはありません。' },
        { question: '最低投資金額はいくらですか？', answer: 'ポジションの最小契約数があるため、500 USDT (テザー) から可能です。' },
        { question: '私の投資は安全ですか？', answer: 'RealQuantは顧客の資金を直接受け取りません。お客様の取引所口座とRealQuantが連携され、ポジションの売買決定権のみを持ち、入出金権限はないため、お客様의資産は安全です。' },
        { question: '利益を出すためにどのような戦略が使われていますか？', answer: 'RealQuantは、高度なアルゴリズム（循環物色システム、動的なボラティリティ適応、トレンド+逆トレンド混合作動、適応型回復ロジック）を組み合わせて作成されたクオンツプログラムです。AUDCAD（豪ドル/カナダドル）とXAUUSD（ゴールド）を取引して利益を創出します。' },
        { question: '戦略をどのように設定すればよいですか？', answer: '戦略の設定は、お客様の個別の意図を必要とせず、別途設定する必要もありません。（24時間365日100%自動化）コミュニティに参加するとガイドが用意されています。ガイドを参照してください。' },
        { question: '利益をどのように出金すればよいですか？', answer: 'コミュニティに参加するとガイドが用意されています。ガイドを参照してください。' }
      ]
    },
    actualReturns: { title: '実際の収益', viewAll: '全て表示', viewLess: '閉じる', weeklyNotice: '詳細な収益率の内容はコミュニティで確認できます。' },
    operableItems: { title: '運用可能銘柄', commodities: 'コモディティ', currencyPairs: '通貨ペア' },
    footer: { desc: 'RealQuant は、データ駆動型の計量投資ソリューションを提供するクオンツ専門企業です。', disclaimer: '自動売買システムおよびソリューションは、利益を保証する商品ではありません。市場の性質上、周期性が存在するため、利益が発生する周期と損失が発生する周期が共存します。確率と統計学に基づき、徐々にシードが右肩上がりになることを目指しており、当ウェブサイトに表示されているバックテストと実際の収益率は過去の実績に該当します。過去の実績は将来の実績を予測できるだけであり、絶対にお客様の元本を保証するものではなく、利益を保証するものではないという点を明確に認識してください。', rights: '© 2026 RealQuant. All rights reserved.' },
    admin: { title: '管理者ダッシュボード', tabs: { posts: '投稿管理', settings: 'デザイン設定' }, posts: { add: '新規投稿追加', edit: '編集', delete: '削除', save: '保存', cancel: 'キャンセル', titleLabel: 'タイトル', contentLabel: '内容', imageLabel: '画像 URL' }, settings: { themeColor: 'メインテーマカラー', fontFamily: 'メインフォント', save: '設定を保存' } }
  },
  ru: {
    nav: { home: 'Главная', partners: 'Партнеры', strategies: 'Стратегии RealQuant', quantStrategies: 'Стратегии RealQuant', performance: 'Бэктестинг', actualReturns: 'Реальная доходность', admin: 'Админ' },
    hero: { title: 'Реальная доходность, подтвержденная данными. RealQuant', subtitle: 'RealQuant генерирует стабильную прибыль, исключая эмоции и сосредотачиваясь исключительно на прибыли с помощью передовых алгоритмов и анализа больших данных.', cta: 'Вступить в сообщество' },
    partners: { tag: '01 / ПАРТНЕРЫ', title: 'Поддержка лидеров отрасли и институтов', desc: 'Нам доверяют ведущие финансовые институты и технологические партнеры по всему миру.', viewMore: 'ПОКАЗАТЬ БОЛЬШЕ +' },
    features: { title: 'Стратегии RealQuant', items: [{ title: 'Прогнозные модели на основе ML', desc: 'Анализирует миллионы рыночных данных в режиме реального времени для определения оптимального времени торговли.' }, { title: 'Система управления рисками', desc: 'Максимизирует стабильность портфеля за счет динамического распределения активов в ответ на волатильность рынка.' }, { title: 'Система ротации', desc: 'Отслеживает потоки рыночных средств для упреждающего захвата секторов и акций, в которых происходит ротация.' }, { title: 'Смешанная работа тренда и контртренда', desc: 'Различает участки сильного тренда и участки бокового контртренда для автоматического переключения логики.' }, { title: 'Адаптивная логика восстановления', desc: 'Запускает интеллектуальный алгоритм восстановления, который регулирует скорость восстановления в соответствии с рыночными условиями.' }, { title: 'Инфраструктура с ультранизкой задержкой', desc: 'Использует микровозможности рынка с помощью системной торговли с минимальной задержкой.' }] },
    quantStrategies: { title: 'Стратегии RealQuant', items: [{ name: 'Стратегия Альфа', desc: 'Валютная пара AUD/CAD' }, { name: 'Стратегия Бета', desc: 'Мультивалютные пары MultiFOREX' }, { name: 'Стратегия Гамма', desc: 'Золотые фьючерсы XAU/USD' }, { name: 'Стратегия Дельта', desc: 'Валютная пара EUR/USD' }, { name: 'Стратегия Эпсилон', desc: 'Мультивалютные пары MultiFOREX2' }, { name: 'Стратегия Гекса', desc: 'Валютная пара USDJPY' }] },
    performance: {
      notice: 'Подробную историю сделок бэктеста можно проверить в сообществе',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: 'График баланса (Balance Graph)',
      stats: {
        currency: 'Валюта (Currency)',
        deposit: 'Сумма депозита (Deposit amount)',
        totalProfit: 'Прибыль (Total profit)',
        finalBalance: 'Итоговый баланс (Final balance)',
        roe: 'Общая доходность (ROE)',
        annualReturn: 'Годовая доходность (Annual rate of return)',
        monthlyReturn: 'Месячная доходность (Monthly rate of return)',
        dailyReturn: 'Дневная доходность (Daily rate of return)',
        totalTrades: 'Всего сделок (Total trades)',
        winRate: 'Процент побед (Win rate)',
        maxDrawdown: 'Макс. просадка (Max drawdown)',
        profitFactor: 'Профит-фактор (Profit factor)'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: 'Часто задаваемые вопросы',
      faqList: 'Список FAQ',
      chatTitle: 'Чат-сервис 1:1',
      chatDesc: 'Не можете найти ответ? Начните разговор с нашей службой поддержки.',
      chatButton: 'Начать чат',
      floatingButton: 'Чат 1:1',
      faqs: [
        { question: 'Являются ли бэктестинг и реальная доходность настоящими?', answer: 'Бэктестинг и реальная доходность на 100% реальны и не могут быть подделаны, так как это экраны, предоставляемые торговой платформой.' },
        { question: 'Является ли RealQuant бесплатным?', answer: 'Да. Это 100% бесплатно. Мы не получаем комиссионных за управление прибылью и не взимаем отдельную ежемесячную плату за программу.' },
        { question: 'Какова минимальная сумма инвестиций?', answer: 'Поскольку существует минимальное количество контрактов для позиций, это возможно от 500 USDT (Tether).' },
        { question: 'Безопасны ли мои инвестиции?', answer: 'RealQuant не получает средства клиентов напрямую. Это система, в которой ваш биржевой счет и RealQuant связаны, и у нас есть полномочия только принимать решения о покупке и продаже позиций, а не полномочия на ввод или вывод средств, поэтому ваши активы в безопасности.' },
        { question: 'Какая стратегия используется для достижения прибыли?', answer: 'RealQuant — это квантовая программа, созданная путем сочетания передовых алгоритмов (система ротации, динамическая адаптация к волатильности, смешанная работа тренда и контртренда, адаптивная логика восстановления). Она создает прибыль, торгуя AUDCAD (валютная пара австралийский доллар/канадский доллар) и XAUUSD (золото).' },
        { question: 'Как мне настроить стратегию?', answer: 'Настройка стратегии не требует индивидуального намерения клиента и не требует отдельной настройки. (100% автоматизировано 24/7) Руководство подготавливается при вступлении в сообщество. Пожалуйста, обратитесь к руководству.' },
        { question: 'Как мне вывести прибыль?', answer: 'Руководство подготавливается при вступлении в сообщество. Пожалуйста, обратитесь к руководству.' }
      ]
    },
    actualReturns: { title: 'Реальная доходность', viewAll: 'Показать все', viewLess: 'Скрыть', weeklyNotice: 'Еженедельную доходность можно проверить в сообществе.' },
    operableItems: { title: 'Доступные инструменты', commodities: 'Сырьевые товары', currencyPairs: 'Валютные пары' },
    footer: { desc: 'RealQuant — это количественная инвестиционная фирма, предоставляющая решения для инвестиций на основе данных.', disclaimer: 'Автоматизированные торговые системы и решения не являются продуктами, гарантирующими прибыль. Из-за характера рынка существует периодичность, поэтому периоды прибыли и периоды убытков сосуществуют. Основываясь на вероятности и статистике, мы стремимся к тому, чтобы капитал постепенно рос, а бэктесты и фактическая доходность, представленные на этом веб-сайте, соответствуют прошлым показателям. Пожалуйста, четко понимайте, что прошлые показатели могут только предсказывать будущие показатели и не гарантируют абсолютно основную сумму клиента или прибыль.', rights: '© 2026 RealQuant. Все права защищены.' },
    admin: { title: 'Панель администратора', tabs: { posts: 'Управление постами', settings: 'Настройки дизайна' }, posts: { add: 'Добавить пост', edit: 'Изменить', delete: 'Удалить', save: 'Сохранить', cancel: 'Отмена', titleLabel: 'Заголовок', contentLabel: 'Контент', imageLabel: 'URL изображения' }, settings: { themeColor: 'Основной цвет темы', fontFamily: 'Основной шрифт', save: 'Сохранить настройки' } }
  },
  de: {
    nav: { home: 'Startseite', partners: 'Partner', strategies: 'RealQuant-Strategien', quantStrategies: 'RealQuant-Strategien', performance: 'Backtesting', actualReturns: 'Tatsächliche Renditen', admin: 'Admin' },
    hero: { title: 'Durch Daten belegte reale Renditen. RealQuant', subtitle: 'RealQuant generiert stabile Renditen, indem es Emotionen eliminiert und sich durch fortschrittliche Algorithmen und Big-Data-Analysen ausschließlich auf den Gewinn konzentriert.', cta: 'Community beitreten' },
    partners: { tag: '01 / PARTNER', title: 'Unterstützt von Branchenführern und Institutionen', desc: 'Weltweit vertrauen uns führende Finanzinstitute und Technologiepartner.', viewMore: 'MEHR ANZEIGEN +' },
    features: { title: 'RealQuant-Strategien', items: [{ title: 'ML-basierte Prognosemodelle', desc: 'Analysiert Millionen von Marktdaten in Echtzeit, um den optimalen Handelszeitpunkt zu erfassen.' }, { title: 'Risikomanagementsystem', desc: 'Maximiert die Portfoliostabilität durch dynamische Asset-Allokation als Reaktion auf Marktvolatilität.' }, { title: 'Rotationssystem', desc: 'Verfolgt Marktmittelflüsse, um Sektoren und Aktien zu erfassen, in denen eine Rotation stattfindet.' }, { title: 'Trend + Gegentrend-Mischbetrieb', desc: 'Unterscheidet zwischen starken Trend- und Seitwärtsphasen, um die Logik automatisch umzuschalten.' }, { title: 'Adaptive Erholungslogik', desc: 'Aktiviert einen intelligenten Erholungsalgorithmus, der die Erholungsgeschwindigkeit an die Marktbedingungen anpasst.' }, { title: 'Infrastruktur mit extrem niedriger Latenz', desc: 'Nutzt Mikrochancen am Markt durch Systemhandel mit minimierter Latenz.' }] },
    quantStrategies: { title: 'RealQuant-Strategien', items: [{ name: 'Alpha-Strategie', desc: 'Währungspaar AUD/CAD' }, { name: 'Beta-Strategie', desc: 'MultiFOREX-Währungspaare' }, { name: 'Gamma-Strategie', desc: 'XAU/USD Gold-Futures' }, { name: 'Delta-Strategie', desc: 'Währungspaar EUR/USD' }, { name: 'Epsilon-Strategie', desc: 'MultiFOREX2-Währungspaare' }, { name: 'Hexa-Strategie', desc: 'Währungspaar USDJPY' }] },
    performance: {
      notice: 'Detaillierte Backtest-Handelshistorie kann in der Community überprüft werden',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: 'Saldo-Diagramm (Balance Graph)',
      stats: {
        currency: 'Währung (Currency)',
        deposit: 'Einzahlungsbetrag (Deposit amount)',
        totalProfit: 'Gesamtgewinn (Total profit)',
        finalBalance: 'Endsaldo (Final balance)',
        roe: 'Gesamtrendite (ROE)',
        annualReturn: 'Jährliche Rendite (Annual rate of return)',
        monthlyReturn: 'Monatliche Rendite (Monthly rate of return)',
        dailyReturn: 'Tägliche Rendite (Daily rate of return)',
        totalTrades: 'Gesamtzahl der Trades (Total trades)',
        winRate: 'Gewinnrate (Win rate)',
        maxDrawdown: 'Max. Drawdown (Max drawdown)',
        profitFactor: 'Profitfaktor (Profit factor)'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: 'Häufig gestellte Fragen',
      faqList: 'FAQ-Liste',
      chatTitle: '1:1 Chat-Service',
      chatDesc: 'Sie finden keine Antwort? Beginnen Sie ein Gespräch mit unserem Support-Team.',
      chatButton: 'Chat starten',
      floatingButton: '1:1 Chat',
      faqs: [
        { question: 'Sind Backtesting und tatsächliche Renditen echt?', answer: 'Backtesting und tatsächliche Renditen sind zu 100 % echt und können nicht manipuliert werden, da es sich um Bildschirme handelt, die von der Handelsplattform bereitgestellt werden.' },
        { question: 'Ist RealQuant kostenlos?', answer: 'Ja. Es ist 100 % kostenlos. Wir erhalten keine Verwaltungsgebühren auf Gewinne und erheben keine separaten monatlichen Gebühren für das Programm.' },
        { question: 'Was ist der Mindestanlagebetrag?', answer: 'Da es eine Mindestkontraktmenge für Positionen gibt, ist dies ab 500 USDT (Tether) möglich.' },
        { question: 'Ist meine Investition sicher?', answer: 'RealQuant erhält keine Kundengelder direkt. Es ist ein System, bei dem Ihr Börsenkonto und RealQuant verbunden sind, und wir haben nur die Befugnis, Kauf- und Verkaufsentscheidungen für Positionen zu treffen, nicht die Befugnis, Gelder einzuzahlen oder abzuheben, sodass Ihr Vermögen sicher ist.' },
        { question: 'Welche Strategie wird verwendet, um Gewinne zu erzielen?', answer: 'RealQuant ist ein Quant-Programm, das durch die Kombination fortschrittlicher Algorithmen (Rotationssystem, dynamische Volatilitätsanpassung, Trend + Gegentrend-Mischbetrieb, adaptive Erholungslogik) erstellt wurde. Es erzielt Gewinne durch den Handel mit AUDCAD (Währungspaar Australischer Dollar/Kanadischer Dollar) und XAUUSD (Gold).' },
        { question: 'Wie richte ich die Strategie ein?', answer: 'Die Einrichtung der Strategie erfordert keine individuelle Absicht des Kunden und es ist keine separate Einrichtung erforderlich. (100 % automatisiert rund um die Uhr) Ein Leitfaden wird erstellt, wenn Sie der Community beitreten. Bitte beachten Sie den Leitfaden.' },
        { question: 'Wie hebe ich Gewinne ab?', answer: 'Ein Leitfaden wird erstellt, wenn Sie der Community beitreten. Bitte beachten Sie den Leitfaden.' }
      ]
    },
    actualReturns: { title: 'Tatsächliche Renditen', viewAll: 'Alle anzeigen', viewLess: 'Weniger anzeigen', weeklyNotice: 'Detaillierte Renditeinformationen können in der Community überprüft werden.' },
    operableItems: { title: 'Handelbare Instrumente', commodities: 'Rohstoffe', currencyPairs: 'Währungspaare' },
    footer: { desc: 'RealQuant ist eine quantitative Investmentfirma, die datengesteuerte quantitative Investmentlösungen anbietet.', disclaimer: 'Automatisierte Handelssysteme und Lösungen sind keine Produkte, die Gewinne garantieren. Aufgrund der Art des Marktes besteht eine Periodizität, sodass Gewinn- und Verlustperioden nebeneinander existieren. Basierend auf Wahrscheinlichkeit und Statistik streben wir an, dass das Kapital allmählich nach oben tendiert, und die auf dieser Website ausgedrückten Backtests und tatsächlichen Renditen entsprechen der vergangenen Performance. Bitte haben Sie ein klares Verständnis dafür, dass die vergangene Performance nur die zukünftige Performance vorhersagen kann und das Kapital oder die Gewinne des Kunden nicht absolut garantiert.', rights: '© 2026 RealQuant. Alle Rechte vorbehalten.' },
    admin: { title: 'Admin-Dashboard', tabs: { posts: 'Beitragsverwaltung', settings: 'Design-Einstellungen' }, posts: { add: 'Neuen Beitrag hinzufügen', edit: 'Bearbeiten', delete: 'Löschen', save: 'Speichern', cancel: 'Abbrechen', titleLabel: 'Titel', contentLabel: 'Inhalt', imageLabel: 'Bild-URL' }, settings: { themeColor: 'Hauptthemenfarbe', fontFamily: 'Hauptschriftart', save: 'Einstellungen speichern' } }
  },
  fr: {
    nav: { home: 'Accueil', partners: 'Partenaires', strategies: 'Stratégies RealQuant', quantStrategies: 'Stratégies RealQuant', performance: 'Backtesting', actualReturns: 'Rendements réels', admin: 'Admin' },
    hero: { title: 'Des rendements réels prouvés par les données. RealQuant', subtitle: 'RealQuant génère des rendements stables en éliminant les émotions et en se concentrant uniquement sur le profit grâce à des algorithmes avancés et à l\'analyse de données massives.', cta: 'Rejoindre la communauté' },
    partners: { tag: '01 / PARTENAIRES', title: 'Soutenu par les leaders de l\'industrie et les institutions', desc: 'Fait confiance par les plus grandes institutions financières et partenaires technologiques du monde entier.', viewMore: 'VOIR PLUS +' },
    features: { title: 'Stratégies RealQuant', items: [{ title: 'Modèles de prédiction basés sur le ML', desc: 'Analyse des millions de données de marché en temps réel pour capturer le moment optimal de trading.' }, { title: 'Système de gestion des risques', desc: 'Maximise la stabilité du portefeuille avec une allocation d\'actifs dynamique répondant à la volatilité du marché.' }, { title: 'Système de rotation', desc: 'Suit les flux de fonds du marché pour capturer les secteurs et les actions où une rotation se produit.' }, { title: 'Opération mixte tendance + contre-tendance', desc: 'Distingue les sections de tendance forte et les sections de contre-tendance pour changer automatiquement de logique.' }, { title: 'Logique de récupération adaptative', desc: 'Active un algorithme de récupération intelligent qui ajuste la vitesse de récupération en fonction des conditions du marché.' }, { title: 'Infrastructure à ultra-faible latence', desc: 'Saisit les micro-opportunités du marché grâce à un trading système à latence minimisée.' }] },
    quantStrategies: { title: 'Stratégies RealQuant', items: [{ name: 'Stratégie Alpha', desc: 'Paire de devises AUD/CAD' }, { name: 'Stratégie Bêta', desc: 'Paires de devises MultiFOREX' }, { name: 'Stratégie Gamma', desc: 'Contrats à terme sur l\'or XAU/USD' }, { name: 'Stratégie Delta', desc: 'Paire de devises EUR/USD' }, { name: 'Stratégie Epsilon', desc: 'Paires de devises MultiFOREX2' }, { name: 'Stratégie Hexa', desc: 'Paire de devises USDJPY' }] },
    performance: {
      notice: 'L\'historique détaillé des transactions du backtest peut être consulté dans la communauté',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: 'Graphique du solde (Balance Graph)',
      stats: {
        currency: 'Devise (Currency)',
        deposit: 'Montant du dépôt (Deposit amount)',
        totalProfit: 'Profit total (Total profit)',
        finalBalance: 'Solde final (Final balance)',
        roe: 'Rendement total (ROE)',
        annualReturn: 'Taux de rendement annuel (Annual rate of return)',
        monthlyReturn: 'Taux de rendement mensuel (Monthly rate of return)',
        dailyReturn: 'Taux de rendement quotidien (Daily rate of return)',
        totalTrades: 'Nombre total de transactions (Total trades)',
        winRate: 'Taux de réussite (Win rate)',
        maxDrawdown: 'Perte maximale (Max drawdown)',
        profitFactor: 'Facteur de profit (Profit factor)'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: 'Foire aux questions',
      faqList: 'Liste des FAQ',
      chatTitle: 'Service de chat 1:1',
      chatDesc: 'Vous ne trouvez pas la réponse ? Commencez une conversation avec notre équipe d\'assistance.',
      chatButton: 'Démarrer le chat',
      floatingButton: 'Chat 1:1',
      faqs: [
        { question: 'Le backtesting et les rendements réels sont-ils réels ?', answer: 'Le backtesting et les rendements réels sont 100 % réels et ne peuvent pas être manipulés car il s\'agit d\'écrans fournis par la plateforme de trading.' },
        { question: 'RealQuant est-il gratuit ?', answer: 'Oui. C\'est 100 % gratuit. Nous ne percevons pas de frais de gestion sur les bénéfices, et nous ne facturons pas de frais mensuels distincts pour le programme.' },
        { question: 'Quel est le montant minimum d\'investissement ?', answer: 'Puisqu\'il existe une quantité minimale de contrat pour les positions, c\'est possible à partir de 500 USDT (Tether).' },
        { question: 'Mon investissement est-il sûr ?', answer: 'RealQuant ne reçoit pas directement les fonds des clients. C\'est un système où votre compte d\'échange et RealQuant sont connectés, et nous n\'avons que l\'autorité de prendre des décisions d\'achat et de vente pour les positions, pas l\'autorité de déposer ou de retirer des fonds, donc vos actifs sont en sécurité.' },
        { question: 'Quelle stratégie est utilisée pour réaliser des profits ?', answer: 'RealQuant est un programme quant créé en combinant des algorithmes avancés (système de rotation, adaptation dynamique à la volatilité, opération mixte tendance + contre-tendance, logique de récupération adaptative). Il crée des profits en négociant l\'AUDCAD (paire de devises Dollar australien/Dollar canadien) et l\'XAUUSD (Or).' },
        { question: 'Comment configurer la stratégie ?', answer: 'La configuration de la stratégie ne nécessite pas l\'intention individuelle du client et aucune configuration séparée n\'est requise. (100 % automatisé 24h/24, 7j/7) Un guide est préparé lorsque vous entrez dans la communauté. Veuillez vous référer au guide.' },
        { question: 'Comment retirer des profits ?', answer: 'Un guide est préparé lorsque vous entrez dans la communauté. Veuillez vous référer au guide.' }
      ]
    },
    actualReturns: { title: 'Rendements réels', viewAll: 'Tout afficher', viewLess: 'Afficher moins', weeklyNotice: 'Les rendements hebdomadaires peuvent être consultés dans la communauté.' },
    operableItems: { title: 'Instruments négociables', commodities: 'Matières premières', currencyPairs: 'Paires de devises' },
    footer: { desc: 'RealQuant est une société d\'investissement quantitative fournissant des solutions d\'investissement quantitatives basées sur les données.', disclaimer: 'Les systèmes et solutions de trading automatisés ne sont pas des produits garantissant des profits. En raison de la nature du marché, une périodicité existe, de sorte que les périodes de profit et les périodes de perte coexistent. Basés sur les probabilités et les statistiques, nous visons à ce que le capital tende progressivement vers le haut, et les backtests et rendements réels exprimés sur ce site Web correspondent aux performances passées. Veuillez comprendre clairement que les performances passées ne peuvent que prédire les performances futures et ne garantissent absolument pas le capital ou les bénéfices du client.', rights: '© 2026 RealQuant. Tous droits réservés.' },
    admin: { title: 'Tableau de bord administrateur', tabs: { posts: 'Gestion des messages', settings: 'Paramètres de conception' }, posts: { add: 'Ajouter un message', edit: 'Modifier', delete: 'Supprimer', save: 'Enregistrer', cancel: 'Annuler', titleLabel: 'Titre', contentLabel: 'Contenu', imageLabel: 'URL de l\'image' }, settings: { themeColor: 'Couleur principale du thème', fontFamily: 'Police principale', save: 'Enregistrer les paramètres' } }
  },
  hi: {
    nav: { home: 'होम', partners: 'साझेदार', strategies: 'RealQuant रणनीतियाँ', quantStrategies: 'RealQuant रणनीतियाँ', performance: 'बैकटेस्टिंग', actualReturns: 'वास्तविक रिटर्न', admin: 'व्यवस्थापक' },
    hero: { title: 'डेटा द्वारा सिद्ध वास्तविक रिटर्न। RealQuant', subtitle: 'RealQuant उन्नत एल्गोरिदम और बड़े डेटा विश्लेषण के माध्यम से भावनाओं को समाप्त करके और पूरी तरह से लाभ पर ध्यान केंद्रित करके स्थिर रिटर्न उत्पन्न करता है।', cta: 'समुदाय में शामिल हों' },
    partners: { tag: '01 / साझेदार', title: 'उद्योग के नेताओं और संस्थानों द्वारा समर्थित', desc: 'दुनिया भर के प्रमुख वित्तीय संस्थानों और प्रौद्योगिकी भागीदारों द्वारा विश्वसनीय।', viewMore: 'और देखें +' },
    features: { title: 'RealQuant रणनीतियाँ', items: [{ title: 'एमएल-आधारित भविष्यवाणी मॉडल', desc: 'इष्टतम ट्रेडिंग समय को पकड़ने के लिए वास्तविक समय में लाखों बाजार डेटा बिंदुओं का विश्लेषण करता है।' }, { title: 'जोख임 प्रबंधन प्रणाली', desc: 'बाजार की अस्थिरता का जवाब देने वाले गतिशील परिसंपत्ति आवंटन के साथ पोर्टफोलियो स्थिरता को अधिकतम करता है।' }, { title: 'रोटेशन सिस्टम', desc: 'बाजार निधि प्रवाह को ट्रैक करता है ताकि उन क्षेत्रों और शेयरों को पकड़ा जा सके जहां रोटेशन होता है।' }, { title: 'ट्रेंड + काउंटर-ट्रेंड मिश्रित ऑपरेशन', desc: 'लॉजिक को स्वचालित रूप से स्विच करने के लिए मजबूत ट्रेंड और रेंज-बाउंड सेक्शन के बीच अंतर करता है।' }, { title: 'अनुकूली पुनर्प्राप्ति तर्क', desc: 'एक बुद्धिमान पुनर्प्राप्ति एल्गोरिदम को सक्रिय करता है जो बाजार की स्थितियों के आधार पर पुनर्प्राप्ति गति को समायोजित करता है।' }, { title: 'अल्ट्रा-लो लेटेंसी इन्फ्रास्ट्रक्चर', desc: 'न्यूनतम विलंबता सिस्टम ट्रेडिंग के साथ बाजार में सूक्ष्म अवसरों को जब्त करता है।' }] },
    quantStrategies: { title: 'RealQuant रणनीतियाँ', items: [{ name: 'अल्फा रणनीति', desc: 'AUD/CAD मुद्रा जोड़ी' }, { name: 'बीटा रणनीति', desc: 'MultiFOREX मुद्रा जोड़े' }, { name: 'गामा रणनीति', desc: 'XAU/USD गोल्ड फ्यूचर्स' }, { name: 'डेल्टा रणनीति', desc: 'EUR/USD मुद्रा जोड़ी' }, { name: 'एप्सिलॉन रणनीति', desc: 'MultiFOREX2 मुद्रा जोड़े' }, { name: 'हेक्सा रणनीति', desc: 'USDJPY मुद्रा जोड़ी' }] },
    performance: {
      notice: 'विस्तृत बैकटेस्ट ट्रेडिंग इतिहास समुदाय में देखा जा सकता है',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: 'संतुलन ग्राफ (Balance Graph)',
      stats: {
        currency: 'मुद्रा (Currency)',
        deposit: 'जमा राशि (Deposit amount)',
        totalProfit: 'कुल लाभ (Total profit)',
        finalBalance: 'अंतिम शेष (Final balance)',
        roe: 'कुल रिटर्न (ROE)',
        annualReturn: 'वार्षिक रिटर्न दर (Annual rate of return)',
        monthlyReturn: 'मासिक रिटर्न दर (Monthly rate of return)',
        dailyReturn: 'दैनिक रिटर्न दर (Daily rate of return)',
        totalTrades: 'कुल ट्रेड (Total trades)',
        winRate: 'जीत दर (Win rate)',
        maxDrawdown: 'अधिकतम गिरावट (Max drawdown)',
        profitFactor: 'लाभ कारक (Profit factor)'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      faqList: 'FAQ सूची',
      chatTitle: '1:1 चैट सेवा',
      chatDesc: 'उत्तर नहीं मिल रहा है? हमारी सहायता टीम के साथ चैट शुरू करें।',
      chatButton: 'चैट शुरू करें',
      floatingButton: '1:1 चैट',
      faqs: [
        { question: 'क्या बैकटेस्टिंग और वास्तविक रिटर्न वास्तविक हैं?', answer: 'बैकटेस्टिंग और वास्तविक रिटर्न 100% वास्तविक हैं और इनके साथ छेड़छाड़ नहीं की जा सकती क्योंकि ये ट्रेडिंग प्लेटफॉर्म द्वारा प्रदान की गई स्क्रीन हैं।' },
        { question: 'क्या RealQuant मुफ़्त है?', answer: 'हाँ। यह 100% मुफ़्त है। हम लाभ के लिए प्रबंधन शुल्क नहीं लेते हैं, और न ही हम कार्यक्रम के लिए अलग से मासिक शुल्क लेते हैं।' },
        { question: 'न्यूनतम निवेश राशि क्या है?', answer: 'चूंकि पोजीशन के लिए न्यूनतम अनुबंध राशि होती है, इसलिए यह 500 USDT (Tether) से संभव है।' },
        { question: 'क्या मेरा निवेश सुरक्षित है?', answer: 'RealQuant सीधे ग्राहकों से धन प्राप्त नहीं करता है। यह एक ऐसी प्रणाली है जहाँ आपका एक्सचेंज खाता और RealQuant जुड़े हुए हैं, और हमारे पास केवल पोजीशन खरीदने और बेचने के निर्णय लेने का अधिकार है, न कि धन जमा करने या निकालने का अधिकार, इसलिए आपकी संपत्ति सुरक्षित है।' },
        { question: 'लाभ प्राप्त करने के लिए किस रणनीति का उपयोग किया जाता है?', answer: 'RealQuant एक मात्रात्मक कार्यक्रम है जिसे उन्नत एल्गोरिदम (रोटेशन सिस्टम, गतिशील अस्थिरता अनुकूलन, ट्रेंड + काउंटर-ट्रेंड मिश्रित ऑपरेशन, अनुकूली पुनर्प्राप्ति तर्क) के संयोजन से बनाया गया है। यह AUDCAD (ऑस्ट्रेलियाई डॉलर/कनाडाई डॉलर मुद्रा जोड़ी) और XAUUSD (सोना) का व्यापार करके लाभ कमाता है।' },
        { question: 'मैं रणनीति कैसे सेट करूँ?', answer: 'रणनीति सेट करने के लिए ग्राहक के व्यक्तिगत इरादे की आवश्यकता नहीं होती है और किसी अलग सेटिंग की आवश्यकता नहीं होती है। (24/7 100% स्वचालित) जब आप समुदाय में शामिल होते हैं तो एक गाइड तैयार की जाती है। कृपया गाइड देखें।' },
        { question: 'मैं लाभ कैसे निकालूँ?', answer: 'जब आप समुदाय में शामिल होते हैं तो एक गाइड तैयार की जाती है। कृपया गाइड देखें।' }
      ]
    },
    actualReturns: { title: 'वास्तविक रिटर्न', viewAll: 'सभी देखें', viewLess: 'कम देखें', weeklyNotice: 'साप्ताहिक रिटर्न समुदाय में देखे जा सकते हैं।' },
    operableItems: { title: 'संचालन योग्य आइटम', commodities: 'वस्तुएं', currencyPairs: 'मुद्रा जोड़े' },
    footer: { desc: 'RealQuant एक मात्रात्मक निवेश फर्म है जो डेटा-संचालित मात्रात्मक निवेश समाधान प्रदान करती है।', disclaimer: 'स्वचालित ट्रेडिंग सिस्टम और समाधान ऐसे उत्पाद नहीं हैं जो लाभ की गारंटी देते हैं। बाजार की प्रकृति के कारण, आवधिकता मौजूद है, इसलिए लाभ की अवधि और हानि की अवधि सह-अस्तित्व में है। संभावना और सांख्यिकी के आधार पर, हमारा लक्ष्य है कि बीज धीरे-धीरे ऊपर की ओर बढ़े, और इस वेबसाइट पर व्यक्त बैकटेस्ट और वास्तविक रिटर्न पिछले प्रदर्शन के अनुरूप हैं। कृपया स्पष्ट रूप से समझें कि पिछला प्रदर्शन केवल भविष्य के प्रदर्शन की भविष्यवाणी कर सकता है और ग्राहक के मूलधन या लाभ की पूर्ण गारंटी नहीं देता है।', rights: '© 2026 RealQuant. सर्वाधिकार सुरक्षित।' },
    admin: { title: 'व्यवस्थापक डैशबोर्ड', tabs: { posts: 'पोस्ट प्रबंधन', settings: 'डिज़ाइन सेटिंग्स' }, posts: { add: 'नई पोस्ट जोड़ें', edit: 'संपादित करें', delete: 'हटाएं', save: 'सहेजें', cancel: 'रद्द करें', titleLabel: 'शीर्षक', contentLabel: 'सामग्री', imageLabel: 'छवि URL' }, settings: { themeColor: 'मुख्य थीम रंग', fontFamily: 'प्राथमिक फ़ॉन्ट', save: 'सेटिंग्स सहेजें' } }
  },
  es: {
    nav: { home: 'Inicio', partners: 'Socios', strategies: 'Estrategias RealQuant', quantStrategies: 'Estrategias RealQuant', performance: 'Backtesting', actualReturns: 'Rentabilidades reales', admin: 'Admin' },
    hero: { title: 'Rentabilidades reales probadas por datos. RealQuant', subtitle: 'RealQuant genera rendimientos estables al eliminar las emociones y centrarse únicamente en el beneficio a través de algoritmos avanzados y análisis de grandes datos.', cta: 'Unirse a la comunidad' },
    partners: { tag: '01 / SOCIOS', title: 'Respaldado por líderes de la industria e instituciones', desc: 'Confiado por las principales instituciones financieras y socios tecnológicos de todo el mundo.', viewMore: 'VER MÁS +' },
    features: { title: 'Estrategias RealQuant', items: [{ title: 'Modelos de predicción basados en ML', desc: 'Analiza millones de datos de market en tiempo real para capturar el momento óptimo de negociación.' }, { title: 'Sistema de gestión de riesgos', desc: 'Maximiza la estabilidad de la cartera con una asignación dinámica de activos que responde a la volatilidad del mercado.' }, { title: 'Sistema de rotación', desc: 'Rastrea los flujos de fondos del mercado para capturar sectores y acciones donde ocurre la rotación.' }, { title: 'Operación mixta de tendencia + contratendencia', desc: 'Distingue entre secciones de tendencia fuerte y secciones de rango para cambiar automáticamente la lógica.' }, { title: 'Lógica de recuperación adaptativa', desc: 'Activa un algoritmo de recuperación inteligente que ajusta la velocidad de recuperación según las condiciones del mercado.' }, { title: 'Infraestructura de latencia ultrabaja', desc: 'Aprovecha las microoportunidades del mercado con un sistema de trading de latencia minimizada.' }] },
    quantStrategies: { title: 'Estrategias RealQuant', items: [{ name: 'Estrategia Alfa', desc: 'Par de divisas AUD/CAD' }, { name: 'Estrategia Beta', desc: 'Pares de divisas MultiFOREX' }, { name: 'Estrategia Gamma', desc: 'Futuros de oro XAU/USD' }, { name: 'Estrategia Delta', desc: 'Par de divisas EUR/USD' }, { name: 'Estrategia Epsilon', desc: 'Pares de divisas MultiFOREX2' }, { name: 'Estrategia Hexa', desc: 'Par de divisas USDJPY' }] },
    performance: {
      notice: 'El historial detallado de operaciones de backtest se puede consultar en la comunidad',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: 'Gráfico de saldo (Balance Graph)',
      stats: {
        currency: 'Moneda (Currency)',
        deposit: 'Monto del depósito (Deposit amount)',
        totalProfit: 'Beneficio total (Total profit)',
        finalBalance: 'Saldo final (Final balance)',
        roe: 'Rentabilidad total (ROE)',
        annualReturn: 'Tasa de rendimiento anual (Annual rate of return)',
        monthlyReturn: 'Tasa de rendimiento mensual (Monthly rate of return)',
        dailyReturn: 'Tasa de rendimiento diaria (Daily rate of return)',
        totalTrades: 'Total de operaciones (Total trades)',
        winRate: 'Tasa de éxito (Win rate)',
        maxDrawdown: 'Máxima caída (Max drawdown)',
        profitFactor: 'Factor de beneficio (Profit factor)'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: 'Preguntas frecuentes',
      faqList: 'Lista de FAQ',
      chatTitle: 'Servicio de chat 1:1',
      chatDesc: '¿No encuentras la respuesta? Inicia una conversación con nuestro equipo de soporte.',
      chatButton: 'Iniciar chat',
      floatingButton: 'Chat 1:1',
      faqs: [
        { question: '¿Son reales el backtesting y los rendimientos reales?', answer: 'El backtesting y los rendimientos reales son 100% reales y no pueden ser manipulados ya que son pantallas proporcionadas por la plataforma de trading.' },
        { question: '¿Es RealQuant gratis?', answer: 'Sí. Es 100% gratis. No recibimos comisiones de gestión por los beneficios, ni cobramos cuotas mensuales por el programa.' },
        { question: '¿Cuál es el monto mínimo de inversión?', answer: 'Dado que existe una cantidad mínima de contrato para las posiciones, es posible desde 500 USDT (Tether).' },
        { question: '¿Es segura mi inversión?', answer: 'RealQuant no recibe fondos de los clientes directamente. Es un sistema donde su cuenta de intercambio y RealQuant están conectados, y solo tenemos la autoridad para tomar decisiones de compra y venta de posiciones, no la autoridad para depositar o retirar fondos, por lo que sus activos están seguros.' },
        { question: '¿Qué estrategia se utiliza para lograr beneficios?', answer: 'RealQuant es un programa cuantitativo creado mediante la combinación de algoritmos avanzados (sistema de rotación, adaptación dinámica a la volatilidad, operación mixta de tendencia + contratendencia, lógica de recuperación adaptativa). Crea beneficios operando AUDCAD (par de divisas Dólar australiano/Dólar canadiense) y XAUUSD (Oro).' },
        { question: '¿Cómo configuro la estrategia?', answer: 'La configuración de la estrategia no requiere la intención individual del cliente y no se requiere una configuración por separado. (100% automatizado 24/7) Se prepara una guía cuando ingresas a la comunidad. Por favor, consulta la guía.' },
        { question: '¿Cómo retiro los beneficios?', answer: 'Se prepara una guía cuando ingresas a la comunidad. Por favor, consulta la guía.' }
      ]
    },
    actualReturns: { title: 'Rentabilidades reales', viewAll: 'Ver todo', viewLess: 'Ver menos', weeklyNotice: 'Los rendimientos semanales se pueden consultar en la comunidad.' },
    operableItems: { title: 'Instrumentos operables', commodities: 'Materias primas', currencyPairs: 'Pares de divisas' },
    footer: { desc: 'RealQuant es una firma de inversión cuantitativa que ofrece soluciones de inversión cuantitativa basadas en datos.', disclaimer: 'Los sistemas y soluciones de trading automatizados no son productos que garanticen beneficios. Debido a la naturaleza del mercado, existe periodicidad, por lo que coexisten periodos de ganancias y periodos de pérdidas. Basándonos en la probabilidad y la estadística, nuestro objetivo es que el capital tienda gradualmente al alza, y los backtests y rendimientos reales expresados en este sitio web corresponden al rendimiento pasado. Por favor, comprenda claramente que el rendimiento pasado solo puede predecir el rendimiento futuro y no garantiza absolutamente el capital ni los beneficios del cliente.', rights: '© 2026 RealQuant. Todos los derechos reservados.' },
    admin: { title: 'Panel de administración', tabs: { posts: 'Gestión de publicaciones', settings: 'Ajustes de diseño' }, posts: { add: 'Añadir publicación', edit: 'Editar', delete: 'Eliminar', save: 'Guardar', cancel: 'Cancelar', titleLabel: 'Título', contentLabel: 'Contenido', imageLabel: 'URL de la imagen' }, settings: { themeColor: 'Color principal del tema', fontFamily: 'Fuente principal', save: 'Guardar ajustes' } }
  },
  ar: {
    nav: { home: 'الرئيسية', partners: 'الشركاء', strategies: 'استراتيجيات RealQuant', quantStrategies: 'استراتيجيات RealQuant', performance: 'الاختبار العكسي', actualReturns: 'العوائد الحقيقية', admin: 'المسؤول' },
    hero: { title: 'عوائد حقيقية مثبتة بالبيانات. RealQuant', subtitle: 'تحقق RealQuant عوائد مستقرة من خلال القضاء على العواطف والتركيز فقط على الربح من خلال الخوارزميات المتقدمة وتحليل البيانات الضخمة.', cta: 'انضم إلى المجتمع' },
    partners: { tag: '01 / الشركاء', title: 'مدعوم من قادة الصناعة والمؤسسات', desc: 'موثوق به من قبل المؤسسات المالية الرائدة وشركاء التكنولوجيا في جميع أنحاء العالم.', viewMore: 'عرض المزيد +' },
    features: { title: 'استراتيجيات RealQuant', items: [{ title: 'نماذج التنبؤ القائمة على تعلم الآلة', desc: 'تحلل الملايين من نقاط بيانات السوق في الوقت الفعلي لالتقاط التوقيت الأمثل للتداول.' }, { title: 'نظام إدارة المخاطر', desc: 'يزيد من استقرار المحفظة من خلال تخصيص الأصول الديناميكي الذي يستجيب لتقلبات السوق.' }, { title: 'نظام التدوير', desc: 'يتتبع تدفقات أموال السوق لالتقاط القطاعات والأسهم التي يحدث فيها التدوير.' }, { title: 'عملية مختلطة للاتجاه + الاتجاه المعاكس', desc: 'يميز بين أقسام الاتجاه القوي وأقسام النطاق لتبديل المنطق تلقائياً.' }, { title: 'منطق الاسترداد التكيفي', desc: 'ينشط خوارزمية استرداد ذكية تضبط سرعة الاسترداد بناءً على ظروف السوق.' }, { title: 'بنية تحتية ذات زمن وصول منخفض للغاية', desc: 'تغتنم الفرص الدقيقة في السوق من خلال تداول النظام بزمن وصول ضئيل.' }] },
    quantStrategies: { title: 'استراتيجيات RealQuant', items: [{ name: 'استراتيجية ألفا', desc: 'زوج العملات AUD/CAD' }, { name: 'استراتيجية بيتا', desc: 'أزواج العملات MultiFOREX' }, { name: 'استراتيجية غاما', desc: 'عقود الذهب الآجلة XAU/USD' }, { name: 'استراتيجية دلتا', desc: 'زوج العملات EUR/USD' }, { name: 'استراتيجية إبسيلون', desc: 'أزواج العملات MultiFOREX2' }, { name: 'استراتيجية هيكسا', desc: 'زوج العملات USDJPY' }] },
    performance: {
      notice: 'يمكن التحقق من تاريخ تداول الاختبار العكسي المفصل في المجتمع',
      title: 'RealQuant Backtest Report (XAUUSD)',
      subtitle: '(2020.01.01~2025.12.31)',
      chartTitle: 'رسم بياني للرصيد (Balance Graph)',
      stats: {
        currency: 'العملة (Currency)',
        deposit: 'مبلغ الإيداع (Deposit amount)',
        totalProfit: 'إجمالي الربح (Total profit)',
        finalBalance: 'الرصيد النهائي (Final balance)',
        roe: 'إجمالي العائد (ROE)',
        annualReturn: 'معدل العائد السنوي (Annual rate of return)',
        monthlyReturn: 'معدل العائد الشهري (Monthly rate of return)',
        dailyReturn: 'معدل العائد اليومي (Daily rate of return)',
        totalTrades: 'إجمالي الصفقات (Total trades)',
        winRate: 'معدل الفوز (Win rate)',
        maxDrawdown: 'أقصى تراجع (Max drawdown)',
        profitFactor: 'عامل الربح (Profit factor)'
      },
      values: {
        currency: 'USD',
        deposit: '$10,000.00',
        totalProfit: '$210,970.31',
        finalBalance: '$220,970.31',
        roe: '2109.70%',
        annualReturn: '351.62%',
        monthlyReturn: '29.30%',
        dailyReturn: '0.96%',
        totalTrades: '6,404',
        winRate: '77.64%',
        maxDrawdown: '13.23%',
        profitFactor: '4.18'
      }
    },
    chatSupport: {
      title: 'الأسئلة الشائعة',
      faqList: 'قائمة الأسئلة الشائعة',
      chatTitle: 'خدمة الدردشة 1:1',
      chatDesc: 'لا تجد الإجابة؟ ابدأ محادثة مع فريق الدعم لدينا.',
      chatButton: 'بدء الدردشة',
      floatingButton: 'دردشة 1:1',
      faqs: [
        { question: 'هل الاختبار العكسي والعوائد الفعلية حقيقية؟', answer: 'الاختبار العكسي والعوائد الفعلية حقيقية بنسبة 100% ولا يمكن التلاعب بها لأنها شاشات مقدمة من منصة التداول.' },
        { question: 'هل RealQuant مجاني؟', answer: 'نعم. إنه مجاني بنسبة 100%. نحن لا نتلقى رسوم إدارة على الأرباح، ولا نفرض رسومًا شهرية منفصلة للبرنامج.' },
        { question: 'ما هو الحد الأدنى لمبلغ الاستثمار؟', answer: 'بما أن هناك حداً أدنى لكمية العقد للمراكز، فمن الممكن البدء من 500 USDT (Tether).' },
        { question: 'هل استثماري آمن؟', answer: 'لا تتلقى RealQuant أموال العملاء مباشرة. إنه نظام يتم فيه ربط حساب البورصة الخاص بك و RealQuant، ولدينا السلطة فقط لاتخاذ قرارات البيع والشراء للمراكز، وليس لدينا السلطة لإيداع أو سحب الأموال، لذا فإن أصولك آمنة.' },
        { question: 'ما هي الاستراتيجية المستخدمة لتحقيق الأرباح؟', answer: 'RealQuant هو برنامج كمي تم إنشاؤه من خلال الجمع بين الخوارزميات المتقدمة (نظام التدوير، التكيف الديناميكي مع التقلبات، عملية مختلطة للاتجاه + الاتجاه المعاكس، منطق الاسترداد التكيفي). يحقق أرباحاً من خلال تداول AUDCAD (زوج عملات الدولار الأسترالي/الدولار الكندي) و XAUUSD (الذهب).' },
        { question: 'كيف أقوم بإعداد الاستراتيجية؟', answer: 'لا يتطلب إعداد الاستراتيجية نية فردية من العميل ولا يلزم إعداد منفصل. (آلي بنسبة 100% على مدار الساعة طوال أيام الأسبوع) يتم إعداد دليل عند دخولك المجتمع. يرجى الرجوع إلى الدليل.' },
        { question: 'كيف أسحب الأرباح؟', answer: 'يتم إعداد دليل عند دخولك المجتمع. يرجى الرجوع إلى الدليل.' }
      ]
    },
    actualReturns: { title: 'العوائد الحقيقية', viewAll: 'عرض الكل', viewLess: 'عرض أقل', weeklyNotice: 'يمكن التحقق من العوائد الأسبوعية في المجتمع.' },
    operableItems: { title: 'الأدوات القابلة للتداول', commodities: 'السلع', currencyPairs: 'أزواج العملات' },
    footer: { desc: 'RealQuant هي شركة استثمار كمي تقدم حلول استثمار كمي قائمة على البيانات.', disclaimer: 'أنظمة وحلول التداول الآلي ليست منتجات تضمن الأرباح. نظراً لطبيعة السوق، توجد دورية، لذا تتعايش فترات الربح وفترات الخسارة. بناءً على الاحتمالات والإحصاءات، نهدف إلى أن يتجه رأس المال تدريجياً نحو الأعلى، وتتوافق الاختبارات العكسية والعوائد الفعلية المعبر عنها في هذا الموقع مع الأداء السابق. يرجى فهم بوضوح أن الأداء السابق يمكنه فقط التنبؤ بالأداء المستقبلي ولا يضمن بشكل مطلق رأس مال العميل أو أرباحه.', rights: '© 2026 RealQuant. جميع الحقوق محفوظة.' },
    admin: { title: 'لوحة تحكم المسؤول', tabs: { posts: 'إدارة المنشورات', settings: 'إعدادات التصميم' }, posts: { add: 'إضافة منشور جديد', edit: 'تعديل', delete: 'حذف', save: 'حفظ', cancel: 'إلغاء', titleLabel: 'العنوان', contentLabel: 'المحتوى', imageLabel: 'رابط الصورة' }, settings: { themeColor: 'لون السمات الرئيسي', fontFamily: 'الخط الأساسي', save: 'حفظ الإعدادات' } }
  },
};

export type Language = 'ko' | 'en' | 'zh' | 'ja' | 'ru' | 'de' | 'fr' | 'hi' | 'es' | 'ar';
export type ViewMode = 'user' | 'admin';

export interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}

export const initialPosts: Post[] = [
  {
    id: '1',
    title: '2025년 10월 수익률',
    content: '시장 변동성 확대 구간에서도 리스크 관리 시스템이 정상 작동하여 안정적인 수익을 기록했습니다. (월간 수익률: +12.4%)',
    imageUrl: 'https://picsum.photos/seed/oct/800/400',
    date: '2025-10-31',
  },
  {
    id: '2',
    title: '2025년 11월 수익률',
    content: '연말 랠리에 맞춘 동적 자산 배분 전략이 주효하여 벤치마크 대비 초과 수익을 달성했습니다. (월간 수익률: +15.2%)',
    imageUrl: 'https://picsum.photos/seed/nov/800/400',
    date: '2025-11-30',
  },
  {
    id: '3',
    title: '2025년 12월 수익률',
    content: '배당락 및 연말 차익실현 매물 출회에도 불구하고 알고리즘 트레이딩을 통해 방어에 성공했습니다. (월간 수익률: +9.8%)',
    imageUrl: 'https://picsum.photos/seed/dec/800/400',
    date: '2025-12-31',
  },
  {
    id: '4',
    title: '2026년 1월 수익률',
    content: '새해 효과(January Effect)를 예측한 머신러닝 모델의 선제적 포지셔닝으로 높은 수익을 기록했습니다. (월간 수익률: +18.5%)',
    imageUrl: 'https://picsum.photos/seed/jan/800/400',
    date: '2026-01-31',
  },
  {
    id: '5',
    title: '2026년 2월 수익률',
    content: '글로벌 매크로 지표 혼조세 속에서도 롱숏(Long-Short) 전략을 통해 시장 중립적 수익을 창출했습니다. (월간 수익률: +11.2%)',
    imageUrl: 'https://picsum.photos/seed/feb/800/400',
    date: '2026-02-28',
  },
  {
    id: '6',
    title: '2026년 3월 수익률',
    content: '어닝 서프라이즈 예측 모델이 주요 기업들의 실적 발표를 정확히 예측하여 알파를 창출했습니다. (월간 수익률: +14.7%)',
    imageUrl: 'https://picsum.photos/seed/mar/800/400',
    date: '2026-03-31',
  },
];
