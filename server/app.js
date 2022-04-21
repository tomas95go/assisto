const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const port = 3000 || process.env.port;
const signin = require(`${__dirname}\\routes\\signin\\signin`);

app.use(passport.initialize());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(`/signin`, signin);

app.get('/', (req, res) => {
  res.send(`Welcome!`);
});
