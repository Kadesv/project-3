import { DataTypes, Model } from "sequelize";
import util from 'util';
import { db } from "../config/db.js";

export default class Message extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Message.init(
  {
    messageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    messageText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    modelName: 'message',
    sequelize: db,
  },
);