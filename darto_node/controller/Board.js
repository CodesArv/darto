

const db = require("../models");
const Board = db.Board;
const Op = db.Sequelize.Op;
module.exports.getBoard  = async (req, res) => {
    try {
        const   boards = await Board.findAll();
        res.status(201).json({
            message: "Board  Found",
            status: 200,
            boards,
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.getBoardid = async (req, res) => {
    try {
        const   board = await Board.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response:board[0] ,status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.createBoard = async (req, res) => {
    try {
      console.log("jvv");
        await Board.create(req.body);
        res.status(201).json({
            message: "Board Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateBoard = async (req, res) => {
    try {
        await Board.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Board Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};

module.exports.deleteBoard = async (req, res) => {
    try {
        await Board.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Board Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};



