const db = require('../models');
const Users = db.users; 
const Posts = db.posts;

const oneToOne = async (req, res) => {

    // const findAll = await Users.findAll({
    //     // include: Posts,
    //     // where: {id : 10}

    //     attributes : ['name', 'email'],
    //     include: [{
    //         model : Posts,
    //         attributes : ['title', 'content']
    //     }],
    //     where: {id : 10}
    // })

    // res.status(200).json(findAll);
}

const belongsTo = async (req, res) => {

    // const findAll = await Posts.findAll({
    //     attributes: ['title', 'content'],
    //     include : [{
    //         model : Users,
    //         as : 'userInfo',
    //         attributes : ['name', 'email']
    //     }],
    //     where : { user_id : 10}
    // })

    // res.status(200).json(findAll);
}

const oneToMany = async (req, res) => {
    const findAll = await Users.findAll({
    attributes : ['name', 'email'],
        include: [{
            model : Posts,
            attributes : ['title', 'content']
        }],
        // where: {id : 10}
        where: {id : 10}
    })

    res.status(200).json(findAll);
}

module.exports = {
    oneToOne,
    belongsTo,
    oneToMany
}
