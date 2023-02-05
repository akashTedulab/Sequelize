const db = require('../models');
const Users = db.users; 

const getterSetter = async (req, res) => {

    // const set = await Users.create({name: 'netero', email: 'netero@gmail.com', gender: 'male'});
    const find = await Users.findAll({})

    const response = {
        data: find
    }
    res.status(200).json(response);
}

module.exports  = {
    getterSetter
}