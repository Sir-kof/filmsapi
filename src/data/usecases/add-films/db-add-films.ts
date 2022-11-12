import { IAddFilm } from '../../../domain/usecases/Add-film'
import { IAddFilmRepository } from '../../protocols/db/add-films-repository'

export class DbAddFilm implements IAddFilm {
  constructor (
    private readonly addFilmRepository: IAddFilmRepository
  ) {}

  async add (film: any): Promise<void> {
    const { title, original_title, description, release_date, rt_score } = film
    await this.addFilmRepository.add({
      title, original_title, description, release_date, rt_score
    })
  }
}
