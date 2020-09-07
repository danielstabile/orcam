const Sequelize = require('sequelize');

const connection = new Sequelize('csf_estimate', 'csf_estimate', 'csf_estimate',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;