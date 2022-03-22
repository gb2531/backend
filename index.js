const express = require('express')

require('./db/mongoose')

const app = express()
const port = process.env.PORT || 90
app.listen(port,()=> {
    console.log('server is up on port' + port)
})
