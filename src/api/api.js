import axios from 'http'

export default {
  /**
   * 获取所有城市列表
   */
  getAllCityList: 'blog/city/list',

  /**
   * 根据id去获取博客
   */
  getBlogById: 'blog/get/id',

  /**
   *获取所有博客
   */
  getBlogList: 'basic/blog/list',

  /**
   *根据类型统计
   */
  getStatisticByType: 'blog/statistic/type',

  /**
   *根据日期统计
   */
  getStatisticByDate: 'blog/statistic/date',

  /**
   * 获取相册封面，及其统计信息
   */
  getImageCoverList: 'blog/image/cover/list',
  /**
   * 根据类型获取图片
   */
  getImageList: 'blog/image/list',

  /**
   * 获取每日一句
   */
  getDaily: 'mine/daily',
}

/**
 * get 请求
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

/**
 * post 请求
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
