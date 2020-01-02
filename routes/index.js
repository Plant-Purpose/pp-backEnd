const router = require('express').Router();

const userRoutes = require('./userRoutes/userRoutes');
const userPlantRoutes = require('./userPlantRoutes/userPlantRoutes');

router.use('/users', userRoutes, userPlantRoutes);

module.exports = router;