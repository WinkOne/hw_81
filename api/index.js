const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const links = require('./app/links');

const port = 8000;


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));



const run = async () => {
    await mongoose.connect('mongodb://localhost', {
       useNewUrlParser: true,
        useUnifiedTopology: true
    });

    app.use('/links', links);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`)
    })
};

run().catch(e => {
    console.error(e)
});
