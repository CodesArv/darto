module.exports = (sequelize, Sequelize) => {
  const MatchScore = sequelize.define("matchscores", {
      teamMatch_id: {
          type: Sequelize.INTEGER,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      player1_id: {
          type: Sequelize.INTEGER,
      },
      player2_id: {
          type: Sequelize.INTEGER,
      },
      player1Name: {
          type: Sequelize.STRING,
      },
      player2Name: {
          type: Sequelize.STRING,
      },
      winner: {
          type: Sequelize.ENUM("P1", "P2"),
      },
      leg: {
          type: Sequelize.INTEGER,
      },
      set: {
          type: Sequelize.INTEGER,
      },
      p1NoOfDart: {
          type: Sequelize.INTEGER,
      },
      p2NoOfDart: {
          type: Sequelize.INTEGER,
      },

      p1Scores: {
          type: Sequelize.STRING,
          allowNull: false,
          get() {
              return this.getDataValue("p1Scores").split(",");
          },
      },
      p2Scores: {
          type: Sequelize.STRING,
          allowNull: false,
          get() {
              return this.getDataValue("p2Scores").split(",");
          },
      },
      p1SetWinner: {
          type: Sequelize.STRING,
      },
      p1LegWinner: {
          type: Sequelize.STRING,
      },
      p2SetWinner: {
          type: Sequelize.STRING,
      },
      p2LegWinner: {
          type: Sequelize.STRING,
      },
      firstPlayerSelected: {
          type: Sequelize.BOOLEAN,
          defaultValue: true,
      },
      gameType: {
          type: Sequelize.STRING,
      },
      totalSet: {
          type: Sequelize.STRING,
      },
      totalLeg: {
          type: Sequelize.STRING,
      },

      p1Max: {
          type: Sequelize.INTEGER,
      },
      p2Max: {
          type: Sequelize.INTEGER,
      },
      num1: {
          type: Sequelize.INTEGER,
      },
      p1Score: {
          type: Sequelize.INTEGER,
      },
      p2Score: {
          type: Sequelize.INTEGER,
      },
      p1s1: {
          type: Sequelize.STRING,
      },
      p1s2: {
          type: Sequelize.STRING,
      },
      p1s3: {
          type: Sequelize.STRING,
      },
      p2s1: {
          type: Sequelize.STRING,
      },
      p2s2: {
          type: Sequelize.STRING,
      },
      p2s3: {
          type: Sequelize.STRING,
      },
      legStatus: {
          type: Sequelize.STRING,
          //   allowNull: false,
          get() {
              return this.getDataValue("legStatus");
          },
      },
      setsStatus: {
          type: Sequelize.STRING,
          //   allowNull: false,
          get() {
              return this.getDataValue("setsStatus");
          },
      },
  });

  return MatchScore;
};
