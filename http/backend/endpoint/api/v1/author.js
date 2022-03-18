const koaBody = require('koa-body')


module.exports = ({ router, db }) => {

  router
    .get('/api/v1/author', async ctx => ctx.body = 'Author!')
    .post('/api/v1/author', koaBody(), async ctx => {

      let json = ctx.request.body

      return db.query('insert into author (name, is_active) values ($1, $2)', [json.name, json.isActive])
        .then(() => ctx.body = { success: true })

    })

  return router

}