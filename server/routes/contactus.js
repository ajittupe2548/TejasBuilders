const router = require('express').Router();
let Contactus = require('../models/contactus.model.json');
var fs = require('fs')

router.route('/').get((req, res) => {
    res.send(Contactus.contactus);
});

router.route('/add').post((req, res) => {
    function callback(){
        console.log("prited after callbak")
    }
    const name = req.body.name;
    const contact = req.body.contact;
    const email = req.body.email;
    const address =req.body.address;
    const comment = req.body.comment;

    fs.readFile('./models/contactus.model.json', 'utf8', (err, data) => {
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        obj.contactus.push({name: name, contact: contact , email:email, addres:address, comment:comment}); //add some data
        json = JSON.stringify(obj); //convert it back to json        
        fs.writeFile('./models/contactus.model.json', json, callback); // write it back 
    }});

});

module.exports = router;