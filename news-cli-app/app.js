const color = require('colors/safe')
const inquirer = require('inquirer')
const news = require('newsapp')

async function _displaySearch(results) {
  const {
    status,
    totalResults,
    articles
} = results

const [source, author, title, description,url, urlToImage,publishedAt, content] = articles
  const displayArticles = articles.map(article => {

    return {name: `${article.title}`, author: `${article.author}`,
    description: `${article.description}`, publishedAt: `${article.publishedAt}`}
  })
  return inquirer.prompt([{
        type: 'list',
        message: 'select a article',
        name: 'articles',
        choices: displayArticles,


    }])

}
const findAndRemove = (current, use) => {
    return current.filter(article => use.includes(article.title))
}


const print = a => {

const [{source, author, title, description,url, urlToImage,publishedAt, content}] = a
  console.log("")
  console.log(`Title: ${title}`)
  console.log(`Author: ${author}`)
  console.log(`Url: ${url}`)
  console.log(`Publish Date: ${publishedAt}`)


}





async function search(keyword) {
  const newsQuery = await news.search(keyword)

  const listArticles = await _displaySearch(newsQuery)
  const pickedArticle = findAndRemove(newsQuery.articles, listArticles.articles)
  print(pickedArticle)
}
module.exports = {
  search
}
