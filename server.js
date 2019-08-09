import express from 'express';
import path  from 'path';
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


import Tasks from './app/controller/task';
import Feedbacks from './app/controller/feedback';


const app = express();
app.use(express.static(path.join(__dirname , 'client/build')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.APP_PORT || 2000;

 app.get('/api/task', Tasks.index);
 app.get('/api/task/show', Tasks.show);
 app.post('/api/feedback', Feedbacks.create);


app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


app.listen(port, function () {
  console.log(`Server Starts on http://localhost:${port}`);
});