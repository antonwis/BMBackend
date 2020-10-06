import express from 'express';
import controller from '../controllers/band';

const router = express();

router.get('/bands', controller.getBands);
router.get('/kys', controller.testiKys);

export = router;

