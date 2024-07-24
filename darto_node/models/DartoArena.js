module.exports = (sequelize, Sequelize) => {
  const DartoArena = sequelize.define("DartoArena", {
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      name: { type: Sequelize.STRING },
      subtitle: { type: Sequelize.STRING },
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
      typeOfPlace: {
          type: Sequelize.STRING,
      },
      date: {
          type: Sequelize.DATE,
      },
      WorkingHours: {
          type: Sequelize.DATE,
      },
      Time: {
          type: Sequelize.DATE,
      },
      ReserveSpace: {
          type: Sequelize.STRING,
      },
      fandBOther: {
          type: Sequelize.STRING,
      },

      bookingRange: {
          type: Sequelize.INTEGER,
      },
      mobilenumber: {
          type: Sequelize.INTEGER,
      },
      email: {
          type: Sequelize.STRING,
      },
  });

  return DartoArena;
};


