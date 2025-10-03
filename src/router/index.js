import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import LayoutView from '@/layouts/MasterPage.vue'
import AboutView from '@/views/AboutView.vue'
import UserView from '@/views/setup/UserView.vue'
import PermissionView from '@/views/setup/PermissionView.vue'
import CalendarView from '@/views/plan/CalendarView.vue'
import TimelineView from '@/views/plan/TimelineView.vue'
import AddSupplierView from '@/views/supplier/AddSupplierView.vue'
import AddCustomerView from '@/views/customer/AddCustomerView.vue'
import WorkOrderView from '@/views/worker/WorkOrderView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/',
    component: LayoutView,
    children: [
      { path: 'home', component: HomeView },
      { path: 'about', component: AboutView },
      { path: 'user', component: UserView },
      { path: 'permission', component: PermissionView },
      { path: 'calendar', component: CalendarView },
      { path: 'timeline', component: TimelineView },
      { path: 'supplier/add', component: AddSupplierView },
      { path: 'customer/add', component: AddCustomerView },
      { path: 'work-order', component: WorkOrderView },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('auth')

  if (to.name !== 'login' && !isAuth) {
    // not logged in → go to login
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
