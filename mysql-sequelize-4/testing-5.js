var Sequelize = require("sequelize");

var connection = new Sequelize("jsDemo", "root", "ingimar", {
  host: 'localhost',
  dialect: 'mysql'}
);

// creates the table 'articles'
const Article = connection.define('article',{
      title: { 
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len : {
                  args: [10,150], // min and max-length
                  msg: 'please enter at title with at least 10 char and max 150'
                 }              
              }
      },
      body: {
            type: Sequelize.TEXT,
            //defaultValue: 'Coming soon...'
            }   
    },{
      timestamps: false, // låter blir att skapa date-kolumnerns  
      freezeTableName: true // prevents sequelize from pluralizing the table-name
      });

// Note: Adding a record
connection.sync({
logging:console.log    
  }).then(function(){
 return Article.create({
   title: 'my',
   body: 'lorem lorem lorem'
  });
 }).catch(function(error){
   console.log(error);
  });



