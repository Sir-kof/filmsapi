import { GetFilmModel } from '../../../domain/models/GetFilms'
import { IGetFilm } from '../../../domain/usecases/get-films'
import { IGetFilmsRepository } from '../../protocols/db/get-films-repository'

export class DbGetFilms implements IGetFilm {
  constructor (
    private readonly getFilmRepository: IGetFilmsRepository
  ) {}

  async getFilms (): Promise<GetFilmModel> {
    const films = await this.getFilmRepository.getFilms()
    return films
  }
}
