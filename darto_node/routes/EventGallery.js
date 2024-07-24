const express = require('express');
const router = express.Router();
const ctrleventGallery = require('../controller/EventGallery');

router.post("/create", ctrleventGallery.createEventGallery);
router.get("/get", ctrleventGallery.getEventGallery);
router.get("/get/:id", ctrleventGallery.getEventGalleryid);
router.put("/update/:id", ctrleventGallery.updateEventGallery);
router.delete("/delete/:id", ctrleventGallery.deleteEventGallery);

module.exports = router;

