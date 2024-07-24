const express = require("express");
const router = express.Router();
const ctrlFooteruser = require("../controller/FooterUser");

router.post("/create", ctrlFooteruser.createFooter);
router.get("/get", ctrlFooteruser.getFooter);
router.get("/get/:id", ctrlFooteruser.getFooterid);
router.put("/update/:id", ctrlFooteruser.updateFooter);
router.delete("/delete/:id", ctrlFooteruser.deleteFooter);

module.exports = router;
