//ROUTES for Pokemon----------------- 
// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

//model for pokemon
const Pokemon = require('../models/pokemon')

//MIDDLEWARE--------------------------

//function to send 404 when non-existent doc is requested
const handle404 = customErrors.handle404

//function to send 401 when user tries to modify resource owned by another
const requireOwnership = customErrors.requireOwnership

//remove blank fields from req.body
const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

//instantiate router
const router = express.Router()