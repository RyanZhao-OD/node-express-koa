const express = require('express');

// 创建一个路由中间件的实例,它也是一个路由的容器，里面可以定义很多路由
const router = express.Router();

router.use((request, response, next) => {
    console.log('question middleware------');
    next();
    // response.end('question middleware------');
});

router.get('/detail/:id', (request, response) => {
    console.log(request.params);
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.render('question/detail', {
        qid: request.params.id
    });
});

module.exports = router;