import React from 'react';
import { Button } from '@/components/ui/button';
import { BellRing, Menu } from 'lucide-react';

export const AppHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-card">
      <Button variant="outline" size="icon">
        <Menu size={20} />
      </Button>
      
      <div className="flex items-center">
        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
        <span className="font-medium">На смене</span>
      </div>
      
      <Button variant="outline" size="icon" className="relative">
        <BellRing size={20} />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-xs text-primary-foreground rounded-full flex items-center justify-center">
          2
        </span>
      </Button>
    </header>
  );
};
