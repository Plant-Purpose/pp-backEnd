const router = require('express').Router();

const authRoutes = require('../middleware/auth/auth');
const userRoutes = require('./userRoutes/userRoutes');
const userPlantRoutes = require('./userPlantRoutes/userPlantRoutes');
const taskRoutes = require('./taskRoutes/taskRoutes');
const noteRoutes = require('./noteRoutes/noteRoutes');
const plantRoutes = require('./plantRoutes/plantRoutes');

const smsRoutes = require('../sms/sms_notifications');

router.use('/users', userRoutes, userPlantRoutes, taskRoutes);
router.use('/plants', plantRoutes)
router.use('/auth', authRoutes);
router.use('/notes', noteRoutes);
router.use('/sms', smsRoutes);

module.exports = router;