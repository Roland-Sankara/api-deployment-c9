const express = require('express')
const router = express.Router()
const {createUser, loginUser} = require("../controllers/authController");
const prisma = require("../prisma/prismaClient")

router.post('/signup', createUser(prisma))
router.post('/login', loginUser(prisma))


module.exports = router;