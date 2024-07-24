const express = require('express');
const router = express.Router();
const ctrldartoProfile = require('../controller/DartoProfile');

router.post("/create", ctrldartoProfile.createDartoProfile);
router.get("/get", ctrldartoProfile.getDartoProfile);
router.get("/get/:userId", ctrldartoProfile.getDartoProfileid);
router.put("/update/:id", ctrldartoProfile.updateDartoProfile);
router.delete("/delete/:id", ctrldartoProfile.deleteDartoProfile);

module.exports = router;
