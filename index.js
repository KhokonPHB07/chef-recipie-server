const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chefBio = require('./Data/chef.json');
const recipie = require('./Data/Recipie.json');

app.get('/', (req, res) => {
    res.send('chef is running');
});

app.get('/chefBio', (req, res) => {
    res.send(chefBio);
});

app.get('/recipie',(req,res)=>{
    res.send(recipie);
})

app.get('/chefBio/:id', async(req, res) => {
    const id = req.params.id;
    const chef = await chefBio.find((chef) => chef.id === id);
    

    if (!chef) {
        res.status(404).send('Chef not found');
    } else {
        res.send(chef);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
