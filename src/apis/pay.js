import request from '@/utils/http'

export const createOrderAPI = (data) => {
  return request({
    url: '/member/order',
    method: 'POST',
    data
  })
}

export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}