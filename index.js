const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// DB_USER and DB_PASS

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('CoffeeZilla server is running');
})

app.listen(port, () => {
    console.log(`CoffeeZilla Port is running on: ${port}`);
})