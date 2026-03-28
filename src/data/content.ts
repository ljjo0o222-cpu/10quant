export const translations = {
  ko: {
    nav: {
      home: '홈',
      strategies: '투자 전략',
      quantStrategies: 'RealQuant 전략',
      performance: '백테스팅',
      actualReturns: '실제 수익률',
      contact: '문의하기',
      admin: '관리자',
    },
    hero: {
      title: '월10%, 퀀트로 도달하는 새로운 기준',
      subtitle: 'RealQuant는 고도화된 알고리즘과 빅데이터 분석을 통해 감정을 배제하고, 수익에만 집중하여 안정적인 수익을 창출합니다.',
      cta: '전략 알아보기',
    },
    features: {
      title: '알고리즘 트레이딩 전략',
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
      title: 'RealQuant 백테스팅',
      desc: '2025년 한 해 동안의 RealQuant 핵심 전략 월별 성과입니다.',
    },
    actualReturns: {
      title: '실제 수익률',
      readMore: '자세히 보기',
    },
    contact: {
      title: '문의하기',
      desc: 'RealQuant의 전략과 서비스에 대해 더 궁금하신 점이 있다면 언제든 문의해 주세요.',
      telegram: '텔레그램으로 문의하기',
    },
    footer: {
      desc: 'RealQuant는 데이터 기반의 정량적 투자 솔루션을 제공하는 퀀트 전문 기업입니다.',
      rights: '© 2026 RealQuant. All rights reserved.',
    },
    admin: {
      title: '관리자 대시보드',
      tabs: {
        posts: '게시글 관리',
        settings: '디자인 설정',
      },
      posts: {
        add: '새 게시글 작성',
        edit: '수정',
        delete: '삭제',
        save: '저장',
        cancel: '취소',
        titleLabel: '제목',
        contentLabel: '내용',
        imageLabel: '이미지 URL',
      },
      settings: {
        themeColor: '메인 테마 색상',
        fontFamily: '기본 폰트',
        save: '설정 저장',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      strategies: 'Strategies',
      quantStrategies: 'RealQuant Strategies',
      performance: 'Backtesting',
      actualReturns: 'Actual Returns',
      contact: 'Inquiry',
      admin: 'Admin',
    },
    hero: {
      title: '10% Monthly, A New Standard in Quant',
      subtitle: 'RealQuant generates stable returns by eliminating emotions and focusing solely on profit through advanced algorithms and big data analysis.',
      cta: 'Explore Strategies',
    },
    features: {
      title: 'Algorithmic Trading Strategies',
      items: [
        {
          title: 'ML-Based Prediction Models',
          desc: 'Analyzes millions of market data points in real-time to capture optimal trading timing.',
        },
        {
          title: 'Risk Management System',
          desc: 'Maximizes portfolio stability with dynamic asset allocation responding to market volatility.',
        },
        {
          title: 'Ultra-Low Latency Infrastructure',
          desc: 'Seizes micro-opportunities in the market with minimized latency system trading.',
        },
      ],
    },
    quantStrategies: {
      title: 'RealQuant Strategies',
      items: [
        { name: 'Alpha Strategy', desc: 'AUD/CAD Currency Pair' },
        { name: 'Beta Strategy', desc: 'MultiFOREX Currency Pairs' },
        { name: 'Gamma Strategy', desc: 'XAU/USD Gold Futures' },
        { name: 'Delta Strategy', desc: 'EUR/USD Currency Pair' },
        { name: 'Epsilon Strategy', desc: 'MultiFOREX2 Currency Pairs' },
        { name: 'Hexa Strategy', desc: 'USDJPY Currency Pair' },
      ],
    },
    performance: {
      title: 'RealQuant Backtesting',
      desc: 'Monthly performance of RealQuant core strategies throughout 2025.',
    },
    actualReturns: {
      title: 'Actual Returns',
      readMore: 'Read More',
    },
    contact: {
      title: 'Inquiry',
      desc: 'If you have any questions about RealQuant strategies and services, please feel free to contact us.',
      telegram: 'Contact via Telegram',
    },
    footer: {
      desc: 'RealQuant is a quantitative investment firm providing data-driven quantitative investment solutions.',
      rights: '© 2026 RealQuant. All rights reserved.',
    },
    admin: {
      title: 'Admin Dashboard',
      tabs: {
        posts: 'Post Management',
        settings: 'Design Settings',
      },
      posts: {
        add: 'Add New Post',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        titleLabel: 'Title',
        contentLabel: 'Content',
        imageLabel: 'Image URL',
      },
      settings: {
        themeColor: 'Main Theme Color',
        fontFamily: 'Primary Font',
        save: 'Save Settings',
      },
    },
  },
};

export type Language = 'ko' | 'en';
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
