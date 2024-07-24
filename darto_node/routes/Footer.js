const express = require("express");
const router = express.Router();
const ctrlFooter = require("../controller/Footer");

router.post("/create", ctrlFooter.createFooter);
router.get("/get", ctrlFooter.getFooter);
router.get("/getcontent", ctrlFooter.getFooterContent);
router.get("/get/:id", ctrlFooter.getFooterid);
router.put("/update/:id", ctrlFooter.updateFooter);
router.delete("/delete/:id", ctrlFooter.deleteFooter);

module.exports = router;
