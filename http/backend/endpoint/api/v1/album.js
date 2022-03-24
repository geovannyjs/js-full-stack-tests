const koaBody = require('koa-body')
const SQL = require('sql-template-strings')


module.exports = ({ router, db }) => {

  router
    .get('/api/v1/album', async ctx => 
      db.query(SQL`select * from album`)
        .then(r => ctx.body = { rows: r.rows })
    )
    .post('/api/v1/album', koaBody(), async ctx => {

      let json = ctx.request.body

      return db.query(SQL`insert into album (author_id, name, is_active, released_at) values (${json.author_id}, ${json.name}, ${json.isActive}, ${json.released_at})`)
        .then(() => ctx.body = { success: true })

    })

  return router

}