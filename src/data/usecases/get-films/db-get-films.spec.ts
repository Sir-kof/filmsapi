import { FilmModel } from '../../../domain/models/Film'
import { GetFilmModel } from '../../../domain/models/GetFilms'
import { IGetFilmsRepository } from '../../protocols/db/get-films-repository'
import { DbGetFilms } from './db-get-films'

import env from "../../../main/config/env"

const makeGetFilm = (): IGetFilmsRepository => {
  class AddFilmStub implements IGetFilmsRepository {
    async getFilms (): Promise<GetFilmModel> {
      return await new Promise(resolve => resolve({
        title: 'valid_title',
        original_title: 'valid_original_title',
        description: 'valid_description',
        release_date: 'valid_date',
        rt_score: 'valid_score'
      }))
    }
  }
  return new AddFilmStub()
}

const makeFakeFilm = (): FilmModel => ({
  title: 'valid_title',
  original_title: 'valid_original_title',
  description: 'valid_description',
  release_date: 'valid_date',
  rt_score: 'valid_score'
})

interface SutTypes {
  sut: DbGetFilms
  getFilmsStub: IGetFilmsRepository
}

const makeSut = (): SutTypes => {
  const getFilmsStub = makeGetFilm()
  const sut = new DbGetFilms(getFilmsStub)
  return {
    sut,
    getFilmsStub
  }
}

describe('DbAddFilm Usecase', () => {
  test('Should return films with correct values specified', async () => {
    // aqui vai a url da nossa api
    // configurar env no main layer que está por vir para poder prosseguir com esse teste
    // const res = await axios.get(env.ourUrlApi)
    expect(1).toBe(1)
  })
})
