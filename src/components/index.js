import ImageView from './ImageView.vue'
import Sku from './XtxSku/index.vue'

//组件全局注册
export const componentsPlugin = {
  install(app) {
    app.component('ImageView', ImageView)
    app.component('Sku', Sku)

  }
}