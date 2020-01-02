// const { id, plant_id } = req.params; <--- from URL Get Specific Plant By Specific User
// const { id } = req.params <--- Get All User Plants 
const router = require('express').Router();

const UserPlants = require('../../data/models/userPlants/userPlantsModel');

router.get('/:id/plants', (req, res) => {
    UserPlants.get(req.params.id)
        .then(plants => {
            res.status(200).json(plants);
        })
        .catch(err => {
            console.log(err)
        });
});

router.get('/:id/plants/:plant_id', (req, res) => {
    const { id, plant_id } = req.params;

    UserPlants.findById(id, plant_id)
        .then(plant => {
            res.status(200).json(plant);
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;