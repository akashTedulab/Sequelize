const db = require('../models');
const Users = db.users; 
const { Sequelize, Op } = require('sequelize');

const finderData = async (req, res) => {
    // let findAll = await db.users.findAll({});
    // let findOne = await db.users.findOne({});
    // let findPk = await db.users.findPk(5);
    // let findAndCount = await db.users.findAndCountAll({
    //     where : {
    //         email : 'gon@gmail.com'
    //     }
    // });
    let [find , create] = await db.users.findOrCreate({
        where : {name : 'dummy'}, 
        defaults : {
            name : 'dummy',
            gender : 'dummy@gmail.com'
        }
    })

    const response = {
        find : find,
        add : create
    }
    res.status(200).send(response);
}

module.exports = { 
    finderData
}