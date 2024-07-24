module.exports = (sequelize, Sequelize) => {
    const Pincode = sequelize.define("pincode", {
        pincode: {
            type: Sequelize.INTEGER,
        }
        
    });

    return Pincode;
};
