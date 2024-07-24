//Board
const express = require("express");
const router = express.Router();
const ctrlBoard = require("../controller/Board");

router.post("/create", ctrlBoard.createBoard);
router.get("/get", ctrlBoard.getBoard);
router.get("/get/:id", ctrlBoard.getBoardid);
router.put("/update/:id", ctrlBoard.updateBoard);
router.delete("/delete/:id", ctrlBoard.deleteBoard);

module.exports = router;


