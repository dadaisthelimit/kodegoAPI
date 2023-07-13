const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const taskRoutes = require('./routes/tasks');
const tasks = [];
let id = 0;
const accounts = [
    {
        id: 1,
        username: 'ean',
        password: 'password'
    },
    {
        id: 2,
        username: 'joe',
        password: 'password'
    },
    {
        id: 3,
        username: 'jane',
        password: 'password'
    }, 
    {
        id: 4,
        username: 'jill',
        password: 'password'
    }
]
app.use('/tasks', taskRoutes);
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     const isValid = accounts.find(account => account.username == username && account.password == password);
//     if (!isValid) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     } else{
//         const token = jwt.sign(isValid, 'secretkey')
//         res.json({token: token});
//     }
// })

// app.get('/tasks', (req, res) => {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = jwt.verify(token, 'secretkey');
//     const isValid = accounts.find(account => account.id == decoded.id);
//     console.log(isValid)
//     if (!isValid) {
//         return res.status(401).json({ message: 'Unauthorized' });
//     } else{
//         console.log(tasks)
//         res.json(tasks.filter((task) => task.user == decoded.id));
//     }
// })

// app.post('/tasks', (req, res) => {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = jwt.verify(token, 'secretkey');
//     const task = req.body;
//     const modifiedData = {};
//     modifiedData.id = id + 1;
//     modifiedData.user = decoded.id;
//     id++;
//     modifiedData.task = task.task;
//     modifiedData.completed = false;
//     tasks.push(modifiedData);
//     res.json(tasks);
// })

// app.patch('/tasks/:id', (req, res) => {
//     const id = req.params.id;
//     const task = tasks.find(task => task.id == id);
//     task.completed = req.body.completed;
//     res.json(tasks);
// });

// app.delete('/tasks/:id', (req, res) => {
//     console.log(tasks)
//     const id = req.params.id;
//     const task = tasks.find(task => task.id == id);
//     const index = tasks.indexOf(task);
//     tasks.splice(index, 1);
//     res.json(tasks);
// });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});