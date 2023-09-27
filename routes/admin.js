const express = require('express')

const router = express.Router();

router.get('/add-users',(req, res, next) => {
  console.log('Second response')
  res.send(`
    <form action="/users" method="post">
      <input type="text" name="username">
      <button>Submit</button>
    </form>
  `)
})

router.post('/users', (req, res,) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router;