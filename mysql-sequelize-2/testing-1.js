var Sequelize = require("sequelize");
var connection = new Sequelize("jsDemo", "root", "ingimar", {
  host: 'localhost',
  dialect: 'mysql'}
);
// creates the table 'articles'
const Article = connection.define('article',{
      title: Sequelize.STRING,
      body: Sequelize.TEXT   
    });

connection.sync({logging: console.log});
