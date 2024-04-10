var express = require('express');
const dress_controlers= require('../controllers/dress');
var router = express.Router();
/* GET dress */

router.get('/', dress_controlers.dress_view_all_Page);

router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })

// Delete
router.get('/', dress_controlers.dress_delete );

//s6
/* GET detail dress page */
router.get('/detail', dress_controlers.dress_view_one_Page);

//s7
/* GET create dress page */
router.get('/create', dress_controlers.dress_create_Page);

//s8
/* GET create update page */
router.get('/update', dress_controlers.dress_update_Page);

//s9
/* GET delete dress page */
router.get('/delete', dress_controlers.dress_delete_Page);


module.exports = router;