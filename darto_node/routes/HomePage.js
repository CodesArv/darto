const express = require('express');
const router = express.Router();
const ctrlHomePage = require('../controller/HomePage');

router.post("/create", ctrlHomePage.createHomePage);
router.get("/get", ctrlHomePage.getAllHomePages);
router.get("/get/:id", ctrlHomePage.getHomePageById);
router.put("/update/:id", ctrlHomePage.updateHomePage);
router.delete("/delete/:id", ctrlHomePage.deleteHomePage );
module.exports = router;


