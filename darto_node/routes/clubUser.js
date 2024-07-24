const express = require("express");
const router = express.Router();
const ctrlclubUser = require("../controller/Clubuser");

router.post("/create", ctrlclubUser.createClubuser);
router.get("/get", ctrlclubUser.getClubuser);
//router.get("/get/state", ctrlclubUser.getClubState);
router.get("/get/:id", ctrlclubUser.getClubuserid);
router.get("/get/userid/:Userid", ctrlclubUser.getClubuserByid);
router.put("/update/:id", ctrlclubUser.updateClubuser);
router.delete("/delete/:id", ctrlclubUser.deleteClubuser);
module.exports = router;