import express from 'express';
import controller from '../controllers/band';

const router = express();

// Band API routes
router.get('/bands', controller.getBands);
router.get('/bands/country/:country', controller.getBandsByCountry);
router.get('/bands/country/:country/genre/:genre', controller.getBandsByCountryAndGenre);
router.get('/bands/country/:country/status/:status', controller.getBandsByCountryAndStatus);
router.get('/bands/country/:country/:name', controller.getBandsByCountryAndName);
router.get('/bands/:name', controller.getBandsByName);
router.get('/bands/:name/status/:status', controller.getBandsByNameAndStatus);
router.get('/bands/genre/:genre/:name', controller.getBandsByGenreAndName);
router.get('/bands/genre/:genre/status/:status', controller.getBandsByGenreAndStatus);
router.get('/bands/genre/:genre', controller.getBandsByGenre);
router.get('/bands/status/:status', controller.getBandsByStatus);
router.get('/bands/preview/:country', controller.getPreviewBands);


export = router;

