// importar express
const router = require('express').Router();
// traernos el modelo user
const  {User} = require('../../models');
// si tuvieramos un controlador seria
const userController = require('../../controllers/UserController');
// importamos el encriptador
const bcrypt = require('bcryptjs');


// traernos la lista de los usuarios la ruta es como tener (/api/user/)
// router.get('/', async(req, res)=>{
//     const user = await User.findAll();
//     res.status(200).json(user);
// });

//crear un usuario la ruta es como tener (/api/user/register)
// router.post('/register', async(req,res)=>{
//     req.body.password = bcrypt.hashSync(req.body.password, 10);
//     const user = await User.create(req.body);
//     res.status(200).json(user);
// });

// usar un controlador para login
router.post('/login', userController.login);

// usar un controlador para listar los usuarios
router.use('/listar', userController.listar);
// user un controlador para registrar usuarios
router.post('/registrar', userController.registrar)

// exportar este router
module.exports = router;