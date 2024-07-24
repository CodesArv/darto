const express = require("express");
const router = express.Router();
const ctrlteam = require("../controller/DartoArena");

router.post("/team/user/create", ctrlTeamUser.createTeamUser);
router.get("/team/user/get", ctrlteamUser.getAllTeamUsers);
router.get("/team/user/get/:id", ctrlteamUser.getTeamUserById);

router.put("/team/user/update/:id", ctrlteamUser.updateTeamUser);
router.delete("/team/user/delete/:id", ctrlteamUser.deleteTeamUser);

module.exports = router;





 
