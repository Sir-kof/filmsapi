import { Router } from 'express'
import { GetFilmsController } from '../../presentation/controllers/get-films/get-films-controller'

export default (router: Router): void => {
  // ----------------------- Get ---------------------------------
  router.get('/films', GetFilmsController)
}
