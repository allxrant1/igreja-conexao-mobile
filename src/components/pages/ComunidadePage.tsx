
import React, { useState } from 'react';
import { User, Users, Church, Contact, Image, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ComunidadePage = () => {
  const [abaAtiva, setAbaAtiva] = useState('ministerios');

  const ministerios = [
    {
      id: 1,
      nome: 'Ministério de Louvor',
      lider: 'Ana Carolina',
      membros: 15,
      descricao: 'Responsável pela música e adoração nos cultos',
      contato: 'louvor@igreja.com',
      reuniao: 'Terças, 19h30'
    },
    {
      id: 2,
      nome: 'Ministério Infantil',
      lider: 'Mariana Silva',
      membros: 8,
      descricao: 'Cuidado e ensino das crianças durante os cultos',
      contato: 'infantil@igreja.com',
      reuniao: 'Sábados, 14h'
    },
    {
      id: 3,
      nome: 'Ministério de Jovens',
      lider: 'João Pedro',
      membros: 25,
      descricao: 'Atividades e crescimento espiritual dos jovens',
      contato: 'jovens@igreja.com',
      reuniao: 'Sextas, 19h'
    },
    {
      id: 4,
      nome: 'Ministério de Oração',
      lider: 'Pastora Maria',
      membros: 12,
      descricao: 'Intercessão e vida de oração da igreja',
      contato: 'oracao@igreja.com',
      reuniao: 'Quartas, 6h e 19h'
    }
  ];

  const comunicados = [
    {
      id: 1,
      titulo: 'Reunião de Liderança',
      conteudo: 'Todos os líderes de ministério estão convidados para a reunião mensal no próximo sábado às 9h.',
      data: '2 horas atrás',
      urgente: true
    },
    {
      id: 2,
      titulo: 'Nova Turma de Batismo',
      conteudo: 'Inscrições abertas para o curso de batismo. Início: 15 de junho.',
      data: '1 dia atrás',
      urgente: false
    },
    {
      id: 3,
      titulo: 'Jantar Comunitário',
      conteudo: 'No próximo domingo teremos jantar comunitário após o culto. Tragam um prato para compartilhar.',
      data: '2 dias atrás',
      urgente: false
    }
  ];

  const eventos = [
    {
      id: 1,
      titulo: 'Churrasco da Família',
      data: 'Sábado, 08/06',
      local: 'Área de lazer da igreja',
      foto: 'https://via.placeholder.com/300x200?text=Churrasco'
    },
    {
      id: 2,
      titulo: 'Retiro de Jovens',
      data: 'Weekend 15-16/06',
      local: 'Chácara Monte Verde',
      foto: 'https://via.placeholder.com/300x200?text=Retiro'
    },
    {
      id: 3,
      titulo: 'Conferência de Mulheres',
      data: 'Sábado, 22/06',
      local: 'Auditório Principal',
      foto: 'https://via.placeholder.com/300x200?text=Conferencia'
    }
  ];

  const lideranca = [
    {
      nome: 'Pastor João Silva',
      cargo: 'Pastor Presidente',
      telefone: '(11) 99999-9999',
      email: 'pastor@igreja.com'
    },
    {
      nome: 'Pastora Maria Santos',
      cargo: 'Pastora Auxiliar',
      telefone: '(11) 99999-8888',
      email: 'pastora@igreja.com'
    },
    {
      nome: 'Diácono Carlos Lima',
      cargo: 'Tesoureiro',
      telefone: '(11) 99999-7777',
      email: 'tesoureiro@igreja.com'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-church-gradient text-white px-6 py-6 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Comunidade</h1>
            <p className="text-blue-100">Nossa família em Cristo</p>
          </div>
          <Users className="w-8 h-8 text-blue-200" />
        </div>
      </div>

      {/* Abas */}
      <div className="px-6 -mt-2">
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {[
            { id: 'ministerios', label: 'Ministérios' },
            { id: 'comunicados', label: 'Comunicados' },
            { id: 'galeria', label: 'Galeria' },
            { id: 'contatos', label: 'Contatos' }
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
      {abaAtiva === 'ministerios' && (
        <div className="px-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Ministérios Ativos</h3>
            <Button variant="outline" size="sm">
              Participar
            </Button>
          </div>
          
          {ministerios.map((ministerio) => (
            <Card key={ministerio.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{ministerio.nome}</CardTitle>
                    <p className="text-sm text-church-primary">Líder: {ministerio.lider}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>{ministerio.membros} membros</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600 text-sm">{ministerio.descricao}</p>
                
                <div className="space-y-1 text-sm">
                  <p><strong>Reuniões:</strong> {ministerio.reuniao}</p>
                  <p><strong>Contato:</strong> {ministerio.contato}</p>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  <Users size={14} className="mr-2" />
                  Quero Participar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {abaAtiva === 'comunicados' && (
        <div className="px-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Comunicados</h3>
            <Button variant="outline" size="sm">
              <Bell size={14} className="mr-2" />
              Notificações
            </Button>
          </div>
          
          {comunicados.map((comunicado) => (
            <Card 
              key={comunicado.id} 
              className={`${comunicado.urgente ? 'border-l-4 border-l-red-500 bg-red-50' : ''}`}
            >
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-gray-800">{comunicado.titulo}</h4>
                    {comunicado.urgente && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs">
                        Urgente
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{comunicado.conteudo}</p>
                  <p className="text-xs text-gray-500">{comunicado.data}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {abaAtiva === 'galeria' && (
        <div className="px-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-800">Eventos Recentes</h3>
            <Button variant="outline" size="sm">
              <Image size={14} className="mr-2" />
              Ver todas
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {eventos.map((evento) => (
              <Card key={evento.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <div 
                  className="h-32 bg-gray-200 rounded-t-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${evento.foto})` }}
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">{evento.titulo}</h4>
                  <p className="text-sm text-gray-600">{evento.data}</p>
                  <p className="text-sm text-gray-500">{evento.local}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {abaAtiva === 'contatos' && (
        <div className="px-6 space-y-4">
          <h3 className="font-semibold text-gray-800">Liderança</h3>
          
          {lideranca.map((pessoa, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-church-gradient rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{pessoa.nome}</h4>
                    <p className="text-sm text-church-primary">{pessoa.cargo}</p>
                    <div className="mt-2 space-y-1 text-xs text-gray-600">
                      <p>📞 {pessoa.telefone}</p>
                      <p>✉️ {pessoa.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Contact size={14} className="mr-2" />
                    Contatar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Informações Gerais */}
          <Card className="bg-blue-50 border-blue-200 mt-6">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Church className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Igreja Comunidade</h4>
                  <div className="space-y-1 text-sm text-blue-700">
                    <p>📍 Rua da Igreja, 123 - Centro</p>
                    <p>📞 (11) 3333-4444</p>
                    <p>✉️ contato@igreja.com</p>
                    <p>🌐 www.igreja.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ComunidadePage;
