module.exports = (sequelize, Sequelize) => {
  const HomePage = sequelize.define("HomePage", {
      name: { type: Sequelize.STRING },
      description: {
          type: Sequelize.STRING,
      },
      image: {
          type: Sequelize.STRING,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      orderNo: {
          type: Sequelize.INTEGER,
      },
  });

  return HomePage;
};

