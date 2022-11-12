import { FilmModel } from '../../../domain/models/Film'
import { IAddFilmRepository } from '../../protocols/db/add-films-repository'
import axios from 'axios'
import { DbAddFilm } from './db-add-films'
import env from '../../../main/config/env'

const makeAddFilm = (): IAddFilmRepository => {
  class AddFilmStub implements IAddFilmRepository {
    async add (film: any): Promise<void> {
      const { title, original_title, description, release_date, rt_score } = film
      await new Promise(resolve => resolve({
        title,
        original_title,
        description,
        release_date,
        rt_score
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
  sut: DbAddFilm
  addFilmStub: IAddFilmRepository
}

const makeSut = (): SutTypes => {
  const addFilmStub = makeAddFilm()
  const sut = new DbAddFilm(addFilmStub)
  return {
    sut,
    addFilmStub
  }
}

describe('DbAddFilm Usecase', () => {
  test('Should return film with correct values specified', async () => {
    const res = await axios.get(env.urlSearchFilms)
    expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('title'))).toBeTruthy()
    expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('original_title'))).toBeTruthy()
    expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('description'))).toBeTruthy()
    expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('release_date'))).toBeTruthy()
    expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('rt_score'))).toBeTruthy()
  })

  test('Should Add film with correct values', async () => {
    const { sut, addFilmStub } = makeSut()
    const addSpy = jest.spyOn(addFilmStub, 'add')
    await sut.add(makeFakeFilm())
    expect(addSpy).toHaveBeenCalledWith({
      title: 'valid_title',
      original_title: 'valid_original_title',
      description: 'valid_description',
      release_date: 'valid_date',
      rt_score: 'valid_score'
    })
  })
})
