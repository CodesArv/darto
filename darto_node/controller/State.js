const db = require("../models");
const State = db.State;
const club =db.Club ;
const board = db.Board;
const tournmanet = db.Tournament ;
const city =  db.City ;
const pincode = db.Pincode;
const team = db.Team ;
const Op = db.Sequelize.Op;
//import Product from "../models/productModel.js";



// module.exports.getState = async (req, res) => {
//     try {
//         const states = await State.findAll();
//         res.status(201).json({
//             message: "State  Found",
//             status: 200,
//             states,
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

module.exports.getStateid = async (req, res) => {
    try {
        const state = await State.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: state[0] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.createState = async (req, res) => {
    try {
      console.log("jvv");
        await State.create(req.body);
        res.status(201).json({
            message: "State Created",
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.createPincode = async (req, res) => {
    try {
        console.log("jvv");
        await pincode.create(req.body);
        res.status(201).json({
            message: "State Created",
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.createcity= async (req, res) => {
    try {
        console.log("jvv");
        await city.create(req.body);
        res.status(201).json({
            message: "State Created",
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.createdistrict = async (req, res) => {
    try {
        console.log("jvv");
        await district.create(req.body);
        res.status(201).json({
            message: "district Created",
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.updateState = async (req, res) => {
    try {
        await State.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "State Updated",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.deleteState = async (req, res) => {
    try {
        await State.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "State Deleted",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// //const passport = require('passport');
// //const State = require("../models/State");
// const db = require("../config/firebase");
// const State = db.collection("State");
// const stateCollection = db.collection("StateList");
// const countryCollection =db.collection("CountryList");
// const jwt = require("jsonwebtoken");
// const secret = "test";

// module.exports.getState = async (req, res) => {
//   const getData = (collection, flag, value) => {
//     let searchResult = [];
//     return collection
//       .where(flag, "==", value)
//       .get()
//       .then((snapshot) => {
//         snapshot.forEach((doc) => {
//           const selectedItem = {
//             id: doc.id,
//             ...doc.data(),
//           };
//           searchResult.push(selectedItem);
//         });
//         return searchResult;
//       })
//       .catch(() => {
//         console.log("Error in getting data for Search");
//         return [];
//       });
//   };
//   let query = req.query;
//   console.log("query ", query);

//   let result = {};

//   if (query.state) {
//       result.tournamnet = await getData(
//           db.collection("Tournament"),
//           "loaction.state",
//           query.state
//       );
//       result.team = await getData(
//           db.collection("myTeam"),
//           "loaction.state",
//           query.state
//       );
//       result.club = await getData(
//           db.collection("Club"),
//           "loaction.state",
//           query.state
//       );
//   } else if (query.city) {
//       result.tournamnet = await getData(
//           db.collection("Tournament"),
//           "loaction.city",
//           query.city
//       );
//       result.team = await getData(
//           db.collection("myTeam"),
//           "loaction.city",
//           query.city
//       );
//       result.club = await getData(
//           db.collection("Club"),
//           "loaction.city",
//           query.city
//       );
//   } else if (query.district) {
//       result.tournamnet = await getData(
//           db.collection("Tournament"),
//           "loaction.district",
//           query.district
//       );
//       result.team = await getData(
//           db.collection("myTeam"),
//           "loaction.district",
//           query.district
//       );
//       result.club = await getData(
//           db.collection("Club"),
//           "loaction.district",
//           query.district
//       );
//   } else if (query.pincode) {
//       result.tournamnet = await getData(
//           db.collection("Tournament"),
//           "loaction.pincode",
//           query.pincode
//       );
//       result.team = await getData(
//           db.collection("myTeam"),
//           "loaction.pincode",
//           query.pincode
//       );
//       result.club = await getData(
//           db.collection("Club"),
//           "loaction.pincode",
//           query.pincode
//       );
//   }
//       else if (query.category) {
//           result.tournamnet = await getData(
//               db.collection("Tournament"),
//               "category",
//               query.category
//           );
         
//       }
      
//   // else if (query.nameofTeam) {
     
//   // }
//       return res
//           .status(200)
//           .json({ message: "Search Result Found", status: 200, result });
// };
// module.exports.getTeamandClubStateList = async (req, res) => {
//     const getData = (collection, flag, value) => {
//         let searchResult = [];
//         return collection
//             .where(flag, "==", value)
//             .get()
//             .then((snapshot) => {
//                 snapshot.forEach((doc) => {
//                     const selectedItem = {
//                         id: doc.id,
//                         ...doc.data(),
//                     };
//                     searchResult.push(selectedItem);
//                 });
//                 return searchResult;
//             })
//             .catch(() => {
//                 console.log("Error in getting data for Search");
//                 return [];
//             });
//     };
//     let query = req.query;
//     console.log("query ", query);

//     let result = {};

//     if (query.state) {
//         result.team = await getData(
//             db.collection("myTeam"),
//             "loaction.state",
//             query.state
//         );
//         result.club = await getData(
//             db.collection("Club"),
//             "loaction.state",
//             query.state
//         );
//     } 
//     return res
//         .status(200)
//         .json({ message: "Search Result Found", status: 200, result });
   
// };
// module.exports.getStateList = async (req, res) => {
//   let stateList = [];
//   // const list={
//   //   state = req.body.state,
//   // }
//   return stateCollection
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         const selectedItem = {
//           state: doc.state,
//           // ...doc.data(),
//         };
//         stateList.push(selectedItem);
//       });
//       console.log("stateList`", stateList);
//       res.status(200).json({ message: "state  Found", status: 200, stateList });
//     })
//     .catch(() => {
//       return res.status(500).json({ error: error });
//     });
// };
// module.exports.getdistrictList = async (req, res) => {
//   const getData = (collection, flag, value) => {
//     let searchResult = [];
//     return collection
//       .where(flag, "==", value)
//       .get()
//       .then((snapshot) => {
//         snapshot.forEach((doc) => {
//           const selectedItem = {
//             id: doc.id,
//             ...doc.data(),
//           };
//           searchResult.push(selectedItem);
//         });
//         return searchResult;
//       })
//       .catch(() => {
//         console.log("Error in getting data for Search");
//         return [];
//       });
//   };
//   let query = req.query;
//   console.log("query ", query);

//   let result = {};

//   if (query.state) {
//     result.district = await getData(
//       db.collection("StateList"),
//       "state",
//       query.state
//     );
//     console.log("hdh", result.district);
//   }
//   return res
//     .status(200)
//     .json({ message: "Search Result Found", status: 200, result });
// };
module.exports.getState = async (req, res) => {
    console.log("liststate", req.query);
    
    let filter = req.query.country
        ? {
              country: {
                  [Op.like]: `%${req.query.country}%`,
              },
          }
        : req.query.state
        ? {
              state: {
                  [Op.like]: `%${req.query.state}%`,
              },
          }
        : req.query.city
        ? {
              city: {
                  [Op.like]: `%${req.query.city}%`,
              },
          }
        : req.query.district
        ? {
              district: {
                  [Op.like]: `%${req.query.district}%`,
              },
          }
        : req.query.pincode
        ? {
              pincode: {
                  [Op.like]: `%${req.query.pincode}%`,
              },
          }
        : {};
    try {
        const resultclub = await club.findAll({
            where: filter,
        });
        const resultteam = await team.findAll({
            where: filter,
        });
        const resulttournament = await tournmanet.findAll({
            where: filter,
        });
        res.status(200).json({
            message: "Search Result Found",
            status: 200,
            result: { resultclub, resultteam,resulttournament }
        });
    } catch {
        res.status(500).json({
            message: "Error getting not found",
            status: 500,
        });
    }
   
};
module.exports.getTeamandClubStateList = async (req, res) => {
    console.log("liststate", req.query);
    let filter = req.query.country
        ? { country: req.query.country }
        : req.query.state
        ? { state: req.query.state }
        : req.query.city
        ? { city: req.query.city }
        : req.query.district
        ? { district: req.query.district }
        : {};
    try {
        const resultclub = await club.findAll({
            where: filter,
        });
        const resultteam = await team.findAll({
            where: filter,
        });
        res.status(200).json({
            message: "Search Result Found",
            status: 200,
            result: {resultclub,
            resultteam}
        });
    } catch {
        res.status(500).json({
            message: "Error getting not found",
            status: 500,
        });
    }
   
};
//category
module.exports.getCoutryStateList = async (req, res) => {
    console.log("liststate" , req.query);
    let result = [];
    let fliter = {};
    let attribute = "";
     if (req.query.country) {
         fliter = { country: req.query.country };
         attribute = "state";
         //district
         result = await State.findAll({
             where: fliter,
             attributes: [attribute],
             group: [attribute],
         });
     }
    else if (req.query.state) {
         fliter = { state: req.query.state };
         attribute = "district";
         //district
         result = await State.findAll({
             where: fliter,
             attributes: [attribute],
             group: [attribute],
         });
     }
        try{
        
            res.status(200).json(result);
    } 
    catch{
      res.status(500).json({
          message: "Error getting not found",
          status: 500,
          
      });
    }
   
};
module.exports.gettournmentList = async (req, res) => {
    console.log("liststate", req.query);
    let filter = req.query.category
        ? { category: req.query.category }
        : {};
    try {
       const resulttournament = await tournmanet.findAll({
           where: filter,
       });
        res.status(200).json({
            message: "Search Result Found",
            status: 200,
            result: { resulttournament },
        });
    } catch {
        res.status(500).json({
            message: "Error getting not found",
            status: 500,
        });
    }
    
};
module.exports.getboardList = async (req, res) => {
    console.log("liststate", req.query);
    let filter = req.query.name ? { name: req.query.name } : {};
    try {
        const nameBorad = await board.findAll({
            where: filter,
        });
        res.status(200).json({
            message: "Search Result Found",
            status: 200,
            result: { nameBorad },
        });
    } catch {
        res.status(500).json({
            message: "Error getting not found",
            status: 500,
        });
    }
};
module.exports.getAutoList = async (req, res) => {
    console.log("liststate", req.query);
    let result = [];
    let fliter ={};
    let attribute =""
    if (req.query.district) {
        fliter = { district: { [Op.$like]: `%${req.query.district}%` } };
        attribute = "district";
        //district
         result = await State.findAll({
             where: fliter,
             attributes: [attribute],
             group: [attribute],
         });
    } else if (req.query.pincode) {
        fliter = { pincode: { [Op.like]: `%${req.query.pincode}%` } };
        attribute = "pincode";
        result = await pincode.findAll({
            where: fliter,
            attributes: [attribute],
            group: [attribute],
        });
    }
    else if (req.query.city) {
        fliter = { city: { [Op.like]: `%${req.query.city}%` } };
        attribute = "city";
        result = await city.findAll({
            where: fliter,
            attributes: [attribute],
            group: [attribute],
        });
    }
    
    try {

        res.status(200).json(result);
    } catch {
        res.status(500).json({
            message: "Error getting not found",
            status: 500,
        });
    }
    
};

