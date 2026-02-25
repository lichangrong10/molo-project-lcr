//封装倒计时和日期格式化
import { computed, ref } from "vue"
import dayjs from "dayjs"

export const useCountDown = () => {
  //封装倒计时
  const time = ref(null)
  const start = (num) => {
    time.value = num
    const timer = setInterval(() => {
      time.value--
    }, 1000)
    if (time.value === 0) {
      clearInterval(timer)
    }
  }
  //封装日期格式化
  const formatime = computed(() => {
    return dayjs.unix(time.value).format('mm分ss秒')
  })

  return {
    formatime,
    start
  }
}