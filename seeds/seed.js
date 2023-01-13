const sequelize = require('../config/connection');
const { User, Listing, Bid } = require('../models');

const userData = require('./userData.json');
const listingData = require('./listingData.json');
const bidData = require('./bidData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const listings = await Listing.bulkCreate(listingData, {
    individualHooks: true,
    returning: true,
  });
  const bids = await Bid.bulkCreate(bidData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
