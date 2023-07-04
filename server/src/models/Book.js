import { DataTypes } from "sequelize";
import db from "../../db/conn.js";

const Books = db.define("books", {
  title: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  about: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    required: true,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    required: true,
    allowNull: false,
  },
  isBestSeller: {
    type: DataTypes.BOOLEAN,
    required: true,
    allowNull: false,
  },
}, {
  timestamps: false,
});

export default Books;
