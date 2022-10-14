const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 8000;
const allrouters = require('../routers/routers')
const app = express();

mongoose.connect("mongodb://localhost:27017/StudentDB", {useNewUrlParser: true})
.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log(err)
})

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json

app.use('/', allrouters)

app.listen(PORT, () => {
    console.log(`Server is running live on port no.${PORT}`);
})
