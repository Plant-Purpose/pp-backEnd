const router = require('express').Router();

const Notes = require('../../data/models/notes/notesModel');

router.get('/:plant_id', (req, res) => {
    const { plant_id } = req.params;

    Notes.get(plant_id)
        .then(notes => {
            console.log(notes)
            res.status(200).json(notes);
        })
        .catch(err => {
            console.log(err);
        })

});

module.exports = router;