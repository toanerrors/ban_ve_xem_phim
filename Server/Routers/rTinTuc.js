const express = require('express');
const router = express.Router();

const cTinTuc = require('../Controllers/cTinTuc');

router.get('/', cTinTuc.getAll);
router.post('/', cTinTuc.tintucCreate);
router.put('/:id', cTinTuc.tintucUpdate);
router.delete('/:id', cTinTuc.tintucDelete);
router.get('/:id', cTinTuc.getTinTucById);

module.exports = router;