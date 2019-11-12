const express = require('express')
const app = express()

app.get('/users', (req, res) => {
    res.send([])
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Running on 3000'))
