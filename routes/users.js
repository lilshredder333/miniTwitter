const express = require('express')
const router = express.Router()
const User = require('../models/user')

//all users route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try{
        const users = await User.find(searchOptions)
        res.render('users/index', {
            users: users, 
            searchOptions: req.query
        })
    } catch{
        res.redirect('/')
    }
})


//New user route
router.get('/new', async (req, res) => {
    res.render('users/new', { user: new User() })

})

//Create new user route - using async bc MONGODB
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name
    });

    try {
        const newUser = await user.save()
        res.redirect('/users');
        /* res.redirect(`users/${newUser.id}`) */

    } catch {
        res.render('users/new', {
            user: user,
            errorMessage: "Error creating User"
        });
    }

    /*  user.save()
         .then(newUser => {
             res.redirect('/users');
         })
         .catch(err => {
             res.render('users/new', {
                 user: user,
                 errorMessage: "Error creating User"
             });
         }); */
});


module.exports = router

