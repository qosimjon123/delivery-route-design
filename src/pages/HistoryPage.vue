
<template>
  <div class="p-4">
    <h1 class="text-xl font-medium mb-4">История доставок</h1>
    
    <div class="flex items-center gap-2 mb-4">
      <Button variant="outline" size="sm" @click="selectedPeriod = 'today'" 
        :class="{ 'bg-primary/10': selectedPeriod === 'today' }">
        Сегодня
      </Button>
      <Button variant="outline" size="sm" @click="selectedPeriod = 'week'" 
        :class="{ 'bg-primary/10': selectedPeriod === 'week' }">
        Неделя
      </Button>
      <Button variant="outline" size="sm" @click="selectedPeriod = 'month'" 
        :class="{ 'bg-primary/10': selectedPeriod === 'month' }">
        Месяц
      </Button>
    </div>
    
    <div class="mb-6 bg-white rounded-lg p-4 shadow-sm border">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-sm text-muted-foreground">Доставлено заказов</div>
          <div class="text-2xl font-bold">{{ deliveryStats.completed }}</div>
        </div>
        <div>
          <div class="text-sm text-muted-foreground">Пройдено км</div>
          <div class="text-2xl font-bold">{{ deliveryStats.distance }}</div>
        </div>
        <div>
          <div class="text-sm text-muted-foreground">Заработано</div>
          <div class="text-2xl font-bold">{{ deliveryStats.earnings }} ₽</div>
        </div>
        <div>
          <div class="text-sm text-muted-foreground">Рейтинг</div>
          <div class="text-2xl font-bold flex items-center">
            {{ deliveryStats.rating }}
            <span class="text-yellow-500 ml-1">★</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="space-y-3">
      <div v-for="day in historyDays" :key="day.date">
        <h2 class="text-sm font-medium text-muted-foreground mb-2">{{ day.date }}</h2>
        <div class="space-y-2">
          <HistoryItem 
            v-for="delivery in day.deliveries" 
            :key="delivery.id" 
            :delivery="delivery" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import HistoryItem from '@/components/HistoryItem.vue'

interface HistoryDelivery {
  id: number;
  address: string;
  customer: string;
  time: string;
  status: 'completed' | 'canceled';
  amount: number;
  earnings: number;
}

interface HistoryDay {
  date: string;
  deliveries: HistoryDelivery[];
}

// Выбранный период для отображения истории
const selectedPeriod = ref<'today' | 'week' | 'month'>('today')

// Статистика доставок в зависимости от выбранного периода
const deliveryStats = computed(() => {
  if (selectedPeriod.value === 'today') {
    return {
      completed: 5,
      distance: '12.5',
      earnings: 2500,
      rating: 4.9
    }
  } else if (selectedPeriod.value === 'week') {
    return {
      completed: 28,
      distance: '63.7',
      earnings: 13750,
      rating: 4.8
    }
  } else {
    return {
      completed: 112,
      distance: '248.2',
      earnings: 54600,
      rating: 4.7
    }
  }
})

// История доставок
const historyDays = ref<HistoryDay[]>([
  {
    date: 'Сегодня, 15 октября',
    deliveries: [
      {
        id: 1,
        address: 'ул. Тверская, 6, кв. 12',
        customer: 'Иванов А.С.',
        time: '12:30',
        status: 'completed',
        amount: 3,
        earnings: 450
      },
      {
        id: 2,
        address: 'Новый Арбат, 10, офис 203',
        customer: 'ООО "Альфа"',
        time: '10:15',
        status: 'completed',
        amount: 1,
        earnings: 350
      },
      {
        id: 3,
        address: 'Пятницкая ул., 25, кв. 8',
        customer: 'Петров В.В.',
        time: '09:45',
        status: 'completed',
        amount: 2,
        earnings: 400
      }
    ]
  },
  {
    date: 'Вчера, 14 октября',
    deliveries: [
      {
        id: 4,
        address: 'Ленинский пр-т, 42, кв. 56',
        customer: 'Сидорова М.И.',
        time: '18:20',
        status: 'completed',
        amount: 2,
        earnings: 400
      },
      {
        id: 5,
        address: 'Кутузовский пр-т, 15, кв. 127',
        customer: 'Козлов И.Р.',
        time: '16:40',
        status: 'canceled',
        amount: 1,
        earnings: 0
      },
      {
        id: 6,
        address: 'Садовая-Кудринская ул., 8/12',
        customer: 'Николаева К.А.',
        time: '12:10',
        status: 'completed',
        amount: 3,
        earnings: 500
      }
    ]
  }
])
</script>
