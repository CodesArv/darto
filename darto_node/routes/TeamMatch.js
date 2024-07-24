const express = require("express");
const router = express.Router();
const ctrlteamMatch = require("../controller/TeamMatch");

router.post("/create", ctrlteamMatch.createTeamMatch);
router.get("/getbymatch", ctrlteamMatch.gettemMatchsearch);
router.get("/match/List", ctrlteamMatch.getMatchList);
//getMatchListbyid
router.get("/match/Details/:id", ctrlteamMatch.getMatchListbyid);
router.get("/get/player", ctrlteamMatch.getPlayer);
router.get("/get/Score", ctrlteamMatch.getMatchScore);
router.get("/get/matchStatus/:matchStatus", ctrlteamMatch.getActiveAndComplete);
router.get("/get/latestScore/:teamMatch_id", ctrlteamMatch.getlatestScore);
router.get("/get/HistoryScore/:teamMatch_id", ctrlteamMatch.getHistoryScore);
router.get("/get/:id", ctrlteamMatch.getTeamMatchid);
router.get("/get", ctrlteamMatch.getTeamMatch);
router.put("/update/:id", ctrlteamMatch.updateTeamMatch);
router.delete("/delete/:id", ctrlteamMatch.deleteTeamMatch);
router.post("/updateScore", ctrlteamMatch.UpdateMatchScore);
router.put("/update/matchscore/:id", ctrlteamMatch.updateScore);
//getHistoryScore
router.get("/activePlayer", ctrlteamMatch.getActivePlayer);
//router.get("/autoComplete",ctrlteamMatch.getautoComplete);
//getMatchScore
//getMatchScore

module.exports = router;
