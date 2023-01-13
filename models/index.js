const User = require('./User');
const Listing = require('./Listing');
const Bid = require('./Bid');

User.hasMany(Bid, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Listing, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Listing.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bid.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


Bid.belongsTo(Listing, {
  foreignKey: 'listing_id',
  onDelete: 'CASCADE'
});

module.exports = { User, Listing, Bid };
