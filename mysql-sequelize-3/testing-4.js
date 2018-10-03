var Sequelize = require("sequelize");

var connection = new Sequelize("jsDemo", "root", "ingimar", {
  host: 'localhost',
  dialect: 'mysql'}
);

// creates the table 'articles'
const Article = connection.define('article',{
      slug: { // customized primary key 'slug'
            type: Sequelize.STRING,
            primaryKey: true
      },
      title: { 
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
            },
      body: {
            type: Sequelize.TEXT,
            //defaultValue: 'Coming soon...'
            }   
    },{
      timestamps: false, // låter blir att skapa date-kolumnerns  
      freezeTableName: true // prevents sequelize from pluralizing the table-name
      });

connection.sync()

// Note: Retrieving one  record based on id
// connection.sync().then(function(){
// Article.findById(1).then(function(article) { 
//   console.log(article.dataValues);
//   });
//  });

// Note: Retrieving all records
// connection.sync().then(function(){
// Article.findAll().then(function(articles) { 
//   console.log(articles.length);
//   });
//  });

