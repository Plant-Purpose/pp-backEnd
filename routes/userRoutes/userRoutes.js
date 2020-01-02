const router = require('express').Router();

const Users = require('../../data/models/users/usersModel');


router.get('/', (req, res) => {
    Users.get()
        .then(res => {
            res.status(200).json(res);
        })
        .catch(err => {
            console.log(err)
        })
});

router.get('/:id', (req, res) => {
    Users.getById(req.params.id)
        .then(res => {
            console.log(res)
            res.status(200).json(res)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;