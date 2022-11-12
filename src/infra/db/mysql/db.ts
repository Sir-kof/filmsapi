import { Sequelize } from 'sequelize'
import env from '../../../main/config/env'
export const database = new Sequelize(env.dbName, env.dbUser, env.dbPassword, {
  dialect: 'mysql'
})
