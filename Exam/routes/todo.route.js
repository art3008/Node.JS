import { Router } from 'express'
import { createController, listController, deleteController, updateController } from '../controllers/todo.controller.js'

const router = Router();

router.post('/create', createController)
router.get('/getList', listController)
router.delete('/remove/:header', deleteController)
router.put('/update/:header', updateController)

export default router