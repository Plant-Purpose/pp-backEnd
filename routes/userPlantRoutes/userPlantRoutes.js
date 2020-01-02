// const { id, plant_id } = req.params; <--- from URL Get Specific Plant By Specific User
// const { id } = req.params <--- Get All User Plants 
const router = require('express').Router();

const UserPlants = require('../../data/models/userPlants/userPlantsModel');

router.get('/:id/plants', (req, res) => {
    UserPlants.get(req.params.id)
        .then(plants => {
            console.log(plants)
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;