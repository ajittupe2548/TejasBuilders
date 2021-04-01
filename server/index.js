const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const contactusRouter = require('./routes/contactus');
const projectsRouter = require('./routes/projects');
const completedProjectsRouter = require('./routes/completedprojects')
const ongoingProjectsRouter = require('./routes/ongoingprojects')
const futureProjectsRouter = require('./routes/futureprojects')

app.use('/contactus', contactusRouter);
app.use('/projects', projectsRouter);
app.use('/completedprojects', completedProjectsRouter);
app.use('/ongoingprojects', ongoingProjectsRouter);
app.use('/futureprojects', futureProjectsRouter);

app.listen(port, () =>{
    console.log(`listning on port ${port}`);
});