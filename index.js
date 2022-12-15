const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000
mongoose.set('strictQuery', false);

// app.use(bodyparser.json(express))

//schema
const punhalModel = require('./punhal')

mongoose.connect('mongodb://localhost:27017/guiadearmas',{useNewUrlParser: true, useUnifiedTopology: true});

//carrega o schema no model
const Dagger = mongoose.model('Daggers',punhalModel);

const dagger = new Dagger({
    title: "Punhal",
    description: "Possui lâmina dupla e ponta para permitir uma melhor perfuração. Perfeito para assassinos e ladrões devido à facilidade de ser ocultada.",
    rpgSistem:{
        d20:{damage: "1d3", decisive: "20/x3"},
        daemon:{damage: "1d3", initiative: "-2"},
        whitewolf:{damage: "For+1"},
        gurps:{damage: "BAL-2/GPD", max: "1D+1"},
        opera:{ga:"+1/0",damage: "D2"},
    },
    weight: {weight:150, uom:"g" },
    price: {coin:"sp", min:8, max:12},
    size:{ min:12, max:25, uom:"cm" },
    damage: "Perfuração / corte",
})

app.listen(PORT,()=>{
    console.log('Sistema logado na porta', PORT)
})
// dagger.save();

