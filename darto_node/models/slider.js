module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define("Slider", {
        name: {
            type: Sequelize.STRING,
        },
        image: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
        },
        description: {
            type: Sequelize.STRING,
        },
        orderNo: { type: Sequelize.INTEGER },
    });

    return State;
};
