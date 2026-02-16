import React, { useState } from 'react';
import { Monitor, Layout } from 'lucide-react';
import { ContentItem, Category } from '../types';
import { AI_CONTENTS } from '../data';
import { ContentCard } from '../components/ContentCard';

const CATEGORIES: Category[] = [
  '전체',
  '이벤트/프로모션',  
  '이커머스', 
  '기업', 
  '스타트업', 
  '포트폴리오',
  '모바일 앱',
  '대시보드'
];

export const ShowcasePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  
  const filteredItems = activeCategory === '전체' 
    ? AI_CONTENTS 
    : AI_CONTENTS.filter(item => item.category === activeCategory);

  const handleCardClick = (item: ContentItem) => {
    window.open(item.url, '_blank');
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero / Title Section */}
      <header className="pt-10 pb-16 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600 uppercase tracking-widest">
            크리에이티브 웹 아카이브
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
             영감을 주는 엄선된 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">랜딩 페이지</span><br/>
             디자인 레퍼런스
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
             성공적인 비즈니스를 위한 검증된 웹 디자인 포트폴리오를 확인해보세요.<br className="hidden md:block"/>
             클릭 시 해당 라이브 사이트로 이동합니다.
          </p>
      </header>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 mb-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-4 scrollbar-hide no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
               {CATEGORIES.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
                     activeCategory === cat
                       ? 'bg-black text-white shadow-lg transform scale-105'
                       : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
         </div>
      </div>

      {/* Main Content Grid */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
         {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredItems.map(item => (
                   <ContentCard 
                      key={item.id} 
                      item={item} 
                      onClick={handleCardClick} 
                   />
                ))}
            </div>
         ) : (
            <div className="text-center py-32 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                <Monitor className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">해당 카테고리에 프로젝트가 없습니다.</p>
            </div>
         )}
      </main>
    </div>
  );
};
