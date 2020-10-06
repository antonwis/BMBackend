import express from 'express';
import controller from '../controllers/band';

const router = express();

router.get('/bands', controller.getBands);
router.get('/bands/country/:country', controller.getBandsByCountry);
router.get('/bands/:name', controller.getBandsByName);
router.get('/bands/genre/:genre', controller.getBandsByGenre);
router.get('/bands/status/:status', controller.getBandsByStatus);
router.get('/kys', controller.testiKys);

export = router;

