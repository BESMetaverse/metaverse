import axios from 'axios'
import { environment } from '@config'

export const domain: string = environment.apiKey

export const url: string = `${domain}api/admin/`
export const requestUrl = axios.create({
  baseURL: url,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

// define request interceptors
requestUrl.interceptors.request.use((request) => {
  const accesToken: any = localStorage.getItem('token')
  if (localStorage.getItem('token') && request.headers) {
    request.headers.loginToken = accesToken
  }
  return request
})
