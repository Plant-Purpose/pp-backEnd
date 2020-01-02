const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../../data/models/users/usersModel');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 7);
    user.password = hash;

    Users.add(user)
        .then(({ id }) => {
            res.status(201).json({ status: 201, message: id });
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'registration failed' });
        });
});



module.exports = router;