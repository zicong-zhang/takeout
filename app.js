import Koa from 'koa';
import json from 'koa-json';
import onerror from 'koa-onerror';
import bodyParser from 'koa-bodyparser';


// 自定义中间件
import log from './middleware/logger';
import urlFilter from './middleware/response-formatter';
import errorHandler from './middleware/error-handler';
import routes from './routes';

import handleUniToVisual from './io/handleUniToVisual';

handleUniToVisual();

const app = new Koa();

// error handler
onerror(app)

// 中间件
app.use(bodyParser({
  enableTypes:['json', 'form', 'text'],
  formLimit: '2mb', // 底层使用 bytes.parse 来格式化这个值，所以可以使用 b/kb/mb/gb/tb
}))
.use(json())
.use(require('koa-static')(__dirname + '/public'))


app.context.TriggerError = errorHandler;

app.use(log)
app.use(urlFilter('^/api'))


// routes
app.use(routes.routes(), routes.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});


// 必须以 commonjs 规范导出
// 因为 bin/www 不能有 es6
module.exports = app
