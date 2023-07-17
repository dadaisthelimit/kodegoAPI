const db = require('../db')
const {DataTypes} = require('sequelize');
const task = db.sequelize.define('tasks',{
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	task:{
		type: DataTypes.STRING
	}
},{
	createdAt: true,
	updatedAt: true,
	deletedAt: true,
	tableName: 'tasks'
})

exports.model = task;