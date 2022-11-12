export interface IAddFilmRepository {
  add: (film: object) => Promise<void>
}
