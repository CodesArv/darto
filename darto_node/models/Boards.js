  
module.exports = (sequelize, Sequelize) => {
  const Board = sequelize.define("boards", {
      image: {
          type: Sequelize.STRING,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      email: {
          type: Sequelize.STRING,
      },
      city: {
          type: Sequelize.STRING,
      },
      state: {
          type: Sequelize.STRING,
      },
      country: {
          type: Sequelize.STRING,
      },
      pincode: {
          type: Sequelize.INTEGER,
      },
      district: {
          type: Sequelize.STRING,
      },
      name: {
          type: Sequelize.STRING,
      },
  });

  return Board;
};

       