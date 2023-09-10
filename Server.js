require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

const PORT = process.env.PORT || 300

// OPEN ROUTE - PUBLIC ROUTE 
app.get('/', (req, res) => {
    res.status(200).json({msg: "WELCOME TO THE API"})
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})