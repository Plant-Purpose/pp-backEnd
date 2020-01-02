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
    const { plant_id, note_id } = req.params;
    const changes = req.body;

    Notes.update(note_id, changes)
        .then(update => {
            res.status(200).json(update);
        })
        .catch(err => {
            console.log(err);
        }); outer.del// ete('/:plant_id/:note_id', (req, res) => {
    co// nst { plant_id, note_id } = req.params;

    No// tes.remove(plant_id, note_id)
    //       .then(deleted => {
    //           if (deleted) {
    //               res.json({ removed: deleted });
    //           } else {
    //                   res.status(404).json({ message: "Could not find note with given id." })
    //           }
    //           })
    //           .catch(err => {
    //           console.log(err)
    //           res.status(500).json({ message: "Failed to delete note." })
    //       })
})// 


module.ets = rout