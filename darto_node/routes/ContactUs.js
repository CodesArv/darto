const express = require("express");
const router = express.Router();
const ctrlcontactUs = require("../controller/ContactUs");

router.post("/create", ctrlcontactUs.createContactUs);
router.get("/get", ctrlcontactUs.getContactUs);
router.get("/get/:id", ctrlcontactUs.getContactUsid);
router.put("/update/:id", ctrlcontactUs.updateContactUs);
router.delete("/delete/:id", ctrlcontactUs.deleteContactUs);

module.exports = router;
