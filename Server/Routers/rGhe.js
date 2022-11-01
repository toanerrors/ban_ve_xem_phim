const express = require('express');
const router = express.Router();

const cGhe = require('../controllers/cGhe');

router.get('/:idPhim', cGhe.ghe_get_by_idPhim);
router.get('/reset/:idPhim', cGhe.ghe_reset_by_idPhim);


module.exports = router;