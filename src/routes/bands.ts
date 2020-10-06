import express from 'express';
import controller from '../controllers/band';

const router = express();

router.get('/bands', controller.getBands);
router.get('/bands/country/:country', controller.getBandsByCountry);
router.get('/bands/country/:country/genre/:genre', controller.getBandsByCountryAndGenre);
router.get('/bands/country/:country/:name', controller.getBandsByCountryAndName);
router.get('/bands/:name', controller.getBandsByName);
router.get('/bands/genre/:genre/:name', controller.getBandsByGenreAndName);
router.get('/bands/genre/:genre', controller.getBandsByGenre);
router.get('/bands/status/:status', controller.getBandsByStatus);
router.get('/kys', controller.testiKys);

export = router;

