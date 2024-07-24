const db = require("../models");
const myTeam = db.Team;
const Op = db.Sequelize.Op;
module.exports.getMyTeam = async (req, res) => {
    try {
        const teams = await myTeam.findAll();
        res.status(201).json({
            message: "Team  Found",
            status: 200,
            teams,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getMyTeamid = async (req, res) => {
    try {
        const team = await myTeam.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: team[0] ,status:200});
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.getMyTeamUserid = async (req, res) => {
    try {
        const team = await myTeam.findAll({
            where: {
                Userid: req.params.Userid,
            },
        });
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
};

module.exports.createMyTeam = async (req, res) => {
    try {
      console.log("jvv");
        await myTeam.create(req.body);
        res.status(201).json({
            message: "Team Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateMyTeam = async (req, res) => {
    try {
        await myTeam.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Team Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500});
    }
};

module.exports.deleteMyTeam = async (req, res) => {
    try {
        await myTeam.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Team Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};
