const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('chef is running');
})

const chefBio = require('./Data/chef.json');

app.get('/chefBio',(req,res)=>{
    res.send(chefBio);
})












app.listen(port, () => {
    console.log(`chef is running on port : ${port}`)
})