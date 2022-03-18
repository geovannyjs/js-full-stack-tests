module.exports = ({ router, db }) => {

  router.get('/api/v1/album', async ctx => ctx.body = 'Album!')

  return router

}