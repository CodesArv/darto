const express = require('express');
const router = express.Router();
const ctrlmyTeam = require('../controller/myTeam');

router.post("/create", ctrlmyTeam.createMyTeam);
router.get("/get", ctrlmyTeam.getMyTeam);
router.get("/get/:id", ctrlmyTeam.getMyTeamid);
router.get("/get/userid/:Userid", ctrlmyTeam.getMyTeamUserid);
router.put("/update/:id", ctrlmyTeam.updateMyTeam);
router.delete("/delete/:id", ctrlmyTeam.deleteMyTeam );

module.exports = router;


