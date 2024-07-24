
const db = require("../models");
const ExchangeDb = db.Team;


module.exports.createExchnage  = async (req, res) => {
    const ExchangeDb = req.body.type === 'team' ? db.Team : req.body.type === 'tournament' ? db.Tournament : null;
    try {
      console.log("jvv");
        await ExchangeDb.create(req.body);
        res.status(201).json({
            message: "Exchange Created",
        });
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// module.exports.createExchnage = async (req, res) => {
//     const ExchangeDb = req.body.type === 'team' ? db.Team : req.body.type === 'tournament' ? db.Tournament : null;
//     if (ExchangeDb) {
//     // run loop for req.body.data
//     const result = await ExchangeDb.create
//         return ExchangeDb.create(req.body)
//             .then((docRef) => {
//                 return res.status(201).json({
//                     message: "Exchnage Created Successfully.",
//                     status: 200,
//                     result: docRef,
//                 });
//             })
//             .catch((error) => {
//                 return res.status(500).json({ error: error, status: 500 });
//             });
//     } 
    
// };











