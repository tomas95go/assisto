const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');

bcrypt.hash;

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'D:/Proyectos/JavaScript/nodejs/assistodb/Assisto.db',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => console.error('Unable to connect to the database:', error));

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

User.sync();

module.exports = User;
