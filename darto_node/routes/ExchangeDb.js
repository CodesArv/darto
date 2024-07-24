const express = require("express");
const router = express.Router();
const ctrlExchangeDb = require("../controller/ExchangeDb");

router.post("/create", ctrlExchangeDb.createExchnage);
module.exports = router;
