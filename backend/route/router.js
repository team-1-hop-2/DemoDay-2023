const express = require('express')
const router = express.Router()

const {
    uploadIMG,
} = require("../controller")

router
.post("/", uploadIMG)

module.exports = router