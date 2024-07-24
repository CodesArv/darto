//db.Parnter
const db = require("../models");
const Partner = db.Parnter;
const Op = db.Sequelize.Op;

module.exports.getPartner = async (req, res) => {
    let result=[];
    try {
        const Partners = await Partner.findAll({ raw: true });
         Partners.forEach((item, index) => {
             console.log("partner :", item);
             let row = {
                 orderNo: item.orderNo === null ? index+1 : item.orderNo,
                 id: item.id,
                 name: item.name,
                 image: item.image,
                 status: item.status,
                 link: item.link,
                 category: item.category,
                 createdAt: item.createdAt,
                 updatedAt: item.updatedAt,
             };
             result.push(row);
         });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
};

module.exports.getPartnerid = async (req, res) => {
    try {
        const Partners = await Partner.findAll({
            where: {
                id: req.params.id,
            },
        });
        // let result = {
        //     orderNo: Partners[0].orderNo === null ? id : Partners[0].orderNo,
        //     id: Partners[0].id,
        //     name: Partners[0].name,
        //     image: Partners[0].image,
        //     status: Partners[0].status,
        //     link: Partners[0].link,
        //     category: Partners[0].category,
        //     createdAt: Partners[0].createdAt,
        //     updatedAt: Partners[0].updatedAt,
        // };
        res.status(200).json({ response: Partners[0] });
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
};

module.exports.createPartner = async (req, res) => {
  let name = req.body.name;
  let link = req.body.link;
  let image = req.body.image;
  let category = req.body.category;
   let orderNo = req.body.orderNo;
    try {
        console.log("jvv");
        await Partner.create({ name, image, link, category, orderNo });
        res.status(201).json({
            message: "Partner Created",
            status: 201,
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
};

module.exports.updatePartner = async (req, res) => {
    try {
        await Partner.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Partner Updated",
            status: 200,
        });
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
};

module.exports.deletePartner = async (req, res) => {
    try {
        await Partner.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Partner Deleted",
            status: 200,
        });
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
};

