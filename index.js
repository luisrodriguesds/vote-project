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

app.get('/cadastro', (request, response) => {
    
    return response.render('cadastro')
})

app.get('/result', (request, response) => {
    
    return response.render('result')
})

app.get('/enquetes', (request, response) => {
    
    return response.render('enquetes')
})

app.get('/vote-single', (request, response) => {
    
    return response.render('vote-single')
})

app.get('/vote-criadas', (request, response) => {
    
    return response.render('vote-criadas')
})

app.listen(3000, () => {
    console.log('Server is running')
})