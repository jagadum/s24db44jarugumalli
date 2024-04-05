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

// Handle dress create on POST.
exports.dress_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dress();
    document.dress_type = req.body.dress_type;
    document.dress_size = req.body.dress_size;
    document.dress_price = req.body.dress_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }

   // specific dress. lab-12 s-1
exports.dress_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await dress.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }
   
   //lab-12 s-2
   exports.dress_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dress.findById(req.params.id)
        // Do updates of properties
        if (req.body.dress_type)
            toUpdate.dress_type = req.body.dress_type;
        if (req.body.dress_size) toUpdate.dress_size = req.body.dress_size;
        if (req.body.dress_price) toUpdate.dress_price = req.body.dress_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
};

