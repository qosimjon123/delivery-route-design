import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Navigation, Phone, MessageCircle } from 'lucide-react';

interface Delivery {
  id: number;
  address: string;
  customer: string;
  time: string;
  status: string;
  distance: string;
  items: number;
}

interface RouteDetailsProps {
  delivery: Delivery;
}

export const RouteDetails: React.FC<RouteDetailsProps> = ({ delivery }) => {
  return (
    <div className="bg-card border-t shadow-lg p-4 z-10">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h3 className="font-medium">{delivery.address}</h3>
          <div className="flex items-center mt-1">
            <Clock size={14} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground ml-1">
              {delivery.time} • {delivery.distance}
            </span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <Phone size={18} />
          </Button>
          <Button size="icon" variant="outline">
            <MessageCircle size={18} />
          </Button>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button className="flex-1" variant="secondary">
          <Navigation className="mr-2" size={18} />
          Навигация
        </Button>
        <Button className="flex-1">Я прибыл</Button>
      </div>
    </div>
  );
};
