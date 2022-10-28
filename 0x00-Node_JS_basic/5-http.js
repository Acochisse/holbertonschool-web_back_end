const http = require('http');
const countStudents = require('./3-read_file_async');
const port = 1245;

const app = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	if (req.url === '/') {
		res.write('Hello Holberton School!');
	}
	if (req.url === '/students') {
		countStudents(process.argv[2])
			.then((data) => {
				res.write(`This is the list of our students' + ${data}`);
			})
			.catch((err) => {
				res.write(err.message);
			});
	}

	res.end();
});

app.listen(port);
module.exports = app;