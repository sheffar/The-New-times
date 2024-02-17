
const express = require('express');
const app = express();
const port = 3000;
const path = require('path')

//let url;
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/hello', (req, res) => {
	res.send('Hello World!')
});

app.get('/news/:urll/:imageurl', (req, res) => {
	//res.send(req.params);
	url = req.params.urll;
	imageUrl = req.params.imageurl;
	console.log(req.params.stuff)
	let page = 'john doe';
	image = `<img src='${imageUrl}' alt='img' > `;
	axios.get(url).then(function(r1) {
		let dom = new JSDOM(r1.data, {
			url
		});
		let article = new Readability(dom.window.document).parse();
		page = article.textContent;
		res.render('display', { page, image });
		//console.log(article.textContent);
	})

});

app.listen(port, () => {
	console.log(`The site is running on ${port}`)
});

// we need axios to make HTTP requests
const axios = require('axios');
//const axios = require('axios/dist/node/axios.cjs');

// and we need jsdom and Readability to parse the article HTML
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');


