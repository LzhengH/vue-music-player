import orginAxios from 'axios'

const instance = orginAxios.create({
  baseURL: process.env.VUE_APP_ROOT_URL,
  timeout: 10000
})

export default function request(option) {
  return new Promise((resolve, reject) => {
    // 发起请求
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
