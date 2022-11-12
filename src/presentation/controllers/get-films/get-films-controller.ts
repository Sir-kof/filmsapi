import { serverError } from '../../helpers/http/http-helper'
import { MysqlHelper } from '../../../infra/db/mysql/helpers/mysql-helper'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const GetFilmsController = async (req, res) => {
  try {
    if (req.query.hasOwnProperty('limit') === true && req.query.hasOwnProperty('offset') === false) {
      const limit = parseInt(req.query.limit)
      const films = await MysqlHelper.getFilmsLimit(limit)
      return res.status(200).json(films)
    } else if (req.query.hasOwnProperty('offset') === true && req.query.hasOwnProperty('limit') === false) {
      const offset = parseInt(req.query.offset)
      const films = await MysqlHelper.getFilmsOffset(offset)
      return res.status(200).json(films)
    } else if (req.query.hasOwnProperty('limit') === true && req.query.hasOwnProperty('offset') === true) {
      const limit = parseInt(req.query.limit)
      const offset = parseInt(req.query.offset)
      const films = await MysqlHelper.getFilmsLimitAndOffset(offset, limit)
      return res.status(200).json(films)
    } else {
      const films = await MysqlHelper.getFilms()
      return res.status(200).json(films)
    }
  } catch (e) {
    return serverError(e)
  }
}
