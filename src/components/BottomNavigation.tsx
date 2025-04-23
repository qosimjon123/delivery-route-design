import React from 'react';
import { Navigation, Package, History, User } from 'lucide-react';

export const BottomNavigation: React.FC = () => {
  return (
    <div className="flex items-center justify-around border-t py-2 px-4 bg-card">
      <NavItem icon={<Navigation size={22} />} label="Карта" isActive />
      <NavItem icon={<Package size={22} />} label="Заказы" />
      <NavItem icon={<History size={22} />} label="История" />
      <NavItem icon={<User size={22} />} label="Профиль" />
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive }) => {
  return (
    <button 
      className={`flex flex-col items-center justify-center w-16 py-1 ${
        isActive 
          ? 'text-primary' 
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};
