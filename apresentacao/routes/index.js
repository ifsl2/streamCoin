var express = require('express');
var router = express.Router();

const historyApi = require("../public/js/info");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dashboard page. */
router.get('/dash', function(req, res, next) {
  res.render('dash', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* GET info page. */
router.get('/info', historyApi.moreAbout);

/* GET login page. */
router.get('/agora', function(req, res, next) {
  res.sendfile('agora.html', { title: 'Express'});
});

/* GET login page. */
router.post('/notificacao', function(req, res, next) {
    res.send(req.body);
});


/* GET 505 page. */
router.get('/*', function(req, res, next) {
  res.render('505', { title: '505 - Page Not Found!' });
});


module.exports = router;