const config = require('./config')
const superagent = require('superagent')

const _fetch = searchQuery => {
  
  return superagent.get(`${config.url}${searchQuery}`)

    .then(response => response.body)
    .catch(error => error.response.body)
}

exports.search = term => {
  return _fetch(`&q=${term}`)

}
