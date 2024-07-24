const express = require('express');
const router = express.Router();
const ctrltournamentAdmin = require('../controller/TournamentAdmin');

router.post("/create", ctrltournamentAdmin.createTournamentAdmin);
router.get("/get", ctrltournamentAdmin.getTournamentAdmin);
router.get("/get/:id", ctrltournamentAdmin.getTournamentAdminid);
router.put("/update/:id", ctrltournamentAdmin.updateTournamentAdmin);
router.delete("/delete/:id", ctrltournamentAdmin.deleteTournamentAdmin);

module.exports = router;

 