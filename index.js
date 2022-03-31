const express = require('express');
const cors = require('cors');

const app = express();
const app = cors();


app.use(express.json())
app.use(cors())

app.listen(4004,() => {
    console.log('Docked at port 4004')
});

app.post("/api/email", register);

app.get("/api/bodyweweight", (req, res) =>  {
let bodyType= ["underweight","healthy", "overweight", "obese"];
res.status(200)}
