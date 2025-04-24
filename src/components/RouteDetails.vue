
<template>
  <div class="bg-card border-t shadow-lg p-4 z-10">
    <div class="flex justify-between items-center mb-3">
      <div>
        <h3 class="font-medium">{{ delivery.address }}</h3>
        <div class="flex items-center mt-1">
          <Clock :size="14" class="text-muted-foreground" />
          <span class="text-sm text-muted-foreground ml-1">
            {{ delivery.time }} • {{ delivery.distance }}
          </span>
        </div>
      </div>
      
      <div class="flex gap-2">
        <Button size="icon" variant="outline">
          <Phone :size="18" />
        </Button>
        <Button size="icon" variant="outline">
          <MessageCircle :size="18" />
        </Button>
      </div>
    </div>
    
    <div class="flex gap-2">
      <Button class="flex-1" variant="secondary">
        <Navigation class="mr-2" :size="18" />
        Навигация
      </Button>
      <Button class="flex-1">Я прибыл</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Clock, Navigation, Phone, MessageCircle } from 'lucide-vue-next'

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
}>()
</script>
