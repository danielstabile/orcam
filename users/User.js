const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define('tb_user', {
    login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    crm_user:{
        type: Sequelize.STRING,
        allowNull: true
    },
    profile:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {freezeTableName: true});

User.sync({force: false}).then(() => {});

module.exports = User;