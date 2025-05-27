
import React, { useState } from 'react';
import { Music, Search, Star, Share2, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MensagensPage = () => {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('todos');

  const mensagens = [
    {
      id: 1,
      titulo: 'O Poder da Fé em Tempos Difíceis',
      pregador: 'Pastor João Silva',
      data: '28/05/2024',
      duracao: '45 min',
      categoria: 'fe',
      curtidas: 156,
      favorito: true,
      descricao: 'Uma mensagem poderosa sobre como manter a fé mesmo nos momentos mais desafiadores da vida.'
    },
    {
      id: 2,
      titulo: 'Vivendo em Comunidade',
      pregador: 'Pastora Maria Santos',
      data: '21/05/2024',
      duracao: '38 min',
      categoria: 'comunidade',
      curtidas: 89,
      favorito: false,
      descricao: 'Reflexões sobre a importância da vida em comunidade e como edificar uns aos outros.'
    },
    {
      id: 3,
      titulo: 'Prosperidade Segundo a Bíblia',
      pregador: 'Pastor Carlos Lima',
      data: '14/05/2024',
      duracao: '52 min',
      categoria: 'prosperidade',
      curtidas: 203,
      favorito: true,
      descricao: 'Entendendo o conceito bíblico de prosperidade e como aplicá-lo em nossa vida.'
    },
    {
      id: 4,
      titulo: 'O Amor de Deus em Ação',
      pregador: 'Pastor João Silva',
      data: '07/05/2024',
      duracao: '41 min',
      categoria: 'amor',
      curtidas: 134,
      favorito: false,
      descricao: 'Como demonstrar o amor de Deus através de nossas ações no dia a dia.'
    }
  ];

  const categorias = [
    { id: 'todos', label: 'Todos' },
    { id: 'fe', label: 'Fé' },
    { id: 'amor', label: 'Amor' },
    { id: 'comunidade', label: 'Comunidade' },
    { id: 'prosperidade', label: 'Prosperidade' }
  ];

  const mensagensFiltradas = mensagens.filter(mensagem => {
    const matchesBusca = mensagem.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                        mensagem.pregador.toLowerCase().includes(busca.toLowerCase());
    const matchesCategoria = categoriaAtiva === 'todos' || mensagem.categoria === categoriaAtiva;
    return matchesBusca && matchesCategoria;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-church-gradient text-white px-6 py-6 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Mensagens</h1>
            <p className="text-blue-100">Sermões e estudos bíblicos</p>
          </div>
          <Music className="w-8 h-8 text-blue-200" />
        </div>
      </div>

      {/* Busca */}
      <div className="px-6 -mt-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input
            placeholder="Buscar mensagens ou pregadores..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Filtros por Categoria */}
      <div className="px-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categorias.map((categoria) => (
            <Button
              key={categoria.id}
              variant={categoriaAtiva === categoria.id ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoriaAtiva(categoria.id)}
              className={`whitespace-nowrap ${
                categoriaAtiva === categoria.id 
                  ? 'bg-church-primary hover:bg-church-primary/90' 
                  : 'hover:bg-gray-50'
              }`}
            >
              {categoria.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Lista de Mensagens */}
      <div className="px-6 space-y-4">
        {mensagensFiltradas.map((mensagem) => (
          <Card key={mensagem.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight mb-1">
                    {mensagem.titulo}
                  </CardTitle>
                  <p className="text-sm text-church-primary font-medium">
                    {mensagem.pregador}
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={mensagem.favorito ? 'text-yellow-500' : 'text-gray-400'}
                >
                  <Star size={16} fill={mensagem.favorito ? 'currentColor' : 'none'} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600 text-sm leading-relaxed">
                {mensagem.descricao}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span>{mensagem.data}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{mensagem.duracao}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} />
                  <span>{mensagem.curtidas}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="default" size="sm" className="flex-1 bg-church-primary hover:bg-church-primary/90">
                  Ouvir Agora
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 size={14} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {mensagensFiltradas.length === 0 && (
        <div className="text-center py-8 px-6">
          <Music size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">
            {busca ? 'Nenhuma mensagem encontrada.' : 'Nenhuma mensagem disponível nesta categoria.'}
          </p>
        </div>
      )}

      {/* Mensagem em Destaque */}
      {!busca && categoriaAtiva === 'todos' && (
        <div className="px-6">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-church-gradient rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Mensagem em Destaque</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Confira nossa mensagem mais recente sobre "O Poder da Fé em Tempos Difíceis"
                  </p>
                  <Button size="sm" className="bg-church-primary hover:bg-church-primary/90">
                    Ouvir Agora
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MensagensPage;
