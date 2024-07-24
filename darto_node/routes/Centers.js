const express = require('express');
const router = express.Router();
const ctrlCenters = require('../controller/Centers');
router.post("/create", ctrlCenters.createCenters);
router.get("/get", ctrlCenters.getCenters);
router.get("/get/:id", ctrlCenters.getCentersid);
router.put("/update/:id", ctrlCenters.updateCenters);
router.delete("/delete/:id", ctrlCenters.deleteCenters);
module.exports = router;


