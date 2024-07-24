module.exports = (sequelize, Sequelize) => {
  const Footer = sequelize.define("Footer", {
      category: {
          type: Sequelize.STRING,
      },
      name: {
          type: Sequelize.STRING,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      url: {
          type: Sequelize.STRING,
      },
      content: {
          type: Sequelize.STRING,
      },
  });

  return Footer;
};

