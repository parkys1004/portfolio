import React, { useEffect, useState } from 'react';
import { X, Play, Plus, Check, ThumbsUp, Volume2, VolumeX } from 'lucide-react';
import { ContentItem } from '../types';
import { ProviderLogo } from './ProviderLogo';

interface Props {
  item: ContentItem;
  onClose: () => void;
}

export const LandingPage: React.FC<Props> = ({ item, onClose }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isAdded, setIsAdded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className={`relative h-full w-full overflow-y-auto bg-[#141414] shadow-2xl transition-transform duration-300 md:h-[90vh] md:w-[90vw] md:max-w-5xl md:rounded-xl md:overflow-hidden ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-white/20 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Hero Section of Modal */}
        <div className="relative h-[60vh] w-full">
          <div className="absolute inset-0">
            <img
              src={item.backdropUrl}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="mb-4">
               <ProviderLogo provider={item.provider} className="text-3xl md:text-4xl shadow-black drop-shadow-lg" />
            </div>
            
            <h1 className="mb-4 text-4xl md:text-6xl font-black text-white drop-shadow-lg leading-tight">
              {item.title}
            </h1>

            <div className="mb-6 flex items-center gap-4 text-sm font-medium text-gray-300">
              <span className="text-green-400 font-bold">{item.matchScore}% 일치</span>
              <span>{item.year}</span>
              <span className="border border-gray-500 px-1.5 py-0.5 rounded text-xs">{item.ageRating}</span>
              <span className="rounded bg-gray-700 px-1.5 py-0.5 text-xs text-white">HD</span>
              {item.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-gray-400">• {tag}</span>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 rounded bg-white px-8 py-3 text-lg font-bold text-black transition-colors hover:bg-gray-200">
                <Play className="h-6 w-6 fill-black" />
                재생
              </button>
              <button 
                onClick={() => setIsAdded(!isAdded)}
                className="flex items-center justify-center gap-2 rounded border-2 border-gray-500 bg-black/30 px-6 py-3 text-lg font-bold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {isAdded ? <Check className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                {isAdded ? '보관함에 담김' : '내가 찜한 콘텐츠'}
              </button>
              <button className="flex items-center justify-center rounded-full border-2 border-gray-500 bg-black/30 p-3 text-white transition-colors hover:border-white hover:bg-white/10">
                <ThumbsUp className="h-6 w-6" />
              </button>
            </div>
          </div>

           {/* Mute Toggle (Absolute to Hero) */}
           <button 
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-10 right-8 hidden md:flex items-center justify-center rounded-full border border-gray-500 bg-black/30 p-2 text-white hover:bg-white/10"
            >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3 md:px-12 md:pb-12 bg-[#141414]">
          <div className="col-span-2">
            <div className="mb-6">
                <p className="text-lg leading-relaxed text-white">
                {item.description}
                </p>
            </div>
            <div className="border-t border-gray-800 pt-6">
                 <h3 className="text-xl font-bold text-white mb-4">회차 정보</h3>
                 <div className="space-y-4">
                     {[1, 2, 3].map((ep) => (
                         <div key={ep} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors group">
                             <div className="text-2xl font-bold text-gray-500 group-hover:text-white">{ep}</div>
                             <div className="h-20 w-32 bg-gray-700 rounded overflow-hidden relative">
                                 <img src={`https://picsum.photos/seed/${item.id}-${ep}/200/150`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" alt={`Episode ${ep}`} />
                                 <div className="absolute inset-0 flex items-center justify-center">
                                     <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity fill-white" />
                                 </div>
                             </div>
                             <div className="flex-1">
                                 <h4 className="text-white font-bold mb-1">에피소드 {ep}</h4>
                                 <p className="text-sm text-gray-400 line-clamp-2">이 에피소드에서는 주인공의 숨겨진 과거가 드러나며, 사건은 새로운 국면을 맞이하게 됩니다.</p>
                             </div>
                             <div className="text-gray-400 text-sm">54분</div>
                         </div>
                     ))}
                 </div>
            </div>
          </div>

          <div className="col-span-1 space-y-6 text-sm text-gray-400">
            <div>
              <span className="block text-gray-500">출연:</span>
              <span className="text-white">김철수, 이영희, 박지성, 손흥민</span>
            </div>
            <div>
              <span className="block text-gray-500">장르:</span>
              <span className="text-white">{item.tags.join(', ')}</span>
            </div>
            <div>
              <span className="block text-gray-500">관람등급:</span>
              <span className="border border-gray-600 px-1 text-white">{item.ageRating}</span>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-800">
                <p className="text-xs text-gray-500">
                    이 콘텐츠는 {item.provider === 'disney' ? 'Disney+' : 'Hulu'}에서 제공됩니다. 저작권은 각 제작사에 있습니다.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
