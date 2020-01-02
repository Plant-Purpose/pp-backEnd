const router = require('express').Router();

const Users = require('../../models/users/usersModel.js');


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