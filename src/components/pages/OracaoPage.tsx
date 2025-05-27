import React, { useState } from 'react';
import { Hands, Plus, Heart, Share2, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const OracaoPage = () => {
  const [novoPedido, setNovoPedido] = useState('');
  const [nomeOpcional, setNomeOpcional] = useState('');
  const [abaAtiva, setAbaAtiva] = useState('pedidos');

  const pedidosOracao = [
    {
      id: 1,
      pedido: 'Por favor, orem pela recuperação da minha mãe que está internada.',
      nome: 'Maria',
      data: '2 horas atrás',
      oracoes: 23,
      respondido: false
    },
    {
      id: 2,
      pedido: 'Oração por um novo emprego. Tenho uma entrevista importante esta semana.',
      nome: 'Anônimo',
      data: '5 horas atrás',
      oracoes: 15,
      respondido: false
    },
    {
      id: 3,
      pedido: 'Gratidão! Meu filho se formou na faculdade. Deus é fiel!',
      nome: 'João',
      data: '1 dia atrás',
      oracoes: 45,
      respondido: true
    }
  ];

  const testemunhos = [
    {
      id: 1,
      titulo: 'Cura da Depressão',
      autor: 'Ana Santos',
      conteudo: 'Depois de anos lutando contra a depressão, encontrei paz e alegria através da oração e da comunidade da igreja.',
      data: '3 dias atrás',
      curtidas: 67
    },
    {
      id: 2,
      titulo: 'Restauração Familiar',
      autor: 'Carlos Silva',
      conteudo: 'Meu casamento estava em crise, mas através da oração e aconselhamento pastoral, Deus restaurou nossa família.',
      data: '1 semana atrás',
      curtidas: 89
    }
  ];

  const agendaOracao = [
    { dia: 'Segunda', tema: 'Família e Relacionamentos' },
    { dia: 'Terça', tema: 'Trabalho e Prosperidade' },
    { dia: 'Quarta', tema: 'Saúde e Cura' },
    { dia: 'Quinta', tema: 'Salvação dos Perdidos' },
    { dia: 'Sexta', tema: 'Líderes e Autoridades' },
    { dia: 'Sábado', tema: 'Missões e Evangelismo' },
    { dia: 'Domingo', tema: 'Igreja e Comunidade' }
  ];

  const handleEnviarPedido = () => {
    if (novoPedido.trim()) {
      // Aqui seria enviado o pedido para o backend
      console.log('Novo pedido:', { pedido: novoPedido, nome: nomeOpcional });
      setNovoPedido('');
      setNomeOpcional('');
      // Mostrar toast de sucesso
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-church-gradient text-white px-6 py-6 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Oração</h1>
            <p className="text-blue-100">Pedidos, testemunhos e intercessão</p>
          </div>
          <Hands className="w-8 h-8 text-blue-200" />
        </div>
      </div>

      {/* Abas */}
      <div className="px-6 -mt-2">
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'pedidos', label: 'Pedidos' },
            { id: 'testemunhos', label: 'Testemunhos' },
            { id: 'agenda', label: 'Agenda' }
          ].map((aba) => (
            <Button
              key={aba.id}
              variant={abaAtiva === aba.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setAbaAtiva(aba.id)}
              className={`flex-1 ${
                abaAtiva === aba.id 
                  ? 'bg-white shadow-sm' 
                  : 'hover:bg-transparent'
              }`}
            >
              {aba.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Conteúdo das Abas */}
      {abaAtiva === 'pedidos' && (
        <div className="space-y-6">
          {/* Formulário de Novo Pedido */}
          <div className="px-6">
            <Card className="border-dashed border-2 border-church-primary/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-church-primary flex items-center gap-2">
                  <Plus size={20} />
                  Novo Pedido de Oração
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Seu nome (opcional)"
                  value={nomeOpcional}
                  onChange={(e) => setNomeOpcional(e.target.value)}
                />
                <Textarea
                  placeholder="Compartilhe seu pedido de oração..."
                  value={novoPedido}
                  onChange={(e) => setNovoPedido(e.target.value)}
                  rows={4}
                />
                <Button 
                  onClick={handleEnviarPedido}
                  disabled={!novoPedido.trim()}
                  className="w-full bg-church-primary hover:bg-church-primary/90"
                >
                  Enviar Pedido
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Pedidos */}
          <div className="px-6 space-y-4">
            <h3 className="font-semibold text-gray-800">Pedidos da Comunidade</h3>
            {pedidosOracao.map((item) => (
              <Card key={item.id} className={`${item.respondido ? 'border-green-200 bg-green-50' : ''}`}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed">{item.pedido}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <span>{item.nome}</span>
                        <span>•</span>
                        <span>{item.data}</span>
                        {item.respondido && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                            Respondida
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Hands size={12} />
                        <span>{item.oracoes}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Heart size={14} className="mr-2" />
                        Orar Por Isso
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 size={14} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {abaAtiva === 'testemunhos' && (
        <div className="px-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Testemunhos</h3>
            <Button variant="outline" size="sm">
              <Plus size={14} className="mr-2" />
              Compartilhar
            </Button>
          </div>
          
          {testemunhos.map((testemunho) => (
            <Card key={testemunho.id} className="border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-gray-800">{testemunho.titulo}</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Heart size={12} />
                      <span>{testemunho.curtidas}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{testemunho.conteudo}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{testemunho.autor}</span>
                    <span>{testemunho.data}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Heart size={14} className="mr-2" />
                      Inspirador
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare size={14} className="mr-2" />
                      Comentar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {abaAtiva === 'agenda' && (
        <div className="px-6 space-y-4">
          <h3 className="font-semibold text-gray-800">Agenda Semanal de Oração</h3>
          <p className="text-gray-600 text-sm">Cada dia da semana temos um tema específico para oração</p>
          
          <div className="space-y-3">
            {agendaOracao.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.dia}-feira</h4>
                      <p className="text-gray-600 text-sm">{item.tema}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Hands size={14} className="mr-2" />
                      Orar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OracaoPage;
