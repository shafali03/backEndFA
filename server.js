const express = require('express');
const bodyParser = require('body-parser')


const app = express()


app.use(bodyParser.json())
const database = {
    users: [
        {
            id: '123',
            name: 'Ali',
            email: 'Ali@gmail.com',
            password: 'car',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bike',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})

//SignIn
app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json('success')
    } else {
        res.status(400).json('error logging in')
    }
})

//register
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: 'email',
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(database.users[database.users.length - 1])
})

// profile
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            return res.json(user);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

//image
app.post('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

// if the user id matches then we will respond with the user.entries and will increase the user entries ++




app.listen(3000, () => {
    console.log('app is running on port 3000');
})



/*

/ --> res = this is working

/signin --> post = success / fail

/register --> Post = user

/profile/: userId --> GET user

/image --> PUT --> user

 */