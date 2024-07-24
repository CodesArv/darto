

const db = require("../models");
const CentersAdmin = db.Centers;
const Op = db.Sequelize.Op;

module.exports.getCenters  = async (req, res) => {
    try {
        const CentersAdmins = await CentersAdmin.findAll();
        res.status(201).json({
            message: "CentersAdmin  Found",
            status: 200,
            CentersAdmins,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getCentersid = async (req, res) => {
    try {
        const centersAdmin = await CentersAdmin.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response:   centersAdmin[0],status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.createCenters = async (req, res) => {
    try {
      console.log("jvv");
        await CentersAdmin.create(req.body);
        res.status(201).json({
            message: "CentersAdmin Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateCenters = async (req, res) => {
    try {
        await CentersAdmin.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "CentersAdmin Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.deleteCenters = async (req, res) => {
    try {
        await CentersAdmin.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "CentersAdmin Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};



