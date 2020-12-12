// importar de sequelize contrasenha( CXapfJcwO2 )
const Sequelize = require('sequelize');
// importamos el modelo de user
const UserModel = require('./users');
// conectar con una base de datos
const sequelize = new Sequelize('K8quRB7pgH', 'K8quRB7pgH', 'CXapfJcwO2', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql' 
  });
  
// instancia del modelo de user
const User = UserModel(sequelize, Sequelize);

// hacer sincronizacion con la base de datos de la nube
sequelize.sync({ force:false })
    .then(() => {
        console.log('tablas sincronizadas')
    });

// exportar
module.exports = {
    User
};    