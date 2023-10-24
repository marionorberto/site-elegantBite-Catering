"use strict";require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.get('/', (req, res) => {
  res.json('hello world');
})

app.listen(process.env.PORT, () => {
  console.log(`acess http://localhost:${process.env.PORT}`);
  console.log(`server is running at port:${process.env.PORT}`);
});
