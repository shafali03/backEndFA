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
            id: '123',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bike',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send('this is working');
})

//SignIn
app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
        res.json('success')
    } else {
        res.status(400).json('error logging in')
    }
})

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