const db = require("../models");
const Footer = db.Footer;
const Op = db.Sequelize.Op;



module.exports.getFooter = async (req, res) => {
    try {
        const Footers = await Footer.findAll();
        res.status(201).json({
            message: "Footer  Found",
            status: 200,
            Footers,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getFooterid = async (req, res) => {
    try {
        const footer = await Footer.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: footer[0] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.createFooter = async (req, res) => {
    try {
      console.log("jvv");
        await Footer.create(req.body);
        res.status(201).json({
            message: "Footer Created",
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.updateFooter = async (req, res) => {
    try {
        await Footer.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Footer Updated",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteFooter = async (req, res) => {
    try {
        await Footer.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Footer Deleted",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


