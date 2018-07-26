"use strict";
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '/build')));
app.use(compression());
app.use(bodyParser.json({limit:'20mb'}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:false}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = 3000;
app.listen(port);

console.log(`Landing listening on ${port}`);
