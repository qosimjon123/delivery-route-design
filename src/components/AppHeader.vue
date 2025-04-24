
<template>
  <header class="bg-white border-b px-4 py-3 flex justify-between items-center">
    <div class="flex items-center">
      <Menu 
        :size="20" 
        class="text-gray-700 mr-3 cursor-pointer" 
        @click="toggleSideMenu"
      />
      <h1 class="font-medium">
        {{ getPageTitle }}
      </h1>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center">
        <div class="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
        <span class="text-sm">В сети</span>
      </div>
      <Avatar class="h-8 w-8">
        <AvatarImage src="/placeholder.svg" />
        <AvatarFallback>КС</AvatarFallback>
      </Avatar>
    </div>
    
    <!-- Боковое меню -->
    <Dialog :open="isSideMenuOpen" @update:open="isSideMenuOpen = $event">
      <DialogContent class="sm:max-w-[280px] p-0" side="left">
        <div class="p-4 border-b">
          <div class="flex items-center">
            <Avatar class="h-12 w-12 mr-3">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>КС</AvatarFallback>
            </Avatar>
            <div>
              <h3 class="font-medium">Константин Сидоров</h3>
              <p class="text-sm text-muted-foreground">ID: 12345678</p>
            </div>
          </div>
        </div>
        
        <div class="py-2">
          <MenuItem 
            v-for="(item, index) in menuItems" 
            :key="index"
            :icon="item.icon"
            :label="item.label"
            :to="item.path"
            @click="isSideMenuOpen = false"
          />
        </div>
        
        <div class="p-4 border-t mt-2">
          <MenuItem 
            icon="LogOut"
            label="Выйти из аккаунта"
            class="text-red-500"
          />
        </div>
      </DialogContent>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Menu } from 'lucide-vue-next'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import MenuItem from '@/components/MenuItem.vue'

// Состояние для бокового меню
const isSideMenuOpen = ref(false)

function toggleSideMenu() {
  isSideMenuOpen.value = !isSideMenuOpen.value
}

// Определение текущего маршрута
const route = useRoute()

// Определение заголовка страницы на основе текущего маршрута
const getPageTitle = computed(() => {
  switch (route.path) {
    case '/':
      return 'Маршрут'
    case '/orders':
      return 'Заказы'
    case '/history':
      return 'История'
    case '/profile':
      return 'Профиль'
    default:
      return 'Доставка'
  }
})

// Элементы меню
const menuItems = [
  { icon: 'Navigation', label: 'Маршрут', path: '/' },
  { icon: 'Package', label: 'Заказы', path: '/orders' },
  { icon: 'Clock', label: 'История', path: '/history' },
  { icon: 'User', label: 'Профиль', path: '/profile' },
  { icon: 'Settings', label: 'Настройки', path: '/settings' },
  { icon: 'HelpCircle', label: 'Помощь', path: '/help' },
]
</script>
