const express = require('express');
const router = express.Router();

const cRap = require('../controllers/cRap');

router.get('/', cRap.rap_get_all);
router.post('/', cRap.rap_create);


module.exports = router;