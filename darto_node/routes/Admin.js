const express = require("express");
const router = express.Router();
const ctrlAdmin = require("../controller/AdminLogin");

router.post("/signin", ctrlAdmin.signin);
router.post("/signup", ctrlAdmin.signup);
// router.get("/get", ctrlAdmin.getAdmin);
// router.get("/get/:id", ctrlAdmin.getAdminid);
// router.put("/update/:id", ctrlAdmin.updateAdmin);
// router.delete("/delete/:id", ctrlAdmin.deleteAdmin);

module.exports = router;
