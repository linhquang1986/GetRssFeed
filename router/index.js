var express = require('express');
var router = express.Router();
var swagger = require('../swagger');

let rss = require('./rss');
router.use('/rss', rss);

router.get('/', (req, res) => {
    res.render('uploadImg');
})

//init Swagger
router.use(swagger.init(router, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    basePath: 'http://localhost:5000',
    swaggerURL: '/swagger',
    swaggerJSON: '/api',
    swaggerUI: 'public/swagger/',
    apis: [
        'controllers/rss.js'
    ]
}))

module.exports = router;