
import React from 'react';
import { Calendar, Clock, MapPin, Star, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const proximosEventos = [
    {
      id: 1,
      titulo: 'Culto Dominical',
      data: 'Domingo, 31 Mai',
      hora: '09:00',
      local: 'Templo Principal',
      tipo: 'culto'
    },
    {
      id: 2,
      titulo: 'Célula de Oração',
      data: 'Quarta, 03 Jun',
      hora: '19:30',
      local: 'Sala de Oração',
      tipo: 'reuniao'
    },
    {
      id: 3,
      titulo: 'Escola Dominical',
      data: 'Domingo, 31 Mai',
      hora: '08:00',
      local: 'Salas de Ensino',
      tipo: 'ensino'
    }
  ];

  const versiculoDoDia = {
    texto: "Porque eu sei os pensamentos que tenho a respeito de vós, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.",
    referencia: "Jeremias 29:11"
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-church-gradient text-white px-6 py-8 rounded-b-3xl">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Igreja Comunidade</h1>
          <p className="text-blue-100">Bem-vindo(a) à nossa família!</p>
        </div>
      </div>

      {/* Banner Principal */}
      <div className="px-6 -mt-4">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 animate-fade-in">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-warm-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              "Venha como você está"
            </h2>
            <p className="text-gray-600 text-sm">
              Deus tem um propósito especial para sua vida. Junte-se a nós nesta jornada de fé!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Versículo do Dia */}
      <div className="px-6">
        <Card className="border-l-4 border-l-church-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-church-primary">Versículo do Dia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-700 italic leading-relaxed">
              "{versiculoDoDia.texto}"
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-church-primary">
                {versiculoDoDia.referencia}
              </span>
              <Button variant="ghost" size="sm">
                <Share2 size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Próximos Eventos */}
      <div className="px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Próximos Eventos</h2>
          <Button variant="ghost" size="sm" className="text-church-primary">
            Ver todos
          </Button>
        </div>
        
        <div className="space-y-3">
          {proximosEventos.map((evento) => (
            <Card key={evento.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {evento.titulo}
                    </h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={14} />
                        <span>{evento.data}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={14} />
                        <span>{evento.hora}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin size={14} />
                        <span>{evento.local}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    evento.tipo === 'culto' 
                      ? 'bg-blue-100 text-blue-800'
                      : evento.tipo === 'reuniao'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {evento.tipo === 'culto' && 'Culto'}
                    {evento.tipo === 'reuniao' && 'Reunião'}
                    {evento.tipo === 'ensino' && 'Ensino'}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Acesso Rápido */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Acesso Rápido</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-church-primary rounded-full mx-auto mb-2 flex items-center justify-center">
                <Prayer className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Pedido de Oração</h3>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-church-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                <Donate className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">Contribuir</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
