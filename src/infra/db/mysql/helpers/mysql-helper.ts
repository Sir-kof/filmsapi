// import axios from 'axios'
import mysql from 'mysql2'
import { Film } from '../models'

// export const addFilmsDb = async (url: string): Promise<void> => {
//   // adiciona os filmes na base de dados se dados não existirem, evitar duplicação
//   // já vou adicionar a url no env para ficar mais dinâmico, vou só fazer esse commit
//   const res = await axios.get(url)
//   res.data.map(async (film: any): Promise<void> => {
//     const { title, original_title, description, release_date, rt_score } = film
//     const filmExists = await Film.count({ where: { title } })
//     if (filmExists > 0) {
//       console.log(`Filme: ${title} já existe na base de dados`)
//     } else {
//       await Film.create({
//         title,
//         original_title,
//         description,
//         release_date,
//         rt_score
//       })
//     }
//   })
// }

export const MysqlHelper = {

  // async connect (): Promise<any> {
  //   const client = mysql.createConnection({
  //     host: 'databasename',
  //     user: 'root',
  //     password: 'root'
  //   })
  //   await addFilmsDb('env.url')
  //   return client
  // },

  async getFilms (): Promise<any> {
    const films = await Film.findAll()
    return films
  }
}
