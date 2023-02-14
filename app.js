const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/amigosecreto', {useNewUrlParser: true});

const personSchema = new mongoose.Schema({
  name: String,
  email: String
});

const Person = mongoose.model('Person', personSchema);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});

app.post('/person', (req, res) => {
  const person = new Person({
    name: req.body.name,
    email: req.body.email
  });

  person.save((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(person);
    }
  });
});

app.get('/person', (req, res) => {
  Person.find((error, people) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(people);
    }
  });
});

app.put('/person/:id', (req, res) => {
  Person.findByIdAndUpdate(req.params.id, req.body, (error, person) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(person);
    }
  });
});

app.delete('/person/:id', (req, res) => {
  Person.findByIdAndRemove(req.params.id, (error, person) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(person);
    }
  } )})



