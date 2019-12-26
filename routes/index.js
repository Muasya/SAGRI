
const express = require('express');
const router = express.Router();

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
	
router.get('/', (req, res) => {
	res.render('index', {text: 'User home route'})
})

/*  This route render json data */
// router.get('/json', (req, res) => {
// 	res.json({
// })
/*  This route sends text back as plain text. */
// router.get('/send', (req, res) => {
// 	res.send('This is the Send Route')
// })
/*  This route redirects requests to Turbo360. */
// router.get('/redirect', (req, res) => {
// 	res.redirect('https://www.turbo360.co/landing')
// })

/*  This route redirects to admin portal */


router.get('/:resource/:id', (req, res) => {
  if (req.params.id=='admin' && req.query.key=='elemasterkey' && req.query.code=='cremo360') {
		res.render('index', {text: 'admin stuff'})
	}else{
		res.render('index', {text: 'User home route'})
	}

})

module.exports = router
