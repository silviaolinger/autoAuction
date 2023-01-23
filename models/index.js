const User = require('./User');
const Listing = require('./Listing');
const Bid = require('./Bid');

User.hasMany(Bid, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

User.hasMany(Listing, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Listing.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Listing.hasMany(Bid, {
  foreignKey: 'listingId',
  onDelete: 'CASCADE'
});

Bid.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Bid.belongsTo(Listing, {
  foreignKey: 'listingId',
  onDelete: 'CASCADE'
});

module.exports = { User, Listing, Bid };
