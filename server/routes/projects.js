const router = require('express').Router();
let Projects = require('../models/projects.model.json');

router.route('/').get((req, res) => {
    res.send(Projects.Project)
});

module.exports = router;