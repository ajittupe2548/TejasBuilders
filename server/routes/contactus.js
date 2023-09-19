const router = require('express').Router();
let ContactUs = require('../models/ContactUs.model.json');
var fs = require('fs')

router.route('/').get((req, res) => {
    res.send(ContactUs.ContactUs);
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const contact = req.body.contact;
    const email = req.body.email;
    const address = req.body.address;
    const comment = req.body.comment;

    const dataObj = {
        name,
        contact,
        email,
        address,
        comment
    }

    function callback() {
        console.log(`Thank you ${name} for filling form!`);
        res.send(dataObj);
    }

    fs.readFile('./models/contactus.model.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); // Now it is an object
            obj.contactus.push(dataObj); // Add some data
            json = JSON.stringify(obj); // Convert it back to json
            fs.writeFile('./models/contactus.model.json', json, callback); // Write it back
        }
    });
});

module.exports = router;