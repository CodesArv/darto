module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admins", {
  
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    userName: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    mobileNumber: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
      deafult: "PENDING",
    },
    role: {
      type: Sequelize.STRING,
      deafult: "admin",
    },
    tagsName: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
      deafult: "PENDING",
    },
    // role: {
    //   type: Sequelize.STRING,
    //   deafult: "USER",
    // },
    ageGroup: {
      type: Sequelize.STRING,
      ref: "AgeGroup",
    },
    occupation: {
      type: Sequelize.STRING,
    },
    nameOccupationInstitution: {
      type: Sequelize.STRING,
    },
    image: {
    
        type: Sequelize.STRING,
       
    },
    nameofTeam: {
      type: Sequelize.STRING,
    },
    totalMembers: {
      type:Sequelize.STRING,
    },
  
  
      houseNumber: {
        type: Sequelize.STRING,
      },
      street: {
        type:Sequelize.STRING,
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

  return Admin;
};

