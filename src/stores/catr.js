import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from '@/stores/user'
import { insertCartAPI, getCartAPI, delCartAPI } from '@/apis/cart'


export const useCatrStore = defineStore('catr', () => {

  const catrList = ref([])
  const upDataCart = async () => {
    const res = await getCartAPI()
    catrList.value = res.data.result
  }


  const addCart = async (obj) => {
    const userStore = useUserStore()
    const isLogin = userStore.userInfo.token
    if (isLogin) {
      //登录后操作
      await insertCartAPI(obj)
      await upDataCart()
    }
    else {
      const item = catrList.value.find(item => obj.skuId === item.skuId)
      if (item) {
        catrList.value.forEach(cart => {
          if (cart.skuId === obj.skuId) {
            cart.count += obj.count
          }
        })
      } else {
        catrList.value.push(obj)
      }
    }

    // console.log(catrList.value);
  }
  const delCart = async (id) => {
    const userStore = useUserStore()
    const isLogin = userStore.userInfo.token
    if (isLogin) {
      //登录后操作
      await delCartAPI([id])
      await upDataCart()
    }
    else {
      const index = catrList.value.findIndex(item => item.skuId === id)
      catrList.value.splice(index, 1)
    }
  }

  const cleaCart = () => {
    catrList.value = []
  }

  const allCount = computed(() => {
    return catrList.value.reduce((last, next) => last + next.count, 0)
  })
  const allPrice = computed(() => {
    return catrList.value.reduce((last, next) => last + next.count * next.price, 0)
  })

  const changeBox = (state, skuId) => {
    const item = catrList.value.find(item => item.skuId === skuId)
    item.Selected = state
  }

  const allSelected = computed(() => {
    const arr = catrList.value.filter(item => item.Selected === true)
    return arr.reduce((a, b) => a + b.count, 0)
  })
  const allSelectedPrice = computed(() => {
    const arr = catrList.value.filter(item => item.Selected === true)
    return arr.reduce((a, b) => a + Number(b.price * b.count), 0)
  })

  const allCheck = (state) => {
    catrList.value.forEach(item => {
      item.Selected = state
    })
  }
  const cartCheck = computed(() => {
    return catrList.value.every(item => item.Selected)
  })


  return {
    upDataCart,
    cleaCart,
    catrList,
    addCart,
    delCart,
    allCount,
    allPrice,
    changeBox,
    allSelected,
    allCheck,
    cartCheck,
    allSelectedPrice
  }
},
  {
    persist: true  // 开启持久化
  }
)