import httpInstance from "@/utils/http";

export function getBannerData(params = {}) {
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

export const getHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}

export const getProductApi = () => {
  return httpInstance({
    url: '/home/goods'
  })
}