
<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-medium">Заказы на сегодня</h1>
      <Badge variant="outline" class="bg-blue-50">{{ orders.length }} заказов</Badge>
    </div>
    
    <Tabs default-value="active" class="mb-4">
      <TabsList class="grid grid-cols-3 mb-4">
        <TabsTrigger value="active">Активные</TabsTrigger>
        <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
        <TabsTrigger value="completed">Выполненные</TabsTrigger>
      </TabsList>
      
      <TabsContent value="active">
        <div class="space-y-3">
          <OrderCard 
            v-for="order in activeOrders" 
            :key="order.id" 
            :order="order"
            @accept="acceptOrder"
            @reject="rejectOrder"
          />
        </div>
      </TabsContent>
      
      <TabsContent value="upcoming">
        <div class="space-y-3">
          <OrderCard 
            v-for="order in upcomingOrders" 
            :key="order.id" 
            :order="order"
            @accept="acceptOrder"
            @reject="rejectOrder"
          />
        </div>
      </TabsContent>
      
      <TabsContent value="completed">
        <div class="space-y-3">
          <OrderCard 
            v-for="order in completedOrders" 
            :key="order.id" 
            :order="order"
            :completed="true"
          />
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import OrderCard from '@/components/OrderCard.vue'

interface Order {
  id: number;
  address: string;
  customer: string;
  phone: string;
  time: string;
  status: 'active' | 'upcoming' | 'completed';
  items: {
    name: string;
    quantity: number;
  }[];
  price: number;
}

// Имитация данных заказов
const orders = ref<Order[]>([
  {
    id: 1,
    address: 'ул. Тверская, 6, кв. 12',
    customer: 'Иванов А.С.',
    phone: '+7 (999) 123-45-67',
    time: '12:30-13:00',
    status: 'active',
    items: [
      { name: 'Смартфон iPhone 13', quantity: 1 },
      { name: 'Чехол защитный', quantity: 1 },
      { name: 'Наушники беспроводные', quantity: 1 }
    ],
    price: 96500
  },
  {
    id: 2,
    address: 'Новый Арбат, 10, офис 203',
    customer: 'ООО "Альфа"',
    phone: '+7 (495) 987-65-43',
    time: '13:15-13:45',
    status: 'upcoming',
    items: [
      { name: 'Ноутбук Dell XPS', quantity: 1 }
    ],
    price: 135000
  },
  {
    id: 3,
    address: 'Пятницкая ул., 25, кв. 8',
    customer: 'Петров В.В.',
    phone: '+7 (910) 456-78-90',
    time: '14:00-14:30',
    status: 'upcoming',
    items: [
      { name: 'Кофемашина', quantity: 1 },
      { name: 'Кофе в зернах, 250г', quantity: 2 }
    ],
    price: 32700
  },
  {
    id: 4,
    address: 'Ленинский пр-т, 42, кв. 56',
    customer: 'Сидорова М.И.',
    phone: '+7 (925) 333-22-11',
    time: '10:00-10:30',
    status: 'completed',
    items: [
      { name: 'Книга "Мастер и Маргарита"', quantity: 1 },
      { name: 'Книга "Преступление и наказание"', quantity: 1 }
    ],
    price: 1800
  }
])

// Фильтрация заказов по статусу
const activeOrders = computed(() => orders.value.filter(order => order.status === 'active'))
const upcomingOrders = computed(() => orders.value.filter(order => order.status === 'upcoming'))
const completedOrders = computed(() => orders.value.filter(order => order.status === 'completed'))

// Функции для работы с заказами
function acceptOrder(id: number) {
  const order = orders.value.find(o => o.id === id)
  if (order) {
    order.status = 'active'
  }
}

function rejectOrder(id: number) {
  // Логика отклонения заказа
  console.log('Заказ отклонен:', id)
}
</script>
