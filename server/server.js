require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const db = require('./db')


app.use(express.json())
app.use(cors())



// app.get('/', async (req, res) => {
//   try {
//     const response = await db.query('select * from users')
//     res.json(response.rows)
//     console.log(response)
//   } catch (error) {

//   }

// })




app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})




