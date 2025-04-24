
<template>
  <div class="bg-white border-t p-4">
    <div v-if="currentDelivery" class="mb-4">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="font-medium">{{ currentDelivery.address }}</h2>
          <p class="text-sm text-muted-foreground">{{ currentDelivery.customer }}</p>
        </div>
        <Badge :variant="currentDelivery.status === 'Активный' ? 'success' : 'default'">
          {{ currentDelivery.status }}
        </Badge>
      </div>
      
      <div class="flex gap-4 mt-3">
        <div class="flex items-center text-sm">
          <Clock :size="16" class="mr-1 text-muted-foreground" />
          <span>{{ estimatedTime }}</span>
        </div>
        <div class="flex items-center text-sm">
          <MapPin :size="16" class="mr-1 text-muted-foreground" />
          <span>{{ distance }}</span>
        </div>
        <div class="flex items-center text-sm">
          <Package :size="16" class="mr-1 text-muted-foreground" />
          <span>{{ currentDelivery.items }} поз.</span>
        </div>
      </div>
    </div>
    
    <div v-else class="text-center py-2 text-muted-foreground">
      Выберите заказ для отображения маршрута
    </div>
    
    <div class="flex gap-3 mt-2">
      <Button 
        class="flex-1" 
        size="sm" 
        :disabled="!currentDelivery"
        @click="$emit('navigate')"
      >
        <Navigation :size="16" class="mr-2" />
        Начать навигацию
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        :disabled="!currentDelivery"
      >
        <Phone :size="16" class="mr-2" />
        Позвонить
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, MapPin, Package, Navigation, Phone } from 'lucide-vue-next'

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
  currentDelivery: Delivery | null;
  estimatedTime: string;
  distance: string;
}>()

defineEmits(['navigate'])
</script>
