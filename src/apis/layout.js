import httpInstance from "@/utils/http";

export function getLayoutHeader() {
  return httpInstance({
    url: '/home/category/head'
  })
}