const db = require("../models");
const Admin = db.Admin;
const Op = db.Sequelize.Op;

// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// //const AdminModal = require("../models/Admin");
// const db = require("../config/firebase");
// const AdminModal = db.collection("Admin");
// const secret = "test";

// //const { admin, db, firebase } = require(‘../utils/admin’);
// const {
//   validateSignUPData,
//   validateLoginData,
// } = require("../middleware/helper");
// //
// module.exports.signup = (req, res) => {
//   const newUser = {
//     email: req.body.email,
//     password: req.body.password,
//     confirmPassword: req.body.confirmPassword,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     mobileNumber: req.body.mobileNumber,
//     updated_at: req.body.updated_at,
//     role: req.body.role,
//   };
//   const { valid, errors } = validateSignUPData(newUser);
//   const getIdToken = () => {
//     jwt.sign(
//       {
//         email,
//         password,
//         confirmPassword,
//         //id: oldUser._id
//       },
//       secret,
//       {
//         expiresIn: "1h",
//       }
//     );
//   };
//   if (!valid)
//     //checking validation
//     return res.status(400).json(errors);
//   let token, userId;
//   AdminModal.where("email", "==", newUser.email)
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         return res.status(400).json({ handle: "The user id already taken" });
//       } else {
//         console.log("doc ", doc);
//         return AdminModal.add({
//           email,
//           password,
//           confirmPassword,
//         });
//         // console.log("doc ", doc);
//       }
//     })
//     .then((data) => {
//       userId = data.id;
//       return getIdToken(userId);
//     })

//     .then((token) => {
//       return res.status(201).json({ token, result: doc });
//     })
//     .catch((err) => {
//       if (err.code == "auth/email-already-in-use") {
//         return res.status(400).json({ email: "Email already exist!" });
//       }
//       return res.status(500).json({ error: err.message });
//     });
// };
// module.exports.signin = (req, res) => {
//   const user = {
//     email: req.body.email,
//     password: req.body.password,
//   };
//   console.log("1");
//   const { valid, errors } = validateLoginData(user);
//   if (!valid) return res.status(400).json(errors);
//   console.log("1");
//   AdminModal.auth()
//     .signInWithEmailAndPassword(user.email, user.password) //firebase signin method
//     .then((data) => {
//       console.log(JSON.stringify(data));
//       return data.getIdToken();
//     })

//     .then((token) => {
//       console.log("2");
//       return res.json({ token, result: data });
//     })
//     .catch((err) => {
//       console.log("3");
//       if (
//         err.code == "auth/wrong-password" ||
//         err.code == "auth/user-not-found"
//       ) {
//         return res
//           .status(403)
//           .json({ message: "Wrong credentials, Please try again" });
//       }
//       console.log("4");
//       return res.status(500).json({ error: err.code });
//     });
// };
// // module.exports.signin = async (req, res) => {
// //   const { userName, password } = req.body;

// //   try {
// //     const oldUser = await AdminModal.findOne({ userName });

// //     if (!oldUser)
// //       return res.status(404).json({ message: "Admin doesn't exist" });

// //     const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

// //     if (!isPasswordCorrect)
// //       return res.status(400).json({ message: "Invalid credentials" });

// //     const token = jwt.sign(
// //       { userName: oldUser.userName, id: oldUser._id },
// //       secret,
// //       { expiresIn: "1h" }
// //     );

// //     res
// //       .status(200)
// //       .json({ message: "Login Admin.", status: 200, result: oldUser, token });
// //   } catch (err) {
// //     res.status(500).json({ message: error.message, status: 500 });
// //   }
// // };

// // module.exports.signup = async (req, res) => {
// //   const {
// //     id,
// //     firstName,
// //     lastName,
// //     userName,
// //     password,
// //     mobileNumber,
// //     updated_at,
// //     role,
// //   } = req.body;

// //   try {
// //     const oldUser = await AdminModal.findOne({ userName });

// //     if (oldUser)
// //       return res
// //         .status(400)
// //         .json({ message: "Admin already exists", status: 400 });

// //     const hashedPassword = await bcrypt.hash(password, 12);

// //     const result = await AdminModal.create({
// //       userName,
// //       password: hashedPassword,
// //       id,
// //       firstName,
// //       lastName,
// //       mobileNumber,
// //       updated_at,
// //       role,
// //     });
// //     console.log(result);
// //     const token = jwt.sign(
// //       { userName: result.userName, id: result._id },
// //       secret,
// //       { expiresIn: "1h" }
// //     );

// //     res
// //       .status(200)
// //       .json({ message: "Create Admin", status: 200, result, token });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message, status: 500 });

// //     console.log(error);
// //   }
// // };
// module.exports.getAdmin = async (req, res) => {
//   let adminModal = [];
//   return AdminModal.get()
//     .then((snapshot) => {
//       snapshot.forEach((doc) => {
//         const selectedItem = {
//           id: doc.id,
//           ...doc.data(),
//         };
//         adminModal.push(selectedItem);
//       });
//       res
//         .status(200)
//         .json({ message: "Centers Found", status: 200, adminModal });
//     })
//     .catch(() => {
//       return res.status(500).json({ error: error });
//     });
//   // try {
//   //   const admin = await AdminModal.find();
//   //   const token = jwt.sign({ admin }, secret, { expiresIn: "1h" });
//   //   // const bloodresult = { bloodresult: blood.bloodresult + 1 }
//   //   res
//   //     .status(200)
//   //     .json({ message: "Admin Found.", status: 200, result: admin, token });
//   // } catch (error) {
//   //   res.status(404).json({ message: error.message, status: 404 });
//   // }
// };

// module.exports.getAdminid = async (req, res) => {
//   const document = AdminModal.doc(req.params.id);
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
//   //   const adminid = await AdminModal.findById(id);
//   //   // const token = jwt.sign({ adminid }, secret, { expiresIn: "1h" });
//   //   res.status(200).json({
//   //     message: "Admin Found.",
//   //     status: 200,
//   //     result: adminid,
//   //     //token
//   //   });
//   // } catch (error) {
//   //   res.status(404).json({ message: error.message, status: 404 });
//   // }
// };

// module.exports.updateAdmin = async (req, res) => {
//   const document = AdminModal.doc(req.params.id);

//   return document
//     .update({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       userName: req.body.userName,
//       mobileNumber: req.body.mobileNumber,
//       role: req.body.role,
//     })
//     .then(() => {
//       return res
//         .status(200)
//         .json({ message: "Admin Updated Successfully.", status: 200 });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error, status: 500 });
//     });
//   // const id = req.params.id;
//   // const { firstName, lastName, userName, mobileNumber, role } = req.body;
//   // try {
//   //   const updatedadmin = {
//   //     firstName,
//   //     lastName,
//   //     userName,
//   //     mobileNumber,
//   //     role,
//   //     _id: id,
//   //   };

//   //   const result = await AdminModal.findByIdAndUpdate(id, updatedadmin, {
//   //     new: true,
//   //   });
//   //   const token = jwt.sign({ result, id: result._id }, secret, {
//   //     expiresIn: "1h",
//   //   });
//   //   res.status(200).json({
//   //     message: "Admin Updated Successfully.",
//   //     status: 200,
//   //     result,
//   //     token,
//   //   });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal Server Error", status: 500 });
//   // }
// };

// module.exports.deleteAdmin = async (req, res) => {
//   const document = AdminModal.doc(req.params.id);
//   return document
//     .delete()
//     .then(() => {
//       return res
//         .status(200)
//         .json({ message: "AdminModal Deleted Successfully.", status: 200 });
//     })
//     .catch((error) => {
//       return res.status(500).json({ error: error, status: 500 });
//     });
//   // const id = req.params.id;
//   // try {
//   //   await AdminModal.deleteOne({ _id: id });
//   //   res
//   //     .status(200)
//   //     .json({ message: "Admin Deleted Successfully.", status: 200 });
//   // } catch (error) {
//   //   res.status(500).json({ message: "Internal Server Error", status: 500 });
//   // }
// };
