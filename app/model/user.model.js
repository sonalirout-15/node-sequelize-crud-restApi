module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING(100),
      },
      email: {
        type: Sequelize.STRING(100),
      },
      address: {
        type: Sequelize.STRING(100),
      },
      mobile_number: {
        type: Sequelize.INTEGER,
      },
    }, {
        timestamps: false
    });
  
    return User;
  };