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

router.post('/login', (req, res) => {
    let { email, password } = req.body;

    Users.findBy({ email })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                // sign in token
                const token = signToken(user);
                //send the token
                res.status(200).json({
                    token,
                    message: `Welcome ${user}!`,
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json({ error: "Unable to Login User", error });
        });
});


function signToken(user) {
    const payload = {
        email: user.email,
        subject: user.id,
    }
    const secret = process.env.SECRET || "this is my secret, i sleep eyes wide open.";
    const options = {
        expiresIn: '1h',
    };
    return jwt.sign(payload, secret, options)
}
module.exports = router;