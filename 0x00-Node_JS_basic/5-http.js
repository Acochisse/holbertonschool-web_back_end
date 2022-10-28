// this script creates a small server using the http module
// it should be assigned to a variable named app
// it should listen on port 1245
// it should respond to GET requests with a body of Holberton School

const http = require('http');
const countStudents = require('./3-read_file_async');
const DATABASE = process.argv[2];

const port = 1245;

const app = http.createServer(async (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');

	const { url } = req;
	if (url === '/') {
		res.write('Hello Holberton School!');
	
	if (url === '/students') {
		res.write('This is the list of our students\n');
    try {
      const returnValue = await countStudents(DATABASE);
      res.write(`Number of students: ${returnValue.students.length}\n`);
      res.write(
        `Number of students in CS: ${
          returnValue.studentsByCS.length
        }. List: ${returnValue.studentsByCS.join(", ")}\n`
      );
      res.write(
        `Number of students in SWE: ${
          returnValue.studentsBySWE.length
        }. List: ${returnValue.studentsBySWE.join(", ")}`
      );
    } catch (error) {
      res.statusCode = 404;
      res.end(error.message);
    }
  }
  res.end();
});
	
app.listen(port);
