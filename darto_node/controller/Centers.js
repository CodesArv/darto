
const db = require("../models");
const Centers = db.Centers;
const Op = db.Sequelize.Op;



module.exports.getCenters  = async (req, res) => {
    try {
        const   centers = await Centers.findAll();
        res.status(201).json({
            message: "Center  Found",
            status: 200,
            centers,
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.getCentersid = async (req, res) => {
    try {
        const center = await Centers.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response:center[0],status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.createCenters = async (req, res) => {
    try {
      console.log("jvv");
        await Centers.create(req.body);
        res.status(201).json({
            message: "Center Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateCenters = async (req, res) => {
    try {
        await Centers.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Center Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.deleteCenters = async (req, res) => {
    try {
        await Centers.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Center Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};
