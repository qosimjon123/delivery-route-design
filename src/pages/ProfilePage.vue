
<template>
  <div class="p-4">
    <div class="text-center mb-6">
      <Avatar class="h-24 w-24 mx-auto mb-3">
        <AvatarImage src="/placeholder.svg" />
        <AvatarFallback>КС</AvatarFallback>
      </Avatar>
      <h1 class="text-xl font-medium">Константин Сидоров</h1>
      <p class="text-muted-foreground">ID: 12345678</p>
      <div class="flex items-center justify-center mt-2">
        <span class="text-yellow-500 mr-1">★</span>
        <span class="font-medium">4.8</span>
        <span class="text-muted-foreground ml-1">(243 отзыва)</span>
      </div>
    </div>
    
    <div class="bg-white rounded-lg p-4 shadow-sm border mb-4">
      <h2 class="text-lg font-medium mb-3">Статистика</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-sm text-muted-foreground">Всего доставок</div>
          <div class="text-xl font-bold">1,243</div>
        </div>
        <div>
          <div class="text-sm text-muted-foreground">На линии</div>
          <div class="text-xl font-bold">267 ч</div>
        </div>
        <div>
          <div class="text-sm text-muted-foreground">Заработано</div>
          <div class="text-xl font-bold">324,750 ₽</div>
        </div>
        <div>
          <div class="text-sm text-muted-foreground">Стаж</div>
          <div class="text-xl font-bold">1 год 3 мес</div>
        </div>
      </div>
    </div>
    
    <div class="space-y-4">
      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="p-4 flex justify-between items-center cursor-pointer" @click="toggleSection('account')">
          <div class="flex items-center">
            <User class="h-5 w-5 text-primary mr-3" />
            <span>Личные данные</span>
          </div>
          <ChevronDown :class="{'transform rotate-180': openSections.account}" class="h-5 w-5 transition-transform" />
        </div>
        <div v-if="openSections.account" class="p-4 pt-0 border-t">
          <div class="space-y-3">
            <div>
              <div class="text-sm text-muted-foreground">Телефон</div>
              <div>+7 (999) 123-45-67</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">Email</div>
              <div>k.sidorov@example.com</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">Адрес</div>
              <div>г. Москва, ул. Ленина, д. 10, кв. 25</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="p-4 flex justify-between items-center cursor-pointer" @click="toggleSection('vehicle')">
          <div class="flex items-center">
            <Car class="h-5 w-5 text-primary mr-3" />
            <span>Транспорт</span>
          </div>
          <ChevronDown :class="{'transform rotate-180': openSections.vehicle}" class="h-5 w-5 transition-transform" />
        </div>
        <div v-if="openSections.vehicle" class="p-4 pt-0 border-t">
          <div class="space-y-3">
            <div>
              <div class="text-sm text-muted-foreground">Модель</div>
              <div>Toyota Corolla</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">Гос. номер</div>
              <div>А123БВ77</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">Год выпуска</div>
              <div>2019</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="p-4 flex justify-between items-center cursor-pointer" @click="toggleSection('payments')">
          <div class="flex items-center">
            <CreditCard class="h-5 w-5 text-primary mr-3" />
            <span>Платежная информация</span>
          </div>
          <ChevronDown :class="{'transform rotate-180': openSections.payments}" class="h-5 w-5 transition-transform" />
        </div>
        <div v-if="openSections.payments" class="p-4 pt-0 border-t">
          <div class="space-y-3">
            <div>
              <div class="text-sm text-muted-foreground">Банк</div>
              <div>Сбербанк</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">Номер карты</div>
              <div>**** **** **** 5678</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div class="p-4 flex justify-between items-center cursor-pointer" @click="toggleSection('docs')">
          <div class="flex items-center">
            <FileText class="h-5 w-5 text-primary mr-3" />
            <span>Документы</span>
          </div>
          <ChevronDown :class="{'transform rotate-180': openSections.docs}" class="h-5 w-5 transition-transform" />
        </div>
        <div v-if="openSections.docs" class="p-4 pt-0 border-t">
          <div class="space-y-3">
            <div>
              <div class="text-sm text-muted-foreground">Паспорт</div>
              <div>Загружен и проверен</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">Водительское удостоверение</div>
              <div>Загружено и проверено</div>
            </div>
            <div>
              <div class="text-sm text-muted-foreground">СТС</div>
              <div>Загружено и проверено</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Button variant="destructive" class="w-full mt-6">Выйти из аккаунта</Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { User, ChevronDown, Car, CreditCard, FileText } from 'lucide-vue-next'

// Состояние открытых/закрытых секций
const openSections = ref({
  account: false,
  vehicle: false,
  payments: false,
  docs: false
})

// Функция для переключения состояния секции
function toggleSection(section: keyof typeof openSections.value) {
  openSections.value[section] = !openSections.value[section]
}
</script>
