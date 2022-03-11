const koa = require('koa')
const koaRouter = require('koa-router')()


const app = new koa()

koaRouter
  .get('/', async ctx => ctx.body = 'Hello World!')

app
  .use(koaRouter.routes())
  .listen(3000)