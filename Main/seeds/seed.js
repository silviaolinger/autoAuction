const sequelize = require('../config/connection');
const { User, Listing, Bid } = require('../models');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });



  process.exit(0);
};

seedDatabase();
