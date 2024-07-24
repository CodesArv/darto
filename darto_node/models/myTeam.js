module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("myTeam", {
      tagsName: {
          type: Sequelize.STRING,
      },
      Userid: {
          type: Sequelize.INTEGER,
      },

      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      ageGroup: {
          type: Sequelize.STRING,
      },
      occupation: {
          type: Sequelize.STRING,
      },
      nameOccupationInstitution: {
          type: Sequelize.STRING,
      },
      image1: {
          type: Sequelize.STRING,
      },
      image2: {
          type: Sequelize.STRING,
      },
      image2: {
          type: Sequelize.STRING,
      },
      image3: {
          type: Sequelize.STRING,
      },
      image4: {
          type: Sequelize.STRING,
      },
      image5: {
          type: Sequelize.STRING,
      },
      image6: {
          type: Sequelize.STRING,
      },
      image7: {
          type: Sequelize.STRING,
      },
      image8: {
          type: Sequelize.STRING,
      },
      image9: {
          type: Sequelize.STRING,
      },
      image10: {
          type: Sequelize.STRING,
      },
      image11: {
          type: Sequelize.STRING,
      },
      image12: {
          type: Sequelize.STRING,
      },
      image13: {
          type: Sequelize.STRING,
      },
      image: {
          type: Sequelize.STRING,
      },
      nameofTeam: {
          type: Sequelize.STRING,
      },
      totalMembers: {
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
  });

  return Team;
};
