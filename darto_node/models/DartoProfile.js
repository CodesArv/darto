module.exports = (sequelize, Sequelize) => {
  const DartoProfile = sequelize.define("DartoProfile", {
      age: { type: Sequelize.STRING },

      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      rank: { type: Sequelize.INTEGER },
      score: {
          type: Sequelize.INTEGER,
      },
      totalmatch: {
          type: Sequelize.INTEGER,
      },

      steeltip: {
          type: Sequelize.STRING,
      },
      dartoBrandName: {
          type: Sequelize.STRING,
      },
      other: {
          type: Sequelize.STRING,
      },
      target: {
          type: Sequelize.STRING,
      },
      userId: {
          type: Sequelize.INTEGER,
          unique: true,
      },
      dartDetail: {
          type: Sequelize.STRING,
      },
      weight: {
          type: Sequelize.STRING,
      },
      length: {
          type: Sequelize.STRING,
      },
      size: {
          type: Sequelize.STRING,
      },

      skilllevel: {
          type: Sequelize.STRING,
      },

      tournamentName: {
          type: Sequelize.STRING,
      },
      winner: {
          type: Sequelize.STRING,
      },
      date: {
          type: Sequelize.DATE,
      },
  });

  return DartoProfile;
};


