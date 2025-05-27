import React, { useState } from 'react';
import { Heart, QrCode, Clock, Target, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DoacoesPage = () => {
  const [valorPersonalizado, setValorPersonalizado] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState('dizimo');

  const valoresRapidos = [10, 25, 50, 100, 200];

  const categorias = [
    { id: 'dizimo', label: 'Dízimo', descricao: 'Contribuição mensal fiel' },
    { id: 'oferta', label: 'Oferta', descricao: 'Oferta voluntária' },
    { id: 'missoes', label: 'Missões', descricao: 'Apoio missionário' },
    { id: 'projetos', label: 'Projetos', descricao: 'Projetos especiais da igreja' }
  ];

  const campanhas = [
    {
      id: 1,
      titulo: 'Reforma do Templo',
      descricao: 'Renovação das instalações para melhor acomodar nossa congregação',
      meta: 50000,
      arrecadado: 32500,
      prazo: '30 dias restantes'
    },
    {
      id: 2,
      titulo: 'Missão África',
      descricao: 'Apoio às famílias missionárias na África',
      meta: 25000,
      arrecadado: 18200,
      prazo: '15 dias restantes'
    }
  ];

  const pixKey = "igreja@exemplo.com.br";

  const calcularProgresso = (arrecadado: number, meta: number) => {
    return Math.min((arrecadado / meta) * 100, 100);
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-warm-gradient text-white px-6 py-6 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Contribuições</h1>
            <p className="text-amber-100">Seja parte da obra de Deus</p>
          </div>
          <Heart className="w-8 h-8 text-amber-200" />
        </div>
      </div>

      {/* Categorias de Doação */}
      <div className="px-6 -mt-2">
        <h3 className="font-semibold text-gray-800 mb-3">Tipos de Contribuição</h3>
        <div className="grid grid-cols-2 gap-3">
          {categorias.map((categoria) => (
            <Card
              key={categoria.id}
              className={`cursor-pointer transition-all ${
                categoriaAtiva === categoria.id
                  ? 'border-church-accent bg-amber-50'
                  : 'hover:shadow-md'
              }`}
              onClick={() => setCategoriaAtiva(categoria.id)}
            >
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold text-gray-800 mb-1">{categoria.label}</h4>
                <p className="text-xs text-gray-600">{categoria.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Valores Rápidos */}
      <div className="px-6">
        <h3 className="font-semibold text-gray-800 mb-3">Valores Rápidos</h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {valoresRapidos.map((valor) => (
            <Button
              key={valor}
              variant="outline"
              className="h-12 text-lg font-semibold hover:bg-church-accent hover:text-white hover:border-church-accent"
              onClick={() => setValorPersonalizado(valor.toString())}
            >
              R$ {valor}
            </Button>
          ))}
        </div>
        
        <div className="space-y-3">
          <Input
            type="number"
            placeholder="Valor personalizado (R$)"
            value={valorPersonalizado}
            onChange={(e) => setValorPersonalizado(e.target.value)}
            className="text-center text-lg"
          />
          
          <Button 
            className="w-full bg-church-accent hover:bg-church-accent/90 text-white h-12 text-lg font-semibold"
            disabled={!valorPersonalizado}
          >
            <DollarSign className="w-5 h-5 mr-2" />
            Contribuir {valorPersonalizado && `R$ ${valorPersonalizado}`}
          </Button>
        </div>
      </div>

      {/* PIX QR Code */}
      <div className="px-6">
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="text-center pb-3">
            <CardTitle className="text-lg text-green-800 flex items-center justify-center gap-2">
              <QrCode size={20} />
              Contribuição via PIX
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="w-32 h-32 bg-white border-2 border-green-300 rounded-lg mx-auto flex items-center justify-center">
              <QrCode size={80} className="text-green-600" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Chave PIX:</p>
              <p className="font-mono text-sm bg-white px-3 py-2 rounded border">{pixKey}</p>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Copiar Chave PIX
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Campanhas Especiais */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">Campanhas Especiais</h3>
          <Button variant="ghost" size="sm" className="text-church-accent">
            Ver todas
          </Button>
        </div>
        
        <div className="space-y-4">
          {campanhas.map((campanha) => (
            <Card key={campanha.id} className="border-l-4 border-l-church-accent">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">{campanha.titulo}</h4>
                      <p className="text-sm text-gray-600">{campanha.descricao}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-orange-600">
                      <Clock size={12} />
                      <span className="whitespace-nowrap">{campanha.prazo}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progresso</span>
                      <span className="font-medium">
                        {formatarMoeda(campanha.arrecadado)} / {formatarMoeda(campanha.meta)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-church-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${calcularProgresso(campanha.arrecadado, campanha.meta)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 text-right">
                      {calcularProgresso(campanha.arrecadado, campanha.meta).toFixed(1)}% da meta
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-church-accent text-church-accent hover:bg-church-accent hover:text-white"
                  >
                    <Target size={14} className="mr-2" />
                    Contribuir para esta Campanha
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Informações Importantes */}
      <div className="px-6 pb-6">
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">Sobre as Contribuições</h4>
                <p className="text-sm text-blue-700 leading-relaxed">
                  Suas contribuições nos ajudam a manter a obra de Deus e abençoar vidas. 
                  Todas as doações são utilizadas com transparência para o crescimento do Reino.
                </p>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-100 p-0">
                  Ver relatório de transparência
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoacoesPage;
