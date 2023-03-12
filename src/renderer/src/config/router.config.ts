import { UserLayout } from '@renderer/layouts'
import { Login } from '@renderer/views/user'

export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: UserLayout,
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      }
    ]
  }
]
