const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 7000;
const Aylien = require("aylien_textapi");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));

const textApi = new Aylien({
  application_id: 'c7f3a59b',
  application_key: 'f07759e788f11c608aacac7301bd5c3a'
});

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

app.post('/sentiment', (req, res) => {
  const param = req.body.text ? { text: req.body.text } : { url: req.body.url }
  textApi.sentiment(param, (error, result) => {
    res.send(result);
  });
});

app.listen(port, () => console.log(`Aylien app listening on port ${port}!`));
