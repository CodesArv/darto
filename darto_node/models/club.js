module.exports = (sequelize, Sequelize) => {
    const Club = sequelize.define("club", {
        occupation: {
            type: Sequelize.STRING,
        },
         Userid:{
            type: Sequelize.INTEGER,  
         },
        instragramField: {
            type: Sequelize.STRING,
        },
        facebookField: {
            type: Sequelize.STRING,
        },
        youtubeField: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING,
        },
        about: {
            type: Sequelize.STRING,
        },
        twitterField: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        age: {
            type: Sequelize.STRING,
        },
        tagsName: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.ENUM("PENDING", "APPROVED", "REJECTED", "INACTIVE"),
        },
        occupation: {
            type: Sequelize.STRING,
        },
        about: {
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
        nameofclub: {
            type: Sequelize.STRING,
        },
        clubMembers: {
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

    return Club;
};
