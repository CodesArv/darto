
module.exports = (sequelize, Sequelize) => {
  const State = sequelize.define("StateList", {
      country: {
          type: Sequelize.STRING,
      },
      district: {
          type: Sequelize.STRING,
      },
      state: {
          type: Sequelize.STRING,
      }
  });

  return State;
};
