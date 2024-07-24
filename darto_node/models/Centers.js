
module.exports = (sequelize, Sequelize) => {
  const Centers = sequelize.define("Centers", {
      name: { type: Sequelize.STRING },
      description: {
          type: Sequelize.STRING,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      image: {
          type: Sequelize.STRING,
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

      KmAway: {
          type: Sequelize.STRING,
      },
      FromWorkingHours: {
          type: Sequelize.STRING,
      },
      ToWorkingHours: {
          type: Sequelize.STRING,
      },
      bookingCharges: {
          type: Sequelize.INTEGER,
      },
      FandBOthers: {
          type: Sequelize.STRING,
      },
      mertoConnectivity: {
          type: Sequelize.STRING,
      },

      mobilenumber: {
          type: Sequelize.TEXT,
      },
      email: {
          type: Sequelize.STRING,
      },
      about: {
          type: Sequelize.STRING,
      },
  });

  return Centers;
};
