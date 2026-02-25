import { useIntersectionObserver } from '@vueuse/core'

//图片懒加载自定义指令
export const imgLazyPlugin = {
  install(app) {
    //绑定自定义指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // console.log(el, binding.value);
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      },
    })
  }
}