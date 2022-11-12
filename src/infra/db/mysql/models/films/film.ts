import { DataTypes } from 'sequelize'
import { database } from '../../db'

export const Film = database.define('Film', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  original_title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING(1234),
    allowNull: false
  },
  release_date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rt_score: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
