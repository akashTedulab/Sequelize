// Creating columns with datatypes inside newly created table users. 
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
            // set(value){
            //     this.setDataValue('name', value+ ' xyz');
            // },
            // get(){
            //     return this.getDataValue('name') + ' '+ this.email;
            // }
        },
        email: {
            type: DataTypes.STRING,
            // defaultValue: 'test@test.com'
            allowNull : false,
            unique : true
        },
        gender: {
            type: DataTypes.STRING,
            validate : {
                // 'equals' : 'male'
                isIn : [['male', 'female']]
            }
        }
    },
    {
        // tableName: 'userdata',
        // timestamps : false,
        // createdAt : true,
        // updatedAt : false,
        // createdAt: 'create_date',
        // updatedAt: 'update_date'
    });
    return Users;
};