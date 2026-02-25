import { ref, onMounted } from "vue";
import { getBannerData } from "@/apis/home.js";

import { getCategoryAPI } from "@/apis/category.js";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

//hook封装业务逻辑
//轮播图业务逻辑
export function useBanner() {
  const bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerData({ distributionSite: "2" });
    bannerList.value = res.data.result;
  };
  onMounted(() => {
    getBanner();
  });

  return {
    bannerList
  }
}

//分类业务逻辑
export function useCategory() {
  const route = useRoute();
  const cateObj = ref({});
  const getCatetory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id);
    // console.log(res);
    cateObj.value = res.data.result;
  };
  onMounted(() => {
    getCatetory();
  })
  //路由钩子函数解决路由缓存问题
  onBeforeRouteUpdate((to, from) => {
    if (to.params.id !== from.params.id) {
      getCatetory(to.params.id);
    }
  });
  return {
    cateObj
  }
}
