const express = require("express");
const router = express.Router();
const ctrlState = require("../controller/State");

router.post("/create", ctrlState.createState);
// router.post("/create/stateList", ctrlState.createStateList);
// //createCountryList
// router.post("/create/countryList", ctrlState.createCountryList);
// //getCountryList
// router.get("/get/countryList", ctrlState.getCountryList);
// //getTeamandClubStateList
 router.get("/get/teamAndClub", ctrlState.getTeamandClubStateList);
 router.get("/get/boardList", ctrlState.getboardList);
router.get("/get", ctrlState.getState);
// router.get("/get/stateList")
 router.get("/get/list", ctrlState.getCoutryStateList);
 router.get("/get/search", ctrlState.getAutoList);
 router.get("/get/findbycategory", ctrlState.gettournmentList);
 router.post("/create/pincode", ctrlState.createPincode);
 router.post("/create/district", ctrlState.createdistrict);
 router.post("/create/city", ctrlState.createcity);
// router.get("/get/districtList", ctrlState.getdistrictList);
router.get("/get/:id", ctrlState.getStateid);
router.put("/update/:id", ctrlState.updateState);
router.delete("/delete/:id", ctrlState.deleteState);

module.exports = router;
