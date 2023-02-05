const db = require('../models');
const Users = db.users; 

const validationCount = async (req, res) => {

    try {
        let create = await Users.create({
            name: 'nami',
            email: 'nami@gmail.com',
            gender: 'female',
        })
    } catch (err) {
        // console.log(err);
        const messages = {};
        err.errors.forEach((err)=>{
            let message;
            switch(err.validatorkey){
                case 'not_unique' :
                    message = 'Duplicate Email'
                    break;
                case 'not_unique' :
                    message = 'Gender either be male oor female'
                    break;
            }
            messages[err.path] = message;
            console.log(messages)
        })
    }
    

    const respone = {
        data : "validation Ok"
    }
    res.status(200).json(respone);
}

module.exports = { 
    validationCount
}
