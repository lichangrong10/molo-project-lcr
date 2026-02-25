import request from '@/utils/http'

export const loginAPI = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}