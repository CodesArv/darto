module.exports = (sequelize, Sequelize) => {
  const TeamMatch = sequelize.define("TeamMatch", {
      coach_id: {
          type: Sequelize.INTEGER,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      matchStatus: {
          type: Sequelize.ENUM("ACTIVE", "COMPLETE"),
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
      totalLeg: {
          type: Sequelize.INTEGER,
      },
      totalSet: {
          type: Sequelize.INTEGER,
      },
      gameType: {
          type: Sequelize.STRING,
      },
      startDate: {
          type: Sequelize.DATE,
      },
      coachName: {
          type: Sequelize.STRING,
      },
      gameMode: {
          type: Sequelize.STRING,
      },
      startPoint: {
          type: Sequelize.STRING,
      },
      checkOut: {
          type: Sequelize.STRING,
      },
  });

  return TeamMatch;
};
