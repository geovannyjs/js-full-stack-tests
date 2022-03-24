const koaBody = require('koa-body')
const SQL = require('sql-template-strings') 


module.exports = ({ router, db }) => {
 
  router
    .get('/api/v1/author', async ctx => 
      db.query(SQL`select * from author`)
        .then(r => ctx.body = { rows: r.rows })
    )
    .post('/api/v1/author', koaBody(), async ctx => {

      let json = ctx.request.body

      return db.query(SQL`insert into author (name, is_active) values (${json.name}, ${json.isActive})`)
        .then(() => ctx.body = { success: true })

    })

  return router

}