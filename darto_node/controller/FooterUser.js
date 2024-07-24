const db = require("../models");
const FooterUser = db.FooterUser;
const Op = db.Sequelize.Op;

module.exports.getFooter = async (req, res) => {
    try {
        const FooterUsers = await FooterUser.findAll();
        res.status(201).json({
            message: "FooterUser  Found",
            status: 200,
            FooterUsers,
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.getFooterid = async (req, res) => {
    try {
        const FooterUser = await FooterUser.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: FooterUser[0] ,status:200});
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.createFooter = async (req, res) => {
    try {
      console.log("jvv");
        await FooterUser.create(req.body);
        res.status(201).json({
            message: "FooterUser Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateFooter = async (req, res) => {
    try {
        await FooterUser.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "FooterUser Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteFooter = async (req, res) => {
    try {
        await FooterUser.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "FooterUser Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

