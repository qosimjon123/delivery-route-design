import React from 'react';

export const MapComponent: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-gray-200 relative">
      {/* Map placeholder - in real app this would be an actual map integration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/placeholder.svg" 
          alt="Карта" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600">
          <p className="text-lg font-semibold">Карта маршрута доставки</p>
          <p className="text-sm mt-2">Здесь будет отображаться интерактивная карта</p>
          <p className="text-xs mt-8">В реальном приложении здесь будет интеграция с картами</p>
        </div>
      </div>
      
      {/* Route indicator */}
      <div className="absolute bottom-52 left-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-0.5 flex-1 bg-gray-300 mx-1"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
        <div className="flex justify-between mt-1 text-xs">
          <span>Ваше местоположение</span>
          <span>Пункт назначения</span>
        </div>
      </div>
    </div>
  );
};
