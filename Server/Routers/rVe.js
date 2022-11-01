const express = require('express');
const router = express.Router();

const cVe = require('../Controllers/cVe');
const auth = require('../Middleware/auth');

router.post('/dat-ve', auth.requireAuth, cVe.ve_create);
router.get('/:idUser', auth.requireAuth, cVe.ve_get_by_idUser);

module.exports = router;