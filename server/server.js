const express = require('express');
const app = express();
const path = require('path');


const publicPath = path.join(__dirname, '..', 'public'); 
const port = process.env.PORT || 8000;

app.use(express.static(publicPath));

app.get('*', (req, response) => {
	response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
});