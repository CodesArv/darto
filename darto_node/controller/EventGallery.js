
const db = require("../models");
const EventGallery = db.EventGallery;
const Op = db.Sequelize.Op;



module.exports.getEventGallery = async (req, res) => {
    try {
        const EventGallerys = await EventGallery.findAll();
        res.status(201).json({
            message: "EventGallery  Found",
            status: 200,
            EventGallerys,
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.getEventGalleryid = async (req, res) => {
    try {
        const EventGallery = await EventGallery.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: EventGallery[0],status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.createEventGallery = async (req, res) => {
    try {
      console.log("jvv");
        await EventGallery.create(req.body);
        res.status(201).json({
            message: "EventGallery Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateEventGallery = async (req, res) => {
    try {
        await EventGallery.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Event Gallery Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.deleteEventGallery = async (req, res) => {
    try {
        await EventGallery.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Event Gallery Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};
