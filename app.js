const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dash', (req, res) => {
    res.send('Bem vindo ao Dashboard!')
  })

app.get('/auth', (req, res) => {
res.send('Autentique-se ou cadastre-se!')
})
  
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})