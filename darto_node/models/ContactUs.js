 
module.exports = (sequelize, Sequelize) => {
  const ContactUs = sequelize.define("ListSpace", {
      mode: {
          type: Sequelize.STRING,
      },
      typeEstablishment: {
          type: Sequelize.STRING,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      nameEstablishment: {
          type: Sequelize.STRING,
      },
      ownership: {
          type: Sequelize.STRING,
      },
      picturesSpace: {
          type: Sequelize.STRING,
      },
      shareLink: {
          type: Sequelize.STRING,
      },
      address: {
          type: Sequelize.STRING,
      },
      state: {
          type: Sequelize.STRING,
      },
      city: {
          type: Sequelize.STRING,
      },
      district: {
          type: Sequelize.STRING,
      },
      pinCode: {
          type: Sequelize.INTEGER,
      },
      offer: {
          type: Sequelize.STRING,
      },
      firstName: {
          type: Sequelize.STRING,
      },
      lastname: {
          type: Sequelize.STRING,
      },
      mobileNumber: {
          type: Sequelize.TEXT,
      },
      alternatemobilenumber: {
          type: Sequelize.TEXT,
      },
      email: {
          type: Sequelize.STRING,
      },
  });

  return ContactUs;
};

