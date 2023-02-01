// cd /opt/projects/git-tutorial
// nodemon index.js

// tar git from inside the git folder
// cd /opt/tmp/git
// tar ../git.tar .* *

// in web download it to /opt/tmp/gittmp for test

const Koa = require('koa');
const app = module.exports = new Koa();
const serve = require('koa-static')

app.use(async function(ctx, next) {
  if (ctx.url == '/repo') {
    ctx.body = 'ok';
  } else {
    await next();
  }
});

app.use(serve('www'));

if (!module.parent) app.listen(3000);