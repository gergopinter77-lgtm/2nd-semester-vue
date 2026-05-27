import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutUsView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
    },
    {
      path: '/network',
      name: 'network',
      component: () => import('../views/NetworkView.vue'),
    },
    {
      path: '/network/:slug',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('../views/MediaView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue'),
    },
    {
      path: '/news/:slug',
      name: 'newspage',
      component: () => import('../views/NewspageView.vue'),
    },

  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
