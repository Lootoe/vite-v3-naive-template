/**
 * 是否为开发环境
 * @returns {Boolean}
 */
export const isDev = () => {
  return import.meta.env.DEV
}

/**
 * 是否为生产环境
 * @returns {Boolean}
 */
export const isProd = () => {
  return import.meta.env.PROD
}

/**
 * 加载图片
 * @param {*} name 图片名称
 * @returns URL
 */
export const loadImg = name => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
