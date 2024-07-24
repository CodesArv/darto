const express = require("express");
const router = express.Router();
const ctrlUserLogin = require("../controller/UserLogin");

router.post("/signup", ctrlUserLogin.signup);
router.post("/signin", ctrlUserLogin.signin);
router.post("/logout", ctrlUserLogin.logout);
router.get("/get", ctrlUserLogin.getUser);
//findbyuser
router.get("/get/findbyuser", ctrlUserLogin.findbyuser);
//GetFindbyuser
router.get("/get/getfindbyuser", ctrlUserLogin.GetFindbyuser);
router.get("/get/:id", ctrlUserLogin.getUserid);
router.post("/resetpassword", ctrlUserLogin.resetPassword);
router.put("/update/:id", ctrlUserLogin.updateUser);
router.delete("/delete/:id", ctrlUserLogin.deleteUser);

module.exports = router;
