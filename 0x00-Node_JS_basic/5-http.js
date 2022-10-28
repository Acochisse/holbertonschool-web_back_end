const http = require('http');
const countStudents = require('./3-read_file_async');
const port = 1245;

const app = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	if (req.url === '/') {
		res.write('Hello Holberton School!');
	}
	if (req.url === '/students') {
		res.write('This is the list of our students')
		try {
			const path = process.argv[2];
			let slist = countStudents(path);
			res.end(String(slist));
		} catch (err) {
			res.end(err.message);
		}
	}
	res.end();
});

app.listen(port);
module.exports = app;