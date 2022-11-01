const express = require('express');
const router = express.Router();

const cUser = require('../Controllers/cUser');

router.get('/', (req, res) => {
    res.send('Hello from the user router');
});

router.post('/register', cUser.user_create);
router.post('/login', cUser.user_login);
router.put('/update', cUser.user_update);

module.exports = router;