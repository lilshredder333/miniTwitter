const express = require('express')
const router = express.Router()
const Whistle = require('../models/whistle')
const User = require('../models/user')

//all whistles route
router.get('/', async (req, res) => {
    res.send('All whistles')
})

//New whistle route
router.get('/new', async (req, res) => {
    try {
        const users = await User.find({})
        const whistle = new Whistle()
        res.render('whistles/new', {
            users: users,
            whistle: whistle
        })
    } catch{
        res.redirect('/whistles')
    }
})

//Create whistle route - using async bc MONGODB
router.post('/', async (req, res) => {
    res.send('Create whistles')
});


module.exports = router

