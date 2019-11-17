const { Router } = require('express')
const { getAllArticles, getArticleById, getArticleByAuthorEmail } = require('../../controllers/articles')
const { getAllUsers } = require('../../controllers/users')
const { getAllCategories } = require('../../controllers/categories')
const { getCommentById, createComment,getCommentByAuthorId} =require('../../controllers/comments')

const route = Router()
route.get('/', async (req, res) => {

    const articles = await getAllArticles()
    const users = await getAllUsers()
    const categories = await getAllCategories()
   
    res.render('articles', {
      title: 'Articles',
      articles, users, categories
    })
  })  

  module.exports = route