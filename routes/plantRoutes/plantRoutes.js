require('dotenv').config();

const axios = require('axios');
const router = require('express').Router();

const ENDPOINT = process.env.URL;
const SECRET = process.env.SECRET;

router.get('/browse', async (req, res) => {
    try {
        const plants = await axios.get(ENDPOINT + SECRET);

        res.status(200).send(plants);
    } catch (err) {
        console.log(err);
    }
    // axios.get(ENDPOINT + SECRET)
    //     .then(plants => {

    //         res.status(200).json(plants);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
});

router.get('/browse/:id', (req, res) => {
    const { id } = req.params;
    axios.get(`${ENDPOINT}/${id}/${SECRET}`)
        .then(plant => {
            console.log(plant)
            res.status(200).json(plant);
        })
        .catch(err => {
            console.log(err);
        });
});


module.exports = router;