const router = require('express').Router();

const Users = require('../../data/models/users/usersModel');


router.get('/', async (req, res) => {
    await Users.get()
        .then(res => {
            res.status(200).json(res);
        })
        .catch(err => {
            console.log(err)
        })
});

router.get('/:id', async (req, res) => {
    await Users.getById(req.params.id)
        .then(res => {
            console.log(res)
            res.status(200).json(res)
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router;