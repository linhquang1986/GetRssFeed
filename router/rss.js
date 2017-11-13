var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var rssCtrl = require('../controllers').rssController;
router.use(bodyParser.json());

router.post('/parRss', rssCtrl.parRss);

module.exports = router;