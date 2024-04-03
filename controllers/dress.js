var dress = require('../models/dress');
// List of all dress
exports.dress_list = function(req, res) {
 res.send('NOT IMPLEMENTED: dress list');
};
// for a specific dress.
exports.dress_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: dress detail: ' + req.params.id);
};
// Handle dress create on POST.
exports.dress_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: dress create POST');
};
// Handle dress delete from on DELETE.
exports.dress_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: dress delete DELETE ' + req.params.id);
};
// Handle dress update form on PUT.
exports.dress_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: dress update PUT' + req.params.id);
};

// List of all dress
exports.dress_list = async function(req, res) {
    try{
    thedress = await dress.find();
    res.send(thedress);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

   // VIEWS
// Handle a show all view
exports.dress_view_all_Page = async function(req, res) {
    try{
    thedress = await dress.find();
    res.render('dress', { title: 'dress Search Results', results: thedress });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };


