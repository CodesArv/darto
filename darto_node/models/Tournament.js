module.exports = (sequelize, Sequelize) => {
  const Tournament = sequelize.define("Tournament", {
      name: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      image: {
          type: Sequelize.STRING,
      },
      gender: {
          type: Sequelize.STRING,
      },
      dartType: {
          type: Sequelize.STRING,
      },
      comingfeild: {
          type: Sequelize.STRING,
      },
      checkList: {
          type: Sequelize.STRING,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      fromDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      toDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      houseNumber: {
          type: Sequelize.STRING,
      },
      street: {
          type: Sequelize.STRING,
      },
      locality: {
          type: Sequelize.STRING,
      },
      postOffice: {
          type: Sequelize.STRING,
      },
      city: {
          type: Sequelize.STRING,
      },
      state: {
          type: Sequelize.STRING,
      },
      district: {
          type: Sequelize.STRING,
      },
      pincode: {
          type: Sequelize.INTEGER,
      },
      country: {
          type: Sequelize.STRING,
      },

      matches: {
          type: Sequelize.STRING,
      },
      feeperentry: {
          type: Sequelize.STRING,
      },
      gamehours: {
          type: Sequelize.INTEGER,
      },
      gameFormate: {
          type: Sequelize.STRING,
      },
      age: {
          type: Sequelize.STRING,
      },
      mode: {
          type: Sequelize.STRING,
      },
      category: {
          type: Sequelize.STRING,
      },
      tournamentType: {
          type: Sequelize.STRING,
      },
      mobileNumber: {
          type: Sequelize.TEXT,
      },
      email: {
          type: Sequelize.STRING,
      },
  });

  return Tournament;
};
