const route = require('express').Router();

route.use('/tasks', require('./tasks'));
route.use('/auth', require('./auth'));