module.exports = (sequelize, Sequelize) => {
  const EventGallery = sequelize.define("EventGallery", {
      name: {
          type: Sequelize.STRING,
      },
      status: {
          type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
      },
      description: {
          type: Sequelize.STRING,
      },
      date: {
          type: Sequelize.DATE,
      },
      image: {
          type: Sequelize.STRING,
      },
  });

  return EventGallery;
};
