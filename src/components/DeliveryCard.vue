
<template>
  <Card 
    class="w-72 shrink-0 p-3 cursor-pointer transition-all"
    :class="isActive 
      ? 'border-primary shadow-md' 
      : 'border-border hover:border-primary/50'"
    @click="$emit('click')"
  >
    <div class="flex justify-between items-start">
      <h3 class="font-medium text-sm line-clamp-1">{{ delivery.address }}</h3>
      <span 
        class="text-xs px-2 py-0.5 rounded-full"
        :class="delivery.status === 'Активный' 
          ? 'bg-green-100 text-green-800' 
          : 'bg-blue-100 text-blue-800'"
      >
        {{ delivery.status }}
      </span>
    </div>
    
    <p class="text-xs text-muted-foreground mt-1">{{ delivery.customer }}</p>
    
    <div class="flex justify-between mt-3 text-xs">
      <div class="flex items-center">
        <Clock :size="12" class="mr-1" />
        {{ delivery.time }}
      </div>
      <div class="flex items-center">
        <MapPin :size="12" class="mr-1" />
        {{ delivery.distance }}
      </div>
      <div class="flex items-center">
        <Package :size="12" class="mr-1" />
        {{ delivery.items }} поз.
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Clock, MapPin, Package } from 'lucide-vue-next'

interface Delivery {
  id: number;
  address: string;
  customer: string;
  time: string;
  status: string;
  distance: string;
  items: number;
}

defineProps<{
  delivery: Delivery;
  isActive: boolean;
}>()

defineEmits(['click'])
</script>
