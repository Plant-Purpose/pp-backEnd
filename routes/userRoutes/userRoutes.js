const router = require('express').Router();

const Users = require('../../data/models/users/usersModel');


router.get('/', (req, res) => {
    Users.get()
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
});

module.exports = router;