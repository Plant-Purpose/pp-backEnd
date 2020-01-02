const router = require('express').Router();

const Users = require('../../data/models/users/usersModel');

// Sorry, that was dumb :)
router.get('/', async (req, res) => {
    await Users.get()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err)
        })
});

router.get('/:id', async (req, res) => {
    await Users.getById(req.params.id)
        .then(user => {
            console.log(res)
            res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
        })
})


module.exports = router;