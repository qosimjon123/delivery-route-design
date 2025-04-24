
<template>
  <div class="bg-card border-t py-2 px-4 flex justify-around">
    <RouterLink to="/" class="flex flex-col items-center p-2">
      <Navigation :size="20" :class="isActive('/') ? 'text-primary' : 'text-muted-foreground'" />
      <span class="text-xs mt-1" :class="isActive('/') ? 'text-primary' : 'text-muted-foreground'">Маршрут</span>
    </RouterLink>
    
    <RouterLink to="/orders" class="flex flex-col items-center p-2">
      <Package :size="20" :class="isActive('/orders') ? 'text-primary' : 'text-muted-foreground'" />
      <span class="text-xs mt-1" :class="isActive('/orders') ? 'text-primary' : 'text-muted-foreground'">Заказы</span>
    </RouterLink>
    
    <RouterLink to="/history" class="flex flex-col items-center p-2">
      <Clock :size="20" :class="isActive('/history') ? 'text-primary' : 'text-muted-foreground'" />
      <span class="text-xs mt-1" :class="isActive('/history') ? 'text-primary' : 'text-muted-foreground'">История</span>
    </RouterLink>
    
    <RouterLink to="/profile" class="flex flex-col items-center p-2">
      <User :size="20" :class="isActive('/profile') ? 'text-primary' : 'text-muted-foreground'" />
      <span class="text-xs mt-1" :class="isActive('/profile') ? 'text-primary' : 'text-muted-foreground'">Профиль</span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { Navigation, Package, Clock, User } from 'lucide-vue-next'

const route = useRoute()

// Функция для определения активного маршрута
function isActive(path: string): boolean {
  return route.path === path
}
</script>
