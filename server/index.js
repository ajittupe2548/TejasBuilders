const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const contactUs = require('./routes/ContactUs');
const projects = require('./routes/Projects');

app.use('/contactus', contactUs);
app.use('/projects', projects);

app.listen(port, () => {
    console.log(`Listning on port ${port}`);
});