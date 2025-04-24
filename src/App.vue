
<template>
  <div>
    <RouterView />
    <Toaster />
    <Sonner />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Toaster } from './components/ui/toaster'
import { Toaster as Sonner } from './components/ui/sonner'
</script>
