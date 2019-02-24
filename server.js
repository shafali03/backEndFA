const express = require('express');
const bodyParser = require('body-parser')

const app = express()



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