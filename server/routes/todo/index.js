const express = require('express');
const router = express.Router();
const handlers = require('./handlers');

router.post('/todo',handlers.addTodo);
router.get('/todos',handlers.getTodoList);

module.exports = router;