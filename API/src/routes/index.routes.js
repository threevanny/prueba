import  Router  from 'express';
const router = Router();

//get controller
import { getMascotas } from '../controllers/index.ctrl';

router.get('/', getMascotas);

export default router;