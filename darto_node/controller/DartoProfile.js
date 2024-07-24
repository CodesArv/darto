
const db = require("../models");
const DartoProfile = db.DartoProfile;
const UserLogin = db.UserLogin;
const Op = db.Sequelize.Op;




module.exports.getDartoProfile = async (req, res) => {
    try {
        const DartoProfiles = await DartoProfile.findAll();
        res.status(201).json({
            message: "DartoProfile  Found",
            status: 200,
            DartoProfiles,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

// module.exports.getDartoProfileid = async (req, res) => {
//     try {
//         const dartoProfile = await UserLogin.findAll({
//             where: {
//                 id: req.params.id,
//             },
//         });
//         res.status(200).json({ response: dartoProfile[0] ,status:200});
//     } catch (error) {
//         res.status(500).json({ message: error.message,status:500 });
//     }
// };
module.exports.getDartoProfileid = async (req, res) => {
    try {
        const dartoProfile = await DartoProfile.findAll({
            where: {
                userId: req.params.userId,
            },
        });
        res.status(200).json({ response: dartoProfile[0], status: 200 });
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
};
module.exports.createDartoProfile = async (req, res) => {
    if (!req.body.userId) {
        return res
            .status(403)
            .send({ status: 403, message: "Invalid Parameters" });
    }
    try {
        // let where = req.params.id,
         const foundItem = await DartoProfile.findOne({
             where: {
                 userId: req.body.userId,
             },
             raw: true,
         });
         console.log("jjg", foundItem);
         if (!foundItem) {
             // Item not found, create a new one
             const item = await DartoProfile.create(req.body);
             console.log("itemcreate",item);
             return res.status(200).send( item);

         }
         else{
         // Found an item, update it
         console.log("jgjgjjg")
         const item = await DartoProfile.update(req.body, {
             where: {
                 id: foundItem.id,
             },
         });
          console.log("itemupdate", item);
         return res.status(200).send(req.body);
        }
    // //     const dartoProfile = await DartoProfile.findAll({
    // //         where: {
    // //             userId: req.params.userId,
    // //         },
    // //     });
        
    // //   console.log("jvv");
    // let row={};
    //     const DartoProfiles = await DartoProfile.findAll({ raw: true });
    //      if (DartoProfiles.length === 0) await DartoProfile.create(req.body);
    //      else {
    //         //  DartoProfiles.forEach((item, index) => {
    //         //       row = {
    //         //          id: item.id,
    //         //      };
                 
    //         //  });
    //          await DartoProfile.update(req.body);

    //      }
    //     res.status(201).json(req.body);
    //     console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.updateDartoProfile = async (req, res) => {
    try {
        await DartoProfile.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Darto Profile Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteDartoProfile = async (req, res) => {
    try {
        await DartoProfile.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "Darto Profile Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};
