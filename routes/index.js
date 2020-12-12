// importar express
const router = require('express').Router();
// traernos el users de api
const apiRouterUser = require('./api/users')

// decirle que use el apiRouterUser
router.use('/users', apiRouterUser);


// esportamos router
module.exports = router;