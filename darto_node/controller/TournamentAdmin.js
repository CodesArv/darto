
const db = require("../models");
const TournamentAdmin = db.Tournament;
const Op = db.Sequelize.Op;
//import Product from "../models/productModel.js";



module.exports.getTournamentAdmin = async (req, res) => {
    try {
        const TournamentAdmins = await TournamentAdmin.findAll();
        res.status(201).json({
            message: "TournamentAdmin  Found",
            status: 200,
            TournamentAdmins,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.getTournamentAdminid = async (req, res) => {
    try {
        const tournamentAdmin = await TournamentAdmin.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: tournamentAdmin[0],status:200 });
    } catch (error) {
        res.status(500).json({ message: error.message,status:500 });
    }
};

module.exports.createTournamentAdmin = async (req, res) => {
    try {
      console.log("jvv");
        await TournamentAdmin.create(req.body);
        res.status(201).json({
            message: "TournamentAdmin Created",
            status:201
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
};

module.exports.updateTournamentAdmin = async (req, res) => {
    try {
        await TournamentAdmin.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TournamentAdmin Updated",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};

module.exports.deleteTournamentAdmin = async (req, res) => {
    try {
        await TournamentAdmin.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TournamentAdmin Deleted",
            status:200
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500 });
    }
};


// //const passport = require('passport');
// //const TournamentAdmin = require("../models/Tournament");
// const db = require("../config/firebase");
// const TournamentAdmin = db.collection("Tournament");
// const jwt = require("jsonwebtoken");
// const secret = "test";

// module.exports.getTournamentAdmin = async (req, res) => {
//   let tournamentAdmin = [];
//   return TournamentAdmin.get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         const selectedItem = {
//           id: doc.id,
//           ...doc.data(),
//         };
//         tournamentAdmin.push(selectedItem);
//       });
//       res.status(200).json({
//         message: "TournamentAdmin Found",
//         status: 200,
//         tournamentAdmin,
//       });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error });
//     });
//   // try {
//   //   const tournament = await TournamentAdmin.find();
//   //   const token = jwt.sign({ tournament }, secret, { expiresIn: "1h" });
//   //   // const bloodresult = { bloodresult: blood.bloodresult + 1 }
//   //   res.status(200).json({
//   //     message: "Tournamnet Admin Found",
//   //     status: 200,
//   //     result: tournament,
//   //     token,
//   //   });
//   // } catch (error) {
//   //   res.status(404).json({ message: error.message, status: 404 });
//   // }
// };

// module.exports.getTournamentAdminid = async (req, res) => {
//   const document = TournamentAdmin.doc(req.params.id);
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
//   //   const tournament = await TournamentAdmin.findById(id);
//   //   //  const token = jwt.sign({ tournament }, secret, { expiresIn: "1h" });
//   //   res.status(200).json({
//   //     message: "Tournamnet Admin Found",
//   //     status: 200,
//   //     result: tournament,
//   //   });
//   // } catch (error) {
//   //   res.status(404).json({ message: error.message, status: 404 });
//   // }
// };

// module.exports.createTournamentAdmin = async (req, res) => {
//   return TournamentAdmin.add(req.body)
//     .then((docRef) => {
//       // const token = jwt.sign({ create, id: create._id }, secret, {
//       //   expiresIn: "1h",
//       // });
//       return res.status(201).json({
//         message: "Tournamentadmin Created Successfully.",
//         status: 200,
//         result: docRef,
//         // token,
//       });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error, status: 500 });
//     });
//   // const newBranch = new Branch.create({ Addess, Email, mobileNumber, NumberOfDepartment, NumberOfDoctor })
//   // try {
//   //   const create = await TournamentAdmin.create({
//   //     id,
//   //     name,
//   //     status,
//   //     description,
//   //     dob,
//   //     image,
//   //     fromDate,
//   //     toDate,
//   //     loaction,
//   //     role,
//   //     matches,
//   //     feeperentry,
//   //     gameHours,
//   //     mode,
//   //     category,
//   //     tournamentType,
//   //     mobileNumber,
//   //     email,
//   //     ageGroup,
//   //     createdAt,
//   //   });
//   //   const token = jwt.sign({ create, id: create._id }, secret, {
//   //     expiresIn: "1h",
//   //   });
//   //   res.status(200).json({
//   //     message: "Tournament Create Successfully.",
//   //     status: 200,
//   //     result: create,
//   //     token,
//   //   });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal Server Error", status: 500 });

//   //   console.log(error);
//   // }
// };

// module.exports.updateTournamentAdmin = async (req, res) => {
//   // const id = req.params.id;
//   // const {
//   //   name,
//   //   status,
//   //   role,
//   //   description,
//   //   dob,
//   //   fromDate,
//   //   toDate,
//   //   loaction,
//   //   matches,
//   //   feeperentry,
//   //   gameHours,
//   //   mode,
//   //   category,
//   //   tournamentType,
//   //   mobileNumber,
//   //   email,
//   //   ageGroup,
//   // } = req.body;
//   const document = TournamentAdmin.doc(req.params.id);
//   return document
//     .update({
//       name: req.body.name,
//       status: req.body.status,
//       role: req.body.role,
//       description: req.body.description,
//       fromDate: req.body.fromDate,
//       toDate: req.body.toDate,
//       loaction: req.body.loaction,
//       matches: req.body.matches,
//       feeperentry: req.body.feeperentry,
//       gameHours: req.body.gameHours,
//       mode: req.body.mode,
//       category: req.body.category,
//       tournamentType: req.body.tournamentType,
//       mobileNumber: req.body.mobileNumber,
//       email: req.body.email,
//       //ageGroup: req.body.ageGroup,
//     })
//     .then(() => {
//       // const token = jwt.sign({ create, id: create._id }, secret, {
//       //   expiresIn: "1h",
//       // });
//       return res.status(200).json({
//         message: "Tournament Admin Updated Successfully.",
//         status: 200,
//         result: document,
//         // token,
//       });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error, status: 500 });
//     });
//   // try {
//   //   const updatedtournament = {
//   //     name,
//   //     status,
//   //     role,
//   //     description,
//   //     dob,
//   //     fromDate,
//   //     toDate,
//   //     matches,
//   //     feeperentry,
//   //     gameHours,
//   //     mode,
//   //     category,
//   //     tournamentType,
//   //     mobileNumber,
//   //     email,
//   //     ageGroup,
//   //     loaction,
//   //     _id: id,
//   //   };

//   //   const update = await TournamentAdmin.findByIdAndUpdate(
//   //     id,
//   //     updatedtournament,
//   //     { new: true }
//   //   );
//   //   const token = jwt.sign({ update }, secret, { expiresIn: "1h" });
//   //   res.status(200).json({
//   //     message: "Tournament Update Successfully.",
//   //     status: 200,
//   //     result: update,
//   //     token,
//   //   });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal Server Error", status: 500 });
//   // }
// };

// module.exports.deleteTournamentAdmin = async (req, res) => {
//   const document = TournamentAdmin.doc(req.params.id);
//   return document
//     .delete()
//     .then(() => {
//       return res.status(200).json({
//         message: "TournamentAdmin Deleted Successfully.",
//         status: 200,
//       });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error, status: 500 });
//     });
//   // const id = req.params.id;
//   // try {
//   //   await TournamentAdmin.deleteOne({ _id: id });
//   //   res
//   //     .status(200)
//   //     .json({ message: "Tournament Deleted Successfully.", status: 200 });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal Server Error", status: 500 });
//   // }
// };
