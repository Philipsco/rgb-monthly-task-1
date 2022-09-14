const express = require('express')
const route = require('./src/routes/index.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(cors({
  origin: '*'
}))
app.use('/api', route(express))