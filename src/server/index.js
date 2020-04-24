const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Aylien = require("aylien_textapi");

const PORT = 7000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

const textApi = new Aylien({
  application_id: `${process.env.APP_ID}`,
  application_key: `${process.env.APP_KEY}`
});

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.post('/sentiment', (req, res) => {
  const param = req.body.text ? { text: req.body.text } : { url: req.body.url }
  textApi.sentiment(param, (error, result) => {
    res.send(result);
  });
});


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
