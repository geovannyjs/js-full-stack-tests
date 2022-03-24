const KoaBody = require('koa-body')
const SQL = require('sql-template-strings') 


module.exports = ({ router, db }) => {

  router
    .get('/api/v1/music', async ctx => 
      db.query(SQL`select * from music`)
        .then(r => ctx.body = { rows: r.rows })
    )
    .post('/api/v1/music', KoaBody(), async ctx => {
      let json = ctx.request.body

      return db.query(SQL`insert into music (album_id, name, length, is_active) values  (${json.album_id}, ${json.name}, ${json.length}, ${json.isActive})`)
        .then(() => ctx.body = { success: true })
    })
  return router

}
