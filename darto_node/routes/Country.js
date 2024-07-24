//Board
const express = require("express");
const router = express.Router();
const ctrlBoard = require("../controller/Country");

router.post("/create", ctrlBoard.createCountry);
router.get("/get", ctrlBoard.getAllCountry);
router.get("/get/:id", ctrlBoard.getCountryById);
router.put("/update/:id", ctrlBoard.updateCountry);
router.delete("/delete/:id", ctrlBoard.deleteCountry);

module.exports = router;


