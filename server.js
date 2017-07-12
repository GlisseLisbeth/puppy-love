'use strict';
const express = require('express');
const path = require("path");

const app = express();
const port = process.env.PORT || process.env.IP || 3000;
app.get('/', (req, res) => {
   res.sendFile(__dirname+'/index.html');
}).listen(port);

console.log('Express server started on port %s', port);
