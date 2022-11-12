import { GetFilmModel } from '../models/GetFilms'

export interface IGetFilm {
  getFilms: () => Promise<GetFilmModel>
}
