import { database } from '../infra/db/mysql/db'
import { addFilmsDb } from '../infra/db/mysql/helpers/mysql-helper'
import { Film as film } from '../infra/db/mysql/models'
import env from './config/env'

void (async () => {
  const db = database
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const Film = film

  try {
    await db.sync()
    await addFilmsDb(env.urlSearchFilms)
  } catch (error) {
    console.log(error)
  }
})().then(async () => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
}).catch(console.error)
