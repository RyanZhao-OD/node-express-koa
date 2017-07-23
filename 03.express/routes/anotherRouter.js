const express = require('express');
const anotherRouter = express.Router();
anotherRouter.use('/:aaa', (request, response) => {
    response.end('anotherRouter--------');
});

module.exports = anotherRouter;