const router = require('express').Router();

const authRoutes = require('../middleware/auth/auth');
const userRoutes = require('./userRoutes/userRoutes');
const userPlantRoutes = require('./userPlantRoutes/userPlantRoutes');
const noteRoutes = require('./noteRoutes/noteRoutes');

router.use('/users', userRoutes, userPlantRoutes);
router.use('/auth', authRoutes);
router.use('/notes', noteRoutes);

module.exports = router;