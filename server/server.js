import {express} from 'express';
// const express = require('express');
const app = express();
import {path} from 'path';
// const path = require('path');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
