const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const contactusRouter = require('./routes/contactus');
const projectsRouter = require('./routes/projects');
const completedProjectsRouter = require('./routes/completed')
const ongoingProjectsRouter = require('./routes/ongoing')
const futureProjectsRouter = require('./routes/future')

app.use('/contactus', contactusRouter);
app.use('/projects', projectsRouter);
app.use('/completed', completedProjectsRouter);
app.use('/ongoing', ongoingProjectsRouter);
app.use('/future', futureProjectsRouter);

app.listen(port, () => {
    console.log(`listning on port ${port}`);
});