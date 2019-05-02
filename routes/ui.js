const router = require('koa-router')()

router
  .post('ui/updateThemeColor', () => {
    console.log('update~~~~~');
  })

module.exports = router;
