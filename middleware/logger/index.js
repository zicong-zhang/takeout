const timer = () => {
	let time = new Date();
	let hour = time.getHours();
	hour = hour < 10 ? '0' + hour : hour;
	let minutes = time.getMinutes();
	minutes = minutes < 10 ? '0' + minutes : minutes;
	let seconds = time.getSeconds();
	seconds = seconds < 10 ? '0' + seconds : seconds;

	return `[${ hour }:${ minutes }:${ seconds }]`;
}

const logger = async (ctx, next) => {
  const startTime = +new Date();
  const msgConfig = {
    POST: `\x1B[35m${ ctx.url }\x1B[39m`,
    GET: `${ ctx.url }`
  }
  const method = ctx.method;
  const msg = msgConfig[method];
  
	console.log(' ');
	console.log(`${ timer() } \x1B[90m <---------------------------------------------\x1B[39m`);
  console.log(` ${method}      ${ msg }`);
  
  
  if (method === 'POST' || method === 'PUT') {
    console.log(`${ JSON.stringify(ctx.request.body) }`)
  } else {
    console.log(ctx.query);
  }
  
  try {
    await next();
  } catch(error) {
    console.log('logger-error:_____', error);
  }

  if (!ctx.body) return console.error('是否已连接数据库')
  
  console.log(` \x1B[90m --->\x1B[39m \x1B[36m code: ${ctx.body.code}\x1B[39m`);
	console.log(` \x1B[90m --->\x1B[39m \x1B[36m msg:  ${ctx.body.msg}\x1B[39m`);
	console.log(` \x1B[90m --->\x1B[39m \x1B[36m data: ${JSON.stringify(ctx.body.data)}\x1B[39m`);
  console.log(`${ +new Date() - startTime }ms \x1B[90m ---------------------\x1B[39m`);
}

module.exports = logger;
