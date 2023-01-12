const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Listing extends Model {}

Listing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
    photo_url: {
      type: DataTypes.VARCHAR(max),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    milage: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    make: {
      type: DataTypes.STRING,
      allowNull:false,
    },

    startListing_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    endListing_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    startBid_amount: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },

     },
  

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Listing',
  }
);

module.exports = Listing;
