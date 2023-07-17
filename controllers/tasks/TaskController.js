const taskModel = require('../../models/taskModel.js').model;
exports.getTask = async (req, res) => {
	const tasks = await taskModel.findAll();
	res.send(tasks)
}

exports.postTask = async (req, res) => {
	const addedTask = await taskModel.create({
		task: req.body.task
	})
	res.send(addedTask);
}

exports.patchTask = async (req, res) => {
	const updatedTask = await taskModel.update({
		task: req.body.task
	}, {where: {id: req.params.id}})
	res.send(updatedTask)
}

exports.deleteTask = async (req, res) => {
	const deletedTask = await taskModel.destroy({where:{id: req.params.id}})
	res.send({affectedRows:deletedTask})
}