

const db = require("../models");
const ContactUs = db.ContactUs;
const Op = db.Sequelize.Op;

const { EmailService } = require("../middleware/EmailService");
module.exports.getContactUs  = async (req, res) => {
    try {
        const   contactus = await ContactUs.findAll();
        res.status(201).json({
            message: "Contact us Found",
            status: 200,
            contactus,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getContactUsid = async (req, res) => {
    try {
        const   Contactus = await ContactUs.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response:   Contactus[0] ,status:200});
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.createContactUs = async (req, res) => {
    try {
      console.log("jvv");
        await ContactUs.create(req.body);
        res.status(201).json({
            message: "List space Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.updateContactUs = async (req, res) => {
    try {
        await ContactUs.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Contact Us Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteContactUs = async (req, res) => {
    try {
        await ContactUs.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Contact Us Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

