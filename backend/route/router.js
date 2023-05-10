const express = require('express')
const router = express.Router()

const {
    uploadIMG,
    getIMG
} = require("../controller")

router
.post("/", uploadIMG)
.get("/", getIMG)

module.exports = router