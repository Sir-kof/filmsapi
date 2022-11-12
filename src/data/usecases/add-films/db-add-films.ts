import { FilmModel } from '../../../domain/models/FilmModel'
import { IAddFilm } from '../../../domain/usecases/Add-film'
import { IAddFilmRepository } from '../../protocols/db/add-films-repository'

export class DbAddFilm implements IAddFilm {
  constructor (
    private readonly addFilmRepository: IAddFilmRepository
  ) {}

  async add (film: any): Promise<FilmModel> {
    const { title, original_title, description, release_date, rt_score } = film
    const filmAdded = await this.addFilmRepository.add({
      title, original_title, description, release_date, rt_score
    })
    console.log(filmAdded)
    return filmAdded
  }
}
