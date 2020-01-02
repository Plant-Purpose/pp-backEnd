const router = require('express').Router();

const userRoutes = require('./userRoutes/userRoutes');

router.use(express.json())

router.use('/users', userRoutes);

module.exports = router;