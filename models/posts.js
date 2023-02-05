const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        name: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        user_id: DataTypes.STRING,
    });
    return Posts;
}