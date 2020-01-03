require('dotenv').config();

const axios = require('axios');
const router = require('express').Router();

const ENDPOINT = process.env.URL;
const SECRET = process.env.SECRET;

router.get('/browse', async (req, res) => {
    try {
        const plants = await axios.get(ENDPOINT + SECRET);

        // const filtered = plants.data.map(plant => {
        //     return {
        //         id: plant.id,
        //         images: plant.images,
        //         shade_tolerance: plant.main_species.growth.shade_tolerance,
        //         resprout_ability: plant.main_species.growth.resprout_ability,
        //         ph_min: plant.main_species.growth.ph_minimum,
        //         ph_max: plant.main_species.growth.ph_maximum,
        //         seed_begin: plant.main_species.fruit_or_seed.seed_period_begin,
        //         seed_end: plant.main_species.fruit_or_seed.seed_period_end,
        //         family_name: plant.family_common_name,
        //         name: plant.common_name,
        //         growth_period: plant.main_species.specifications.growth_period
        //     }
        // });

        res.status(200).json(plants.data);
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

            const filtered = {
                id: plant.data.id,
                images: plant.data.images,
                shade_tolerance: plant.data.main_species.growth.shade_tolerance,
                resprout_ability: plant.data.main_species.growth.resprout_ability,
                ph_min: plant.data.main_species.growth.ph_minimum,
                ph_max: plant.data.main_species.growth.ph_maximum,
                seed_begin: plant.data.main_species.fruit_or_seed.seed_period_begin,
                seed_end: plant.data.main_species.fruit_or_seed.seed_period_end,
                family_name: plant.data.family_common_name,
                name: plant.data.common_name,
                growth_period: plant.data.main_species.specifications.growth_period
            }
            console.log(filtered)
            res.status(200).json(filtered);
        })
        .catch(err => {
            console.log(err);
        });
});


module.exports = router;
