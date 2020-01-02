const router = require('express').Router();

const authRoutes = require('../middleware/auth/auth');
const userRoutes = require('./userRoutes/userRoutes');
const userPlantRoutes = require('./userPlantRoutes/userPlantRoutes');

router.use('/users', userRoutes, userPlantRoutes);
router.use('/auth', authRoutes);

module.exports = router;