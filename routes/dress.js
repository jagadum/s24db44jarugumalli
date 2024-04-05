var express = require('express');
const dress_controlers= require('../controllers/dress');
var router = express.Router();
/* GET costumes */
router.get('/', dress_controlers.dress_view_all_Page);

router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
    router.get('/', dress_controlers.dress_update_put );
    module.exports = router;