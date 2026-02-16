import { ContentItem } from './types';

// Demo URL - In a real app, these would be distinct URLs for each project
const DEMO_URL = "https://dribbble.com/";

export const AI_CONTENTS: ContentItem[] = [
  {
    id: '1',
    category: '이벤트/프로모션',
    title: '살사인들의 썬데이 결소셜',
    
    // [이미지 자동 생성 가이드]
    // posterUrl과 backdropUrl을 비워두거나 삭제하면,
    // 아래 입력한 'url' 주소의 스크린샷이 자동으로 썸네일로 생성됩니다!
    // posterUrl: 'https://github.com/parkys1004/portfolio/blob/main/public/img/kyul.png?raw=true', 
    // backdropUrl: 'https://github.com/parkys1004/portfolio/blob/main/public/img/kyul.png?raw=true',
    
    // [링크 변경 가이드]
    // url: 클릭 시 이동할 실제 사이트 주소를 여기에 입력하세요.
    url: 'https://kyul-social.vercel.app/',
    
    isNew: true
  },
  {
    id: '2',
    category: '이벤트/프로모션',
    title: '라라라 요미 레이디 시즌5 파티',
    
    // 로컬 파일이 없으므로 온라인 이미지로 대체합니다.
    // 만약 로컬 파일을 사용하시려면 public/img/ 폴더에 yomi.png를 넣고 아래 주석을 해제하세요.
    // posterUrl: '/img/yomi.png',
    posterUrl: 'https://github.com/parkys1004/img/blob/main/K-Stream%20Promo/yomi.png?raw=true',
    backdropUrl: 'https://github.com/parkys1004/img/blob/main/K-Stream%20Promo/yomi.png?raw=true',
    
    url: 'https://2026-lalala-yomi-lady-season-5.vercel.app/'
  },
  {
    id: '3',
    category: '이벤트/프로모션',
    title: 'LALALA SALSA Spring Party',
    posterUrl: 'https://github.com/parkys1004/img/blob/main/K-Stream%20Promo/SpringParty.jpg?raw=true',
    backdropUrl: 'https://github.com/parkys1004/img/blob/main/K-Stream%20Promo/SpringParty.jpg?raw=true',
    url: 'https://lalala-salsa-spring-party.vercel.app/'
  },
  {
    id: '4',
    category: '이벤트/프로모션',
    title: '방구석 작곡가 Suno AI 가이드',
    posterUrl: 'https://github.com/parkys1004/img/blob/main/K-Stream%20Promo/Suno%20AI.png?raw=true',
    backdropUrl: 'https://github.com/parkys1004/img/blob/main/K-Stream%20Promo/Suno%20AI.png?raw=true',
    url: 'https://corner-composer.vercel.app/'
  },
  {
    id: '5',
    category: '대시보드',
    title: 'Crypto Analytics - 암호화폐 분석 대시보드',
    posterUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL
  },
  {
    id: '6',
    category: '이벤트/프로모션',
    title: 'Tech Conference 2024 - 컨퍼런스 티징',
    posterUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL
  },
  {
    id: '7',
    category: '모바일 앱',
    title: 'Health Mate - 건강 관리 앱 소개',
    posterUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL
  },
  {
    id: '8',
    category: '포트폴리오',
    title: 'Designer Alex - 개인 포트폴리오',
    posterUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL
  },
  {
    id: '9',
    category: 'SaaS',
    title: 'Team Sync - 협업 툴 마케팅 페이지',
    posterUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL
  },
  {
    id: '10',
    category: '이커머스',
    title: 'Organic Food - 유기농 식품 마켓',
    posterUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL
  },
  {
    id: '11',
    category: '기업',
    title: 'Architecture Lab - 건축 사무소',
    posterUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL
  },
  {
    id: '12',
    category: '스타트업',
    title: 'Space Xplore - 우주 여행 예약',
    posterUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    backdropUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=900&q=80',
    url: DEMO_URL
  }
];