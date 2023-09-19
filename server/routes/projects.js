const router = require('express').Router();
let Projects = require('../models/Projects.model.json');

router.route('/').get((req, res) => {
    res.send(Projects)
});

module.exports = router;