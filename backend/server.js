const express = require('express');
const routes = require('./routes');
const cors =require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.post('/api/upload', (req, res) => {
    res.send('File uploaded successfully');
});

// connect to mongoDB
mongoose.connect('mongodb://localhost:27017', { dbName: 'sleepDeprived' });
const db = mongoose.connection;
db.on('error', err => {
  console.log(err);
});
db.once('open', () => {
    console.log('connected to DB');
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});