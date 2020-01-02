const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../../data/models/users/usersModel');

// api/auth/register
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 7);
    user.password = hash;

    Users.insert(user)
        .then(({ id }) => {
            res.status(201).json({ status: 201, message: id });
        })
        .catch(error => {
            console.log(error)
        });
});


module.exports = router;