
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Bell, Filter, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const CultosPage = () => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      case 'culto': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-800';
      case 'ensino': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-800';
      case 'oracao': return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-800';
      case 'celula': return 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900 dark:text-indigo-200 dark:border-indigo-800';
      case 'evento': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-800';
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-800';
    }
  };

  const handleFilterChange = (filtroId: string) => {
    setFiltroAtivo(filtroId);
    const filtroLabel = filtros.find(f => f.id === filtroId)?.label || 'Todos';
    toast.success(`Filtro aplicado: ${filtroLabel}`);
  };

  const handleReminder = (titulo: string) => {
    toast.success(`Lembrete criado para: ${titulo}`);
  };

  const handleShare = (titulo: string) => {
    toast.success(`${titulo} compartilhado!`);
  };

  return (
    <div className={`space-y-6 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Header */}
      <div className="bg-church-gradient text-white px-6 py-6 rounded-b-3xl hover:shadow-lg transition-all">
        <div className="flex items-center justify-between animate-fade-in">
          <div>
            <h1 className="text-2xl font-bold">Programação</h1>
            <p className="text-blue-100">Cultos e eventos da igreja</p>
          </div>
          <Calendar className="w-8 h-8 text-blue-200 transition-transform hover:scale-110" />
        </div>
      </div>

      {/* Filtros */}
      <div className="px-6 -mt-2">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={16} className="text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Filtrar por:</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filtros.map((filtro, index) => (
            <Button
              key={filtro.id}
              variant={filtroAtivo === filtro.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(filtro.id)}
              className={`whitespace-nowrap transition-all duration-200 hover:scale-105 ${
                filtroAtivo === filtro.id 
                  ? 'bg-church-primary hover:bg-church-primary/90 scale-105' 
                  : 'hover:bg-accent'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {filtro.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Lista de Eventos */}
      <div className="px-6 space-y-4">
        {eventosFiltrados.map((evento, index) => (
          <Card 
            key={evento.id} 
            className="hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg text-foreground">{evento.titulo}</CardTitle>
                <div className={`px-2 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 ${getTipoColor(evento.tipo)}`}>
                  {evento.tipo === 'culto' && 'Culto'}
                  {evento.tipo === 'ensino' && 'Ensino'}
                  {evento.tipo === 'oracao' && 'Oração'}
                  {evento.tipo === 'celula' && 'Célula'}
                  {evento.tipo === 'evento' && 'Evento'}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground text-sm">{evento.descricao}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Calendar size={14} className="text-church-primary" />
                  <span>{evento.data}</span>
                  {evento.recurring && (
                    <span className="px-2 py-0.5 bg-muted text-muted-foreground rounded-full text-xs transition-all hover:scale-105">
                      Semanal
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Clock size={14} className="text-church-primary" />
                  <span>{evento.hora}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <MapPin size={14} className="text-church-primary" />
                  <span>{evento.local}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 transition-all hover:scale-105"
                  onClick={() => handleReminder(evento.titulo)}
                >
                  <Bell size={14} className="mr-2" />
                  Lembrete
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="transition-all hover:scale-105"
                  onClick={() => handleShare(evento.titulo)}
                >
                  Compartilhar
                  <ChevronRight size={14} className="ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {eventosFiltrados.length === 0 && (
        <div className="text-center py-8 px-6 animate-fade-in">
          <Calendar size={48} className="mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Nenhum evento encontrado para este filtro.</p>
        </div>
      )}
    </div>
  );
};

export default CultosPage;
