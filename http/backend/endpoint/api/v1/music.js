module.exports = router => {

  router.get('/api/v1/music', async ctx => ctx.body = 'Music!')

  return router

}