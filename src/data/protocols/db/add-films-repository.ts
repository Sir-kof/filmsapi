import { FilmModel } from '../../../domain/models/FilmModel'

export interface IAddFilmRepository {
  add: (film: object) => Promise<FilmModel>
}
