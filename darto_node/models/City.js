module.exports = (sequelize, Sequelize) => {
    const city = sequelize.define("City", {
        city: {
            type: Sequelize.STRING,
        },
    });

    return city;
};
