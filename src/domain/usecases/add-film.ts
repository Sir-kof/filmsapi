import { FilmModel } from '../models/FilmModel'

export interface IAddFilm {
  add: (film: object) => Promise<FilmModel>
}
