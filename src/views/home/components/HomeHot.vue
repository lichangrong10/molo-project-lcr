<script setup>
import HomePanels from "./HomePanels.vue";
import { getHotAPI } from "@/apis/home.js";
import { onMounted, ref } from "vue";

const newList = ref([]);
const getHotData = async () => {
  const res = await getHotAPI();
  // console.log(res);
  newList.value = res.data.result;
};

onMounted(() => {
  getHotData();
});
</script>

<template>
  <HomePanels title="人气推荐" subtitle="人气推荐 不容错过">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="price">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanels>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: gray;
      font-size: 20px;
    }
  }
}
</style>