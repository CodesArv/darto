

const db = require("../models");
const Participate = db.Participate;
const Op = db.Sequelize.Op;




module.exports.getMyParticipate = async (req, res) => {
    try {
        const Participates = await Participate.findAll();
        res.status(201).json({
            message: "Participate  Found",
            status: 200,
            Participates,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getParticipateid = async (req, res) => {
    try {
        const participate = await Participate.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: participate[0] ,status:200});
    } catch (error) {
        res.status(500).json({ message: error.message ,sttaus:500});
    }
};

module.exports.createParticipate = async (req, res) => {
    try {
      console.log("jvv");
        await Participate.create(req.body);
        res.status(201).json({
            message: "Participate Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.updateParticipate = async (req, res) => {
    try {
        await Participate.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Participate Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteParticipate = async (req, res) => {
    try {
        await Participate.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Participate Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

