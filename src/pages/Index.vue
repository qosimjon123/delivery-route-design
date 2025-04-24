
<template>
  <div class="flex flex-col h-screen bg-background">
    <AppHeader />
    
    <div class="flex-1 flex flex-col">
      <div class="px-4 pt-2">
        <div class="w-full flex bg-muted rounded-lg p-1">
          <button 
            @click="activeTab = 'map'"
            class="flex-1 flex items-center justify-center py-2 px-3 rounded-md text-sm"
            :class="activeTab === 'map' ? 'bg-white shadow' : 'text-muted-foreground'"
          >
            <Navigation class="mr-2" :size="18" />
            Карта
          </button>
          <button 
            @click="activeTab = 'list'"
            class="flex-1 flex items-center justify-center py-2 px-3 rounded-md text-sm"
            :class="activeTab === 'list' ? 'bg-white shadow' : 'text-muted-foreground'"
          >
            <Package class="mr-2" :size="18" />
            Заказы
          </button>
        </div>
      </div>
      
      <div v-if="activeTab === 'map'" class="flex-1 mt-0 flex flex-col">
        <div class="relative flex-1">
          <MapComponent />
          <div class="absolute bottom-0 left-0 right-0 pb-16">
            <ScrollArea class="h-48 px-4">
              <div class="flex gap-3 pb-4 pt-2 overflow-x-auto">
                <DeliveryCard 
                  v-for="(delivery, index) in deliveries"
                  :key="delivery.id"
                  :delivery="delivery"
                  :isActive="selectedDelivery === index"
                  @click="selectedDelivery = index"
                />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
      
      <div v-if="activeTab === 'list'" class="flex-1 mt-0 p-4 overflow-hidden">
        <ScrollArea class="h-full pr-4">
          <div class="flex flex-col gap-3 pb-16">
            <Card v-for="delivery in deliveries" :key="delivery.id" class="p-4">
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h3 class="font-medium">{{ delivery.address }}</h3>
                  <p class="text-sm text-muted-foreground">{{ delivery.customer }}</p>
                </div>
                <span 
                  class="text-xs px-2 py-1 rounded-full"
                  :class="delivery.status === 'Активный' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'"
                >
                  {{ delivery.status }}
                </span>
              </div>
              
              <div class="flex justify-between text-sm">
                <div class="flex items-center">
                  <Clock :size="14" class="mr-1" />
                  {{ delivery.time }}
                </div>
                <div class="flex items-center">
                  <Bike :size="14" class="mr-1" />
                  {{ delivery.distance }}
                </div>
                <div class="flex items-center">
                  <Package :size="14" class="mr-1" />
                  {{ delivery.items }} поз.
                </div>
              </div>
              
              <div class="mt-3 flex justify-between">
                <Button variant="outline" size="sm">Детали</Button>
                <Button size="sm">Начать доставку</Button>
              </div>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>

    <div class="mt-auto" v-if="selectedDelivery !== null">
      <RouteDetails :delivery="deliveries[selectedDelivery]" />
    </div>
    
    <BottomNavigation />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import MapComponent from '@/components/MapComponent.vue'
import DeliveryCard from '@/components/DeliveryCard.vue'
import RouteDetails from '@/components/RouteDetails.vue'
import AppHeader from '@/components/AppHeader.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import { Bike, Package, Clock, Navigation } from 'lucide-vue-next'

interface Delivery {
  id: number;
  address: string;
  customer: string;
  time: string;
  status: string;
  distance: string;
  items: number;
}

const activeTab = ref('map')
const selectedDelivery = ref(0)
  
const deliveries = ref<Delivery[]>([
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
  }
])
</script>
