import request from '@renderer/util/request'
import { ReturnResult } from '@renderer/util/request'
const userApi = {
  Login: '/user/login'
}
export function login (parameter):Promise<ReturnResult> {
  return request({
    url: userApi.Login,
    method: 'post',
    data: parameter
  })
}
