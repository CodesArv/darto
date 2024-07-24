const express = require('express');
const router = express.Router();
const ctrldartoArena = require('../controller/DartoArena');

router.post("/create", ctrldartoArena.createDartoArena);
router.get("/get", ctrldartoArena.getDartoArena);
router.get("/get/:id", ctrldartoArena.getDartoArenaid);
router.put("/update/:id", ctrldartoArena.updateDartoArena);
router.delete("/delete/:id", ctrldartoArena.deleteDartoArena);
router.get("/email", ctrldartoArena.emailDartoArena);

module.exports = router;
