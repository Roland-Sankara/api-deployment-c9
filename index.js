const express = require('express')
const quotesRouter = require("./routes/quotesRouter") 
const authRouter = require("./routes/authRouter")
const verifyToken = require("./utils/authorization")
require('dotenv').config()

const server = express()

// Middleware
server.use(express.json())

// Authentication
server.use('/auth', authRouter)

// Verify JWT Token
server.use(verifyToken)

server.get('/', (req,res)=>{
    
    res.send("Server is live and ready to give you the data")
})

// Get all Quotes
server.use('/quotes', quotesRouter)

const PORT = process.env.PORT;

server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})