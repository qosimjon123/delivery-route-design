
<template>
  <div class="h-full w-full overflow-hidden bg-slate-100 relative">
    <!-- Map placeholder - в реальном приложении здесь будет интеграция с картами -->
    <div class="absolute inset-0 flex items-center justify-center">
      <img 
        src="/placeholder.svg" 
        alt="Карта" 
        class="w-full h-full object-cover opacity-10" 
      />
      
      <!-- Имитация карты с маркерами местоположения -->
      <div class="absolute inset-0">
        <!-- Маркер текущего местоположения -->
        <div class="absolute w-4 h-4 rounded-full bg-primary border-2 border-white"
          style="left: 48%; top: 45%; transform: translate(-50%, -50%);">
          <div class="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
        </div>
        
        <!-- Маркеры точек доставки -->
        <div v-for="(point, index) in deliveryPoints" :key="index"
          class="absolute w-4 h-4 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold"
          :style="`left: ${45 + (index + 1) * 3}%; top: ${45 - (index + 1) * 2}%; transform: translate(-50%, -50%);`">
          {{ index + 1 }}
        </div>
        
        <!-- Имитация маршрута (линия) -->
        <svg class="absolute inset-0 w-full h-full" style="z-index: -1;">
          <path 
            d="M480,450 L480,430 L510,410 L540,390 L570,370" 
            stroke="#0891B2" 
            stroke-width="3" 
            fill="none" 
            stroke-dasharray="6,3"
          />
        </svg>
      </div>
    </div>
    
    <!-- Элементы управления картой -->
    <div class="absolute top-4 right-4 flex flex-col gap-2">
      <Button size="icon" variant="outline" class="h-10 w-10 bg-white shadow-md">
        <Plus :size="18" />
      </Button>
      <Button size="icon" variant="outline" class="h-10 w-10 bg-white shadow-md">
        <Minus :size="18" />
      </Button>
      <Button size="icon" variant="outline" class="h-10 w-10 bg-white shadow-md">
        <Locate :size="18" />
      </Button>
    </div>
    
    <!-- Информация о текущем местоположении -->
    <div class="absolute bottom-6 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
      <div class="flex items-center">
        <div class="h-2 w-2 rounded-full bg-primary mr-2"></div>
        <div class="flex-1">
          <div class="h-0.5 bg-gray-300 mx-1"></div>
        </div>
        <div class="h-2 w-2 rounded-full bg-orange-500 mr-2"></div>
      </div>
      <div class="flex justify-between mt-1 text-xs">
        <span>Ваше местоположение</span>
        <span>{{ currentDelivery ? currentDelivery.address : "Выберите заказ" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Minus, Locate } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

interface Location {
  lat: number;
  lng: number;
}

interface Delivery {
  id: number;
  address: string;
  customer: string;
  time: string;
  status: string;
  distance: string;
  items: number;
  location: Location;
}

defineProps<{
  currentLocation: Location;
  deliveryPoints: Location[];
  currentDelivery?: Delivery | null;
}>()
</script>
