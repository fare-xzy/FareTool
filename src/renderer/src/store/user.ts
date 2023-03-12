import { defineStore } from 'pinia'

export const UserAuthStore = defineStore('UserAuth',  {
  state: () => ({
    isAuthenticated: false
  })
})

