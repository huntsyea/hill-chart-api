const express = require('express');
const app = express();
const generateChart = require('./lib/chart-gen');
const port = process.env.PORT || 8080;

app.use(express.static('.'));

app.get('/api', (req, res) => {
	res.setHeader('Content-Type', 'image/svg+xml')
	res.send(generateChart({ scopes: req.query.s.split(',') }))
});

app.get('*', function(req, res){
	res.status(404).send('<h1>Error 404</h1><hr><p>Page not found</p>');
});

app.listen(port, function(){
	console.log(`Server started on http://localhost:${port}`);
});
