const Sequelize = require("sequelize"),mysql=('mysql');
const connection = new Sequelize("jsDemo", "root", "ingimar");
const Article = connection.define("article",{
      title: Sequelize.STRING,
      content: Sequelize.STRING   
    });
connection.sync({logging: console.log});
