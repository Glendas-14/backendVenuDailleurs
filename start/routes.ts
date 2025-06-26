/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const AuthController = () => import('../app/controllers/auth_controller.js')


router.get('/', async () => {
  return {
    message: "Welcome to Venu d'ailleurs API",
  }
})
router.post('/signin', [AuthController, 'authenticateUser'])
router.post('/signup', [AuthController, 'registerAccountInfo'])
