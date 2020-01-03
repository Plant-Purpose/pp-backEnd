const router = require('express').Router();

const authRoutes = require('../middleware/auth/auth');
const userRoutes = require('./userRoutes/userRoutes');
const userPlantRoutes = require('./userPlantRoutes/userPlantRoutes');
const taskRoutes = require('./taskRoutes/taskRoutes');
const noteRoutes = require('./noteRoutes/noteRoutes');
const plantRoutes = require('./plantRoutes/plantRoutes');

router.use('/users', userRoutes, userPlantRoutes, taskRoutes);
router.use('/plants', plantRoutes)
router.use('/auth', authRoutes);
router.use('/notes', noteRoutes);

module.exports = router;