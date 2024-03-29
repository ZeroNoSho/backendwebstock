import { Sequelize } from "sequelize";
import db from "../../config/index.js";

const { DataTypes } = Sequelize;

const DataBarang = db.define(
  "databarang",
  {
    nama: {
      type: DataTypes.STRING,
    },
    jenis: {
      type: DataTypes.STRING,
    },
    bahan: {
      type: DataTypes.STRING,
    },
    stok: {
      type: DataTypes.INTEGER,
    },
    tipe: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export default DataBarang;
