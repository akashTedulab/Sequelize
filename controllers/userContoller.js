const db = require('../models');
const Users = db.users; 
const { Sequelize, Op } = require('sequelize');

const addUser = async (req, res) => {
    // let data = await Users.build({name: 'kurapika', email: 'kurapika@gmail.com', gender: 'male'});
    // await data.save();

    let data = await Users.create({name: 'hisoka', email: 'hisoka@gmail.com', gender: 'male'});

    console.log(data.dataValues);

    const response = {
        data : 'OK'
    }
    res.status(200).json(response);
}




const crudOperation = async (req, res) => {

    /// Insert Data
    // let insert = await Users.create({name: 'zoldyac', email: 'zoldyac@gmail.com', gender: 'male'});
    // console.log(insert.id)

    /// Insert only required fields and ignore other fields
    // let insert = await Users.create({name: 'mikasa', email: 'mikasa@gmail.com', gender: 'female'},{
    //     fields : ['email', 'name']
    // });

    /// Update Data
    // let update = await Users.update({name: 'Issac netero', email: 'Issac@gmail.com'}, {
    //     where: {
    //         id: 10
    //     }
    // });

    /// Delete Data
    // let deleteData = await Users.destroy({
    //     where : {
    //         id: 7
    //     }
    // })

    /// Truncate Table
    // let truncate = await Users.destroy({
    //     truncate: true  
    // })

    /// Bulk Insert Data
    // let bulkInsert = await Users.bulkCreate([
    //     {name: 'gon', email: 'gon@gmail.com', gender: 'male'},
    //     {name: 'killua', email: 'killua@gmail.com', gender: 'male'},
    //     {name: 'luffy', email: 'luffy@gmail.com', gender: 'male'},
    //     {name: 'nami', email: 'nami@gmail.com', gender: 'female'},
    //     {name: 'makima', email: 'makia@gmail.com', gender: 'female'},
    // ])

    /// Find data method
    // let findData = await Users.findAll({});
    // let findOne = await Users.findOne({});

    // const response = {
    //     data : findOne
    // }
    // res.status(200).json(response);
}




const queryOperation = async (req, res) => {

    // let findAll = await Users.findAll({});
    // let findOne = await Users.findOne({});
    // let findAtt = await Users.findAll({
    //     attributes : [
    //         'name',
    //         // ['email', 'Email'],
    //         // [Sequelize.fn('Count', Sequelize.col('email')), 'Email Count'],
    //         // [Sequelize.fn('Concat', Sequelize.col('name'), ' abcd'), 'full name'],
    //     ]
    // });


    /// Exclude and Include
    // let findAtt = await Users.findAll({
    //     attributes : {
    //         exclude : ['createdAt', 'updatedAt'],D
    //         include : [
    //             [Sequelize.fn('Concat', Sequelize.col('name'), ' abcd'), 'full name']
    //         ]
    //     }
    // });


    /// Conditions

    //  let findAtt = await Users.findAll({
    //        where: {
    //         id : 3
    //        }
    //     });

    // let findAtt = await Users.findAll({
    //     where: {
        //  name : {
        //     [Op.eq] : "nami"
        //  },
        //  gender : {
        //     // [Op.eq] : "female"
        //     [Op.like] : "male"
        //  },
        // email : {
        //     [Op.like] : '%.com%'
        // }
        //  https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
        // },
        /// OrderBy method
    //      order: [
    //         ['name', 'ASC'],
    //         ['email', 'DESC']
    //     ],

    //     group : ['name'],
    //     limit : 4,
    //     offset : 1,
    //  });

    const count = await Users.count({ })
 
    const response = {
        data : count
    }
    res.status(200).json(response);
}

module.exports = {
    addUser, crudOperation, queryOperation
};