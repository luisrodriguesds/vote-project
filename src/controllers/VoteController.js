const connection = require('../database/connections')
const Vote = require('../models/Vote')

module.exports = {
  async index(request, response){
    const results = await connection('votes')
    return response.render('index', {
      votes: results,
      user: request.user
    })
  },
  async create(request, response){
    
  },
  async update(request, response){

  },
  async delete(request, response){

  },
  async show(request, response){

  }
}