const express = require("express");
const router = express.Router();
const ctrlPartner = require("../controller/Partner");

router.post("/create", ctrlPartner.createPartner);
router.get("/get", ctrlPartner.getPartner);
router.get("/get/:id", ctrlPartner.getPartnerid);
router.put("/update/:id", ctrlPartner.updatePartner);
router.delete("/delete/:id", ctrlPartner.deletePartner);

module.exports = router;
