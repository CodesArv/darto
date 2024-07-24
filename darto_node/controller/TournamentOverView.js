const db = require("../models");
const TournamentOverView = db.Tournament;
const Op = db.Sequelize.Op;
//import Product from "../models/productModel.js";
module.exports.getTournamentOverview = async (req, res) => {
    try {
        const TournamentOverViews = await TournamentOverView.findAll();
        res.status(201).json({
            message: "TournamentOverView  Found",
            status: 200,
            TournamentOverViews,
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};
module.exports.getTournamentOverviewid = async (req, res) => {
    try {
        const tournamentOverView = await TournamentOverView.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: tournamentOverView[0] ,status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.createTournamentOverView = async (req, res) => {
    try {
      console.log("jvv");
        await TournamentOverView.create(req.body);
        res.status(201).json({
            message: "TournamentOverView Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateTournamentOverview = async (req, res) => {
    try {
        await TournamentOverView.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TournamentOverView Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteTournamentOverview = async (req, res) => {
    try {
        await TournamentOverView.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TournamentOverView Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};



