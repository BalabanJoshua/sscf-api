"use strict"

const express = require('express')
const cors = require('cors')

const app = express()
const config = require("./config.json")

app.use(cors())

var environment = process.env.NODE_ENV
var isProduction = environment === 'production'

const api = require('./routes/api')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// dunno about these two..

app.use('/api', api)

app.use(express.static("public"))

if ( !isProduction )
    app.listen(config.srv.dev_port, (err) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(`Listening on port ${config.srv.dev_port}`)
    })
else app.listen()