require('dotenv').config();

const axios = require('axios');
const router = require('express').Router();

const ENDPOINT = process.env.URL;

router.get('/browse', (req, res) => {
    axios.get(ENDPOINT)
        .then(plants => {
            console.log(plants)
            res.status(200).json(plants);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;