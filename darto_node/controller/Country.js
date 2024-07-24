const db = require("../models");
const Country = db.Country;
//const Op = db.Sequelize.Op;
//import Product from "../models/productModel.js";
module.exports.getAllCountry = async (req, res) => {
    try {
        const Countrys = await Country.findAll();
        res.status(201).json({
            message: "Country  Found",
            status: 200,
            Countrys,
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.getCountryById = async (req, res) => {
    try {
        const country = await Country.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: country[0],status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.createCountry = async (req, res) => {
    try {
      console.log("jvv");
        await Country.create({name:req.body.name,
            dial_code:req.body.dial_code,
            code:req.body.code,
        });
        res.status(201).json({
            message: "Country Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateCountry = async (req, res) => {
    try {
        await Country.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Country Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteCountry = async (req, res) => {
    try {
        await Country.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Country Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};