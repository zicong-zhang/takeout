const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')


// error handler
onerror(app)

// 中间件
app.use(bodyParser({
  enableTypes:['json', 'form', 'text'],
  formLimit: '2mb', // 底层使用 bytes.parse 来格式化这个值，所以可以使用 b/kb/mb/gb/tb
}))
.use(json())
.use(require('koa-static')(__dirname + '/public'))


// 自定义中间件
const log = require('./middleware/logger');
const urlFilter = require('./middleware/response-formatter');
const errorHandler = require('./middleware/error-handler');

// 挂载到上下文
app.context.TriggerError = errorHandler;

app.use(log)
app.use(urlFilter('^/api'))


// routes
const routes = require('./routes');
app.use(routes.routes(), routes.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app


/** TODO
 * 路径别名
 * https://www.npmjs.com/package/module-alias
 * https://www.npmjs.com/package/require-alias
 */
