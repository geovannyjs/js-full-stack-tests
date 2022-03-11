const koa = require('koa')
const koaRouter = require('koa-router')()


const app = new koa()

koaRouter
  .get('/', async ctx => ctx.body = 'Hello World!')
  .get('/api/v1/album', async ctx => ctx.body = 'Album!')
  .get('/api/v1/author', async ctx => ctx.body = 'Author!')
  .get('/api/v1/music', async ctx => ctx.body = 'Music!')

app
  .use(koaRouter.routes())
  .listen(3000)