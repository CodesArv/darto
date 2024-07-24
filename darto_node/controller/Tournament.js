//const passport = require('passport');
//const Tournament = require("../models/Tournament");
const db = require("../models");
const Tournament = db.Tournament;
const Op = db.Sequelize.Op;
//import Product from "../models/productModel.js";




module.exports.getTournament = async (req, res) => {
    try {
        const tournaments = await Tournament.findAll();
        res.status(201).json({
            message: "Tournament  Found",
            status: 200,
          tournaments,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getTournamentid = async (req, res) => {
    try {
        const tournament = await Tournament.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: tournament[0] ,status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.createTournament = async (req, res) => {
    try {
      console.log("jvv");
        await Tournament.create(req.body);
        res.status(201).json({
            message: "Tournament  Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.updateTournament = async (req, res) => {
    try {
        await Tournament.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Tournament Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};

module.exports.deleteTournament = async (req, res) => {
    try {
        await Tournament.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Tournament Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};


