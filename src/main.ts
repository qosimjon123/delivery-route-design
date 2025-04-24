
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

// Импорт страниц
import MapPage from './pages/MapPage.vue'
import OrdersPage from './pages/OrdersPage.vue'
import HistoryPage from './pages/HistoryPage.vue'
import ProfilePage from './pages/ProfilePage.vue'
import NotFound from './pages/NotFound.vue'

// Создаем маршруты
const routes = [
  { path: '/', component: MapPage },
  { path: '/orders', component: OrdersPage },
  { path: '/history', component: HistoryPage },
  { path: '/profile', component: ProfilePage },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

// Создаем роутер
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Создаем и монтируем приложение
createApp(App)
  .use(router)
  .mount('#app')
