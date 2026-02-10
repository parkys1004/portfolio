export interface ContentItem {
  id: string;
  title: string;
  description: string;
  posterUrl: string; // Thumbnail
  backdropUrl: string; // Detail Image (optional now)
  tags: string[];
  category: string; 
  author?: string;
  date?: string;
  url: string; // Target Website URL
  isNew?: boolean;
  provider: 'hulu' | 'disney' | 'netflix' | 'tvn';
  matchScore: number;
  year: number;
  ageRating: string;
}

export type Category = '전체' | 'SaaS' | '이커머스' | '기업' | '스타트업' | '이벤트/프로모션' | '포트폴리오' | '모바일 앱' | '대시보드';