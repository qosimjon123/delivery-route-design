import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, MapPin, Package } from 'lucide-react';

interface Delivery {
  id: number;
  address: string;
  customer: string;
  time: string;
  status: string;
  distance: string;
  items: number;
}

interface DeliveryCardProps {
  delivery: Delivery;
  isActive: boolean;
  onClick: () => void;
}

export const DeliveryCard: React.FC<DeliveryCardProps> = ({ 
  delivery, 
  isActive, 
  onClick 
}) => {
  return (
    <Card 
      className={`w-72 shrink-0 p-3 cursor-pointer transition-all ${
        isActive 
          ? 'border-primary shadow-md' 
          : 'border-border hover:border-primary/50'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-sm line-clamp-1">{delivery.address}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          delivery.status === "Активный" 
            ? "bg-green-100 text-green-800" 
            : "bg-blue-100 text-blue-800"
        }`}>
          {delivery.status}
        </span>
      </div>
      
      <p className="text-xs text-muted-foreground mt-1">{delivery.customer}</p>
      
      <div className="flex justify-between mt-3 text-xs">
        <div className="flex items-center">
          <Clock size={12} className="mr-1" />
          {delivery.time}
        </div>
        <div className="flex items-center">
          <MapPin size={12} className="mr-1" />
          {delivery.distance}
        </div>
        <div className="flex items-center">
          <Package size={12} className="mr-1" />
          {delivery.items} поз.
        </div>
      </div>
    </Card>
  );
};
