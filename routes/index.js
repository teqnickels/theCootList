const express = require('express')
const router = express.Router()

const authorize = require('../authentication/passport').authorize

/* GET home page. */
router.get('/', authorize, (req, res, next) => {
  res.render('index', { title: 'TABR' })
})

router.get('/create', authorize, (req, res, next) => {
  res.render('create_task', { title: 'New Task' })
})

router.post('/create', authorize, (req, res, next) => {
  res.redirect('/', { title: 'New Task' })
})

router.get('/update/:id', authorize, (req, res, next) => {
  res.render('update_task', { title: 'Update' })
})

router.post('/update/:id', authorize, (req, res, next) => {
  res.redirect('/', { title: 'Update' })
})

module.exports = router
