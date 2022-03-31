const express = require('express');
const app = express();
const port = 3000;

const { Sequelize, DataTypes, Model } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/home/tommy/Documents/Projects/petProjects/assistoDB/Assisto.db',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(() => console.error('Unable to connect to the database:', error));

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User);

User.sync();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
