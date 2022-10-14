const express = require("express");

const Router = express.Router();

const db = require('../models/db');

// HOme page
Router.get('/', (req,res) => {
   res.render('home')
});



// Creating or Inserting the data in database

Router.post('/add', (req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    // console.log(fname,email)
    const DB = new db({
        name , email
    })
    DB.save(err => {
        if(err){
            console.log(err)
        }
        else {
            res.redirect('/')
        }
    })
})
// Showing or Displaying the data

Router.get('/show', (req,res) => {
    db.find((err, docs) => {
        if(err){
            console.log(err);
        }
        else {
            res.render('show', {
                Students : docs
            })
        }
    })
})

// Edit or Update data in the database


Router.get('/edit/:id', (req,res) => {
    db.findByIdAndUpdate({_id:req.params.id}, req.body,{new:true},(err,docs) => {
        if(err){
            console.log(err);
        }
        else{
            res.render('edit', {studentdata : docs});
        }
    })
})

Router.post('/edit/:id', (req,res) => {
    db.findByIdAndUpdate({_id:req.params.id}, req.body,(err,docs) => {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect('/show'); 
        }
    })
})

Router.get('/delete/:id', (req,res) => {
    db.findByIdAndDelete({_id:req.params.id}, req.body, (err,docs) => {
        if(err){
            console.log(err);
        }
        else {
            console.log("Deleted Successfully");
            res.redirect('/show');
        }
    })
})

module.exports = Router;