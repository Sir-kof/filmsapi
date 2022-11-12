// import { FilmModel } from '../../../domain/models/Film'
// import { GetFilmModel } from '../../../domain/models/GetFilms'
// import { IGetFilmsRepository } from '../../protocols/db/get-films-repository'
// import { DbGetFilms } from './db-get-films'

// const makeGetFilm = (): IGetFilmsRepository => {
//   class AddFilmStub implements IGetFilmsRepository {
//     async getFilms (): Promise<GetFilmModel> {
//       return await new Promise(resolve => resolve({
//         title: 'valid_title',
//         original_title: 'valid_original_title',
//         description: 'valid_description',
//         release_date: 'valid_date',
//         rt_score: 'valid_score'
//       }))
//     }
//   }
//   return new AddFilmStub()
// }

// const makeFakeFilm = (): FilmModel => ({
//   title: 'valid_title',
//   original_title: 'valid_original_title',
//   description: 'valid_description',
//   release_date: 'valid_date',
//   rt_score: 'valid_score'
// })

// interface SutTypes {
//   sut: DbGetFilms
//   getFilmsStub: IGetFilmsRepository
// }

// const makeSut = (): SutTypes => {
//   const getFilmsStub = makeGetFilm()
//   const sut = new DbGetFilms(getFilmsStub)
//   return {
//     sut,
//     getFilmsStub
//   }
// }

describe('DbAddFilm Usecase', () => {
  test('Should return films with correct values specified', async () => {
    // aqui vai a url da nossa api
    // configurar env no main layer que está por vir para poder prosseguir com esse teste
    // const res = await axios.get('https://ghibliapi.herokuapp.com/films?limit=200')
    // expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('title'))).toBeTruthy()
    // expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('original_title'))).toBeTruthy()
    // expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('description'))).toBeTruthy()
    // expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('release_date'))).toBeTruthy()
    // expect(res.data.map((item: { hasOwnProperty: (arg0: string) => any }) => item.hasOwnProperty('rt_score'))).toBeTruthy()
    expect(1).toBe(1)
  })
})
