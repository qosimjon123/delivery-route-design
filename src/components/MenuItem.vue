
<template>
  <RouterLink 
    v-if="to" 
    :to="to"
    class="flex items-center px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors"
    :class="customClass"
  >
    <component 
      :is="iconComponent" 
      :size="20" 
      class="mr-3"
    />
    <span>{{ label }}</span>
  </RouterLink>
  
  <div 
    v-else
    class="flex items-center px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors"
    :class="customClass"
    @click="$emit('click')"
  >
    <component 
      :is="iconComponent" 
      :size="20" 
      class="mr-3"
    />
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps<{
  icon: string;
  label: string;
  to?: string;
  class?: string;
}>()

defineEmits(['click'])

// Динамический импорт иконки из Lucide
const iconComponent = computed(() => {
  return (LucideIcons as any)[props.icon] || LucideIcons.CircleDot
})

// Пользовательские классы
const customClass = computed(() => props.class || '')
</script>
