const db = require("../models");
const TeamUser = db.Team;
const Op = db.Sequelize.Op;


//import Product from "../models/productModel.js";
module.exports.getAllTeamUsers = async (req, res) => {
    try {
        const TeamUsers = await TeamUser.findAll();
        res.status(201).json({
            message: "TeamUser  Found",
            status: 200,
            TeamUsers,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getTeamUserById = async (req, res) => {
    try {
        const teamUser = await TeamUser.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: teamUser[0] ,status:200});
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};



module.exports.createTeamUser = async (req, res) => {
    try {
      console.log("jvv");
        await TeamUser.create(req.body);
        res.status(201).json({
            message: "TeamUser Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};

module.exports.updateTeamUser = async (req, res) => {
    try {
        await TeamUser.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TeamUser Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.deleteTeamUser = async (req, res) => {
    try {
        await TeamUser.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TeamUser Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};




// //const passport = require('passport');
// //const TeamAdmin = require("../models/myTeam");
// const db = require("../config/firebase");
// import { query, where } from "firebase/firestore";
// const TeamAdmin = db.collection("myTeam");
// const jwt = require("jsonwebtoken");
// const secret = "test";
// schema: {
//   userid, teamid, userCode, UserName;
// }
// module.exports.getTeamUser = async (req, res) => {
//   let teamAdmin = [];
//   return TeamAdmin.get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         const selectedItem = {
//           id: doc.id,
//           ...doc.data(),
//         };
//         teamAdmin.push(selectedItem);
//       });
//       res
//         .status(200)
//         .json({ message: "Team User Found", status: 200, teamAdmin });
//     })
//     .catch(() => {
//       return res.status(500).json({ error: error });
//     });
//   // try {
//   //   const teamAdmin = await TeamAdmin.find();

//   //   // const bloodresult = { bloodresult: blood.bloodresult + 1 }
//   //   console.log(teamAdmin);
//   //   res.status(200).json({ message: "team found", status: 200, teamAdmin });
//   // } catch (error) {
//   //   res.status(404).json({ message: error.message, status: 404 });
//   // }
// };
// module.exports.SearchUser = async (req, res) => {
//   // const userName = req.params.name;
//   // TeamAdmin.where('type', '==', 'museum').get();
//   // TeamAdmin.orderByChild('UserName').equalTo(userName).limitToLast(1).once("value").
//   let teamAdmin = [];
//   return TeamAdmin.where("type", "==", "museum")
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         const selectedItem = {
//           id: doc.id,
//           ...doc.data(),
//         };
//         teamAdmin.push(selectedItem);
//       });
//       res
//         .status(200)
//         .json({ message: "Team User Found", status: 200, teamAdmin });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error });
//     });
//   // try {
//   //   const teamAdmin = await TeamAdmin.find();

//   //   // const bloodresult = { bloodresult: blood.bloodresult + 1 }
//   //   console.log(teamAdmin);
//   //   res.status(200).json({ message: "team found", status: 200, teamAdmin });
//   // } catch (error) {
//   //   res.status(404).json({ message: error.message, status: 404 });
//   // }
// };

// module.exports.getTeamUserid = async (req, res) => {
//   const document = TeamAdmin.doc(req.params.id);
//   return document
//     .get()
//     .then((doc) => {
//       let response = doc.data();
//       response = { ...response, id: req.params.id };
//       return res.status(200).json({ response: response });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error });
//     });
//   // const id = req.params.id;

//   // try {
//   //   const teamAdminid = await TeamAdmin.findById(id);

//   //   res.status(200).json({ message: "team found", status: 200, teamAdminid });
//   // } catch (error) {
//   //   res.status(404).json({ message: error.message, status: 404 });
//   // }
// };

// module.exports.createTeamUser = async (req, res) => {
//   const {
//     // id,
//     // status,
//     // role,
//     // image,
//     nameofTeam,
//     totalMembers,
//     loaction,
//     //tagsName,
//     //ageGroup,
//     occupation,
//     nameOccupationInstitution,
//     //createdAt,
//   } = req.body;
//   return TeamAdmin.add({
//     // id,
//     // status,
//     // role,
//     // image,
//     nameofTeam,
//     totalMembers,
//     loaction,
//     // tagsName,
//     // ageGroup,
//     occupation,
//     nameOccupationInstitution,
//     // createdAt,
//   })
//     .then((docRef) => {
//       return res.status(201).json({
//         message: "Team Admin Created Successfully.",
//         status: 200,
//         result: docRef,
//       });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error, status: 500 });
//     });
//   // const newBranch = new Branch.create({ Addess, Email, mobileNumber, NumberOfDepartment, NumberOfDoctor })
//   // try {
//   //   const result = await TeamAdmin.create({
//   //     id,
//   //     status,
//   //     role,
//   //     image,
//   //     nameofTeam,
//   //     totalMembers,
//   //     loaction,
//   //     tagsName,
//   //     ageGroup,
//   //     occupation,
//   //     nameOccupationInstitution,
//   //     createdAt,
//   //   });
//   //   console.log(result);
//   //   res
//   //     .status(200)
//   //     .json({ message: "Team Create Successfully.", status: 200, result });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal Server Error", status: 500 });

//   //   console.log(error);
//   // }
// };

// module.exports.updateTeamUser = async (req, res) => {
//   const document = TeamAdmin.doc(req.params.id);
//   return document
//     .update({
//       // status: req.body.status,
//       // role: req.body.role,
//       // image: req.body.image,
//       nameofTeam: req.body.nameofTeam,
//       totalMembers: req.body.totalMembers,
//       loaction: req.body.loaction,
//       // tagsName: req.body.tagsName,
//       // ageGroup: req.body.ageGroup,
//       occupation: req.body.occupation,
//       //  nameOccupationInstitution: req.body.nameOccupationInstitution,
//     })
//     .then(() => {
//       return res
//         .status(200)
//         .json({ message: "Team User Updated Successfully.", status: 200 });
//     })
//     .catch(() => {
//       return res.status(500).json({ error: error, status: 500 });
//     });
//   // const id = req.params.id;
//   // const {
//   //   status,
//   //   role,
//   //   nameofTeam,
//   //   totalMembers,
//   //   loaction,
//   //   tagsName,
//   //   ageGroup,
//   //   occupation,
//   //   nameOccupationInstitution,
//   // } = req.body;
//   // try {
//   //   const updatedteamAdmin = {
//   //     status,
//   //     role,
//   //     nameofTeam,
//   //     totalMembers,
//   //     loaction,
//   //     tagsName,
//   //     ageGroup,
//   //     occupation,
//   //     nameOccupationInstitution,
//   //     _id: id,
//   //   };

//   //   const result = await TeamAdmin.findByIdAndUpdate(id, updatedteamAdmin, {
//   //     new: true,
//   //   });

//   //   res
//   //     .status(200)
//   //     .json({ message: "Team Update Successfully.", status: 200, result });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal Server Error", status: 500 });
//   // }
// };

// module.exports.deleteTeamUser = async (req, res) => {
//   const document = TeamAdmin.doc(req.params.id);
//   return document
//     .delete()
//     .then(() => {
//       return res.status(200).json({
//         message: "TeamUser Deleted Successfully.",
//         status: 200,
//       });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error, status: 500 });
//     });
//   // const id = req.params.id;
//   // console.log(id);
//   // try {
//   //   await TeamAdmin.deleteOne({ _id: id });
//   //   // console.log(result);
//   //   res.status(200).json({ message: "Team  deleted Successfully." });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal Server Error", status: 500 });
//   // }
// };
