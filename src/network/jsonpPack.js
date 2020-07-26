import Vue from 'vue'

export function jsonpPack(config) {

  const baseURL = 'http://152.136.185.210:8000/api/n3'

  const url = baseURL + (config.url ? config.url : '')

  const params = config.params ? config.params : {}

  const timeout = 5000

  return Vue.jsonp(url, params, timeout)

}