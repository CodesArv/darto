module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("CountryList", {
      
              code: {
                type: Sequelize.STRING,
              },
              dial_code: {
                type: Sequelize.STRING,
           
              },
              name: {
                type: Sequelize.STRING,
             
              },
            
    });
   
    return Country;
};
