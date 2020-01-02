const router = require('express').Router();
const Tasks = require('../../data/models/tasks/tasks');

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Tasks.get(id)
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
    const { id, task_id } = req.params;

    Tasks.findById(id, task_id)
        .then(task => {
            console.log(task)
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err);
        });
});


router.post('/:id/tasks', (req, res) => {
    const userTask = req.body;

    Tasks.add(userTask)
        .then(task => {
            res.status(201).json(task);
        })
        .catch(err => {
            console.log(err);
        });
});

router.put('/:id/tasks/:task_id', (req, res) => {
    const { task_id } = req.params;
    const changes = req.body;

    Tasks.update(task_id, changes)
        .then(update => {
            res.status(200).json(update);
        })
        .catch(err => {
            console.log(err);
        });
});

router.delete('/:id/tasks/:task_id', (req, res) => {
    const { task_id } = req.params;

    Tasks.remove(task_id)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            console.log(err)
        });
});

module.exports = router;