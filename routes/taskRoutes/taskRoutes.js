const express = require('express')
const router = express.Router();
const Tasks = require('../../models/tasks/tasks')

router.get('/:id/tasks', (req, res) => {
    Tasks.get()
        .then(tasks => {
            tasks.map(tasks => {
                if (tasks.completed) {
                    tasks.completed = true
                } else {
                    tasks.completed = false
                }
            })
            return res.status(200).json(tasks)
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error getting tasks." })
        })
});

router.get('/:id/tasks/:task_id', (req, res) => {

    Tasks.findById(id, task_id)
        .then(findTask => {
            res.status(200).json(findTask)
        })
        .catch(err => {
            console.log(err)
        });
});

router.post('/:id/tasks', (req, res) => {

    Tasks.add(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Error adding new task." })
        })
});

router.put('/:id/tasks/:task_id')

module.exports = router;