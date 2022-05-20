const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  console.log('hello world', req);
  res.json({olá: 'olá'});
})

module.exports = userRouter;