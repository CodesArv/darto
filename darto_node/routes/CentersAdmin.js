const express = require('express');
const router = express.Router();
const ctrlCenterAdmin = require('../controller/CentersAdmin');

router.post("/create", ctrlCenterAdmin.createCenters);
router.get("/get", ctrlCenterAdmin.getCenters);
router.get("/get/:id", ctrlCenterAdmin.getCentersid);
router.put("/update/:id", ctrlCenterAdmin.updateCenters);
router.delete("/delete/:id", ctrlCenterAdmin.deleteCenters);

module.exports = router;


