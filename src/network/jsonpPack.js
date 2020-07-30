import Vue from 'vue'

export function jsonpPack(config) {

  const baseURL = '联系coderwhy老师获取最新接口'

  const url = baseURL + (config.url ? config.url : '')

  const params = config.params ? config.params : {}

  const timeout = 5000

  return Vue.jsonp(url, params, timeout)

}