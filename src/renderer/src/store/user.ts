import { defineStore } from 'pinia'
import { login } from '@renderer/api/user'

export const UserAuthStore = defineStore('UserAuth',  {
  state: () => ({
    isAuthenticated: false
  }),
  actions:{
    Login(userInfo){
      return new Promise((_resolve, reject) => {
        login(userInfo).then(response => {
          console.log(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})

