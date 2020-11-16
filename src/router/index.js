import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Empresa',
    component: () => import('@/views/Empresa')
  },
  {
    path: '/Servicio',
    name: 'Servicio',
    component: () => import('@/views/Servicio')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import('@/views/VentasView')
  }
]

const router = new VueRouter({
  routes
})

export default router
