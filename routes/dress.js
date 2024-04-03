var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dress', { title: 'Search Result dress' });
});
 
module.exports = router;
var express = require('express');
const dress_controlers= require('../controllers/dress');
var router = express.Router();
/* GET costumes */
router.get('/', dress_controlers.dress_view_all_Page);
module.exports = router;