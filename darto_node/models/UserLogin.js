module.exports = (sequelize, Sequelize) => {
  const UserLogin = sequelize.define("Users", {
      firebaseId: {
          type: Sequelize.STRING,
      },
      firstName: {
          type: Sequelize.STRING,
      },
      lastName: {
          type: Sequelize.STRING,
      },
      mobileNumber: {
          type: Sequelize.TEXT,
      },
      email: {
          type: Sequelize.STRING,
      },
      password: {
          type: Sequelize.STRING,
      },
      role: {
          type: Sequelize.STRING,
      },
      gender: {
          type: Sequelize.STRING,
      },

      middleName: {
          type: Sequelize.STRING,
      },
      isPaidCustomer: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
      },
      tagName: {
          type: Sequelize.STRING,
          unique: true,
      },
      ageGroup: {
          type: Sequelize.STRING,
      },
      userDetils: {
          type: Sequelize.STRING,
      },
      organization: {
          type: Sequelize.STRING,
      },
      category: {
          type: Sequelize.STRING,
      },

      age: {
          type: Sequelize.INTEGER,
      },
      dob: {
          type: Sequelize.DATE,
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
      nameOfInstitution: {
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
      image: {
          type: Sequelize.STRING,
      },
      memberShipId: {
          type: Sequelize.STRING,
      },
  });
  return UserLogin;
};
