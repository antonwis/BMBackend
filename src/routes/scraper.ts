import express from 'express';
import controller from '../controllers/scrape';

const router = express();

router.post('/band/data', controller.getBandData);

export = router;
