const express = require("express");
const router = express.Router();
const ctrltournament = require("../controller/Tournament");

router.post("/create", ctrltournament.createTournament);
router.get("/get", ctrltournament.getTournament);
//router.get("/get/state", ctrltournament.getTournamentState);
router.get("/get/:id", ctrltournament.getTournamentid);
router.put("/update/:id", ctrltournament.updateTournament);
router.delete("/delete/:id", ctrltournament.deleteTournament);
module.exports = router;
