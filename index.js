const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200)
    res.render('index', {
        title: 'Main page',
        isHome: true,
    })
})

app.get('/add', (req, res) => {
    res.status(200)
    res.render('add', {
        title: 'Add Course',
        isAdd: true,
    })
})

app.get('/courses', (req, res) => {
    res.status(200)
    res.render('courses', {
        title: 'Courses',
        isCourses: true,
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})