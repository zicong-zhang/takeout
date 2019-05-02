/*
* @Description: 页面跳转相关的工具方法
* @Author: 广发前端 老沙
* @Date: 2019-04-19 12:51:35
*/

/**
 * 获取页面跳转传递的参数
 */
const getParams = (params = {}) => {
  const paramsArr = Object.keys(params);
  let dataString = '';

  if (!paramsArr.length) return '';

  dataString += paramsArr.reduce((prev, currentKey) => {
    return prev += `${currentKey}=${params[currentKey]}&`;
  }, '?').slice(0, -1);

  return dataString;
}

/**
 * 路由跳转
 * https://uniapp.dcloud.io/api/router?id=navigateto
 * 
 * routerPush({
 *  url: '',
 *  params: {
 *    id: 123
 *  },
 *  complete: xxx
 *  ...
 * })
 */
export const routerPush = (obj = {}) => {
  const { params = {}, ...other } = obj;
  const { url } = other;

  if (!url) return;

  uni.navigateTo({
    ...other,
    url: `${url}${getParams(params)}`,
  });
}
