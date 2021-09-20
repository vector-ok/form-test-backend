const express = require("express");

const router = express.Router();

const userCtrl = require("./controller");

router.post("/", userCtrl.createUser);

module.exports = router;
