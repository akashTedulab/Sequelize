// Importing Sequelize and Export this file in app.js
const { Sequelize, DataTypes } = require('sequelize'); 

// Connect to database using sequelize
const sequelize = new Sequelize('demo', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: true
});

// Checking for connection established or not
sequelize.authenticate()
.then(() => {console.log('Connection has been established successfully.');})
.catch((err) => {console.log("Error" + err);}); 

// Creating Table using db.squlelize.sync() function;
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync( { force: false } )
.then(() => {
    console.log('Database has been synced successfully.');
})

db.users = require('./users')(sequelize, DataTypes);
db.posts = require('./posts')(sequelize, DataTypes);

// db.users.hasOne(db.posts, {foreignKey : 'user_id'});
db.users.hasMany(db.posts, {foreignKey : 'user_id'});
db.posts.belongsTo(db.users, {foreignKey : 'user_id', as : 'userInfo'});

module.exports = db;

