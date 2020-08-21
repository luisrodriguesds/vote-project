const express = require('express')

const app = express()
const { engine } = require('express-edge')

app.use(engine)
app.set('views', __dirname+'/views')
app.use(express.static('public'))

app.get('/', (request, response) => {
    const name = 'Luis Rodrigues'

    
    return response.render('index', {
        name
    })
})


app.get('/login', (request, response) => {
    
    return response.render('login')
})

app.listen(3000, () => {
    console.log('Server is running')
})