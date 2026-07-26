const express = require('express');
const routes = require('./routes');
const cors =require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        if (file.originalname === file.originalname) {
            console.log('File already exists');
        }
    }
    });
const picStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'profilePic/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        if (file.originalname === file.originalname) {
            console.log('File already exists');
        }
    }
   });

const upload = multer({ storage: storage });
const uploadPic = multer({ storage: picStorage });

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static('uploads'));
app.use('/profilePic', express.static('profilePic'));





app.post('/api/upload', upload.array('file'), (req, res) => {
    res.send('File uploaded successfully');
});

app.post('/api/profilePic', uploadPic.single('file'), (req, res) => {
    res.send('Profile picture uploaded successfully');
});

app.delete('/api/profilePic/:fileName', (req, res) => {
    const fs = require('fs');
    const filePath = `profilePic/${req.params.fileName}`;
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting file');
        } else {
            res.send('File deleted successfully');
        }
})
})

app.delete('/api/upload/:fileName', (req, res) => {
    const fs = require('fs');
    const filePath = `uploads/${req.params.fileName}`;
     fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting file');
        } else {
            res.send('File deleted successfully');
        }
})
})

app.use('/', routes);

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