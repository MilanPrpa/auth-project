require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db')

app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello')
})




app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})




