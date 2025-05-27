
import React, { useState } from 'react';
import { Home, Calendar, Music, Hand, Heart, User, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/sonner';
import HomePage from './pages/HomePage';
import CultosPage from './pages/CultosPage';
import MensagensPage from './pages/MensagensPage';
import OracaoPage from './pages/OracaoPage';
import DoacoesPage from './pages/DoacoesPage';
import ComunidadePage from './pages/ComunidadePage';

type PageType = 'home' | 'cultos' | 'mensagens' | 'oracao' | 'doacoes' | 'comunidade';

const ChurchApp = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const navigationItems = [
    { id: 'home' as PageType, icon: Home, label: 'Início' },
    { id: 'cultos' as PageType, icon: Calendar, label: 'Cultos' },
    { id: 'mensagens' as PageType, icon: Music, label: 'Mensagens' },
    { id: 'oracao' as PageType, icon: Hand, label: 'Oração' },
    { id: 'doacoes' as PageType, icon: Heart, label: 'Doações' },
    { id: 'comunidade' as PageType, icon: User, label: 'Comunidade' },
  ];

  const handlePageChange = async (pageId: PageType) => {
    if (pageId === currentPage) return;
    
    setIsTransitioning(true);
    
    // Simular pequeno delay para transição suave
    setTimeout(() => {
      setCurrentPage(pageId);
      setIsTransitioning(false);
      
      // Feedback visual
      const pageLabels = {
        home: 'Início',
        cultos: 'Cultos',
        mensagens: 'Mensagens',
        oracao: 'Oração',
        doacoes: 'Doações',
        comunidade: 'Comunidade'
      };
      
      toast.success(`Navegando para ${pageLabels[pageId]}`);
    }, 150);
  };

  const renderPage = () => {
    const pageComponents = {
      home: <HomePage />,
      cultos: <CultosPage />,
      mensagens: <MensagensPage />,
      oracao: <OracaoPage />,
      doacoes: <DoacoesPage />,
      comunidade: <ComunidadePage />
    };

    return (
      <div className={`transition-all duration-300 ${
        isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      }`}>
        {pageComponents[currentPage]}
      </div>
    );
  };

  const handleProfileClick = () => {
    navigate('/profile');
    toast.success('Abrindo perfil');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative transition-colors duration-300">
      {/* Header with user info and theme toggle */}
      <div className="bg-card border-b border-border px-4 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-church-primary rounded-full flex items-center justify-center transition-transform hover:scale-110">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Olá, {user?.email?.split('@')[0]}!
            </p>
            <p className="text-xs text-muted-foreground">Igreja Comunidade</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-church-primary hover:bg-church-primary/10 transition-all hover:scale-110"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleProfileClick}
            className="text-church-primary hover:bg-church-primary/10 transition-all hover:scale-110"
          >
            <User size={16} />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 pb-20 overflow-y-auto">
        {renderPage()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-card/95 backdrop-blur-sm border-t border-border px-2 py-2 transition-all">
        <div className="flex justify-around items-center">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentPage === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => handlePageChange(item.id)}
                className={`flex flex-col items-center gap-1 p-2 h-auto transition-all duration-200 hover:scale-105 ${
                  isActive 
                    ? 'text-church-primary bg-church-primary/10 scale-110' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <IconComponent size={20} className="transition-transform" />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-church-primary rounded-full animate-pulse" />
                )}
              </Button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default ChurchApp;
