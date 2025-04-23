import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapComponent } from "@/components/MapComponent";
import { DeliveryCard } from "@/components/DeliveryCard";
import { RouteDetails } from "@/components/RouteDetails";
import { AppHeader } from "@/components/AppHeader";
import { BottomNavigation } from "@/components/BottomNavigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bike, Package, Clock, Navigation, Menu } from "lucide-react";

const Index = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(0);
  
  const deliveries = [
    {
      id: 1,
      address: "ул. Ленина, 42, кв. 15",
      customer: "Иванов Алексей",
      time: "12:30 - 13:00",
      status: "Активный",
      distance: "2.5 км",
      items: 3
    },
    {
      id: 2,
      address: "ул. Пушкина, 10, кв. 78",
      customer: "Петрова Елена",
      time: "13:15 - 13:45",
      status: "В очереди",
      distance: "4.2 км",
      items: 1
    },
    {
      id: 3,
      address: "пр. Мира, 56, кв. 32",
      customer: "Сидоров Илья",
      time: "14:00 - 14:30",
      status: "В очереди",
      distance: "3.8 км",
      items: 2
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      <AppHeader />
      
      <Tabs defaultValue="map" className="flex-1 flex flex-col">
        <div className="px-4 pt-2">
          <TabsList className="w-full">
            <TabsTrigger value="map" className="flex-1">
              <Navigation className="mr-2" size={18} />
              Карта
            </TabsTrigger>
            <TabsTrigger value="list" className="flex-1">
              <Package className="mr-2" size={18} />
              Заказы
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="map" className="flex-1 mt-0 flex flex-col">
          <div className="relative flex-1">
            <MapComponent />
            <div className="absolute bottom-0 left-0 right-0 pb-16">
              <ScrollArea className="h-48 px-4">
                <div className="flex gap-3 pb-4 pt-2 overflow-x-auto">
                  {deliveries.map((delivery, index) => (
                    <DeliveryCard 
                      key={delivery.id}
                      delivery={delivery}
                      isActive={selectedDelivery === index}
                      onClick={() => setSelectedDelivery(index)}
                    />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="list" className="flex-1 mt-0 p-4 overflow-hidden">
          <ScrollArea className="h-full pr-4">
            <div className="flex flex-col gap-3 pb-16">
              {deliveries.map((delivery) => (
                <Card key={delivery.id} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium">{delivery.address}</h3>
                      <p className="text-sm text-muted-foreground">{delivery.customer}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      delivery.status === "Активный" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {delivery.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {delivery.time}
                    </div>
                    <div className="flex items-center">
                      <Bike size={14} className="mr-1" />
                      {delivery.distance}
                    </div>
                    <div className="flex items-center">
                      <Package size={14} className="mr-1" />
                      {delivery.items} поз.
                    </div>
                  </div>
                  
                  <div className="mt-3 flex justify-between">
                    <Button variant="outline" size="sm">Детали</Button>
                    <Button size="sm">Начать доставку</Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="mt-auto">
        {selectedDelivery !== null && (
          <RouteDetails delivery={deliveries[selectedDelivery]} />
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
