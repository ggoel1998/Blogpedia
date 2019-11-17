const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'mysql',
  database: 'blogdb',
  username: 'bloguser',
  password: 'blogs',
})

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  // profile:{
  //   type:Sequelize.STRING,
  //   allowNull:false,
  // },
})

const Article = db.define('article', {
  title: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  subtitle: Sequelize.STRING(150),
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
})

const Comment = db.define('comment', {
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
})

const Category = db.define('category', {
  name: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true
  },
})

Article.belongsTo(User, { as: 'author' })
User.hasMany(Article, { as: 'author' })

Comment.belongsTo(User, { as: 'commentor' })
User.hasMany(Comment, { as: 'commentor' })

Comment.belongsTo(Article)
Article.hasMany(Comment)

Article.belongsToMany(Category, {through: 'article_category'})
Category.belongsToMany(Article, {through: 'article_category'})

module.exports = {
  db,
  Article,
  User,
  Comment,
  Category
}
