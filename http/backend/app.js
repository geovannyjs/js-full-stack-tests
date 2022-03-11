const koa = require('koa')
const koaRouter = require('koa-router')()

const albumEndpoint = require('./endpoint/api/v1/album')
const authorEndpoint = require('./endpoint/api/v1/author')
const musicEndpoint = require('./endpoint/api/v1/music')


const app = new koa()

koaRouter
  .get('/', async ctx => ctx.body = 'Hello World!')

const ep = [albumEndpoint, authorEndpoint, musicEndpoint]
ep.forEach(x => x(koaRouter))  

app
  .use(koaRouter.routes())
  .listen(3000)