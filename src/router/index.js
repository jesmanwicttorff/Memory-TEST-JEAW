import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active", // para activar el boton 
  routes: [
    
    {
      path: '/memory/:name',
      name: 'memory',
      component: () => import('../views/MemoryView.vue')
    },
    {
      path: '/',
      name: 'principal',
      component: () => import('../views/MenuPrincipal.vue')
    },
   
  ]
})

export default router
