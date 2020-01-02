const express = require('express')
const router = express.Router();
const Tasks = require('../../models/tasks/tasks')

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

// router.get('/:id/tasks:i d/tasks',( =>  
//     Tasks.get(id)
//         .then(tasks => {
//             tasks.map(tasks => {
//                 if (tasks.completed) {
//                     tasks.completed = true
//                 } else {
//                     tasks.completed = false
//                 }
//             })
//             return res.status(200).json(tasks)
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({ message: "Error getting tasks." })
//         })
// });

// router.post('/:id/tasks', (req, res) => {

//     Tasks.add(req.body)
//         .then(newTask => {
//             res.status(201).json(newTask)
//         })
//         .catch(error => {
//             console.log(error)
//             res.status(500).json({ message: "Error adding new task." })
//         })
// });

// router.put('/:id/tasks/:task_id', (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;

//     Tasks.findById(id)
//         .then(modifyTask => {
//             if (modifyTask) {
//                 Tasks.update(changes, id)
//                     .then(updatedTask => {
//                         res.json(updatedTask);
//                     });
//             } else {
//                 res.status(404).json({ message: "Could not find task with given id." });
//             }
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({ message: "Failed to update task." });
//         });
// });

// router.delete('/:id/tasks/:task_id', (req, res) => {
//     const { id } = req.params;

//     Tasks.remove(id)
//         .then(deleted => {
//             if (deleted) {
//                 res.json({ removed: deleted });
//             } else {
//                 res.status(404).json({ message: "Could not find task with given id " });
//             }
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({ message: "Failed to delete task." });
//         });
// });

module.exports = router;