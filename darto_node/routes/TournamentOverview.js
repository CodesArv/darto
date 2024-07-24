const express = require('express');
const router = express.Router();
const ctrltournamentOverView = require('../controller/TournamentOverView');

router.post("/create", ctrltournamentOverView .createTournamentOverView);
router.get("/get", ctrltournamentOverView .getTournamentOverview);
router.get("/get/:id", ctrltournamentOverView .getTournamentOverviewid);
router.put("/update/:id", ctrltournamentOverView.updateTournamentOverview);
router.delete("/delete/:id", ctrltournamentOverView.deleteTournamentOverview );

module.exports = router;
