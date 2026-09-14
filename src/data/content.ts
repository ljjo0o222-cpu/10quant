// synced
export const translations = {
  ko: {
    nav: {
      home: '홈',
      partners: '파트너',
      strategies: 'RealQuant 전략',
      quantStrategies: 'RealQuant 전략',
      performance: '백테스트',
      actualReturns: '실제 수익률',
      faq: '자주 묻는 질문',
      admin: '관리자',
    },
    hero: {
      title: '데이터로 증명하는 퀀트 투자 솔루션, 리얼퀀트',
      subtitle: 'RealQuant는 고도화된 알고리즘과 빅데이터 분석을 통해 감정을 배제하고, 수익에만 집중하여 안정적인 수익을 추구합니다.',
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
      subtitle: 'RealQuant는 독립적으로 작동하는 브레이크아웃 전략을 결합하여 다양한 돌파 조건과 가격 확장 구간을 포착하여 거래하도록 설계되었습니다. 퍼센트 기반 위험 관리(Stop Loss), 고영향 뉴스 필터, 시장 마감 보호 등을 통해 안정성을 높였습니다.',
      disclaimer: 'Martingale, Grid, 손실 후 계약수 증가 등을 사용하지 않습니다.',
      safetyHighlights: [
        { label: 'NO Martingale', desc: '마틴게일 배제' },
        { label: 'NO Grid System', desc: '물타기 미사용' },
        { label: 'NO Lot Escalation', desc: '손실 후 계약수 증가 없음' },
        { label: 'Mandatory Stop Loss', desc: '퍼센트 손절 원칙' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: '독립적 다중 브레이크아웃',
          desc: '독립적으로 작동하는 다수의 브레이크아웃 전략을 결합하여 다양한 돌파 조건과 변동성 확장 구간을 포착합니다.',
        },
        {
          tag: 'MOMENTUM',
          title: '가격 확장 구간 포착',
          desc: '시장의 급격한 추세 모멘텀과 가격 확장이 발생하는 구간을 정밀 감지하여 높은 손익비의 거래를 실행합니다.',
        },
        {
          tag: 'RISK CONTROL',
          title: '퍼센트 기반 위험 관리',
          desc: '모든 진입 포지션에 고정 퍼센트 손절(Stop Loss)을 필수 적용하여 예기치 못한 단일 손실 리스크를 원천 차단합니다.',
        },
        {
          tag: 'FILTERING',
          title: '고영향 뉴스 필터링',
          desc: 'CPI, FOMC 등 시장에 비정상적 변동성을 초래하는 주요 경제 지표 발표 전후 거래를 자동 필터링하여 자산을 보호합니다.',
        },
        {
          tag: 'PROTECTION',
          title: '시장 마감 보호 시스템',
          desc: '주말 갭(Gap) 위험과 장 마감 시점의 유동성 급감으로 인한 슬리피지를 방지하기 위해 포지션을 안전하게 관리합니다.',
        },
        {
          tag: 'DISCIPLINE',
          title: '비마틴게일 원칙 운용',
          desc: '마틴게일(Martingale), 그리드(Grid), 손실 후 계약수 증가 방식을 철저히 배제하고 수학적으로 검증된 정량적 사이징만 운용합니다.',
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
      weeklyNotice: '실제 매매 기간 : 2026.01.01~2026.08.31\n상세한 수익률 내용은 커뮤니티에서 확인이 가능합니다.',
      totalGrowth: '수익률',
      maxDrawdown: '최대손실률', winRate: '승률'
    },
    operableItems: {
      title: '운용가능 종목',
      commodities: '원자재',
      currencyPairs: '통화쌍',
      indices: '지수'
    },
    chatSupport: {
      title: '자주 묻는 질문',
      faqList: 'FAQ List',
      chatTitle: '1:1 채팅 서비스',
      chatDesc: '답을 찾을 수 없으신가요? 지원팀과 대화를 시작하세요.',
      chatButton: '채팅 시작',
      floatingButton: '1:1 채팅',
      faqs: [
        { question: '백테스팅 데이터와 실제 수익률은 검증되었나요?', answer: '리얼퀀트의 백테스팅 및 실계좌 거래 수익률 데이터는 100% 검증된 수치입니다. 공인된 글로벌 거래 플랫폼(MT4/MT5)과 외환 규제기관의 표준 거래 환경에서 기록된 데이터로서 임의로 조작할 수 없습니다. 6년 이상의 정밀 틱 데이터 백테스트와 실제 계좌 운용을 통해 4.18의 프로핏 팩터와 13.23%의 최대 낙폭(MDD) 제어를 완벽히 입증했습니다. 투명한 검증을 위해 커뮤니티에서 실시간 계좌 내역을 상시 공개하고 있습니다.' },
        { question: '최소 투자 금액은 얼마부터 시작할 수 있나요?', answer: '리얼퀀트 솔루션은 계약 단위별 정밀한 리스크 관리와 포지션 분할 매매를 위해 최소 $1,000부터 운용이 가능합니다. 자본 규모에 맞추어 사전에 정의된 리스크 비율에 따라 계약 수가 최적으로 자동 계산되므로 안정적인 복리 운용을 지원합니다. 무리한 고레버리지를 지양하고 철저한 자금 관리 원칙을 준수합니다.' },
        { question: '투자 원금과 예치 자산은 어떻게 안전하게 보호되나요?', answer: '리얼퀀트는 고객의 투자금을 절대 직접 수취하거나 관리하지 않습니다. 고객 본인 명의의 글로벌 정식 규제 외환·CFD 거래소 계정에 자금을 예치하고, 리얼퀀트는 API 연동 또는 공인 카피트레이딩 시스템을 통해 오직 주문 진입과 청산 권한만을 가집니다. 입출금에 대한 모든 통제권은 전적으로 고객에게 귀속되어 있으므로 자금 유용이나 사기 리스크로부터 100% 안전합니다.' },
        { question: '어떤 퀀트 알고리즘 전략과 원리로 수익을 창출하나요?', answer: '리얼퀀트는 독립적으로 작동하는 다중 브레이크아웃(Breakout) 전략을 상호 유기적으로 결합하여 시장의 변동성 확대 및 추세 돌파 구간을 정밀하게 포착합니다. 특히 계좌 파산의 주원인이 되는 마틴게일(Martingale, 손실 시 2배 베팅)과 그리드(Grid, 물타기 분할 매수) 방식을 절대 사용하지 않습니다. 모든 포지션에 100% 필수 손절(Stop Loss)을 적용하며, 미국 CPI·FOMC 등 고위험 경제지표 발표 시점 자동 거래 회피 및 주말 갭 리스크 방지 기술이 탑재되어 있어 어떠한 급변 장세에서도 시드가 안전하게 보호됩니다.' },
        { question: '초보자도 쉽게 이용할 수 있나요? 별도의 프로그램 설치가 필요한가요?', answer: '초보자도 즉시 참여하실 수 있습니다. 복잡한 지표 설정이나 개인 PC에 프로그램을 24시간 켜둘 필요가 없으며, 전용 클라우드 서버와 거래소 연동을 통해 24시간 100% 전자동으로 작동합니다. 공식 텔레그램 커뮤니티 입장 시 계좌 개설부터 연동까지 단계별 상세 가이드와 1:1 전담 매니저 지원을 제공해 드립니다.' },
        { question: '수익금 및 원금 출금은 언제든지 가능한가요?', answer: '네, 언제든지 전액 출금이 가능합니다. 고객 본인 명의의 거래소 계좌이므로 의무 락업(Lock-up) 기간이나 수수료 페널티가 전혀 없으며, 본인이 원하실 때 실시간으로 원하는 금액만큼 본인의 은행 계좌나 가상자산 지갑으로 자유롭게 출금하실 수 있습니다.' }
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
    nav: { home: 'Home', partners: 'Partners', strategies: 'RealQuant Strategy', quantStrategies: 'RealQuant Strategy', performance: 'Backtest', actualReturns: 'Actual Returns', faq: 'FAQ', admin: 'Admin' },
    hero: { title: 'Real Returns Proven by Data. RealQuant', subtitle: 'RealQuant pursues stable returns by eliminating emotions and focusing solely on profit through advanced algorithms and big data analysis.', cta: 'Join Community' },
    partners: { tag: '01 / Partners', title: 'Supported by Industry Leaders and Institutions', desc: 'Trusted by the world\'s leading financial institutions and technology partners.', viewMore: 'View More +' },
    features: {
      title: 'RealQuant Strategy',
      subtitle: 'RealQuant is designed to combine independently operating breakout strategies to capture and trade various breakout conditions and price expansion phases. Stability is prioritized through fixed percentage risk management (Stop Loss), high-impact news filters, and market close protection.',
      disclaimer: 'We strictly do not use Martingale, Grid systems, or increasing lot sizes after losses.',
      safetyHighlights: [
        { label: 'NO Martingale', desc: 'Zero Martingale' },
        { label: 'NO Grid System', desc: 'No Averaging Down' },
        { label: 'NO Lot Escalation', desc: 'Fixed Sizing Discipline' },
        { label: 'Mandatory Stop Loss', desc: 'Account-Wide Protection' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: 'Multi-Breakout Engine',
          desc: 'Combines multiple independently operating breakout algorithms to precisely capture breakout conditions across diverse market environments.',
        },
        {
          tag: 'MOMENTUM',
          title: 'Price Expansion Capture',
          desc: 'Detects real-time market volatility expansion and momentum acceleration to execute trades with high risk-to-reward ratios.',
        },
        {
          tag: 'RISK CONTROL',
          title: 'Fixed % Risk Management',
          desc: 'Applies mandatory percentage-based Stop Loss on every trade to eliminate catastrophic single-loss risks.',
        },
        {
          tag: 'FILTERING',
          title: 'High-Impact News Filter',
          desc: 'Automatically halts trading around high-risk economic releases like CPI and FOMC to avoid abnormal volatility spikes.',
        },
        {
          tag: 'PROTECTION',
          title: 'Market Close Protection',
          desc: 'Safeguards positions before market closes to eliminate weekend gap risks and severe illiquidity slippage.',
        },
        {
          tag: 'DISCIPLINE',
          title: 'Strict Non-Martingale Policy',
          desc: 'Eliminates dangerous Martingale, grid averaging, and lot escalation after losses, adhering strictly to mathematically verified sizing.',
        },
      ],
    },
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
        { question: 'What is the minimum investment amount?', answer: 'Since there is a minimum contract quantity for positions, it is possible from $1,000.' },
        { question: 'Is my investment safe?', answer: 'RealQuant does not directly receive customer funds. It is a system where your exchange account and RealQuant are linked, and we only have the authority to make buy and sell decisions for positions, not the authority to deposit or withdraw funds.' },
        { question: 'What strategy do you use to make profit?', answer: 'RealQuant is designed to combine independently operating breakout strategies to capture and trade various breakout conditions and price expansion phases. Stability is enhanced through percentage-based risk management (Stop Loss), high-impact news filters, and market close protection. (We do not use Martingale, Grid, or increasing contract size after losses.)' },
        { question: 'How do I set up the strategy?', answer: 'Setting up the strategy does not require the customer\'s individual intention and no separate setting is required. (100% automated 24/7) A guide is prepared when you enter the community. Please refer to the guide.' },
        { question: 'How do I withdraw profits?', answer: 'A guide is prepared when you enter the community. Please refer to the guide.' }
      ]
    },
    actualReturns: { title: 'Actual Returns', viewAll: 'View All', viewLess: 'View Less', weeklyNotice: 'Actual trading period: 2026.01.01~2026.08.31\nDetailed return information can be checked in the community.', totalGrowth: 'Total Growth', maxDrawdown: 'Max Drawdown', winRate: 'Win Rate' },
    operableItems: { title: 'Operable Items', commodities: 'Commodities', currencyPairs: 'Currency Pairs', indices: 'Indices' },
    footer: {
      desc: 'RealQuant is a quant investment company that provides data-driven quantitative investment solutions.',
      disclaimer: 'Automated trading systems and solutions are not products that guarantee profits. Due to the nature of the market, periodicity exists, so profit periods and loss periods coexist. Based on probability and statistics, we aim for the seed to gradually trend upward, and the backtests and actual returns expressed on this website correspond to past performance. Please clearly understand that past performance can only predict future performance and does not absolutely guarantee the customer\'s principal or profit.',
      rights: '© 2026 RealQuant. All rights reserved.',
    },
    admin: { title: 'Admin Dashboard', tabs: { posts: 'Post Management', settings: 'Design Settings' }, posts: { add: 'Add New Post', edit: 'Edit', delete: 'Delete', save: 'Save', cancel: 'Cancel', titleLabel: 'Title', contentLabel: 'Content', imageLabel: 'Image URL' }, settings: { themeColor: 'Main Theme Color', fontFamily: 'Main Font', save: 'Save Settings' } }
  },
  zh: {
    nav: { home: '首页', partners: '合作伙伴', strategies: 'RealQuant 策略', quantStrategies: 'RealQuant 策略', performance: '回测', actualReturns: '实际收益', faq: '常见问题', admin: '管理员' },
    hero: { title: '数据证明的真实收益。RealQuant', subtitle: 'RealQuant 通过先进的算法和大数据分析，排除情感干扰，专注于盈利，追求稳定的收益。', cta: '加入社区' },
    partners: { tag: '01 / 合作伙伴', title: '受到行业领导者和机构的支持', desc: '深受全球领先金融机构和技术合作伙伴的信赖。', viewMore: '查看更多 +' },
    features: {
      title: 'RealQuant 策略',
      subtitle: 'RealQuant 旨在结合独立运作的突破策略，捕捉并交易各种突破条件和价格扩张区间。通过基于百分比的风险管理（Stop Loss）、高影响新闻过滤器和市场收盘保护，将资金稳定性放在首位。',
      disclaimer: '绝不使用马丁格尔（Martingale）、网格（Grid）或亏损后加仓等高风险方式。',
      safetyHighlights: [
        { label: 'NO Martingale', desc: '绝无马丁' },
        { label: 'NO Grid System', desc: '杜绝网格' },
        { label: 'NO Lot Escalation', desc: '绝不加倍手数' },
        { label: 'Mandatory Stop Loss', desc: '强制止损保护' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: '独立多重突破引擎',
          desc: '结合多个独立运行的突破策略，精准捕捉不同市场环境下的突破信号与波动区间。',
        },
        {
          tag: 'MOMENTUM',
          title: '价格扩张区间捕捉',
          desc: '实时检测市场波动扩张与动量加速区间，以优异的风险回报比捕捉强势趋势行情。',
        },
        {
          tag: 'RISK CONTROL',
          title: '百分比风险管理 (SL)',
          desc: '所有持仓严格执行基于账户固定百分比的止损（Stop Loss），从源头阻断极端单笔损失。',
        },
        {
          tag: 'FILTERING',
          title: '高影响新闻过滤器',
          desc: '在 CPI、FOMC 等重大经济数据公布前后自动过滤暂停交易，规避突发暴跌暴涨风险。',
        },
        {
          tag: 'PROTECTION',
          title: '市场收盘保护系统',
          desc: '有效防范周末跳空缺口（Gap）和休市流动性枯竭导致的滑点风险，保障资金安全。',
        },
        {
          tag: 'DISCIPLINE',
          title: '非马丁纪律准则',
          desc: '严禁亏损后加码的马丁格尔和网格补仓，坚持经过严谨数学验证的定量科学仓位。',
        },
      ],
    },
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
        { question: '最低投资金额是多少？', answer: '由于头寸有最低合约数量，因此可以从 $1,000 开始。' },
        { question: '我的投资安全吗？', answer: 'RealQuant 不直接接收客户资金。这是一个您的交易所账户和 RealQuant 连接的系统，我们只有权对头寸做出买卖决策，而无权存款或取款。' },
        { question: '使用什么策略来实现利润？', answer: 'RealQuant 旨在结合独立运作的突破策略，捕捉并交易各种突破条件和价格扩张区间。通过基于百分比的风险管理（Stop Loss）、高影响新闻过滤器和市场收盘保护等措施，进一步提高了稳定性。（绝不使用马丁格尔、网格或亏损后增加合约手数等高风险方式。）' },
        { question: '我该如何设置策略？', answer: '设置策略不需要客户的个人意愿，也不需要单独设置。（100% 全自动 24/7）当您进入社区时，会准备一份指南。请参考该指南。' },
        { question: '我该如何提取利润？', answer: '当您进入社区时，会准备一份指南。请参考该指南。' }
      ]
    },
    actualReturns: { title: '实际收益', viewAll: '全部查看', viewLess: '收起', weeklyNotice: '实际交易期间：2026.01.01~2026.08.31\n详细的收益率内容可以在社区中查看。', totalGrowth: '总收益率', maxDrawdown: '最大回撤', winRate: '胜率' },
    operableItems: { title: '可操作项目', commodities: '大宗商品', currencyPairs: '货币对', indices: '指数' },
    footer: { desc: 'RealQuant 是一家提供数据驱动的量化投资解决方案的量化投资公司。', disclaimer: '自动化交易系统和解决方案不是保证利润的产品。由于市场的性质，存在周期性，因此利润期和亏损期并存。基于概率和统计学，我们的目标是种子资金逐渐呈上升趋势，本网站上表达的回测和实际收益对应于过去的表现。请清楚地理解，过去的表现只能预测未来的表现，绝对不保证客户的本金或利润。', rights: '© 2026 RealQuant. 版权所有।' },
    admin: { title: '管理员控制面板', tabs: { posts: '帖子管理', settings: '设计设置' }, posts: { add: '添加新帖子', edit: '编辑', delete: '删除', save: '保存', cancel: '取消', titleLabel: '标题', contentLabel: '内容', imageLabel: '图片 URL' }, settings: { themeColor: '主主题颜色', fontFamily: '主要字体', save: '保存设置' } }
  },
  ja: {
    nav: { home: 'ホーム', partners: 'パートナー', strategies: 'RealQuant 戦略', quantStrategies: 'RealQuant 戦略', performance: 'バックテスト', actualReturns: '実際の収益', faq: 'よくある質問', admin: '管理者' },
    hero: { title: 'データで証明するリアルな収益。RealQuant', subtitle: 'RealQuantは、高度なアルゴリズムとビッグデータ分析を通じて感情を排除し、利益のみに集中することで、安定した収益を追求します。', cta: 'コミュニティに参加' },
    partners: { tag: '01 / パートナー', title: '業界のリーダーや機関からサポートを受けています', desc: '世界をリードする金融機関や技術パートナーから信頼されています。', viewMore: 'もっと見る +' },
    features: {
      title: 'RealQuant 戦略',
      subtitle: 'RealQuantは独立して作動するブレイクアウト戦略を組み合わせ、様々なブレイク条件と価格拡大区間を捉えて取引するように設計されています。パーセント基準のリスク管理（Stop Loss）、高影響ニュースフィルター、市場クローズ保護等を通じて安定性を最大化しました。',
      disclaimer: 'Martingale、Grid、損失後のロット数増加などは一切使用しません。',
      safetyHighlights: [
        { label: 'NO Martingale', desc: 'マーチンゲール排除' },
        { label: 'NO Grid System', desc: 'ナンピングリッド不使用' },
        { label: 'NO Lot Escalation', desc: '損失後のロット増加なし' },
        { label: 'Mandatory Stop Loss', desc: 'パーセント損切り原則' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: '独立型マルチブレイクアウト',
          desc: '独立して作動する複数のブレイクアウト戦略を組み合わせ、多様なブレイク条件とボラティリティ拡大区間を捉えます。',
        },
        {
          tag: 'MOMENTUM',
          title: '価格拡大区間の捕捉',
          desc: '急激なトレンドモメンタムと価格拡大が発生する区間をリアルタイムで検知し、高いリスクリワード比で取引を実行します。',
        },
        {
          tag: 'RISK CONTROL',
          title: 'パーセント基準のリスク管理',
          desc: 'すべてのエントリーに口座比率の固定パーセント損切り（Stop Loss）を必須適用し、不測の単一リスクを徹底遮断します。',
        },
        {
          tag: 'FILTERING',
          title: '高影響ニュースフィルター',
          desc: 'CPIやFOMCなど、市場に異常な変動を引き起こす重要経済指標の発表前後の取引を自動でフィルタリングします。',
        },
        {
          tag: 'PROTECTION',
          title: '市場クローズ保護システム',
          desc: '週末の窓開け（Gap）リスクや取引終了時点の流動性急減によるスリッページを防ぎ、ポジションを安全に保護します。',
        },
        {
          tag: 'DISCIPLINE',
          title: '非マーチンゲール原則運用',
          desc: 'マーチンゲール、グリッド、損失後のロット数増加を徹底排除し、数学的に検証された定量的サイジングのみを運用します。',
        },
      ],
    },
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
        { question: '最低投資金額はいくらですか？', answer: 'ポジションの最小契約数があるため、$1,000から可能です。' },
        { question: '私の投資は安全ですか？', answer: 'RealQuantは顧客の資金を直接受け取りません。お客様の取引所口座とRealQuantが連携され、ポジションの売買決定権のみを持ち、入出金権限はありません。' },
        { question: '利益を出すためにどのような戦略が使われていますか？', answer: 'RealQuantは独立して作動するブレイクアウト戦略を組み合わせ、様々なブレイク条件と価格拡大区間を捉えて取引するように設計されています。パーセント基準のリスク管理（Stop Loss）、高影響ニュースフィルター、市場クローズ保護等を通じて安定性を高めました。（Martingale、Grid、損失後のロット数増加などは一切使用しません。）' },
        { question: '戦略をどのように設定すればよいですか？', answer: '戦略の設定は、お客様の個別の意図を必要とせず、別途設定する必要もありません。（24時間365日100%自動化）コミュニティに参加するとガイドが用意されています。ガイドを参照してください。' },
        { question: '利益をどのように出金すればよいですか？', answer: 'コミュニティに参加するとガイドが用意されています。ガイドを参照してください。' }
      ]
    },
    actualReturns: { title: '実際の収益', viewAll: '全て表示', viewLess: '閉じる', weeklyNotice: '実際の取引期間：2026.01.01~2026.08.31\n詳細な収益率の内容はコミュニティで確認できます。', totalGrowth: '総収益率', maxDrawdown: '最大ドローダウン', winRate: '勝率' },
    operableItems: { title: '運用可能銘柄', commodities: 'コモディティ', currencyPairs: '通貨ペア', indices: '指数' },
    footer: { desc: 'RealQuant は、データ駆動型の計量投資ソリューションを提供するクオンツ専門企業です。', disclaimer: '自動売買システムおよびソリューションは、利益を保証する商品ではありません。市場の性質上、周期性が存在するため、利益が発生する周期と損失が発生する周期が共存します。確率と統計学に基づき、徐々にシードが右肩上がりになることを目指しており、当ウェブサイトに表示されているバックテストと実際の収益率は過去の実績に該当します。過去の実績は将来の実績を予測できるだけであり、絶対にお客様の元本を保証するものではなく、利益を保証するものではないという点を明確に認識してください。', rights: '© 2026 RealQuant. All rights reserved.' },
    admin: { title: '管理者ダッシュボード', tabs: { posts: '投稿管理', settings: 'デザイン設定' }, posts: { add: '新規投稿追加', edit: '編集', delete: '削除', save: '保存', cancel: 'キャンセル', titleLabel: 'タイトル', contentLabel: '内容', imageLabel: '画像 URL' }, settings: { themeColor: 'メインテーマカラー', fontFamily: 'メインフォント', save: '設定を保存' } }
  },
  ru: {
    nav: { home: 'Главная', partners: 'Партнеры', strategies: 'Стратегии RealQuant', quantStrategies: 'Стратегии RealQuant', performance: 'Бэктестинг', actualReturns: 'Реальная доходность', faq: 'FAQ', admin: 'Админ' },
    hero: { title: 'Реальная доходность, подтвержденная данными. RealQuant', subtitle: 'RealQuant стремится к стабильной доходности, исключая эмоции и фокусируясь исключительно на прибыли благодаря передовым алгоритмам и анализу больших данных.', cta: 'Вступить в сообщество' },
    partners: { tag: '01 / ПАРТНЕРЫ', title: 'Поддержка лидеров отрасли и институтов', desc: 'Нам доверяют ведущие финансовые институты и технологические партнеры по всему миру.', viewMore: 'ПОКАЗАТЬ БОЛЬШЕ +' },
    features: {
      title: 'Стратегии RealQuant',
      subtitle: 'RealQuant объединяет независимо работающие пробойные стратегии для торговли в фазах расширения цен и импульса. Стабильность максимизируется за счет процентного риск-менеджмента (Stop Loss), фильтрации новостей и защиты при закрытии рынка.',
      disclaimer: 'Мы категорически не используем Мартингейл, сетку (Grid) или увеличение лота после убытков.',
      safetyHighlights: [
        { label: 'NO Martingale', desc: 'Без Мартингейла' },
        { label: 'NO Grid System', desc: 'Без усреднений' },
        { label: 'NO Lot Escalation', desc: 'Фиксированный сайзинг' },
        { label: 'Mandatory Stop Loss', desc: 'Обязательный Stop Loss' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: 'Мульти-пробойная архитектура',
          desc: 'Объединяет независимые алгоритмы пробоя для точного захвата импульсов в различных рыночных условиях.',
        },
        {
          tag: 'MOMENTUM',
          title: 'Захват расширения цены',
          desc: 'В режиме реального времени определяет всплески волатильности и ускорения тренда для входа с высоким риск-профитом.',
        },
        {
          tag: 'RISK CONTROL',
          title: 'Процентный риск-контроль (SL)',
          desc: 'Обязательный процентный Stop Loss для каждой сделки надежно предотвращает катастрофические просадки.',
        },
        {
          tag: 'FILTERING',
          title: 'Фильтр важных новостей',
          desc: 'Автоматическая пауза в торговле во время выхода ключевых данных (CPI, FOMC) исключает неконтролируемую волатильность.',
        },
        {
          tag: 'PROTECTION',
          title: 'Защита закрытия рынка',
          desc: 'Контроль позиций перед выходными устраняет риски ценовых разрывов (Gap) и проскальзывания при нехватке ликвидности.',
        },
        {
          tag: 'DISCIPLINE',
          title: 'Безмартингейловая дисциплина',
          desc: 'Полный отказ от токсичных сеток и удвоения лотов; торговля только по математически выверенным объемам.',
        },
      ],
    },
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
        { question: 'Какова минимальная сумма инвестиций?', answer: 'Поскольку существует минимальное количество контрактов для позиций, это возможно от $1,000.' },
        { question: 'Безопасны ли мои инвестиции?', answer: 'RealQuant не получает средства клиентов напрямую. Это система, в которой ваш биржевой счет и RealQuant связаны, и у нас есть полномочия только принимать решения о покупке и продаже позиций, а не полномочия на ввод или вывод средств.' },
        { question: 'Какая стратегия используется для достижения прибыли?', answer: 'RealQuant разработан на основе объединения независимо работающих пробойных стратегий для фиксации различных условий пробоя и фаз расширения цен. Стабильность повышается за счет процентного риск-менеджмента (Stop Loss), фильтрации важных новостей и защиты при закрытии рынка. (Мы не используем Мартингейл, сетку (Grid) или увеличение размера контракта после убытков.)' },
        { question: 'Как мне настроить стратегию?', answer: 'Настройка стратегии не требует индивидуального намерения клиента и не требует отдельной настройки. (100% автоматизировано 24/7) Руководство подготавливается при вступлении в сообщество. Пожалуйста, обратитесь к руководству.' },
        { question: 'Как мне вывести прибыль?', answer: 'Руководство подготавливается при вступлении в сообщество. Пожалуйста, обратитесь к руководству.' }
      ]
    },
    actualReturns: { title: 'Реальная доходность', viewAll: 'Показать все', viewLess: 'Скрыть', weeklyNotice: 'Фактический период торгов: 2026.01.01~2026.08.31\nПодробную информацию о доходности можно проверить в сообществе.', totalGrowth: 'Общая доходность', maxDrawdown: 'Максимальная просадка', winRate: 'Процент побед' },
    operableItems: { title: 'Доступные инструменты', commodities: 'Сырьевые товары', currencyPairs: 'Валютные пары', indices: 'Индексы' },
    footer: { desc: 'RealQuant — это количественная инвестиционная фирма, предоставляющая решения для инвестиций на основе данных.', disclaimer: 'Автоматизированные торговые системы и решения не являются продуктами, гарантирующими прибыль. Из-за характера рынка существует периодичность, поэтому периоды прибыли и периоды убытков сосуществуют. Основываясь на вероятности и статистике, мы стремимся к тому, чтобы капитал постепенно рос, а бэктесты и фактическая доходность, представленные на этом веб-сайте, соответствуют прошлым показателям. Пожалуйста, четко понимайте, что прошлые показатели могут только предсказывать будущие показатели и не гарантируют абсолютно основную сумму клиента или прибыль.', rights: '© 2026 RealQuant. Все права защищены.' },
    admin: { title: 'Панель администратора', tabs: { posts: 'Управление постами', settings: 'Настройки дизайна' }, posts: { add: 'Добавить пост', edit: 'Изменить', delete: 'Удалить', save: 'Сохранить', cancel: 'Отмена', titleLabel: 'Заголовок', contentLabel: 'Контент', imageLabel: 'URL изображения' }, settings: { themeColor: 'Основной цвет темы', fontFamily: 'Основной шрифт', save: 'Сохранить настройки' } }
  },
  de: {
    nav: { home: 'Startseite', partners: 'Partner', strategies: 'RealQuant-Strategien', quantStrategies: 'RealQuant-Strategien', performance: 'Backtesting', actualReturns: 'Tatsächliche Renditen', faq: 'FAQ', admin: 'Admin' },
    hero: { title: 'Durch Daten belegte reale Renditen. RealQuant', subtitle: 'RealQuant strebt stabile Erträge an, indem Emotionen ausgeschaltet werden und der Fokus durch fortschrittliche Algorithmen und Big-Data-Analysen ausschließlich auf Profitabilität liegt.', cta: 'Community beitreten' },
    partners: { tag: '01 / PARTNER', title: 'Unterstützt von Branchenführern und Institutionen', desc: 'Weltweit vertrauen uns führende Finanzinstitute und Technologiepartner.', viewMore: 'MEHR ANZEIGEN +' },
    features: {
      title: 'RealQuant-Strategien',
      subtitle: 'RealQuant kombiniert unabhängig voneinander agierende Breakout-Strategien, um diverse Ausbruchsbedingungen und Preiserweiterungsphasen zu erfassen. Prozentbasiertes Risikomanagement (Stop Loss), News-Filter und Marktschlussschutz gewährleisten maximale Stabilität.',
      disclaimer: 'Kein Martingale, kein Grid, keine Lot-Eskalation nach Verlusten.',
      safetyHighlights: [
        { label: 'NO Martingale', desc: 'Kein Martingale' },
        { label: 'NO Grid System', desc: 'Kein Grid' },
        { label: 'NO Lot Escalation', desc: 'Feste Positionsgrößen' },
        { label: 'Mandatory Stop Loss', desc: 'Fester % Stop Loss' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: 'Multi-Breakout-Architektur',
          desc: 'Kombiniert mehrere unabhängige Breakout-Algorithmen zur präzisen Erfassung von Momentum-Ausbrüchen in wechselnden Marktphasen.',
        },
        {
          tag: 'MOMENTUM',
          title: 'Erfassung von Preiserweiterungen',
          desc: 'Erkennt Volatilitätsexpansion und Trendbeschleunigung in Echtzeit, um Trades mit hohem Chance-Risiko-Verhältnis auszuführen.',
        },
        {
          tag: 'RISK CONTROL',
          title: 'Prozentbasiertes Risikomanagement',
          desc: 'Obligatorischer prozentualer Stop Loss bei jedem Trade schützt das Gesamtkapital vor unerwarteten Verlusten.',
        },
        {
          tag: 'FILTERING',
          title: 'High-Impact-News-Filter',
          desc: 'Pausiert den Handel automatisch vor und nach wichtigen Wirtschaftsdaten (CPI, FOMC), um Extremausschläge zu meiden.',
        },
        {
          tag: 'PROTECTION',
          title: 'Marktschlussschutz',
          desc: 'Sichert Positionen vor Wochenendschluss, um Wochenend-Gaps und Liquiditätsengpässe auszuschließen.',
        },
        {
          tag: 'DISCIPLINE',
          title: 'Strikte Non-Martingale-Disziplin',
          desc: 'Konsequenter Verzicht auf toxische Verdopplungs- oder Grid-Strategien zugunsten mathematisch geprüfter Positionsgrößen.',
        },
      ],
    },
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
        { question: 'Was ist der Mindestanlagebetrag?', answer: 'Da es eine Mindestkontraktmenge für Positionen gibt, ist dies ab $1,000 möglich.' },
        { question: 'Ist meine Investition sicher?', answer: 'RealQuant erhält keine Kundengelder direkt. Es ist ein System, bei dem Ihr Börsenkonto und RealQuant verbunden sind, und wir haben nur die Befugnis, Kauf- und Verkaufsentscheidungen für Positionen zu treffen, nicht die Befugnis, Gelder einzuzahlen oder abzuheben.' },
        { question: 'Welche Strategie wird verwendet, um Gewinne zu erzielen?', answer: 'RealQuant kombiniert unabhängig voneinander agierende Breakout-Strategien, um diverse Ausbruchsbedingungen und Preiserweiterungsphasen profitabel zu nutzen. Die Stabilität wird durch prozentbasiertes Risikomanagement (Stop Loss), High-Impact-News-Filter und Marktschlussschutz maximiert. (Wir verwenden kein Martingale, kein Grid und keine Erhöhung der Kontraktgröße nach Verlusten.)' },
        { question: 'Wie richte ich die Strategie ein?', answer: 'Die Einrichtung der Strategie erfordert keine individuelle Absicht des Kunden und es ist keine separate Einrichtung erforderlich. (100 % automatisiert rund um die Uhr) Ein Leitfaden wird erstellt, wenn Sie der Community beitreten. Bitte beachten Sie den Leitfaden.' },
        { question: 'Wie hebe ich Gewinne ab?', answer: 'Ein Leitfaden wird erstellt, wenn Sie der Community beitreten. Bitte beachten Sie den Leitfaden.' }
      ]
    },
    actualReturns: { title: 'Tatsächliche Renditen', viewAll: 'Alle anzeigen', viewLess: 'Weniger anzeigen', weeklyNotice: 'Tatsächlicher Handelszeitraum: 2026.01.01~2026.08.31\nDetaillierte Renditeinformationen können in der Community überprüft werden.', totalGrowth: 'Gesamtwachstum', maxDrawdown: 'Maximaler Drawdown', winRate: 'Gewinnrate' },
    operableItems: { title: 'Handelbare Instrumente', commodities: 'Rohstoffe', currencyPairs: 'Währungspaare', indices: 'Indizes' },
    footer: { desc: 'RealQuant ist eine quantitative Investmentfirma, die datengesteuerte quantitative Investmentlösungen anbietet.', disclaimer: 'Automatisierte Handelssysteme und Lösungen sind keine Produkte, die Gewinne garantieren. Aufgrund der Art des Marktes besteht eine Periodizität, sodass Gewinn- und Verlustperioden nebeneinander existieren. Basierend auf Wahrscheinlichkeit und Statistik streben wir an, dass das Kapital allmählich nach oben tendiert, und die auf dieser Website ausgedrückten Backtests und tatsächlichen Renditen entsprechen der vergangenen Performance. Bitte haben Sie ein klares Verständnis dafür, dass die vergangene Performance nur die zukünftige Performance vorhersagen kann und das Kapital oder die Gewinne des Kunden nicht absolut garantiert.', rights: '© 2026 RealQuant. Alle Rechte vorbehalten.' },
    admin: { title: 'Admin-Dashboard', tabs: { posts: 'Beitragsverwaltung', settings: 'Design-Einstellungen' }, posts: { add: 'Neuen Beitrag hinzufügen', edit: 'Bearbeiten', delete: 'Löschen', save: 'Speichern', cancel: 'Abbrechen', titleLabel: 'Titel', contentLabel: 'Inhalt', imageLabel: 'Bild-URL' }, settings: { themeColor: 'Hauptthemenfarbe', fontFamily: 'Hauptschriftart', save: 'Einstellungen speichern' } }
  },
  fr: {
    nav: { home: 'Accueil', partners: 'Partenaires', strategies: 'Stratégies RealQuant', quantStrategies: 'Stratégies RealQuant', performance: 'Backtesting', actualReturns: 'Rendements réels', faq: 'FAQ', admin: 'Admin' },
    hero: { title: 'Des rendements réels prouvés par les données. RealQuant', subtitle: 'RealQuant vise des rendements stables en éliminant les émotions et en se concentrant uniquement sur le profit grâce à des algorithmes avancés et à l\'analyse de données massives.', cta: 'Rejoindre la communauté' },
    partners: { tag: '01 / PARTENAIRES', title: 'Soutenu par les leaders de l\'industrie et les institutions', desc: 'Fait confiance par les plus grandes institutions financières et partenaires technologiques du monde entier.', viewMore: 'VOIR PLUS +' },
    features: {
      title: 'Stratégies RealQuant',
      subtitle: 'RealQuant associe des stratégies de breakout fonctionnant de manière autonome pour capturer les conditions de cassure et les phases d\'expansion des prix. La gestion rigoureuse des risques en pourcentage (Stop Loss), les filtres de nouvelles et la protection de clôture maximisent la stabilité.',
      disclaimer: 'Nous n\'utilisons pas de Martingale, de Grid ou d\'augmentation de lots après des pertes.',
      safetyHighlights: [
        { label: 'NO Martingale', desc: 'Zéro Martingale' },
        { label: 'NO Grid System', desc: 'Sans Grid' },
        { label: 'NO Lot Escalation', desc: 'Lots Maîtrisés' },
        { label: 'Mandatory Stop Loss', desc: 'Stop Loss Fixe %' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: 'Moteur Multi-Breakout',
          desc: 'Combine plusieurs algorithmes de breakout indépendants pour saisir précisément les cassures de momentum sur divers marchés.',
        },
        {
          tag: 'MOMENTUM',
          title: 'Capture de l\'Expansion des Prix',
          desc: 'Détecte l\'expansion de volatilité et l\'accélération de tendance en temps réel pour exécuter des transactions à haut ratio gain/risque.',
        },
        {
          tag: 'RISK CONTROL',
          title: 'Gestion des Risques en Pourcentage',
          desc: 'Application systématique d\'un Stop Loss en pourcentage fixe sur chaque trade pour éliminer tout risque de perte unitaire majeure.',
        },
        {
          tag: 'FILTERING',
          title: 'Filtre d\'Actualités à Fort Impact',
          desc: 'Interrompt automatiquement le trading lors des annonces économiques majeures (CPI, FOMC) pour éviter les mouvements erratiques.',
        },
        {
          tag: 'PROTECTION',
          title: 'Protection de Clôture du Marché',
          desc: 'Sécurise les positions avant le week-end afin d\'éliminer les risques de gap d\'ouverture et de slippage lié au manque de liquidité.',
        },
        {
          tag: 'DISCIPLINE',
          title: 'Discipline Stricte Sans Martingale',
          desc: 'Rejet total des systèmes de doublement et de grid dangereux au profit d\'un dimensionnement quantitatif scientifiquement validé.',
        },
      ],
    },
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
        { question: 'Quel est le montant minimum d\'investissement ?', answer: 'Puisqu\'il existe une quantité minimale de contrat pour les positions, c\'est possible à partir de $1,000.' },
        { question: 'Mon investissement est-il sûr ?', answer: 'RealQuant ne reçoit pas directement les fonds des clients. C\'est un système où votre compte d\'échange et RealQuant sont connectés, et nous n\'avons que l\'autorité de prendre des décisions d\'achat et de vente pour les positions, pas l\'autorité de déposer ou de retirer des fonds.' },
        { question: 'Quelle stratégie est utilisée pour réaliser des profits ?', answer: 'RealQuant est conçu en combinant des stratégies de breakout fonctionnant de manière autonome pour capturer diverses conditions de cassure et phases d\'expansion des prix. La stabilité est renforcée par une gestion du risque basée sur un pourcentage (Stop Loss), des filtres d\'actualités à fort impact et une protection à la clôture du marché. (Nous n\'utilisons pas de Martingale, de Grid ni d\'augmentation de la taille des contrats après des pertes.)' },
        { question: 'Comment configurer la stratégie ?', answer: 'La configuration de la stratégie ne nécessite pas l\'intention individuelle du client et aucune configuration séparée n\'est requise. (100 % automatisé 24h/24, 7j/7) Un guide est préparé lorsque vous entrez dans la communauté. Veuillez vous référer au guide.' },
        { question: 'Comment retirer des profits ?', answer: 'Un guide est préparé lorsque vous entrez dans la communauté. Veuillez vous référer au guide.' }
      ]
    },
    actualReturns: { title: 'Rendements réels', viewAll: 'Tout afficher', viewLess: 'Afficher moins', weeklyNotice: 'Période de trading réelle : 2026.01.01~2026.08.31\nLes informations détaillées sur les rendements peuvent être consultées dans la communauté.', totalGrowth: 'Croissance totale', maxDrawdown: 'Perte maximale', winRate: 'Taux de victoire' },
    operableItems: { title: 'Instruments négociables', commodities: 'Matières premières', currencyPairs: 'Paires de devises', indices: 'Indices' },
    footer: { desc: 'RealQuant est une société d\'investissement quantitative fournissant des solutions d\'investissement quantitatives basées sur les données.', disclaimer: 'Les systèmes et solutions de trading automatisés ne sont pas des produits garantissant des profits. En raison de la nature du marché, une périodicité existe, de sorte que les périodes de profit et les périodes de perte coexistent. Basés sur les probabilités et les statistiques, nous visons à ce que le capital tende progressivement vers le haut, et les backtests et rendements réels exprimés sur ce site Web correspondent aux performances passées. Veuillez comprendre clairement que les performances passées ne peuvent que prédire les performances futures et ne garantissent absolument pas le capital ou les bénéfices du client.', rights: '© 2026 RealQuant. Tous droits réservés.' },
    admin: { title: 'Tableau de bord administrateur', tabs: { posts: 'Gestion des messages', settings: 'Paramètres de conception' }, posts: { add: 'Ajouter un message', edit: 'Modifier', delete: 'Supprimer', save: 'Enregistrer', cancel: 'Annuler', titleLabel: 'Titre', contentLabel: 'Contenu', imageLabel: 'URL de l\'image' }, settings: { themeColor: 'Couleur principale du thème', fontFamily: 'Police principale', save: 'Enregistrer les paramètres' } }
  },
  hi: {
    nav: { home: 'होम', partners: 'साझेदार', strategies: 'RealQuant रणनीतियाँ', quantStrategies: 'RealQuant रणनीतियाँ', performance: 'बैकटेस्टिंग', actualReturns: 'वास्तविक रिटर्न', faq: 'FAQ', admin: 'व्यवस्थापक' },
    hero: { title: 'डेटा द्वारा सिद्ध वास्तविक रिटर्न। RealQuant', subtitle: 'RealQuant उन्नत एल्गोरिदम और बड़े डेटा विश्लेषण के माध्यम से भावनाओं को समाप्त करके और पूरी तरह से लाभ पर ध्यान केंद्रित करके स्थिर रिटर्न प्राप्त करने का प्रयास करता है।', cta: 'समुदाय में शामिल हों' },
    partners: { tag: '01 / साझेदार', title: 'उद्योग के नेताओं और संस्थानों द्वारा समर्थित', desc: 'दुनिया भर के प्रमुख वित्तीय संस्थानों और प्रौद्योगिकी भागीदारों द्वारा विश्वसनीय।', viewMore: 'और देखें +' },
    features: {
      title: 'RealQuant रणनीतियाँ',
      subtitle: 'RealQuant विभिन्न ब्रेकआउट स्थितियों और मूल्य विस्तार चरणों को पकड़ने और व्यापार करने के लिए स्वतंत्र रूप से काम करने वाली ब्रेकआउट रणनीतियों को जोड़ता है। प्रतिशत-आधारित जोखिम प्रबंधन (Stop Loss), उच्च प्रभाव समाचार फिल्टर और बाजार बंद सुरक्षा के माध्यम से स्थिरता बढ़ाई जाती है।',
      disclaimer: 'हम मार्टिंगेल, ग्रिड या नुकसान के बाद अनुबंध का आकार बढ़ाने का उपयोग नहीं करते हैं।',
      safetyHighlights: [
        { label: 'NO Martingale', desc: 'मार्टिंगेल मुक्त' },
        { label: 'NO Grid System', desc: 'ग्रिड मुक्त' },
        { label: 'NO Lot Escalation', desc: 'निश्चित लॉट साइज' },
        { label: 'Mandatory Stop Loss', desc: 'प्रतिशत स्टॉप लॉस' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: 'मल्टी-ब्रेकआउट आर्किटेक्चर',
          desc: 'विभिन्न बाजार स्थितियों में गति ब्रेकआउट को सटीक रूप से पकड़ने के लिए कई स्वतंत्र ब्रेकआउट एल्गोरिदम को जोड़ता है।',
        },
        {
          tag: 'MOMENTUM',
          title: 'मूल्य विस्तार चरण का पता लगाना',
          desc: 'उच्च जोखिम-इनाम अनुपात वाले ट्रेडों को निष्पादित करने के लिए वास्तविक समय में अस्थिरता विस्तार और प्रवृत्ति त्वरण की पहचान करता है।',
        },
        {
          tag: 'RISK CONTROL',
          title: 'प्रतिशत-आधारित जोखिम प्रबंधन',
          desc: 'अप्रत्याशित भारी नुकसान को रोकने के लिए प्रत्येक व्यापार पर अनिवार्य प्रतिशत स्टॉप लॉस लागू किया जाता है।',
        },
        {
          tag: 'FILTERING',
          title: 'उच्च प्रभाव समाचार फ़िल्टर',
          desc: 'असामान्य अस्थिरता से बचने के लिए प्रमुख आर्थिक डेटा (CPI, FOMC) के समय स्वचालित रूप से ट्रेडिंग रोक देता है।',
        },
        {
          tag: 'PROTECTION',
          title: 'बाजार बंद होने की सुरक्षा',
          desc: 'सप्ताहांत के अंतराल (Gap) और तरलता की कमी के जोखिम को खत्म करने के लिए सप्ताहांत से पहले पदों को सुरक्षित करता है।',
        },
        {
          tag: 'DISCIPLINE',
          title: 'सख्त गैर-मार्टिंगेल अनुशासन',
          desc: 'विषाक्त ग्रिड और दोहरीकरण रणनीतियों को पूरी तरह से त्यागकर केवल गणितीय रूप से सत्यापित पोजीशन साइजिंग पर काम करता है।',
        },
      ],
    },
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
        { question: 'न्यूनतम निवेश राशि क्या है?', answer: 'चूंकि पोजीशन के लिए न्यूनतम अनुबंध राशि होती है, इसलिए यह $1,000 से संभव है।' },
        { question: 'क्या मेरा निवेश सुरक्षित है?', answer: 'RealQuant सीधे ग्राहकों से धन प्राप्त नहीं करता है। यह एक ऐसी प्रणाली है जहाँ आपका एक्सचेंज खाता और RealQuant जुड़े हुए हैं, और हमारे पास केवल पोजीशन खरीदने और बेचने के निर्णय लेने का अधिकार है, न कि धन जमा करने या निकालने का अधिकार।' },
        { question: 'लाभ प्राप्त करने के लिए किस रणनीति का उपयोग किया जाता है?', answer: 'RealQuant को स्वतंत्र रूप से काम करने वाली ब्रेकआउट रणनीतियों को जोड़कर विभिन्न ब्रेकआउट स्थितियों और मूल्य विस्तार चरणों को पकड़ने और व्यापार करने के लिए डिज़ाइन किया गया है। प्रतिशत-आधारित जोखिम प्रबंधन (Stop Loss), उच्च प्रभाव समाचार फिल्टर और बाजार बंद सुरक्षा के माध्यम से स्थिरता बढ़ाई जाती है। (हम मार्टिंगेल, ग्रिड या नुकसान के बाद अनुबंध का आकार बढ़ाने का उपयोग नहीं करते हैं।)' },
        { question: 'मैं रणनीति कैसे सेट करूँ?', answer: 'रणनीति सेट करने के लिए ग्राहक के व्यक्तिगत इरादे की आवश्यकता नहीं होती है और किसी अलग सेटिंग की आवश्यकता नहीं होती है। (24/7 100% स्वचालित) जब आप समुदाय में शामिल होते हैं तो एक गाइड तैयार की जाती है। कृपया गाइड देखें।' },
        { question: 'मैं लाभ कैसे निकालूँ?', answer: 'जब आप समुदाय में शामिल होते हैं तो एक गाइड तैयार की जाती है। कृपया गाइड देखें।' }
      ]
    },
    actualReturns: { title: 'वास्तविक रिटर्न', viewAll: 'सभी देखें', viewLess: 'कम देखें', weeklyNotice: 'वास्तविक ट्रेडिंग अवधि: 2026.01.01~2026.08.31\nविस्तृत रिटर्न जानकारी समुदाय में जांची जा सकती है।', totalGrowth: 'कुल वृद्धि', maxDrawdown: 'अधिकतम गिरावट', winRate: 'जीत दर' },
    operableItems: { title: 'संचालन योग्य आइटम', commodities: 'वस्तुएं', currencyPairs: 'मुद्रा जोड़े', indices: 'सूचकांक' },
    footer: { desc: 'RealQuant एक मात्रात्मक निवेश फर्म है जो डेटा-संचालित मात्रात्मक निवेश समाधान प्रदान करती है।', disclaimer: 'स्वचालित ट्रेडिंग सिस्टम और समाधान ऐसे उत्पाद नहीं हैं जो लाभ की गारंटी देते हैं। बाजार की प्रकृति के कारण, आवधिकता मौजूद है, इसलिए लाभ की अवधि और हानि की अवधि सह-अस्तित्व में है। संभावना और सांख्यिकी के आधार पर, हमारा लक्ष्य है कि बीज धीरे-धीरे ऊपर की ओर बढ़े, और इस वेबसाइट पर व्यक्त बैकटेस्ट और वास्तविक रिटर्न पिछले प्रदर्शन के अनुरूप हैं। कृपया स्पष्ट रूप से समझें कि पिछला प्रदर्शन केवल भविष्य के प्रदर्शन की भविष्यवाणी कर सकता है और ग्राहक के मूलधन या लाभ की पूर्ण गारंटी नहीं देता है।', rights: '© 2026 RealQuant. सर्वाधिकार सुरक्षित।' },
    admin: { title: 'व्यवस्थापक डैशबोर्ड', tabs: { posts: 'पोस्ट प्रबंधन', settings: 'डिज़ाइन सेटिंग्स' }, posts: { add: 'नई पोस्ट जोड़ें', edit: 'संपादित करें', delete: 'हटाएं', save: 'सहेजें', cancel: 'रद्द करें', titleLabel: 'शीर्षक', contentLabel: 'सामग्री', imageLabel: 'छवि URL' }, settings: { themeColor: 'मुख्य थीम रंग', fontFamily: 'प्राथमिक फ़ॉन्ट', save: 'सेटिंग्स सहेजें' } }
  },
  es: {
    nav: { home: 'Inicio', partners: 'Socios', strategies: 'Estrategias RealQuant', quantStrategies: 'Estrategias RealQuant', performance: 'Backtesting', actualReturns: 'Rentabilidades reales', faq: 'Preguntas', admin: 'Admin' },
    hero: { title: 'Rentabilidades reales probadas por datos. RealQuant', subtitle: 'RealQuant busca rendimientos estables al eliminar las emociones y centrarse únicamente en el beneficio a través de algoritmos avanzados y análisis de big data.', cta: 'Unirse a la comunidad' },
    partners: { tag: '01 / SOCIOS', title: 'Respaldado por líderes de la industria e instituciones', desc: 'Confiado por las principales instituciones financieras y socios tecnológicos de todo el mundo.', viewMore: 'VER MÁS +' },
    features: {
      title: 'Estrategias RealQuant',
      subtitle: 'RealQuant combina estrategias de breakout independientes para capturar condiciones de ruptura y fases de expansión de precios. La estabilidad se maximiza mediante una gestión de riesgo por porcentaje (Stop Loss), filtros de noticias y protección de cierre de mercado.',
      disclaimer: 'No utilizamos Martingala, Grid ni aumento de contratos tras pérdidas.',
      safetyHighlights: [
        { label: 'NO Martingale', desc: 'Cero Martingala' },
        { label: 'NO Grid System', desc: 'Sin Grid' },
        { label: 'NO Lot Escalation', desc: 'Tamaño de Lote Fijo' },
        { label: 'Mandatory Stop Loss', desc: 'Stop Loss Fijo %' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: 'Motor Multi-Breakout',
          desc: 'Combina múltiples algoritmos de breakout independientes para capturar con precisión las rupturas en diversos entornos de mercado.',
        },
        {
          tag: 'MOMENTUM',
          title: 'Captura de Expansión de Precios',
          desc: 'Detecta en tiempo real la expansión de volatilidad y la aceleración de la tendencia para ejecutar operaciones con alto ratio beneficio/riesgo.',
        },
        {
          tag: 'RISK CONTROL',
          title: 'Gestión de Riesgo por Porcentaje',
          desc: 'Aplicación obligatoria de Stop Loss porcentual en cada operación para blindar la cuenta ante pérdidas unitarias severas.',
        },
        {
          tag: 'FILTERING',
          title: 'Filtro de Noticias de Alto Impacto',
          desc: 'Pausa automáticamente las operaciones en torno a noticias críticas (CPI, FOMC) para evitar picos de volatilidad anormales.',
        },
        {
          tag: 'PROTECTION',
          title: 'Protección de Cierre de Mercado',
          desc: 'Asegura las posiciones antes del fin de semana para eliminar riesgos de gap y deslizamientos por falta de liquidez.',
        },
        {
          tag: 'DISCIPLINE',
          title: 'Disciplina Estricta Sin Martingala',
          desc: 'Exclusión absoluta de promedios a la baja o doblaje de lotes, operando únicamente con dimensionamiento cuantitativo verificado.',
        },
      ],
    },
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
        { question: '¿Cuál es el monto mínimo de inversión?', answer: 'Dado que existe una cantidad mínima de contrato para las posiciones, es posible desde $1,000.' },
        { question: '¿Es segura mi inversión?', answer: 'RealQuant no recibe fondos de los clientes directamente. Es un sistema donde su cuenta de intercambio y RealQuant están conectados, y solo tenemos la autoridad para tomar decisiones de compra y venta de posiciones, no la autoridad para depositar o retirar fondos.' },
        { question: '¿Qué estrategia se utiliza para lograr beneficios?', answer: 'RealQuant está diseñado combinando estrategias de breakout que operan de manera independiente para capturar y negociar diversas condiciones de ruptura y fases de expansión de precios. La estabilidad se mejora mediante la gestión de riesgo basada en porcentajes (Stop Loss), filtros de noticias de alto impacto y protección de cierre de mercado. (No utilizamos Martingala, Grid ni aumento de contratos tras pérdidas.)' },
        { question: '¿Cómo configuro la estrategia?', answer: 'La configuración de la estrategia no requiere la intención individual del cliente y no se requiere una configuración por separado. (100% automatizado 24/7) Se prepara una guía cuando ingresas a la comunidad. Por favor, consulta la guía.' },
        { question: '¿Cómo retiro los beneficios?', answer: 'Se prepara una guía cuando ingresas a la comunidad. Por favor, consulta la guía.' }
      ]
    },
    actualReturns: { title: 'Rentabilidades reales', viewAll: 'Ver todo', viewLess: 'Ver menos', weeklyNotice: 'Período de trading real: 2026.01.01~2026.08.31\nLa información detallada de los rendimientos se puede verificar en la comunidad.', totalGrowth: 'Crecimiento total', maxDrawdown: 'Drawdown máximo', winRate: 'Tasa de victoria' },
    operableItems: { title: 'Instrumentos operables', commodities: 'Materias primas', currencyPairs: 'Pares de divisas', indices: 'Índices' },
    footer: { desc: 'RealQuant es una firma de inversión cuantitativa que ofrece soluciones de inversión cuantitativa basadas en datos.', disclaimer: 'Los sistemas y soluciones de trading automatizados no son productos que garanticen beneficios. Debido a la naturaleza del mercado, existe periodicidad, por lo que coexisten periodos de ganancias y periodos de pérdidas. Basándonos en la probabilidad y la estadística, nuestro objetivo es que el capital tienda gradualmente al alza, y los backtests y rendimientos reales expresados en este sitio web corresponden al rendimiento pasado. Por favor, comprenda claramente que el rendimiento pasado solo puede predecir el rendimiento futuro y no garantiza absolutamente el capital ni los beneficios del cliente.', rights: '© 2026 RealQuant. Todos los derechos reservados.' },
    admin: { title: 'Panel de administración', tabs: { posts: 'Gestión de publicaciones', settings: 'Ajustes de diseño' }, posts: { add: 'Añadir publicación', edit: 'Editar', delete: 'Eliminar', save: 'Guardar', cancel: 'Cancelar', titleLabel: 'Título', contentLabel: 'Contenido', imageLabel: 'URL de la imagen' }, settings: { themeColor: 'Color principal del tema', fontFamily: 'Fuente principal', save: 'Guardar ajustes' } }
  },
  ar: {
    nav: { home: 'الرئيسية', partners: 'الشركاء', strategies: 'استراتيجيات RealQuant', quantStrategies: 'استراتيجيات RealQuant', performance: 'الاختبار العكسي', actualReturns: 'العوائد الحقيقية', faq: 'الأسئلة الشائعة', admin: 'المسؤول' },
    hero: { title: 'عوائد حقيقية مثبتة بالبيانات. RealQuant', subtitle: 'تسعى RealQuant لتحقيق عوائد مستقرة من خلال القضاء على العواطف والتركيز فقط على الربح عبر الخوارزميات المتقدمة وتحليل البيانات الضخمة.', cta: 'انضم إلى المجتمع' },
    partners: { tag: '01 / الشركاء', title: 'مدعوم من قادة الصناعة والمؤسسات', desc: 'موثوق به من قبل المؤسسات المالية الرائدة وشركاء التكنولوجيا في جميع أنحاء العالم.', viewMore: 'عرض المزيد +' },
    features: {
      title: 'استراتيجيات RealQuant',
      subtitle: 'تم تصميم RealQuant من خلال الجمع بين استراتيجيات الاختراق المستقلة لالتقاط شروط الاختراق المختلفة ومراحل توسع الأسعار والتداول عليها. يتم تعظيم الاستقرار من خلال إدارة المخاطر بالنسبة المئوية (Stop Loss)، وفلاتر الأخبار عالية التأثير، وحماية إغلاق السوق.',
      disclaimer: 'نحن لا نستخدم أسلوب مارتينجال، أو الشبكة (Grid)، أو زيادة حجم العقد بعد الخسائر.',
      safetyHighlights: [
        { label: 'NO Martingale', desc: 'بدون مارتينجال' },
        { label: 'NO Grid System', desc: 'بدون شبكة' },
        { label: 'NO Lot Escalation', desc: 'حجم لوت ثابت' },
        { label: 'Mandatory Stop Loss', desc: 'وقف خسارة نسبي' },
      ],
      items: [
        {
          tag: 'ARCHITECTURE',
          title: 'هندسة الاختراق المتعدد',
          desc: 'تجمع خوارزميات اختراق متعددة ومستقلة لالتقاط اختراقات الزخم بدقة عبر ظروف السوق المتغيرة.',
        },
        {
          tag: 'MOMENTUM',
          title: 'التقاط مرحلة توسع السعر',
          desc: 'تكتشف توسع التقلبات وتسارع الاتجاه في الوقت الفعلي لتنفيذ صفقات ذات نسبة عائد إلى مخاطرة عالية.',
        },
        {
          tag: 'RISK CONTROL',
          title: 'إدارة المخاطر بالنسبة المئوية',
          desc: 'وقف خسارة إلزامي محدد كنسبة مئوية من الحساب في كل صفقة يمنع تماماً الخسائر الفردية المفاجئة.',
        },
        {
          tag: 'FILTERING',
          title: 'فلتر الأخبار عالية التأثير',
          desc: 'إيقاف التداول مؤقتاً وبشكل تلقائي أثناء البيانات الاقتصادية الهامة (CPI, FOMC) لتجنب التقلبات الحادة.',
        },
        {
          tag: 'PROTECTION',
          title: 'حماية إغلاق السوق',
          desc: 'تأمين المراكز قبل عطلة نهاية الأسبوع للتخلص من مخاطر فجوات الافتتاح ونقص السيولة.',
        },
        {
          tag: 'DISCIPLINE',
          title: 'انضباط صارم خالٍ من المارتينجال',
          desc: 'الاستبعاد التام للشبكات الخطرة ومضاعفة العقود، والاعتماد فقط على أحجام صفقات مثبتة كمياً ورياضياً.',
        },
      ],
    },
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
        { question: 'ما هو الحد الأدنى لمبلغ الاستثمار؟', answer: 'بما أن هناك حداً أدنى لكمية العقد للمراكز، فمن الممكن البدء من $1,000.' },
        { question: 'هل استثماري آمن؟', answer: 'لا تتلقى RealQuant أموال العملاء مباشرة. إنه نظام يتم فيه ربط حساب البورصة الخاص بك و RealQuant، ولدينا السلطة فقط لاتخاذ قرارات البيع والشراء للمراكز، وليس لدينا السلطة لإيداع أو سحب الأموال.' },
        { question: 'ما هي الاستراتيجية المستخدمة لتحقيق الأرباح؟', answer: 'تم تصميم RealQuant من خلال الجمع بين استراتيجيات الاختراق التي تعمل بشكل مستقل لالتقاط شروط الاختراق المختلفة ومراحل توسع الأسعار والتداول عليها. تم تعزيز الاستقرار من خلال إدارة المخاطر القائمة على النسبة المئوية (Stop Loss)، وفلاتر الأخبار عالية التأثير، وحماية إغلاق السوق. (نحن لا نستخدم أسلوب مارتينجال، أو الشبكة (Grid)، أو زيادة حجم العقد بعد الخسائر.)' },
        { question: 'كيف أقوم بإعداد الاستراتيجية؟', answer: 'لا يتطلب إعداد الاستراتيجية نية فردية من العميل ولا يلزم إعداد منفصل. (آلي بنسبة 100% على مدار الساعة طوال أيام الأسبوع) يتم إعداد دليل عند دخولك المجتمع. يرجى الرجوع إلى الدليل.' },
        { question: 'كيف أسحب الأرباح؟', answer: 'يتم إعداد دليل عند دخولك المجتمع. يرجى الرجوع إلى الدليل.' }
      ]
    },
    actualReturns: { title: 'العوائد الحقيقية', viewAll: 'عرض الكل', viewLess: 'عرض أقل', weeklyNotice: 'فترة التداول الفعلية: 2026.01.01~2026.08.31\nيمكن التحقق من معلومات العائد التفصيلية في المجتمع.', totalGrowth: 'إجمالي النمو', maxDrawdown: 'الحد الأقصى للتراجع', winRate: 'معدل الفوز' },
    operableItems: { title: 'الأدوات القابلة للتداول', commodities: 'السلع', currencyPairs: 'أزواج العملات', indices: 'مؤشرات' },
    footer: { desc: 'RealQuant هي شركة استثمار كمي تقدم حلول استثمار كمي قائمة على البيانات.', disclaimer: 'أنظمة وحلول التداول الآلي ليست منتجات تضمن الأرباح. نظراً لطبيعة السوق، توجد دورية، لذا تتعايش فترات الربح وفترات الخسارة. بناءً على الاحتمالات والإحصاءات، نهدف إلى أن يتجه رأس المال تدريجياً نحو الأعلى، وتتوافق الاختبارات العكسية والعوائد الفعلية المعبر عنها في هذا الموقع مع الأداء السابق. يرجى فهم بوضوح أن الأداء السابق يمكنه فقط التنبؤ بالأداء المستقبلي ولا يضمن بشكل مطلق رأس مال العميل أو أرباحه.', rights: '© 2026 RealQuant. جميع الحقوق محفوظة.' },
    admin: { title: 'لوحة تحكم المسؤول', tabs: { posts: 'إدارة المنشورات', settings: 'إعدادات التصميم' }, posts: { add: 'إضافة منشور جديد', edit: 'تعديل', delete: 'حذف', save: 'حفظ', cancel: 'إلغاء', titleLabel: 'العنوان', contentLabel: 'المحتوى', imageLabel: 'رابط الصورة' }, settings: { themeColor: 'لون السمات الرئيسي', fontFamily: 'الخط الأساسي', save: 'حفظ الإعدادات' } }
  },
};

export const faqSectionTranslations: Record<Language, {
  tag: string;
  title: string;
  subtitle: string;
  moreTitle: string;
  moreDesc: string;
  inquiryButton: string;
}> = {
  ko: {
    tag: 'FAQ & 답변',
    title: '자주 묻는 질문',
    subtitle: '리얼퀀트(RealQuant) 퀀트 투자 솔루션과 알고리즘 트레이딩에 대해 가장 많이 묻는 핵심 질문에 투명하게 답해 드립니다.',
    moreTitle: '더 궁금하신 사항이 있으신가요?',
    moreDesc: '24시간 운영되는 리얼퀀트 공식 텔레그램 커뮤니티와 1:1 상담 채널에서 즉시 답변해 드립니다.',
    inquiryButton: '1:1 실시간 문의하기'
  },
  en: {
    tag: 'FAQ & Answers',
    title: 'Frequently Asked Questions',
    subtitle: 'Transparent answers to the most frequently asked questions about RealQuant quant investment solutions and algorithmic trading.',
    moreTitle: 'Have more questions?',
    moreDesc: 'Get immediate answers in the 24/7 RealQuant official Telegram community and 1:1 consultation channel.',
    inquiryButton: 'Start 1:1 Chat'
  },
  zh: {
    tag: '常见问题与解答',
    title: '常见问题',
    subtitle: '关于 RealQuant 量化投资解决方案与算法交易最常见核心问题的透明解答。',
    moreTitle: '还有更多疑问？',
    moreDesc: '在 24/7 运营的 RealQuant 官方 Telegram 社区和 1:1 咨询通道立即获得解答。',
    inquiryButton: '1:1 实时咨询'
  },
  ja: {
    tag: 'よくある質問と回答',
    title: 'よくある質問',
    subtitle: 'RealQuantクオンツ投資ソリューションとアルゴリズム取引に関して最も多く寄せられる質問に透明性をもってお答えします。',
    moreTitle: 'ご不明な点はありますか？',
    moreDesc: '24時間体制のRealQuant公式Telegramコミュニティおよび1:1チャットサポートにてすぐにご案内いたします。',
    inquiryButton: '1:1 リアルタイム相談'
  },
  ru: {
    tag: 'Часто задаваемые вопросы',
    title: 'Часто задаваемые вопросы',
    subtitle: 'Прозрачные ответы на самые актуальные вопросы о квантовых инвестиционных решениях и алгоритмической торговле RealQuant.',
    moreTitle: 'Остались вопросы?',
    moreDesc: 'Получите мгновенные ответы в официальном круглосуточном Telegram-сообществе RealQuant и канале поддержки 1:1.',
    inquiryButton: 'Начать чат 1:1'
  },
  de: {
    tag: 'FAQ & Antworten',
    title: 'Häufig gestellte Fragen',
    subtitle: 'Transparente Antworten auf die wichtigsten Fragen zu den Quant-Investment-Lösungen und dem algorithmischen Handel von RealQuant.',
    moreTitle: 'Haben Sie weitere Fragen?',
    moreDesc: 'Erhalten Sie sofortige Antworten in der offiziellen RealQuant Telegram-Community und im 1:1-Support.',
    inquiryButton: '1:1 Chat starten'
  },
  fr: {
    tag: 'FAQ & Réponses',
    title: 'Questions fréquemment posées',
    subtitle: 'Des réponses claires et transparentes aux questions les plus fréquentes sur les solutions d’investissement quantitatif et le trading algorithmique RealQuant.',
    moreTitle: 'Vous avez d’autres questions ?',
    moreDesc: 'Obtenez des réponses immédiates sur la communauté officielle Telegram RealQuant ouverte 24/7 et le support 1:1.',
    inquiryButton: 'Démarrer le chat 1:1'
  },
  hi: {
    tag: 'अक्सर पूछे जाने वाले प्रश्न',
    title: 'अक्सर पूछे जाने वाले प्रश्न',
    subtitle: 'RealQuant क्वांट निवेश समाधान और एल्गोरिदमिक ट्रेडिंग के बारे में सबसे आम सवालों के पारदर्शी जवाब।',
    moreTitle: 'क्या आपके पास और प्रश्न हैं?',
    moreDesc: '24/7 चलने वाले RealQuant आधिकारिक टेलीग्राम समुदाय और 1:1 सहायता चैनल में तुरंत उत्तर प्राप्त करें।',
    inquiryButton: '1:1 चैट शुरू करें'
  },
  es: {
    tag: 'Preguntas frecuentes',
    title: 'Preguntas frecuentes',
    subtitle: 'Respuestas transparentes a las preguntas más frecuentes sobre las soluciones de inversión cuantitativa y el trading algorítmico de RealQuant.',
    moreTitle: '¿Tiene más preguntas?',
    moreDesc: 'Obtenga respuestas inmediatas en la comunidad oficial de Telegram 24/7 de RealQuant y el canal de soporte 1:1.',
    inquiryButton: 'Iniciar consulta 1:1'
  },
  ar: {
    tag: 'الأسئلة الشائعة والإجابات',
    title: 'الأسئلة الشائعة',
    subtitle: 'إجابات شفافة على أكثر الأسئلة شيوعاً حول حلول الاستثمار الكمي والتداول الخوارزمي في RealQuant.',
    moreTitle: 'هل لديك المزيد من الأسئلة؟',
    moreDesc: 'احصل على إجابات فورية في مجتمع RealQuant الرسمي على تيليجرام على مدار الساعة وقناة الاستشارة 1:1.',
    inquiryButton: 'بدء محادثة 1:1'
  }
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
