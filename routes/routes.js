const { Router } = require('express');

const { citiesGet } = require('../controllers/searchController');

const router = Router();

router.get('/search', citiesGet);




module.exports = router;