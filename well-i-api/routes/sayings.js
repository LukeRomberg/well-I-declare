const express = require('express');
const router = express.Router()
const db = require('../db/connections');

router.get('/random', (req, res, next) => {
  db('sayings').then(allSayings => {
    getRandomNumber(allSayings.length)
    .then(id => {
      db('sayings').where('id', id)
      .then(saying => {
        res.status(200).json(saying)
      }).catch(err => {
        res.status(400).json(err)
      })
    })
  })
})

router.get('/all', (req,res,next)=>{
  db('sayings')
  .then(sayings=>{
    res.status(200).json(sayings)
  })
  .catch(err=>{
    res.status(400).json(err)
  })
})

function getRandomNumber(num) {
  const myFirstPromise = new Promise((resolve, reject) => {
    resolve(Math.floor(Math.random() * num))
  });
  return myFirstPromise
}

module.exports = router;
