
import React, { useState } from 'react';
import { Home, Calendar, Music, Prayer, Donate, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HomePage from './pages/HomePage';
import CultosPage from './pages/CultosPage';
import MensagensPage from './pages/MensagensPage';
import OracaoPage from './pages/OracaoPage';
import DoacoesPage from './pages/DoacoesPage';
import ComunidadePage from './pages/ComunidadePage';

type PageType = 'home' | 'cultos' | 'mensagens' | 'oracao' | 'doacoes' | 'comunidade';

const ChurchApp = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigationItems = [
    { id: 'home' as PageType, icon: Home, label: 'Início' },
    { id: 'cultos' as PageType, icon: Calendar, label: 'Cultos' },
    { id: 'mensagens' as PageType, icon: Music, label: 'Mensagens' },
    { id: 'oracao' as PageType, icon: Prayer, label: 'Oração' },
    { id: 'doacoes' as PageType, icon: Donate, label: 'Doações' },
    { id: 'comunidade' as PageType, icon: User, label: 'Comunidade' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'cultos':
        return <CultosPage />;
      case 'mensagens':
        return <MensagensPage />;
      case 'oracao':
        return <OracaoPage />;
      case 'doacoes':
        return <DoacoesPage />;
      case 'comunidade':
        return <ComunidadePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative">
      {/* Main Content */}
      <div className="flex-1 pb-20 overflow-y-auto">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-2 py-2">
        <div className="flex justify-around items-center">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentPage === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(item.id)}
                className={`flex flex-col items-center gap-1 p-2 h-auto ${
                  isActive ? 'text-church-primary' : 'text-gray-600'
                }`}
              >
                <IconComponent size={20} />
                <span className="text-xs font-medium">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default ChurchApp;
