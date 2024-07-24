const express = require('express');
const router = express.Router();
const ctrlclub = require('../controller/Club');

router.post("/create", ctrlclub.createclub);
router.get("/get", ctrlclub.getClub);
router.get("/get/:id", ctrlclub.getClubid);
router.put("/update/:id", ctrlclub.updateclub);
router.delete("/delete/:id", ctrlclub.deleteclub);

module.exports = router;


