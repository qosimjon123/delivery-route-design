
<template>
  <div class="flex flex-col h-full">
    <!-- Карта занимает большую часть экрана -->
    <MapComponent :currentLocation="currentLocation" :deliveryPoints="deliveryPoints" />
    
    <!-- Детали маршрута -->
    <RouteDetails 
      :currentDelivery="currentDelivery" 
      :estimatedTime="estimatedTime" 
      :distance="distance"
      @navigate="startNavigation"
    />
    
    <!-- Список доставок внизу с возможностью горизонтального скролла -->
    <div class="py-3 px-4 bg-white border-t">
      <h3 class="text-sm font-medium mb-2">Предстоящие доставки ({{ deliveries.length }})</h3>
      <ScrollArea class="whitespace-nowrap pb-1" type="scroll">
        <div class="flex gap-3">
          <DeliveryCard
            v-for="delivery in deliveries"
            :key="delivery.id"
            :delivery="delivery"
            :isActive="currentDelivery?.id === delivery.id"
            @click="selectDelivery(delivery)"
          />
        </div>
      </ScrollArea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MapComponent from '@/components/MapComponent.vue'
import RouteDetails from '@/components/RouteDetails.vue'
import DeliveryCard from '@/components/DeliveryCard.vue'
import { ScrollArea } from '@/components/ui/scroll-area'

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

// Имитация данных местоположения курьера
const currentLocation = ref<Location>({ lat: 55.751244, lng: 37.618423 })

// Имитация данных точек доставки
const deliveryPoints = ref<Location[]>([
  { lat: 55.753215, lng: 37.622504 },
  { lat: 55.758463, lng: 37.601079 },
  { lat: 55.741218, lng: 37.629120 }
])

// Список доставок
const deliveries = ref<Delivery[]>([
  {
    id: 1,
    address: 'ул. Тверская, 6, кв. 12',
    customer: 'Иванов А.С.',
    time: '12:30-13:00',
    status: 'Активный',
    distance: '1.2 км',
    items: 3,
    location: { lat: 55.753215, lng: 37.622504 }
  },
  {
    id: 2,
    address: 'Новый Арбат, 10, офис 203',
    customer: 'ООО "Альфа"',
    time: '13:15-13:45',
    status: 'Предстоящий',
    distance: '2.5 км',
    items: 1,
    location: { lat: 55.758463, lng: 37.601079 }
  },
  {
    id: 3,
    address: 'Пятницкая ул., 25, кв. 8',
    customer: 'Петров В.В.',
    time: '14:00-14:30',
    status: 'Предстоящий',
    distance: '3.7 км',
    items: 2,
    location: { lat: 55.741218, lng: 37.629120 }
  }
])

// Текущая выбранная доставка
const currentDelivery = ref<Delivery | null>(deliveries.value[0])

// Расчетное время доставки и расстояние
const estimatedTime = ref('15 минут')
const distance = ref('1.2 км')

// Функция выбора доставки
function selectDelivery(delivery: Delivery) {
  currentDelivery.value = delivery
  estimatedTime.value = `${Math.round(Math.random() * 15 + 10)} минут`
  distance.value = delivery.distance
}

// Функция начала навигации
function startNavigation() {
  // Здесь будет интеграция с реальными навигационными сервисами
  console.log('Начать навигацию к:', currentDelivery.value?.address)
}
</script>
