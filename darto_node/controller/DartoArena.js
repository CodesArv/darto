
const db = require("../models");
const DartoArena = db.DartoArena;
const Op = db.Sequelize.Op;

const {EmailService} = require("../middleware/EmailService");

module.exports.getDartoArena = async (req, res) => {
    try {
        const DartoArenas = await DartoArena.findAll();
        res.status(201).json({
            message: "DartoArena  Found",
            status: 200,
            DartoArenas,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getDartoArenaid = async (req, res) => {
    try {
        const dartoArena = await DartoArena.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: dartoArena[0] ,status:200});
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.createDartoArena = async (req, res) => {
    try {
      console.log("jvv");
        await DartoArena.create(req.body);
        //res.EmailService({ html: req.body });
        res.status(201).json({
            message: "DartArena Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};

module.exports.updateDartoArena = async (req, res) => {
    try {
        await DartoArena.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Darto Arena Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteDartoArena = async (req, res) => {
    try {
        await DartoArena.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Darto Arena Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500});
    }
};

module.exports.emailDartoArena = async (req, res) => {
    try {
        const response = await EmailService({fName: "Kamal", lName: "Sharma"});
        res.status(200).json({
            message: response,
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500});
    }
    console
};