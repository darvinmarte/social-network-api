const express = require('express');
const { MongoClient } = require('mongodb');


const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = '';

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});