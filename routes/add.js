const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.status(200)
    res.render('add', {
        title: 'Add Course',
        isAdd: true,
    })
})

module.exports = router