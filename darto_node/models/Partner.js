module.exports = (sequelize, Sequelize) => {
    const Partner = sequelize.define("Partners", {
        name: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
        },
        image: {
            type: Sequelize.STRING,
        },
        link: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING,
        },
        orderNo: { type: Sequelize.INTEGER },
    });

    return Partner;
};
