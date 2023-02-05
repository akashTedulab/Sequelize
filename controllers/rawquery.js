const db = require('../models');
const Users = db.users; 
const {Sequelize, QueryTypes} = require('sequelize');

const rawQuery = async (req, res) => {

    // const users = await db.sequelize.query('select * from users where gender IN(:gender)', {
    // const users = await db.sequelize.query('select * from users where gender = $gender', {
    const users = await db.sequelize.query('select * from users where email LIKE :searchEmail', {
        type: QueryTypes.SELECT,
        // model : 'users',
        // mapToModel : true,
        // raw : true

        // replacements : {gender: 'male'}  // gender =:gender
        // replacements : ['male']  // gender = ?
        // replacements : {gender: ['male', 'female']}  // gender IN(:gender)
        // bind : {gender: 'male'} // gender = $gender
        replacements : {searchEmail : '%@gmail.com'} // email LIKE :searchEmail
    })

    const response = {
        data : 'Raw query',
        record : users
    }
    res.status(200).send(response);
}

module.exports = {
    rawQuery
}