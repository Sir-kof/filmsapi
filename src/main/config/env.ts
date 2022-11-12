export default {
  urlSearchFilms: 'https://ghibliapi.herokuapp.com/films?limit=200',
  ourUrlApi: 'http://localhost:5050/api/films',
  dbName: process.env.DATABASE ?? 'filmsapi',
  dbUser: process.env.USERDB ?? 'root',
  dbPassword: process.env.PASSWORD ?? 'root',
  port: process.env.PORT ?? 5050
}
