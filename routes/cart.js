const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.post('/add', async (req, res) => {
  const course = await Course.findById(req.body.id)
  await req.user.addToCart(course)
  res.redirect('/cart')
})

router.delete('/remove/:id', async (req, res) => {
  const cart = await cart.remove(req.params.id)
  res.status(200).json(cart)
})

router.get('/', async (req, res) => {
  // const cart = await cart.fetch()
  res.render('cart', {
    title: 'Корзина',
    iscart: true,
    // courses: cart.courses,
    // price: cart.price
  })
})

module.exports = router