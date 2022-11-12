import { IAddFilmRepository } from '../../../../data/protocols/db/add-films-repository'
import { IGetFilmsRepository } from '../../../../data/protocols/db/get-films-repository'
import { FilmModel } from '../../../../domain/models/Film'
import { MysqlHelper, addFilmsDb } from '../helpers/mysql-helper'

export class FilmMysqlRepository implements IAddFilmRepository, IGetFilmsRepository {
  async add (film: object): Promise<void> {
    await addFilmsDb('env.url')
  }

  async getFilms (): Promise<FilmModel> {
    const filmCollection = await MysqlHelper.getFilms()
    return filmCollection
  }
}
