const db = require("../models");
const UserLogin = db.UserLogin;
const Op = db.Sequelize.Op;

const firebase = require("firebase/app");
const {
  getAuth,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCcCQTw1_zmIyNvZ_Htjv1QvCB53v_5tzU",
  authDomain: "darto-23061.firebaseapp.com",
  projectId: "darto-23061",
  storageBucket: "darto-23061.appspot.com",
  messagingSenderId: "43845869264",
  appId: "1:43845869264:web:859d4caab1af142a0288d5",
  measurementId: "G-98JNH7RZ2J",
};

firebase.initializeApp(firebaseConfig);

module.exports.signup = async (req, res) => {
  const newUser = {
    displayName: req.body.firstName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.mobileNumber,
  };
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(async (userCredential) => {
      // Signed in

      const user = userCredential.user;
      console.log("user ", user.uid);
      console.log("userCredential ", user.uid);
      if (user && user.emailVerified === false) {
        const actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for
          // this URL must be whitelisted in the Firebase Console.
          url: "https://darto.in/",
          // This must be true for email link sign-in.
          handleCodeInApp: true,
          // FDL custom domain.
        };
        sendEmailVerification(user, actionCodeSettings).then(function () {
          console.log("email verification sent to user");
        });
      }
      // Create User Profile in local DB
      await UserLogin.create({ ...req.body, firebaseId: user.uid });
      res.status(200).json({
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
        expirationTime: user.expirationTime,
        message: "User Created",
        status: 200,
      });
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error);
      res.status(500).json({ message: error.message, status: 500 });
    });
};
module.exports.signin = async (req, res) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, req.body.email, req.body.password)
    .then(async(userCredential) => {
      // Signed in
      console.log(userCredential.user);
      const user = userCredential.user;
      if (user && user.emailVerified === false) {
        console.log("Email is not verified");
        return res
          .status(401)
          .json({ message: "Please verify your Email ID first before login" });
      } else {
        const userProfile = await UserLogin.findAll({
            where: {
                firebaseId: user.uid,
            },
            raw: true,
        });
        console.log("jfjj", userProfile[0].id, userProfile[0].isPaidCustomer);
        res.status(200).json({
          uid: user.uid,
          id:userProfile[0].id,
          isPaidCustomer:userProfile[0].isPaidCustomer,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          expirationTime: user.expirationTime,
          message: "User Logged in",
          status: 200,
        });
      }
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error);
      res.status(500).json({ message: error.message, status: 500 });
    });
};
module.exports.resetPassword = async (req, res) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, req.body.email)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      //  const user = userCredential.user;

      res.status(200).json({
        //  uid: user.uid,
        //  accessToken: user.accessToken,
        //  refreshToken: user.refreshToken,
        //  expirationTime: user.expirationTime,
        message: "resetPassword verification sent to email",
        status: 200,
      });
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error);
      res.status(500).json({ message: error.message, status: 500 });
    });
};
module.exports.logout = async (req, res) => {};
module.exports.getUser = async (req, res) => {
 
  try {
    const users = await UserLogin.findAll({
        attributes: {
            exclude: ["password"],
        },
    });

    res.status(200).json({
      message: "UserLogin Found",
      status: 200,
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};
module.exports.getUserid = async (req, res) => {
  try {
    const users = await UserLogin.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ response: users[0], status: 200 });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    let  memberShipId =  String(req.body.pincode).substring(0, 3) +
            req.body.mobileNumber.substring(0, 5) +
            String(req.body.pincode).substring(3, 6)+req.body.mobileNumber.substring(5, 10) ;
 await UserLogin.update(
      {
          mobileNumber: req.body.mobileNumber,
          pincode: req.body.pincode,
           memberShipId: memberShipId,
          ...req.body,
      },
      {
          where: {
              id: req.params.id,
          },
      }
  );
    res.status(200).json({
        message: "User Updated",
        result: req.body,
        
        status: 200,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};
module.exports.deleteUser = async (req, res) => {
  try {
    await UserLogin.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "User Deleted",
      status: 200,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
};
// findby
module.exports.GetFindbyuser = async (req, res) => {
    console.log("liststate", req.query);
    // const mobileNumber: req.query.mobileNumber;
    
    try {
        const users = await UserLogin.findAll({
            where: {
                [Op.or]: [
                    { firstName: { [Op.like]: `%${req.query.query_string}%` } },
                    {
                        email: {
                            [Op.like]: `%${req.query.query_string}%`,
                        },
                    },
                    {
                        mobileNumber: {
                            [Op.like]: `%${req.query.query_string}%`,
                        },
                    },
                    {
                        memberShipId: {
                            [Op.like]: `%${req.query.query_string}%`,
                        },
                    },
                    {
                        tagName: {
                            [Op.like]: `%${req.query.query_string}%`,
                        },
                    },
                ],
            },
            attributes: [
                "firstName",
                "lastName",
                "mobileNumber",
                "email",
                "memberShipId",
                "pincode",
                "tagName",
                "id",
            ],
        });
        res.status(200).json( users);
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
   
};
module.exports.findbyuser = async (req, res) => {
  console.log("liststate", req.query);
  let result = [];
  let fliter = {};
  let attribute = [];
  // let name = firstName+ lastName;
  // let names = req.query.firstName +  req.query.lastName;
  // let name= firstName+lastName;
  if (req.query.mobileNumber) {
      fliter = { mobileNumber: req.query.mobileNumber };
      //district
      result = await UserLogin.findAll({
          where: fliter,
          attributes: [
              "firstName",
              "lastName",
              "mobileNumber",
              "email",
              "memberShipId",
              "pincode",
          ],
          group: [
              "firstName",
              "lastName",
              "mobileNumber",
              "email",
              "memberShipId",
              "pincode",
          ],
      });
  } else if (req.query.email) {
      fliter = { email: req.query.email };
        
      //district
      result = await UserLogin.findAll({
          where: fliter,
          attributes: [
              "firstName",
              "lastName",
              "mobileNumber",
              "email",
              "memberShipId",
              "pincode",
          ],
          group: [
              "firstName",
              "lastName",
              "mobileNumber",
              "email",
              "memberShipId",
              "pincode",
          ],
      });
  } else if (req.query.firstName) {
      fliter = { firstName: req.query.firstName };

      //district
      result = await UserLogin.findAll({
          where: fliter,
          attributes: [
              "firstName",
              "lastName",
              "mobileNumber",
              "email",
              "memberShipId",
              "pincode",
          ],
          group: [
              "firstName",
              "lastName",
              "mobileNumber",
              "email",
              "memberShipId",
              "pincode",
          ],
      });
  } else if (req.query. memberShipId) {
      fliter = {  memberShipId: req.query. memberShipId };

      //district
      result = await UserLogin.findAll({
          where: fliter,
          attributes: [
              "firstName",
              "lastName",
              "mobileNumber",
              "email",
              "memberShipId",
              "pincode",
          ],
          group: [
              "firstName",
              "lastName",
              "mobileNumber",
              "email",
              "memberShipId",
              "pincode",
          ],
      });
  }
  //firstName
  try {
    res.status(200).json(result);
  } catch {
    res.status(500).json({
      message: "Error getting not found",
      status: 500,
    });
  }
};
