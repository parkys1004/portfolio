
export interface ContentItem {
  id: string;
  title: string;
  posterUrl?: string; // Thumbnail (Optional: URL로 자동 생성 가능)
  backdropUrl?: string; // Detail Image (Optional: URL로 자동 생성 가능)
  category: string; 
  author?: string;
  date?: string;
  url: string; // Target Website URL
  isNew?: boolean;
}

export type Category = '전체' | 'SaaS' | '이커머스' | '기업' | '스타트업' | '이벤트/프로모션' | '포트폴리오' | '모바일 앱' | '대시보드';