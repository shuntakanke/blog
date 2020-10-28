const express = require('express');
const connectDB = require('./config/db');
const Article = require('./models/articles');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');
const app = express();

connectDB();

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
  const articles =  await Article.find().sort({
    createdAt: 'desc'})
  res.render('articles/index',{ articles: articles})
})

app.use('/articles',articleRouter)

app.listen(5000)