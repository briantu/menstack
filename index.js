const express = require('express');
const app = express();
const port = 8080;

// app.use((req, res) => {
// 	console.log('WE GOT A NEW REQ!');
// 	res.send('<h1>This is my webpage!</h1>');
// });

app.get('/', (req, res) => {
	res.send('This is the home page!!');
});

app.get('/dogs', (req, res) => {
	res.send('WOOF!');
});

app.listen(port, () => {
	console.log(`LISTENING ON PORT ${port}`);
});
