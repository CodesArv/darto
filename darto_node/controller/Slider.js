
const db = require("../models");
const Slider = db.Slider;
const Op = db.Sequelize.Op;



module.exports.getSlider = async (req, res) => {
    let result =[]
    try {
         Slider.findAll({ raw: true }).then((data) => {
             console.log("jkfgkfk:",data);
             data.forEach((item,index)=>{
                 let row = {
                     orderNo: item.orderNo === null ? index + 1 : item.orderNo,
                     id: item.id,
                     name: item.name,
                     image: item.image,
                     status: item.status,
                     description: item.description,
                     createdAt: item.createdAt,
                     updatedAt: item.updatedAt,
                 };
                 result.push(row);
             })
             
             
               res.status(201).json(result);
         });
        // console.log("sliderss", result);
    //  Sliders.forEach((item, index) => {
    //         console.log("item.Slider :", item);
    //         let row={
    //        orderNo: item.orderNo === null ? index+1 : item.orderNo,
    //       id: item.id,
    //         name:item.name,
    //         image:item.image,
    //         status:item.status,
    //        description: item.description,
    //         createdAt :item.createdAt,
    //         updatedAt:item.updatedAt,
    //         }
    //         result.push(row);
    //     });
      
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getSliderid = async (req, res) => {
    try {
        console.log("sliderfff :");
         const Sliders = await Slider.findAll({
             where: {
                 id: req.params.id,
             },
         });
        //    let row = {
        //        orderNo:
        //            Sliders[0].orderNo === null
        //                ? req.params.id
        //                : Sliders[0].orderNo,
        //        id: Sliders[0].id,
        //        name: Sliders[0].name,
        //        image: Sliders[0].image,
        //        status: Sliders[0].status,
        //        description: Sliders[0].description,
        //        createdAt: Sliders[0].createdAt,
        //        updatedAt: Sliders[0].updatedAt,
        //    };
         console.log("slider :", Sliders[0]);
        res.status(200).json(Sliders[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
   
};

module.exports.createSlider = async (req, res) => {
    
     let image = req.body.image;
      let name = req.body.name;
      let description = req.body.description;
      let orderNo = req.body.orderNo;
    try {
      console.log("jvv");
        await Slider.create({ image, name, description, orderNo });
        res.status(201).json({
            message: "Slider Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.updateSlider = async (req, res) => {
    try {
        await Slider.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Slider Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.deleteSlider = async (req, res) => {
    try {
        await Slider.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Slider Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

