const db = require("../models");
const HomePage = db.HomePage;
const Op = db.Sequelize.Op;

module.exports.getAllHomePages = async (req, res) => {
    try {
        const HomePages = await HomePage.findAll();
        res.status(201).json({
            message: "HomePage  Found",
            status: 200,
            HomePages,
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.getHomePageById = async (req, res) => {
    try {
        const homePage = await HomePage.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: homePage[0],status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.createHomePage = async (req, res) => {
    try {
      console.log("jvv");

        await HomePage.create(req.body);
        res.status(201).json({
            message: "HomePage Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.updateHomePage = async (req, res) => {
    try {
        await HomePage.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "HomePage Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteHomePage = async (req, res) => {
    try {
        await HomePage.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "HomePage Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};


