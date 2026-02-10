import { ContentItem } from './types';

// Demo URL - In a real app, these would be distinct URLs for each project
const DEMO_URL = "https://dribbble.com/";

export const AI_CONTENTS: ContentItem[] = [
  {
    id: '1',
    category: 'SaaS',
    title: '살사인들의 썬데이 결소셜',
    description: '복잡한 업무 흐름을 AI가 분석하여 시각화해주는 B2B SaaS 솔루션의 메인 랜딩페이지입니다. 신뢰감을 주는 블루 톤과 깔끔한 그리드 레이아웃을 사용했습니다.',
    tags: ['#SaaS', '#B2B', '#Automation'],
    
    // [이미지 자동 생성 가이드]
    // posterUrl과 backdropUrl을 비워두거나 삭제하면,
    // 아래 입력한 'url' 주소의 스크린샷이 자동으로 썸네일로 생성됩니다!
    // posterUrl: '/img/kyul.png', 
    // backdropUrl: '/img/kyul.png',
    
    // [링크 변경 가이드]
    // url: 클릭 시 이동할 실제 사이트 주소를 여기에 입력하세요.
    url: 'https://kyul-social.vercel.app/',
    
    isNew: true,
    provider: 'netflix',
    matchScore: 98,
    year: 2024,
    ageRating: '전체'
  },
  {
    id: '2',
    category: '이커머스',
    title: '라라라 요미 레이디 시즌5 파티',
    description: '미니멀리즘을 지향하는 인테리어 소품 쇼핑몰입니다. 제품의 디테일이 돋보이도록 여백을 최대한 활용하고, 모던한 타이포그래피를 적용했습니다.',
    tags: ['#Shopping', '#Minimal', '#Interior'],
    posterUrl: '/img/yomi.png',
    backdropUrl: '/img/yomi.png',
    url: 'https://2026-lalala-yomi-lady-season-5.vercel.app/',
    provider: 'disney',
    matchScore: 85,
    year: 2023,
    ageRating: '12세'
  },
  {
    id: '3',
    category: '기업',
    title: 'Next Gen Finance - 핀테크 기업 소개',
    description: '글로벌 핀테크 기업의 브랜드 아이덴티티를 보여주는 기업 소개 페이지입니다. 역동적인 인터랙션과 데이터 시각화를 통해 기업의 성장성을 강조했습니다.',
    tags: ['#Fintech', '#Corporate', '#Finance'],
    posterUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'hulu',
    matchScore: 92,
    year: 2024,
    ageRating: '15세'
  },
  {
    id: '4',
    category: '스타트업',
    title: 'Green Energy - 친환경 에너지 스타트업',
    description: '지속 가능한 에너지를 만드는 스타트업의 비전을 담았습니다. 자연 친화적인 컬러 팔레트와 부드러운 모션을 사용하여 브랜드 메시지를 전달합니다.',
    tags: ['#Eco', '#Startup', '#Green'],
    posterUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'netflix',
    matchScore: 89,
    year: 2023,
    ageRating: '전체'
  },
  {
    id: '5',
    category: '대시보드',
    title: 'Crypto Analytics - 암호화폐 분석 대시보드',
    description: '실시간 시세 변동과 포트폴리오를 한눈에 확인할 수 있는 대시보드 UI입니다. 다크 모드를 기반으로 네온 컬러를 포인트로 사용하여 가독성을 높였습니다.',
    tags: ['#Dashboard', '#Crypto', '#DarkUI'],
    posterUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'tvn',
    matchScore: 95,
    year: 2024,
    ageRating: '19세'
  },
  {
    id: '6',
    category: '이벤트/프로모션',
    title: 'Tech Conference 2024 - 컨퍼런스 티징',
    description: '연례 기술 컨퍼런스의 티징 및 티켓 예매 페이지입니다. 강렬한 타이포그래피와 3D 오브젝트를 활용하여 미래지향적인 분위기를 연출했습니다.',
    tags: ['#Event', '#Conference', '#3D'],
    posterUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'netflix',
    matchScore: 99,
    year: 2024,
    ageRating: '전체'
  },
  {
    id: '7',
    category: '모바일 앱',
    title: 'Health Mate - 건강 관리 앱 소개',
    description: '개인 맞춤형 건강 관리 앱의 기능을 소개하는 프로모션 웹사이트입니다. 앱 화면을 목업으로 배치하여 실제 사용 경험을 간접적으로 전달합니다.',
    tags: ['#AppLanding', '#Health', '#Mobile'],
    posterUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'disney',
    matchScore: 88,
    year: 2023,
    ageRating: '전체'
  },
  {
    id: '8',
    category: '포트폴리오',
    title: 'Designer Alex - 개인 포트폴리오',
    description: '시각 디자이너의 작업물을 아카이빙하는 포트폴리오 사이트입니다. 작품이 돋보이도록 UI 요소를 최소화하고 갤러리 형태의 레이아웃을 채택했습니다.',
    tags: ['#Portfolio', '#Personal', '#Gallery'],
    posterUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'hulu',
    matchScore: 91,
    year: 2022,
    ageRating: '12세'
  },
  {
    id: '9',
    category: 'SaaS',
    title: 'Team Sync - 협업 툴 마케팅 페이지',
    description: '원격 근무 팀을 위한 협업 툴의 주요 기능을 설명하는 페이지입니다. 일러스트레이션과 인터랙티브한 요소를 통해 친근한 이미지를 구축했습니다.',
    tags: ['#Collaboration', '#SaaS', '#RemoteWork'],
    posterUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'netflix',
    matchScore: 87,
    year: 2024,
    ageRating: '전체'
  },
  {
    id: '10',
    category: '이커머스',
    title: 'Organic Food - 유기농 식품 마켓',
    description: '신선한 식재료를 판매하는 온라인 마켓입니다. 식욕을 돋우는 고화질 이미지와 자연의 색감을 사용하여 신선함을 강조했습니다.',
    tags: ['#Food', '#Organic', '#Commerce'],
    posterUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'disney',
    matchScore: 94,
    year: 2023,
    ageRating: '전체'
  },
  {
    id: '11',
    category: '기업',
    title: 'Architecture Lab - 건축 사무소',
    description: '건축 사무소의 프로젝트를 소개하는 웹사이트입니다. 구조적인 그리드 시스템과 흑백의 대비를 통해 건축적인 미학을 웹으로 가져왔습니다.',
    tags: ['#Architecture', '#Minimal', '#Grid'],
    posterUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'tvn',
    matchScore: 86,
    year: 2021,
    ageRating: '전체'
  },
  {
    id: '12',
    category: '스타트업',
    title: 'Space Xplore - 우주 여행 예약',
    description: '미래의 우주 여행을 예약할 수 있는 컨셉 웹사이트입니다. 몰입감 있는 배경 영상과 패럴랙스 스크롤링 효과를 적용했습니다.',
    tags: ['#Space', '#Concept', '#Travel'],
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL,
    provider: 'netflix',
    matchScore: 97,
    year: 2050,
    ageRating: '12세'
  }
];