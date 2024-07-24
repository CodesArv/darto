const express = require("express");
const router = express.Router();
const ctrlTeamAdmin = require("../controller/TeamAdmin");

router.post("/create", ctrlTeamAdmin.createTeamAdmin);
router.get("/get", ctrlTeamAdmin.getTeamAdmin);
router.get("/get/:id", ctrlTeamAdmin.getTeamAdminid);
router.put("/update/:id", ctrlTeamAdmin.updateTeamAdmin);
router.delete("/delete/:id", ctrlTeamAdmin.deleteTeamAdmin);

module.exports = router;
