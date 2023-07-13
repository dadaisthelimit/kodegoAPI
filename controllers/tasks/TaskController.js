exports.getTask = (req, res) => {
	console.log('GET /tasks')
	res.send('GET /tasks')
}

exports.postTask = (req, res) => {
	console.log('POST /tasks')
	res.send('POST /tasks')
}

exports.patchTask = (req, res) => {
	console.log('PATCH /tasks/:id')
	res.send('PATCH /tasks/:id')
}

exports.deleteTask = (req, res) => {
	console.log('DELETE /tasks/:id')
	res.send('DELETE /tasks/:id')
}