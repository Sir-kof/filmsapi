import { Sequelize } from 'sequelize'
export const database = new Sequelize('databaseName', 'root', 'root', {
  dialect: 'mysql'
})
