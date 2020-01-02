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

// router.post('/', (req, res) => {
//     const user = req.body;
//     const full_name = user;
//     console.log(full_name);

//     if (full_name.length === 0) {
//         res
//             .status(400)
//             .json({ errorMessage: 'Please provide NAME for the user.' })
//     } else {
//         Users.insert(user)
//             .then(user => {
//                 res
//                     .status(201)
//                     .json(user)
//             })
//             .catch(error => {
//                 console.log('error on POST users', error);
//                 res
//                     .status(500)
//                     .json({ error: 'There was an error while saving the user to the database.' })
//             })
//     }
// })

module.exports = router;