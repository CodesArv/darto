const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const https = require("https");
const fs = require("fs");
const multer = require("multer");
const scoreComplete = require("././controller/TeamMatch");
const app = express();
const cookieParser = require("cookie-parser");
const tournamentRouter = require("./routes/Tournament");
const tournamentOverViewRouter = require("./routes/TournamentOverview");
// const userRouter = require("./routes/users");
//const userProfileRouter = require("./routes/UserProfile");
const DartoProfile = require("./routes/DartoProfile");
const DartoArena = require("./routes/DartoArena");
const EventGallery = require("./routes/EventGallery");
const MyTeam = require("./routes/myTeam");
const HomePage = require("./routes/HomePage");
const Centers = require("./routes/Centers");
const userClub = require("./routes/clubUser");
// const Admin = require("./routes/Admin");
const tournamentAdmin = require("./routes/TournamentAdmin");
const teamAdmin = require("./routes/TeamAdmin");
const club = require("./routes/Club");
const Country = require("./routes/Country");
const centerAdmin = require("./routes/CentersAdmin");
const state = require("./routes/State");
const participate = require("./routes/Participate");
const teamMatch = require("./routes/TeamMatch");
const user = require("./routes/users");
// const uploadFile = require("./routes/Upload");
// const footer = require("./routes/Footer");
const slider = require("./routes/Slider");
const contactUs = require("./routes/ContactUs");
const partner = require("./routes/Partner");
const board = require("./routes/Board");

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.get(
  var start = Date.now();
    setTimeout(() => {
        console.log(Date.now() - start);
        scoreComplete.getautoComplete();
    }, 90000);
// );
const db = require("./models");
db.sequelize.sync();

app.use(express.static(path.join(__dirname, "../Client/build")));
//app.use(express.static(path.join(__dirname, "./assets/Slider")));
app.get("/", cors(), function (req, res) {
  console.log("servername", __dirname);
  res.sendFile(path.join(__dirname, "../Client/build", "index.html"));
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    console.log("type: ", req.query.type);
    cb(null, "upload/" + req.query.type);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});
const maxSize = 1 * 1000 * 1000;
var upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    // Set the filetypes, it is optional
    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },

  // mypic is the name of file attribute
}).single("file");
app.use("/upload", express.static("upload"));

app.post("/api/v1/uploadPhoto", function (req, res, next) {
  const type = req.query.type;
  console.log(req.query.type);
  upload(req, res, function (err, fileName) {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log("fileName :", req.file);
      res.status(200).send({
        message: "Uploaded the file successfully: ",
        name: "upload/" + type + "/" + req.file.filename,
      });
      // SUCCESS, image successfully uploaded
    }
  });
});
app.use("/api/v1/user/club", userClub);
app.use("/api/v1/tournament/overview", tournamentOverViewRouter);
//app.use("/api/v1/user/profile", userProfileRouter);
app.use("/api/v1/user/participate", participate);
app.use("/api/v1/darto/profile", DartoProfile);
app.use("/api/v1/darto/arena", DartoArena);
app.use("/api/v1/event/gallery", EventGallery);

app.use("/api/v1/state", state);
// app.use("/api/v1/ExchangeDb", ExchangeDb);
// app.use("/api/v1/file", uploadFile);
// app.use("/footer/user", footeruser);
// app.use("/api/v1/footer", footer);
// app.use("/api/v1/admin/user", Admin);
app.use("/api/v1/admin/tournament", tournamentAdmin);
// app.use("/team", teamsRoute);

app.use("/api/v1/admin/team", teamAdmin);
app.use("/api/v1/user/team", MyTeam);
app.use("/api/v1/admin/club", club);
app.use("/api/v1/Country", Country);
app.use("/api/v1/admin/centers", centerAdmin);
app.use("/api/v1/center", Centers);
app.use("/api/v1/team/match", teamMatch);
app.use("/api/v1/users", user);
// app.use("/api/v1/user", userRouter);
app.use("/api/v1/home", HomePage);
app.use("/api/v1/tournament", tournamentRouter);
app.use("/api/v1/slider", slider);
app.use("/api/v1/contactUs", contactUs);
app.use("/api/v1/board", board);
//partner
app.use("/api/v1/partner", partner);
app.listen( () => {
  console.log("express server started");
});
// const options = {
//   key: fs.readFileSync('config/privkey.pem'),
//   cert: fs.readFileSync('config/cert.pem')
// };
// https.createServer(options, app).listen(9000);
