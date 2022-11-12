import axios from 'axios'
import mysql from 'mysql2'
import { Film } from '../models'

export const addFilmsDb = async (url: string): Promise<void> => {
  const res = await axios.get(url)
  res.data.map(async (film: any): Promise<void> => {
    const { title, original_title, description, release_date, rt_score } = film
    const filmExists = await Film.count({ where: { title } })
    if (filmExists > 0) {
      console.log(`Filme: ${title} já existe na base de dados`)
    } else {
      await Film.create({
        title,
        original_title,
        description,
        release_date,
        rt_score
      })
    }
  })
}

export const MysqlHelper = {

  async connect (): Promise<any> {
    const client = mysql.createConnection({
      host: 'databasename',
      user: 'root',
      password: 'root'
    })
    await addFilmsDb('env.url')
    return client
  },

  async getFilms (): Promise<any> {
    const films = await Film.findAll()
    return films
  },

  async getFilmsLimit (limit: any): Promise<any> {
    const films = await Film.findAll({ limit })
    return films
  },

  async getFilmsOffset (offset: any): Promise<any> {
    const films = await Film.findAll({ offset })
    return films
  },

  async getFilmsLimitAndOffset (offset: any, limit: any): Promise<any> {
    const films = await Film.findAll({ offset, limit })
    return films
  }
}
