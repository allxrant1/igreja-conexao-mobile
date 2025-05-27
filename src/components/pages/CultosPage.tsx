
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Bell, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CultosPage = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const eventos = [
    {
      id: 1,
      titulo: 'Culto Dominical Manhã',
      data: 'Domingo, 31/05',
      hora: '09:00',
      local: 'Templo Principal',
      descricao: 'Culto principal com louvor, pregação e Santa Ceia',
      tipo: 'culto',
      recurring: true
    },
    {
      id: 2,
      titulo: 'Escola Dominical',
      data: 'Domingo, 31/05',
      hora: '08:00',
      local: 'Salas de Ensino',
      descricao: 'Estudos bíblicos por faixa etária',
      tipo: 'ensino',
      recurring: true
    },
    {
      id: 3,
      titulo: 'Culto de Oração',
      data: 'Quarta, 03/06',
      hora: '19:30',
      local: 'Templo Principal',
      descricao: 'Momento especial de oração e intercessão',
      tipo: 'oracao',
      recurring: true
    },
    {
      id: 4,
      titulo: 'Células em Casas',
      data: 'Sexta, 05/06',
      hora: '19:30',
      local: 'Diversos locais',
      descricao: 'Encontros em pequenos grupos nas casas',
      tipo: 'celula',
      recurring: true
    },
    {
      id: 5,
      titulo: 'Conferência de Jovens',
      data: 'Sábado, 13/06',
      hora: '19:00',
      local: 'Auditório Principal',
      descricao: 'Evento especial para jovens com palestrantes convidados',
      tipo: 'evento',
      recurring: false
    }
  ];

  const filtros = [
    { id: 'todos', label: 'Todos', color: 'bg-gray-100 text-gray-800' },
    { id: 'culto', label: 'Cultos', color: 'bg-blue-100 text-blue-800' },
    { id: 'ensino', label: 'Ensino', color: 'bg-green-100 text-green-800' },
    { id: 'oracao', label: 'Oração', color: 'bg-purple-100 text-purple-800' },
    { id: 'evento', label: 'Eventos', color: 'bg-orange-100 text-orange-800' }
  ];

  const eventosFiltrados = filtroAtivo === 'todos' 
    ? eventos 
    : eventos.filter(evento => evento.tipo === filtroAtivo);

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'culto': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ensino': return 'bg-green-100 text-green-800 border-green-200';
      case 'oracao': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'celula': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'evento': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-church-gradient text-white px-6 py-6 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Programação</h1>
            <p className="text-blue-100">Cultos e eventos da igreja</p>
          </div>
          <Calendar className="w-8 h-8 text-blue-200" />
        </div>
      </div>

      {/* Filtros */}
      <div className="px-6 -mt-2">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={16} className="text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filtros.map((filtro) => (
            <Button
              key={filtro.id}
              variant={filtroAtivo === filtro.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFiltroAtivo(filtro.id)}
              className={`whitespace-nowrap ${
                filtroAtivo === filtro.id 
                  ? 'bg-church-primary hover:bg-church-primary/90' 
                  : 'hover:bg-gray-50'
              }`}
            >
              {filtro.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Lista de Eventos */}
      <div className="px-6 space-y-4">
        {eventosFiltrados.map((evento) => (
          <Card key={evento.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{evento.titulo}</CardTitle>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTipoColor(evento.tipo)}`}>
                  {evento.tipo === 'culto' && 'Culto'}
                  {evento.tipo === 'ensino' && 'Ensino'}
                  {evento.tipo === 'oracao' && 'Oração'}
                  {evento.tipo === 'celula' && 'Célula'}
                  {evento.tipo === 'evento' && 'Evento'}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-600 text-sm">{evento.descricao}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar size={14} className="text-church-primary" />
                  <span>{evento.data}</span>
                  {evento.recurring && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                      Semanal
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Clock size={14} className="text-church-primary" />
                  <span>{evento.hora}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin size={14} className="text-church-primary" />
                  <span>{evento.local}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Bell size={14} className="mr-2" />
                  Lembrete
                </Button>
                <Button variant="outline" size="sm">
                  Compartilhar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {eventosFiltrados.length === 0 && (
        <div className="text-center py-8 px-6">
          <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">Nenhum evento encontrado para este filtro.</p>
        </div>
      )}
    </div>
  );
};

export default CultosPage;
