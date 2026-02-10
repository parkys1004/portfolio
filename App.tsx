import React, { useState } from 'react';
import { Menu, Layout } from 'lucide-react';
import { ShowcasePage } from './pages/ShowcasePage';
import { ServicePage } from './pages/ServicePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

type Page = 'showcase' | 'service' | 'about' | 'contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('showcase');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activePage) {
      case 'showcase': return <ShowcasePage />;
      case 'service': return <ServicePage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <ShowcasePage />;
    }
  };

  const navItems: { id: Page; label: string }[] = [
    { id: 'showcase', label: '쇼케이스' },
    { id: 'service', label: '서비스' },
    { id: 'about', label: '소개' },
    { id: 'contact', label: '문의' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => setActivePage('showcase')}
            >
              <div className="bg-black text-white p-2 rounded-lg">
                <Layout className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-tighter text-gray-900">WEB FOLIO.</span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-500">
               {navItems.map((item) => (
                 <button
                   key={item.id}
                   onClick={() => setActivePage(item.id)}
                   className={`transition-colors ${activePage === item.id ? 'text-black' : 'hover:text-black'}`}
                 >
                   {item.label}
                 </button>
               ))}
            </div>

            {/* Icons / Actions */}
            <div className="flex items-center gap-3">
               <button 
                 onClick={() => setActivePage('contact')}
                 className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors"
               >
                 프로젝트 시작하기
               </button>
              <button 
                className="p-2 text-gray-500 hover:text-black md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                 <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left font-bold ${activePage === item.id ? 'text-black' : 'text-gray-500'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <div className="flex-1">
        {renderContent()}
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-100 bg-gray-50 py-16">
         <div className="max-w-7xl mx-auto px-4 text-center">
             <div className="flex justify-center items-center gap-2 mb-6">
                 <div className="bg-black text-white p-1.5 rounded">
                    <Layout className="w-5 h-5" />
                 </div>
                 <span className="text-xl font-black tracking-tighter">WEB FOLIO.</span>
             </div>
             <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
               브랜드가 사랑하는 디지털 경험을 만듭니다. 최신 작업물을 확인하고 영감을 얻으세요.
             </p>
             <div className="flex justify-center gap-6 text-sm font-bold text-gray-500">
                 <a href="#" className="hover:text-black">인스타그램</a>
                 <a href="#" className="hover:text-black">드리블</a>
                 <a href="#" className="hover:text-black">트위터</a>
                 <a href="#" className="hover:text-black">링크드인</a>
             </div>
             <p className="text-gray-300 text-xs mt-12">
               © 2024 WEB FOLIO. All rights reserved.
             </p>
         </div>
      </footer>
    </div>
  );
};

export default App;
