module.exports = ({ router, db }) => {

  router.get('/api/v1/author', async ctx => ctx.body = 'Author!')

  return router

}