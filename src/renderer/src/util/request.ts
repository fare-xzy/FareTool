import axios from 'axios'
import * as process from "process";


export interface ReturnResult{
  Code: number
  Message: string
  Data: object
}

const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 200
})

export default request
