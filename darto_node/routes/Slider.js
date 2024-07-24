const express = require("express");
const router = express.Router();
const ctrlSlider = require("../controller/Slider");

router.post("/create", ctrlSlider.createSlider);
router.get("/get", ctrlSlider.getSlider);
router.get("/get/:id", ctrlSlider.getSliderid);
router.put("/update/:id", ctrlSlider.updateSlider);
router.delete("/delete/:id", ctrlSlider.deleteSlider);

module.exports = router;
