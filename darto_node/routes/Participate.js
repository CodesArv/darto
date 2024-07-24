const express = require('express');
const router = express.Router();
const ctrlparticipate = require('../controller/Participate');

router.post("/create", ctrlparticipate.createParticipate);
router.get("/get", ctrlparticipate.getMyParticipate);
router.get("/get/:id", ctrlparticipate.getParticipateid);
router.put("/update/:id", ctrlparticipate.updateParticipate);
router.delete("/delete/:id", ctrlparticipate.deleteParticipate );

module.exports = router;



