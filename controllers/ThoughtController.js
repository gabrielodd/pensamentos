const Tought = require('../models/Tought')
const User = require('../models/User')

//const { Op } = require('sequelize')

module.exports = class ThoughtController {
  static async showThoughts(req, res) {
    res.render('thoughts/home')
  }
}