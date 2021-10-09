var express = require('express');
var router = express.Router();
let {Category, Answer, Question} = require('../lib/models')

// Database Tables
// Category - GET
// Question - GET, POST
// Answer - GET, POST

// RESTful routes for our API
// GET Categories
// http://localhost:3000/api/categories

// GET Questions
// http://localhost:3000/api/categories/:categoryId/questions
// POST Questions
// http://localhost:3000/api/categories/:categoryId/questions


// GET Answers
// http://localhost:3000/api/questions/:questionId/answers
// POST Answers
// http://localhost:3000/api/questions/:questionId/answers

// GET /categories
router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll({})
    res.json(categories)
});

router.post('/categories/:categoryId/questions', async function(req, res, next) {
    // HINT: req.query, req.query.questionId
    console.log('req.body', req.body)
    console.log('req.params', req.params)
    req.body.categoryId = req.params.categoryId
    console.log('the final body is', req.body)
    let question = await Question.create(req.body)
    res.json(question)
});


router.get('/', function(req, res, next) {
    res.send('This is the information from the API router')
});

module.exports = router;
