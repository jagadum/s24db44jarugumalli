var express = require('express');
const dress_controlers= require('../controllers/dress');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET dress */
router.get('/', dress_controlers.dress_view_all_Page);

router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
router.get('/', dress_controlers.dress_delete );
router.get('/detail', secured,dress_controlers.dress_view_one_Page);
router.get('/create', secured,dress_controlers.dress_create_Page);
router.get('/delete', secured,dress_controlers.dress_delete_Page);
router.get('/update', secured,dress_controlers.dress_update_Page);

module.exports = router;