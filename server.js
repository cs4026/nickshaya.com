"use strict";
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const path = require('path');
let path = require('path');
var proxy = require('redbird')({port: 80});
const app = express();

proxy.register("nickshaya.com", "18.222.20.107:8080");
proxy.register("www.nickshaya.com","18.222.20.107:8080")

app.use(express.static(path.join(__dirname, '/build')));
app.use(compression());
app.use(bodyParser.json({limit:'20mb'}));
app.use(bodyParser.urlencoded({limit:'20mb',extended:false}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = 8080;
app.listen(port);

console.log(`Landing listening on ${port}`);
