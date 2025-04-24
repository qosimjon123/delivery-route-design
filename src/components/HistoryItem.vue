
<template>
  <Card class="p-3">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="font-medium text-sm">{{ delivery.address }}</h3>
        <p class="text-xs text-muted-foreground">{{ delivery.customer }}</p>
      </div>
      <Badge :variant="delivery.status === 'completed' ? 'success' : 'destructive'">
        {{ delivery.status === 'completed' ? 'Выполнен' : 'Отменен' }}
      </Badge>
    </div>
    
    <div class="flex justify-between mt-3">
      <div class="flex items-center text-xs">
        <Clock :size="12" class="mr-1 text-muted-foreground" />
        {{ delivery.time }}
      </div>
      <div class="flex items-center text-xs">
        <Package :size="12" class="mr-1 text-muted-foreground" />
        {{ delivery.amount }} поз.
      </div>
      <div class="flex items-center text-xs font-medium">
        <CreditCard :size="12" class="mr-1 text-muted-foreground" />
        {{ delivery.earnings }} ₽
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Package, CreditCard } from 'lucide-vue-next'

interface HistoryDelivery {
  id: number;
  address: string;
  customer: string;
  time: string;
  status: 'completed' | 'canceled';
  amount: number;
  earnings: number;
}

defineProps<{
  delivery: HistoryDelivery;
}>()
</script>
