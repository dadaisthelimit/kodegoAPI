// SHOULD BE ABLE TO CREATE A TASK
// SHOULD BE ABLE TO DELETE A TASK
// SHOULD BE ABLE TO MARK A TASK AS COMPLETE
// SHOULD BE ABLE TO MARK A TASK AS INCOMPLETE
// SHOULD BE ABLE TO VIEW ALL TASKS


const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const isValid = accounts.find(account => account.username == username && account.password == password);
    if (!isValid) {
        return res.status(401).json({ message: 'Unauthorized' });
    } else{
        res.json({token: JSON.stringify(isValid)});
    }
})

app.get('/tasks', (req, res) => {
    const isValid = accounts.find(account => account.id == req.query.id);
    if (!isValid) {
        return res.status(401).json({ message: 'Unauthorized' });
    } else{
        console.log(tasks)
        res.json(tasks.filter((task) => task.user == req.query.id));
    }
})

app.post('/tasks', (req, res) => {
    const task = req.body;
    const modifiedData = {};
    modifiedData.id = id + 1;
    modifiedData.user = req.query.id;
    id++;
    modifiedData.task = task.task;
    modifiedData.completed = false;
    tasks.push(modifiedData);
    res.json(tasks);
})

app.patch('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const task = tasks.find(task => task.id == id);
    task.completed = req.body.completed;
    res.json(tasks);
});

app.delete('/tasks/:id', (req, res) => {
    console.log(tasks)
    const id = req.params.id;
    const task = tasks.find(task => task.id == id);
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    res.json(tasks);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});