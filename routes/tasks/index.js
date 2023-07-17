const router = require('express').Router();
const taskController = require('../../controllers/tasks/TaskController');
const auth = require('../../middleware/auth');

router.get('/', taskController.getTask);

router.post('/', taskController.postTask);

router.patch('/:id', taskController.patchTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;