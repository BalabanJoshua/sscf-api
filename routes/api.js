"use strict"

const express = require('express')
const router = express.Router()
const config = require("../config.json")

router.get('/', (req, res) => {
    res.status(200).send("API")
})

router.get('/version', (req, res) => {
    res.json({ version: config.srv.version })
})

module.exports = router