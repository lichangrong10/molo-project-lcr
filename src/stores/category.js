import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getLayoutHeader } from "@/apis/layout.js";


export const useCounterStore = defineStore('category', () => {

  const categoryArr = ref([]);
  const getLayoutData = async () => {
    const res = await getLayoutHeader();
    // console.log(res.data.result);
    categoryArr.value = res.data.result;
  };
  return {
    categoryArr,
    getLayoutData
  }
})
