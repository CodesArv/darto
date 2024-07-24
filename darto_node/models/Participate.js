
module.exports = (sequelize, Sequelize) => {
  const Participate = sequelize.define("Participate", {
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      name: {
          type: Sequelize.STRING,
      },
      email: {
          type: Sequelize.STRING,
      },
      mobileNumber: {
          type: Sequelize.INTEGER,
      },
      altmobileNumber: {
          type: Sequelize.INTEGER,
      },
  });

  return Participate;
};



