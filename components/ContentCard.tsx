import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ContentItem } from '../types';

interface Props {
  item: ContentItem;
  onClick: (item: ContentItem) => void;
}

export const ContentCard: React.FC<Props> = ({ item, onClick }) => {
  return (
    <div 
      className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-900 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => onClick(item)}
    >
      {/* Background Image - Fills entire card */}
      <img
        src={item.posterUrl}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Header: Category & Badge */}
        <div className="flex justify-between items-start">
             <span className="bg-black/30 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase">
                {item.category}
            </span>
             {item.isNew && (
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">
                    NEW
                </span>
            )}
        </div>

        {/* Footer: Title & Info */}
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             {/* Title */}
            <h3 className="text-white font-bold text-xl leading-snug mb-2 drop-shadow-lg line-clamp-2">
              {item.title}
            </h3>

             {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
               {item.tags.slice(0, 3).map((tag) => (
                 <span key={tag} className="text-gray-200 text-[10px] font-medium bg-white/10 backdrop-blur-sm px-2 py-1 rounded">
                   {tag}
                 </span>
               ))}
            </div>

            {/* Visit Action - Appears on Hover */}
            <div className="flex items-center gap-2 text-white/90 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-white/20 pt-3">
                <div className="bg-white text-black p-1.5 rounded-full">
                    <ExternalLink className="w-3 h-3" />
                </div>
                <span>사이트 방문하기</span>
            </div>
        </div>
      </div>
    </div>
  );
};