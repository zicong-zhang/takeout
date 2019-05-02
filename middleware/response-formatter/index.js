const ApiError = require('../error-handler');
const fs = require('fs');
const path = require('path');

const responseFormatter = ctx => {

  let body = null;
  switch (true) {
    case ctx.body instanceof Array || ctx.body instanceof Object:
      body = ctx.body;
      break;
    default:
      body = [];
      break;
  }

  ctx.body = {
    code: 200,
    msg: 'success',
    data: body
  }
}

/**
 * @param {regExp} pattern 正则
 */
const urlFilter = pattern => {

  return async (ctx, next) => {
    const reg = new RegExp(pattern);
    const isConform = reg.test(ctx.originalUrl);

    try {
      // 先执行路由
      await next();
    } catch (error) {
      if (error instanceof ApiError && isConform) {
        ctx.status = 200;
        ctx.body = {
          code: error.code,
          msg: error.msg
        }
      }
      //继续抛，让外层中间件处理日志
      throw error;
    }

    // 正常响应
    if (isConform) {
      responseFormatter(ctx);
    } /* else if (/^\/public/.test(ctx.originalUrl)) {
      console.log('2233:_____', path.join(__dirname, `../${ctx.url}`));
      ctx.type = 'image/png;charset=utf8';

      let data = fs.readFileSync(path.join(__dirname, `../${ctx.url}`), 'base64').toString('base64');

      ctx.body = data
    } */
  }
}

module.exports = urlFilter;

/*
instanceof的普通的用法，obj instanceof Object 检测 Object.prototype 是否存在于参数obj的原型链上。
function Person(){};
var p =new Person();
console.log(p instanceof Person); // true
 */
