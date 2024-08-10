"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
      },
      artist_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: "artists",
          key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        unique: true, 
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      short_description: {
        type: DataTypes.TEXT,
      },
      banner: {
        type: DataTypes.TEXT,
      },
      location: {
        type: DataTypes.STRING,
      },
      seating_plan: {
        type: DataTypes.TEXT,
      },
      rules: {
        type: DataTypes.TEXT,
      },
      tnc: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.ENUM("0", "1"),
        allowNull: false,
        defaultValue: "1",
      },
      flag_private: {
        type: DataTypes.ENUM("0", "1"),
        allowNull: false,
        defaultValue: "0",
      },
    },
    {
      sequelize,
      modelName: "Event",
      timestamps: true,
      underscored: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: 'deleted_at',
    }
  );
  return Event;
};
