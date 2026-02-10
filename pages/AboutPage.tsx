import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                    We Create Digital <br/>
                    <span className="text-blue-500">Masterpieces.</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    우리는 기술과 예술의 경계에서 혁신적인 디지털 경험을 창조하는 크리에이티브 그룹입니다.
                    단순히 예쁜 디자인을 넘어, 비즈니스의 본질을 꿰뚫는 전략적인 결과물을 만듭니다.
                </p>
            </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">150+</div>
                    <div className="text-gray-500 text-sm font-bold">Project Completed</div>
                </div>
                <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">98%</div>
                    <div className="text-gray-500 text-sm font-bold">Client Satisfaction</div>
                </div>
                <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">12+</div>
                    <div className="text-gray-500 text-sm font-bold">Years Experience</div>
                </div>
                <div>
                    <div className="text-4xl font-black text-gray-900 mb-2">24</div>
                    <div className="text-gray-500 text-sm font-bold">Global Awards</div>
                </div>
            </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Team working" 
                    className="rounded-2xl shadow-2xl"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">우리의 철학</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                    <p>
                        디지털 환경은 매일 빠르게 변화하고 있습니다. 하지만 '사용자에게 가치를 전달한다'는 본질은 변하지 않습니다.
                        우리는 트렌드를 쫓되 휩쓸리지 않고, 브랜드 고유의 이야기를 디지털 언어로 번역합니다.
                    </p>
                    <p>
                        작은 디테일 하나가 전체의 완성도를 결정한다고 믿습니다. 픽셀 단위의 정교함과 매끄러운 인터랙션,
                        그리고 견고한 코드가 만나 최상의 사용자 경험을 만들어냅니다.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
