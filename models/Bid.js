const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bid extends Model { }

Bid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },



    amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',

      },
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Listing',
        key: 'id',
      },
    },
  },


  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Bid',
  }
);

module.exports = Bid;
