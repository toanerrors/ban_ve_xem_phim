const express = require('express');
const router = express.Router();

const cChat = require('../controllers/cChat');

router.get('/', cChat.chat_get_all);


module.exports = router;