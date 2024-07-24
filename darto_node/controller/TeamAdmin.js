
const db = require("../models");
const TeamAdmin = db.Team;
const Op = db.Sequelize.Op;




module.exports.getTeamAdmin = async (req, res) => {
    try {
        const TeamAdmins = await TeamAdmin.findAll();
        res.status(201).json({
            message: "TeamAdmin  Found",
            status: 200,
            TeamAdmins,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getTeamAdminid = async (req, res) => {
    try {
        const teamAdmin = await TeamAdmin.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: teamAdmin[0],status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.createTeamAdmin = async (req, res) => {
    try {
      console.log("jvv");
        await TeamAdmin.create(req.body);
        res.status(201).json({
            message: "TeamAdmin Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateTeamAdmin = async (req, res) => {
    try {
        await TeamAdmin.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TeamAdmin Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteTeamAdmin = async (req, res) => {
    try {
        await TeamAdmin.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TeamAdmin Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

