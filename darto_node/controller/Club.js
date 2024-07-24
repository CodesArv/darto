const db = require("../models");
const Club = db.Club;
const Op = db.Sequelize.Op;

module.exports.getClub = async (req, res) => {
    try {
        const clubs = await Club.findAll();
        res.status(201).json({
            message: "Club  Found",
            status: 200,
            clubs,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};

module.exports.getClubid = async (req, res) => {
    try {
        const club = await Club.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: club[0] ,status:200});
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.createclub = async (req, res) => {
    try {
      console.log("jvv");
        await Club.create(req.body);
        res.status(201).json({
            message: "Club Created",
            status:200
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.updateclub = async (req, res) => {
    try {
        await Club.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Club Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.deleteclub = async (req, res) => {
    try {
        await Club.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Club Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500});
    }
};
