import { FilmModel } from '../../../domain/models/Film'

export interface IGetFilmsRepository {
  getFilms: () => Promise<FilmModel>
}
