const express = require('express');
const router = express.Router();

const cPhim = require('../Controllers/cPhim');
const auth = require('../Middleware/auth');

router.get('/', cPhim.phim_get_all);
router.post('/', auth.requireAdmin, cPhim.phim_create);
router.delete('/:id', auth.requireAdmin, cPhim.phim_delete);
router.put('/:id', auth.requireAdmin, cPhim.phim_update);
router.get('/:id', cPhim.phim_get_by_id);

module.exports = router;