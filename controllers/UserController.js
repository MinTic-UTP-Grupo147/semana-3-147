const User = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../models');

exports.login = async(req, res, next) =>{
    try {
        const user = await models.User.findOne({where: {email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    name: user.username,
                    email: user.email,
                    rol: user.rol,
                },'config.secret',{
                    expiresIn: 86400,
                }
                );
                res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    user: user,
                })
            } else{
                res.status(401).json({            //401 error en la contrasena
                    error: 'Error en el usuario o contraseña'
                })
            };
        } else{
            res.status(400).json({                 //400 error en el usuario  
                error: 'Error en el usuario o contraseña'
            })
        };
    } catch (error) {                                //500 error no conectarse con el servidor
        res.status(500).send({
            message: 'Error ->'
        })
        next(error);
    }; 
};

exports.listar = async(req,res)=>{
    const user = await models.User.findAll();
    res.status(200).json(user);
};

exports.registrar = async(req,res) =>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await models.User.create(req.body);
    res.status(200).json(user);
};