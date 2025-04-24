
<template>
  <Card class="overflow-hidden">
    <CardHeader class="p-4 pb-2">
      <div class="flex justify-between items-start">
        <div>
          <CardTitle class="text-base">{{ order.address }}</CardTitle>
          <CardDescription>{{ order.customer }}</CardDescription>
        </div>
        <Badge :variant="order.status === 'active' ? 'default' : (order.status === 'completed' ? 'success' : 'secondary')">
          {{ statusText }}
        </Badge>
      </div>
    </CardHeader>
    
    <CardContent class="p-4 pt-0">
      <div class="flex gap-4 text-sm mb-2">
        <div class="flex items-center">
          <Clock :size="14" class="mr-1" />
          {{ order.time }}
        </div>
        <div class="flex items-center">
          <Phone :size="14" class="mr-1" />
          {{ order.phone }}
        </div>
      </div>
      
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" class="flex items-center p-0 h-auto">
            <span class="text-xs mr-1">{{ order.items.length }} позиций</span>
            <ChevronDown :size="14" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div class="text-sm mt-2 space-y-1 text-muted-foreground">
            <div v-for="(item, index) in order.items" :key="index" class="flex justify-between">
              <span>{{ item.name }}</span>
              <span>{{ item.quantity }} шт.</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <div class="flex justify-between items-center mt-3 text-sm font-medium">
        <span>Сумма заказа:</span>
        <span>{{ order.price.toLocaleString() }} ₽</span>
      </div>
    </CardContent>
    
    <CardFooter class="p-2 flex justify-between border-t" v-if="!completed">
      <Button variant="ghost" size="sm" @click="$emit('reject', order.id)">
        <X :size="16" class="mr-1" />
        Отклонить
      </Button>
      <Button size="sm" @click="$emit('accept', order.id)">
        <Check :size="16" class="mr-1" />
        Принять
      </Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Clock, Phone, ChevronDown, Check, X } from 'lucide-vue-next'

interface OrderItem {
  name: string;
  quantity: number;
}

interface Order {
  id: number;
  address: string;
  customer: string;
  phone: string;
  time: string;
  status: 'active' | 'upcoming' | 'completed';
  items: OrderItem[];
  price: number;
}

const props = defineProps<{
  order: Order;
  completed?: boolean;
}>()

defineEmits(['accept', 'reject'])

// Преобразование статуса для отображения
const statusText = computed(() => {
  switch (props.order.status) {
    case 'active':
      return 'Активный';
    case 'upcoming':
      return 'Предстоящий';
    case 'completed':
      return 'Выполнен';
    default:
      return props.order.status;
  }
})
</script>
