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

// Note: Adding a record
//connection.sync().then(function(){
// Article.create({
//   title: 'my demo title',
//   body: 'lorem ipsum'
//  });
// });

// Note: Retrieving one  record based on id
// connection.sync().then(function(){
// Article.findById(1).then(function(article) { 
//   console.log(article.dataValues);
//   });
//  });

// Note: Retrieving all records
connection.sync().then(function(){
 Article.findAll().then(function(articles) { 
   console.log(articles.length);
   });
 });

