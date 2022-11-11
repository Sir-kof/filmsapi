import { FilmModel } from '../../../domain/models/FilmModel'
import { IAddFilmRepository } from '../../protocols/db/Add-films-repository'
import axios from 'axios'
import { DbAddFilm } from './db-add-films'

const makeAddFilm = (): IAddFilmRepository => {
  class AddFilmStub implements IAddFilmRepository {
    async add (film: any): Promise<FilmModel> {
      const { title, originalTitle, description, releaseDate, rtScore } = film
      return await new Promise(resolve => resolve({
        title,
        originalTitle,
        description,
        releaseDate,
        rtScore
      }))
    }
  }
  return new AddFilmStub()
}

const makeFakeFilm = (): FilmModel => ({
  title: 'valid_title',
  originalTitle: 'valid_original_title',
  description: 'valid_description',
  releaseDate: 'valid_date',
  rtScore: 'valid_score'
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
    const res = await axios.get('https://ghibliapi.herokuapp.com/films?limit=200')
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
      originalTitle: 'valid_original_title',
      description: 'valid_description',
      releaseDate: 'valid_date',
      rtScore: 'valid_score'
    })
  })
})

// implementação para o db
// fetch('https://ghibliapi.herokuapp.com/films?limit=200', {
//   method: 'Add',
//   headers: { 'Content-Type': 'applicationjson' }
// })
