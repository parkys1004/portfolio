import React from 'react';
import { PenTool, Smartphone, Globe, BarChart, Rocket, Shield } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

export const ServicePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-in fade-in duration-500">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Our Services</h2>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          비즈니스 성장을 위한<br />
          최적의 디지털 솔루션
        </h1>
        <p className="text-gray-500 text-lg">
          우리는 단순한 웹사이트를 넘어 브랜드의 가치를 높이고<br className="hidden md:block"/> 
          사용자 경험을 극대화하는 디지털 프로덕트를 만듭니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={<Globe className="w-7 h-7" />}
          title="웹 사이트 구축"
          desc="반응형 웹 디자인부터 CMS 연동까지, 브랜드 아이덴티티에 최적화된 기업 및 서비스 웹사이트를 제작합니다."
        />
        <ServiceCard 
          icon={<Smartphone className="w-7 h-7" />}
          title="모바일 앱 개발"
          desc="iOS 및 Android 네이티브 앱부터 크로스 플랫폼(Flutter, React Native)까지, 사용자 중심의 모바일 경험을 제공합니다."
        />
        <ServiceCard 
          icon={<PenTool className="w-7 h-7" />}
          title="UI/UX 디자인"
          desc="사용자 조사를 기반으로 직관적이고 매력적인 인터페이스를 설계하여 고객의 이탈률을 줄이고 전환율을 높입니다."
        />
        <ServiceCard 
          icon={<Rocket className="w-7 h-7" />}
          title="SaaS 제품 개발"
          desc="복잡한 비즈니스 로직을 단순화하고, 확장 가능한 아키텍처를 기반으로 안정적인 B2B/B2C SaaS 제품을 구축합니다."
        />
        <ServiceCard 
          icon={<BarChart className="w-7 h-7" />}
          title="데이터 시각화 & 대시보드"
          desc="방대한 데이터를 한눈에 파악할 수 있는 직관적인 대시보드를 설계하여 의사결정을 돕는 인사이트를 제공합니다."
        />
        <ServiceCard 
          icon={<Shield className="w-7 h-7" />}
          title="유지보수 & 운영"
          desc="안정적인 서비스 운영을 위한 서버 관리, 보안 업데이트, 성능 최적화 등 지속적인 기술 지원을 약속합니다."
        />
      </div>
    </div>
  );
};
