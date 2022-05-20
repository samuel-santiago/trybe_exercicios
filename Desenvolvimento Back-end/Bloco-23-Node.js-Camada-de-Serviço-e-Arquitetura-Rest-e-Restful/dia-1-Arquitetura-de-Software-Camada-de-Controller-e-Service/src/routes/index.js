const express = require('express');
const userRouter = require('./user.route.js');
//testar sem o js

const router = express.Router();

router.use('/users', userRouter)


module.exports = router;