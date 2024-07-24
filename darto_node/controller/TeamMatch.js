const db = require("../models");
const moment = require("moment");
const TeamMatch = db.TeamMatch;
const MatchScore = db.MatchScore;
const Scores = db.Score;
const UserLogin = db.UserLogin;
const Op = db.Sequelize.Op;

module.exports.getTeamMatch = async (req, res) => {
    try {
        const TeamMatchs = await TeamMatch.findAll();
        res.status(201).json(
            TeamMatchs
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.getTeamMatchid = async (req, res) => {
    try {
        const teamMatch = await TeamMatch.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ response: teamMatch[0] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
 
module.exports.createTeamMatch = async (req, res) => {
    const {
        coach_id,
        coachName,
        totalLeg,
        totalSet,
        gameType,
        startDate,
        gameMode,
        startPoint,
        checkOut,
        player1_id,
        player2_id,
        player1Name,
        player2Name,
    } = req.body;
     let matchStatus = "ACTIVE";
    try {
      console.log("jvv");
       const result = await TeamMatch.create({
           coach_id,
           coachName,
           totalLeg,
           totalSet,
           gameType,
           startDate,
           gameMode,
           startPoint,
           checkOut,
           player1_id,
           player2_id,
           player1Name,
           player2Name,
           matchStatus,
       });
       console.log("fff",result)
        res.status(201).json(result);
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.gettemMatchsearch = async (req, res) => {
    console.log("liststate", req.query);
    let filter = req.query.id ? { id: req.query.id } : {};
    try {
        const resultTeamMatch = await TeamMatch.findAll({
            where: filter,
        });
        res.status(200).json({
            resultTeamMatch,
        });
    } catch {
        res.status(500).json({
            message: "Error getting not found",
            status: 500,
        });
    }
};
module.exports.getMatchList = async (req, res) => {
     let matchList =[];
     const fliter ={};
    console.log("last10days", req.query);
    MatchScore.hasMany(TeamMatch, { foreignKey: "id" });
    TeamMatch.belongsTo(MatchScore, {
        foreignKey: "id",
        targetKey: "teamMatch_id",
    });
     try {
        //   if (req.query.matchStatus === "COMPLETE") {
    //   fliter = { matchStatus: req.query.matchStatus === "COMPLETE" };
         const result = await TeamMatch.findAndCountAll({
              include: [
                  {
                      model: MatchScore,
                      required: true,
                  },
              ],
              where: {
                //   matchStatus: { [Op.eq]: "COMPLETE" },
                  
                  startDate: {
                      [Op.gte]: moment().subtract(10, "days").toDate(),
                  },
              },
            //   raw: true,
          });
          let list = result.rows.filter((a) =>
              a.matchStatus === "COMPLETE");
               let completelist = result.rows.filter(
                   (a) => a.matchStatus === "ACTIVE"
               );
            matchList = [...completelist,...list ];
        //   if()
        console.log("ff", matchList);
      
        // let response = [];
        // teamMatch &&
        //     teamMatch.rows &&
        //     teamMatch.rows.map((match) => {
        //         console.log("match :",match.get())
        //         let player1Name =
        //             match &&
        //             match.TeamMatch &&
        //             match.TeamMatch.dataValues &&
        //             match.TeamMatch.dataValues.matchscore &&
        //             match.TeamMatch.dataValues.matchscore.dataValues[0] &&
        //             match.TeamMatch.dataValues.matchscore.dataValues[0].player1Name ?match.TeamMatch.dataValues.matchscore.dataValues[0].player1Name :"";
        //             console.log("player1name :",match &&
        //             match.TeamMatch &&
        //             match.TeamMatch.dataValues &&
        //             match.TeamMatch.dataValues.matchscores)
        //             // match.matchscore &&
        //             // match.matchscore[0] &&
        //             // match.matchscore[0].player1Name
        //             //     ? match.matchscore[0].player1Name
        //             //     : "";
        //         let player2Name =
        //             match &&
        //             match.TeamMatch &&
        //             match.TeamMatch.dataValues &&
        //             match.TeamMatch.dataValues.matchscore &&
        //             match.TeamMatch.dataValues.matchscore.dataValues[0] &&
        //             match.TeamMatch.dataValues.matchscore.dataValues[0]
        //                 .player2Name
        //                 ? match.TeamMatch.dataValues.matchscore.dataValues[0]
        //                       .player2Name
        //                 : "";
        //             // match.matchscore &&
        //             // match.matchscore[0] &&
        //             // match.matchscore[0].player2Name
        //             //     ? match.matchscore[0].player2Name
        //             //     : "";
        //         let player1_id =
        //             match &&
        //             match.TeamMatch &&
        //             match.TeamMatch.dataValues &&
        //             match.TeamMatch.dataValues.matchscore &&
        //             match.TeamMatch.dataValues.matchscore.dataValues[0] &&
        //             match.TeamMatch.dataValues.matchscore.dataValues[0]
        //                 .player1_id
        //                 ? match.TeamMatch.dataValues.matchscore.dataValues[0]
        //                       .player1_id
        //                 : "";
        //             // match.matchscore &&
        //             // match.matchscore[0] &&
        //             // match.matchscore[0].player1_id
        //             //     ? match.matchscore[0].player1_id
        //             //     : "";
        //         let player2_id =
        //             match &&
        //             match.TeamMatch &&
        //             match.TeamMatch.dataValues &&
        //             match.TeamMatch.dataValues.matchscore &&
        //             match.TeamMatch.dataValues.matchscore.dataValues[0] &&
        //             match.TeamMatch.dataValues.matchscore.dataValues[0]
        //                 .player2_id
        //                 ? match.TeamMatch.dataValues.matchscore.dataValues[0]
        //                       .player2_id
        //                 : "";
        //             // match.matchscore &&
        //             // match.matchscore[0] &&
        //             // match.matchscore[0].player2_id
        //             //     ? match.matchscore[0].player2_id
        //             //     : "";

        //         let p1AvgList = [];
        //         let p2AvgList = [];
        //         let setStatus = {};
        //         match &&
        //             match.TeamMatch &&
        //             match.TeamMatch.dataValues &&
        //             match.TeamMatch.dataValues.matchscore &&
        //             match.TeamMatch.dataValues.matchscore.dataValues.forEach(
        //                 (score) => {
        //                     console.log("score",score);
        //                     p1AvgList.push(
        //                         score.p1Scores.reduce(function (p, c, i, a) {
        //                             return p + c / a.length;
        //                         }, 0)
        //                     );
        //                     p2AvgList.push(
        //                         score.p2Scores.reduce(function (p, c, i, a) {
        //                             return p + c / a.length;
        //                         }, 0)
        //                     );
        //                     if (setStatus[score.set]) {
        //                         setStatus[score.set][score.leg] = score.winner;
        //                     } else {
        //                         setStatus[score.set] = {
        //                             [score.leg]: score.winner,
        //                         };
        //                     }
        //                 }
        //             );
        //         const player1AverageScore = p1AvgList.reduce(function (
        //             p,
        //             c,
        //             i,
        //             a
        //         ) {
        //             return p + c / a.length;
        //         },
        //         0);
        //         const player2AverageScore = p2AvgList.reduce(function (
        //             p,
        //             c,
        //             i,
        //             a
        //         ) {
        //             return p + c / a.length;
        //         },
        //         0);
        //         let setPlayer1 = 0;
        //         let setPlayer2 = 0;
        //         console.log("Set Status - ", setStatus);
        //         Object.keys(setStatus).forEach((s) => {
        //             let p1Win = 0,
        //                 p2Win = 0;
        //             Object.keys(setStatus[s]).forEach((l) => {
        //                 if (setStatus[s][l] === "P1") p1Win++;
        //                 else if (setStatus[s][l] === "P2") p2Win++;
        //             });
        //             if (p1Win > p2Win) setPlayer1++;
        //             else setPlayer2++;
        //         });
        //         return {
        //             id: match.id,
        //             startDate: match.startDate,
        //             player1Name,
        //             player2Name,
        //             player1_id,
        //             player2_id,
        //             player1AverageScore,
        //             player2AverageScore,
        //             setPlayer1,
        //             setPlayer2,
        //         };
        //     });
        res.status(200).json(matchList);
     } catch (error) {
         res.status(500).json({ message: error.message });
     }
};
//getmatchbyid
module.exports.getMatchListbyid = async (req, res) => {
    console.log("last10days", req.query);
    MatchScore.hasMany(TeamMatch, { foreignKey: "id" });
    TeamMatch.belongsTo(MatchScore, {
        foreignKey: "id",
        targetKey: "teamMatch_id",
    });
    try {
        const teamMatch = await TeamMatch.findAll({
            include: [
                {
                    model: MatchScore,
                    required: true,
                },
            ],
            where: {
                id : req.params.id,
            },
        });
        console.log("ff", teamMatch);
        res.status(200).json(teamMatch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.updateTeamMatch = async (req, res) => {
    let id= req.body.id;
    let matchStatus= "COMPLETE";
    try {
      const result=  await TeamMatch.update({id,matchStatus}, {
            where: {
                id: req.params.id,
            },
        });
          
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.getautoComplete = async (req, res) => {
    let result = [];
    let group = {};
    var now = new Date();
    let updateAtscore={};
     // Sun Jan 22 2017 17:12:18 GMT+0200 ...
     var olderDate = moment(now).subtract(10, "minutes").toDate();
    //  const dtfUK = new Intl.DateTimeFormat("UK", {
    //      year: "numeric",
    //      month: "2-digit",
    //      day: "2-digit",
    //      hour: "2-digit",
    //      minute: "2-digit",
    //      second: "2-digit",
    //  }); //
    //  let mysqldateFormate = dtfUK.format(olderDate);
     console.log("formatedate :", olderDate);
    MatchScore.hasMany(TeamMatch, { foreignKey: "id" });
    TeamMatch.belongsTo(MatchScore, {
        foreignKey: "id",
        targetKey: "teamMatch_id",
    });
    try {
        result = await TeamMatch.findAll({
            include: [
                {
                    model: MatchScore,
                    required: true,
                    
                },    
            ],
            // where: {
            //     matchStatus: req.params.matchStatus,
            // },
            // order: [["updatedAt", "DESC"]],
            // raw: true,
            // attributes: [attribute],
            // group: [attribute],
            //  plain: false,
        });
        let list = result.filter((a) => a.matchStatus === "ACTIVE");
        list &&
            list.forEach((row) => {
                if (group[row.id]) {group[row.id] = [...group[row.id], row];}
                else group[row.id] = [row];
            });
        console.log("result :", group);
        Object.keys(group).forEach(async(grp) => {
             console.log(group[grp]);
             let lastDate = moment(0);
             let lastScore = {}; 
             group[grp].forEach(row => {
                 console.log(
                     "row   ",
                     row,
                     moment(row.matchscore.updatedAt).format(
                         "MM-DD-YYYY hh:mm:ss"
                     )
                 );
                 if (
                     moment(row.matchscore.updatedAt).format(
                         "MM-DD-YYYY hh:mm:ss"
                     ) > lastDate
                 ) {
                     lastDate = moment(row.matchscore.updatedAt).format(
                         "MM-DD-YYYY hh:mm:ss"
                     );
                     lastScore = row;
                 }
             });
            //  updateAtscore[grp.matchscore.updatedAt] = [
            //      ...updateAtscore[grp.matchscore.updatedAt]
            //  ];
            console.log("date:",lastDate, lastScore);
            if (!lastScore.matchscore)
            
            {
               return;
                // return res.status(200).json({ message: "No record Found" });
            }
            if (olderDate > lastDate) {
                    // Mark Complete
                    // if (!lastScore.matchscore) {
                        console.log(
                            "lastScore.matchscore",
                            lastScore.matchscore.teamMatch_id
                        );
                        let id = lastScore.matchscore.teamMatch_id;
                        let matchStatus = "COMPLETE";
                        const response = await TeamMatch.update(
                            { id, matchStatus },
                            {
                                where: {
                                    id: lastScore.matchscore.teamMatch_id,
                                },
                            }
                        );
                        // return res.status(200).json(response);
                        console.log("response :", response);
                    // } else {
                    //     return res
                    //         .status(200)
                    //         .json({ message: "No record Found" });
                    // }
                } else {
                    console.log("Not Complete Match" );
                //     return res
                //         .status(401)
                //         .json({ message: "Not Complete Match" });
                 }
        });
     
         
    } catch {
        console.log("Error getting not found");
        // res.status(500).json({
        //     message: "Error getting not found",
        //     status: 500,
        // });
    }

    
};
module.exports.deleteTeamMatch = async (req, res) => {
    try {
        await TeamMatch.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: "TeamMatch Deleted",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

    
module.exports.UpdateMatchScore = async (req, res) => {
    const {
        teamMatch_id,
        p1NoOfDart,
        p2NoOfDart,
        player1_id,
        player2_id,
        player1Name,
        player2Name,
        winner,
        leg,
        set,
        p1SetWinner,
        p1LegWinner,
        p2SetWinner,
        p2LegWinner,
        num1,
        p1s1,
        p1s2,
        p1s3,
        p2s1,
        p2s2,
        p2s3,
        p1Score,
        p2Score,
        gameType,
        totalSet,
        totalLeg,
        p1Max,
        p2Max,
        firstPlayerSelected,
    } = req.body;
     let p1Scores = req.body.p1Scores.join(",");
     let p2Scores = req.body.p2Scores.join(",");
     let legStatus = JSON.stringify(req.body.legStatus);
     let setsStatus = JSON.stringify(req.body.setsStatus);
    try {
        console.log("jvv");
         const score = await TeamMatch.findAll({
             //  limit: 1,
             where: {
                 id: teamMatch_id,
             },
             //  order: [["updatedAt", "DESC"]],
         });
         console.log("fjf :", score[0]);
         if (score[0].matchStatus === "COMPLETE") {
             return res.status(403).json({
                 message: "complete Match",
                 status: 403,
             });
         }
        const result = await MatchScore.create({
            teamMatch_id: teamMatch_id,
            player1_id: player1_id,
            player2_id: player2_id,
            leg: leg,
            set: set,
            p1NoOfDart,
            p2NoOfDart,
            player1Name,
            player2Name,
            winner,
            p1Scores,
            p2Scores,
            p1SetWinner,
            p1LegWinner,
            p2SetWinner,
            p2LegWinner,
            num1,
            p1s1,
            p1s2,
            p1s3,
            p2s1,
            p2s2,
            p2s3,
            p1Max,
            p2Max,
            legStatus,
            setsStatus,
            p1Score,
            p2Score,
            gameType,
            totalSet,
            totalLeg,
            firstPlayerSelected,
        });
        console.log('Result - ', result);
        res.status(201).json(
            result
        );
        console.log("jjj");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.updateScore = async (req, res) => {
    const {
        teamMatch_id,
        p1NoOfDart,
        p2NoOfDart,
        player1_id,
        player2_id,
        player1Name,
        player2Name,
        winner,
        leg,
        set,
        p1SetWinner,
        p1LegWinner,
        p2SetWinner,
        p2LegWinner,
        num1,
        p1s1,
        p1s2,
        p1s3,
        p2s1,
        p2s2,
        p2s3,
        p1Score,
        p2Score,
        p1Max,
        p2Max,
        gameType,
        totalSet,
        totalLeg,
        firstPlayerSelected,
    } = req.body;
    let p1Scores = req.body.p1Scores.join(",");
    let p2Scores = req.body.p2Scores.join(",");
    let legStatus = JSON.stringify(req.body.legStatus);
    let setsStatus = JSON.stringify(req.body.setsStatus);
    try {
         const score = await TeamMatch.findAll({
             //  limit: 1,
             where: {
                 id: teamMatch_id,
             },
             //  order: [["updatedAt", "DESC"]],
         });
         console.log("fjf :", score[0]);
         if(score[0].matchStatus ==="COMPLETE"){
             return res.status(403).json({
                 message: "complete Match",
                 status: 403,
             });
         }
      const result = await MatchScore.update(
          {
              teamMatch_id: teamMatch_id,
              player1_id: player1_id,
              player2_id: player2_id,
              leg: leg,
              set: set,
              p1NoOfDart,
              p2NoOfDart,
              player1Name,
              player2Name,
              winner,
              p1Scores,
              p2Scores,
              p1SetWinner,
              p1LegWinner,
              p2SetWinner,
              p2LegWinner,
              num1,
              p1s1,
              p1s2,
              p1s3,
              p2s1,
              p2s2,
              p2s3,
              p1Max,
              p2Max,
              legStatus,
              setsStatus,
              p1Score,
              p2Score,
              gameType,
              totalSet,
              totalLeg,
              firstPlayerSelected,
          },
          {
              where: {
                  id: req.params.id,
              },
          }
      );
        res.status(200).json({
            message: "TeamAdmin Updated",
            status: 200,
            result,
        });
    } catch (error) {
        res.status(500).json({ message: error.message ,status:500});
    }
   
};
module.exports.getMatchScore = async (req, res) => {
    try {
        const score = await MatchScore.findAll({
            
        });
        res.status(201).json(score);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.getActivePlayer = async (req, res) => {
    try {
        const result = await TeamMatch.findAll({
            where: {
                [Op.or]: [
                    {
                        player1_id: {
                            [Op.like]: `%${req.query.id}%`,
                        },
                    },
                    {
                        player2_id: {
                            [Op.like]: `%${req.query.id}%`,
                        },
                    },
                ],
            },
            raw:true,
            
        });
        console.log("kgkg",result);
         let list = result.filter((a) => a.matchStatus === "ACTIVE");
         console.log("ffkk",list[0]);
       if(list.length>0){
            
           return res.status(201).json({...list[0], activePlayer: true});
       }
       else{
            return res.status(201).json({activePlayer: false} );
       }
        // res.status(201).json(score);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.getlatestScore = async (req, res) => {
    try {
         
        const score = await MatchScore.findAll({
            limit: 1,
            where: {
                teamMatch_id: req.params.teamMatch_id,
            },
            order: [["updatedAt", "DESC"]],
        });
        console.log("fjf :", score[0]);
        const match = await TeamMatch.findAll({
            //  limit: 1,
            where: {
                id: score[0].teamMatch_id,
            },
            //  order: [["updatedAt", "DESC"]],
        });
        console.log("fjf :", match[0]);
        if (match[0].matchStatus === "COMPLETE") {
            return res.status(403).json({
                message: "complete Match",
                status: 403,
            });
        }
        // let MatchScoreList = MatchScore.sort((a, b) =>
        //     a.updatedAt > b.updatedAt ? 1 : -1
        // );
        //  let list = MatchScore.filter((a) => a.updatedAt);

        res.status(201).json(score[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.getHistoryScore = async (req, res) => {
    try {
        const score = await MatchScore.findAll({
            limit: 1,
            where: {
                teamMatch_id: req.params.teamMatch_id,
            },
            order: [["updatedAt", "DESC"]],
        });
        console.log("fjf :", score[0]);
        res.status(201).json(score[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.getPlayer = async (req, res) => {
      console.log("playerid");
    console.log("playerid", req.query);
    let result = [];
    // let fliter = {};
    // let attribute = "";
    // if (req.query.player) {
    //     fliter = { player1_id: req.query.player };
    //     attribute = "matchStatus";
        //district
        result = await TeamMatch.findAll({
            where: {
                [Op.or]: [
                    {
                        player1_id: {
                            [Op.like]: `%${req.query.id}%`,
                        },
                    },
                    {
                        player2_id: {
                            [Op.like]: `%${req.query.id}%`,
                        },
                    },
                ],
            },
            raw:true,
            attributes: [
                "player1_id",
                "player2_id",
                "player1Name",
                "player2Name",
                "matchStatus",
               
            ],
        });
         let list = result.filter((a) => a.matchStatus === "ACTIVE");
        console.log("jjggj", list);
    try {
        res.status(200).json(list);
    } catch {
        res.status(500).json({
            message: "Error getting not found",
            status: 500,
        });
    }
};
module.exports.getPullScore = async (req, res) => {
    try {
        const MatchScore = await MatchScore.findAll({
            where: {
                matchStatus: req.params.matchStatus,
            },
        });
        res.status(201).json(MatchScore);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.getActiveAndComplete = async (req, res) => {
    let result = [];
         MatchScore.hasMany(TeamMatch, { foreignKey: "id" });
         TeamMatch.belongsTo(MatchScore, {
             foreignKey: "id",
             targetKey: "teamMatch_id",
         });
          try {
        result = await TeamMatch.findAll({
            include: [
                {
                    model: MatchScore,
                    required: true,
                },
            ],
            where: {
                matchStatus: req.params.matchStatus,
            },
            raw :true,
        });
        console.log("result",result);
        // if()
        
     
   
        res.status(200).json(result);
    } catch {
        res.status(500).json({
            message: "Error getting not found",
            status: 500,
        });
    }
      
    
 };