const router = require('express').Router();

const Notes = require('../../data/models/notes/notesModel');

router.get('/:plant_id', (req, res) => {
    const { plant_id } = req.params;

    Notes.get(Number(plant_id))
        .then(notes => {
            console.log(notes)
            res.status(200).json(notes);
        })
        .catch(err => {
            console.log(err);
        })

});

router.get('/:plant_id/:note_id', (req, res) => {
    const { plant_id, note_id } = req.params;

    Notes.findById(plant_id, note_id)
        .then(note => {
            console.log(note)
            res.status(200).json(note);
        })
        .catch(err => {
            console.log(err);
        })
});

router.post('/:plant_id', (req, res) => {
    const plantNote = req.body;

    Notes.add(plantNote)
        .then(plant => {
            res.status(201).json(plant);
        })
        .catch(err => {
            console.log(err);
        });
});

router.put('/:plant_id/:note_id', (req, res) => {
    const { note_id } = req.params;
    const changes = req.body;

    Notes.update(note_id, changes)
        .then(update => {
            res.status(200).json(update);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;