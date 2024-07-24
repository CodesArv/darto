

const db = require("../models");
const Clubuser = db.Club;
const Op = db.Sequelize.Op;

module.exports.getClubuser  = async (req, res) => {
    try {
        const Clubusers = await Clubuser.findAll();
        res.status(201).json({
            message: "Clubuser  Found",
            status: 200,
            Clubusers,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getClubuserid = async (req, res) => {
    try {
        const Clubusers = await Clubuser.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: Clubusers[0] ,status:200});
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getClubuserByid = async (req, res) => {
    try {
        const Clubusers = await Clubuser.findAll({
            where: {
                Userid: req.params.Userid,
            },
        });
        res.status(200).json( Clubusers);
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
};

module.exports.createClubuser = async (req, res) => {
    try {
        await Clubuser.create(req.body);
        res.status(201).json({
            message: "Clubuser Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};

module.exports.updateClubuser = async (req, res) => {
    try {
        await Clubuser.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Clubuser Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.deleteClubuser = async (req, res) => {
    try {
        await Clubuser.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Clubuser Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};


