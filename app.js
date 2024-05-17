
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

// and we need jsdom and Readability to parse the article HTML
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');


// const express = require('express');
// const app = express();
// const port = 3000;
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
// app.get('/hello', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/news/:urll/:imageurl', (req, res) => {
//   const url = req.params.urll;
//   const imageUrl = req.params.imageurl;

//   axios.get(url).then(function (r1) {
//     const dom = new JSDOM(r1.data, {
//       url
//     });
//     const article = new Readability(dom.window.document).parse();
//     const page = article.textContent;
//     console.log(page);
//     const image = `<img src='${imageUrl}' alt='img' > `;
//     const displayHTML = fs.readFileSync(path.join(__dirname, 'public', './display.html'), 'utf8');
//     // const modifiedHTML = displayHTML.replace('{{page}}', page).replace('{{image}}', image);
//     const modifiedHTML = displayHTML
    
//     .replace('<div class="display_left_img">', `<div class="display_left_img">${image}`)
//     .replace('<div class="display_left_content">', `<div class="display_left_content">${page}`);
//     res.send(modifiedHTML);
//   });
// });

// app.listen(port, () => {
//   console.log(`The site is running on ${port}`);
// });

// // we need axios to make HTTP requests
// const axios = require('axios');

// // and we need jsdom and Readability to parse the article HTML
// const { JSDOM } = require('jsdom');
// const { Readability } = require('@mozilla/readability');

// const fs = require('fs');



// const express = require('express');
// const app = express();
// const port = 3000;
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
// app.get('/hello', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/news/:urll/:imageurl', (req, res) => {
//   const url = req.params.urll;
//   const imageUrl = req.params.imageurl;

//   axios.get(url).then(function (r1) {
//     const dom = new JSDOM(r1.data, {
//       url
//     });
//     const article = new Readability(dom.window.document).parse();
//     const page = article.textContent;
//     console.log(page);
//     const image = `<img src='${imageUrl}' alt='img' > `;

//     // Get the HTML elements using their IDs
//     const displayLeftImg = document.getElementById('displayLeftImg');
//     const displayLeftContent = document.getElementById('displayLeftContent');

//     // Append the image and text content to the respective divs
//     displayLeftImg.innerHTML = image;
//     displayLeftContent.innerHTML = page;

//     // Send the modified HTML to the browser
//     res.send(modifiedHTML);
//   });
// });

// app.listen(port, () => {
//   console.log(`The site is running on ${port}`);
// });

// // Dependencies
// const axios = require('axios');
// const { JSDOM } = require('jsdom');
// const { Readability } = require('@mozilla/readability');
// const fs = require('fs');