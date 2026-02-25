import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/login'
import { ref } from 'vue'
import { useCatrStore } from "@/stores/catr.js";
import { mergeCartAPI } from "@/apis/cart.js";

//pinia初始化
export const useUserStore = defineStore('user', () => {
  const cartStore = useCatrStore();
  const userInfo = ref({})
  const login = async (data) => {
    const res = await loginAPI(data)
    userInfo.value = res.data.result

    await mergeCartAPI(
      cartStore.catrList.map((item) => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count,
        };
      })
    );
    await cartStore.upDataCart()
  }

  const clearUserInfo = () => {
    // localStorage.removeItem('user')
    userInfo.value = {}
  }
  return {
    clearUserInfo,
    userInfo,
    login
  }
},
  {
    persist: true  // 开启持久化
  })