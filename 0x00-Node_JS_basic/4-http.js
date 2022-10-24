// this script creates a small server using the http module
// it should be assigned to a variable named app
// it should listen on port 1245
// it should respond to GET requests with a body of Holberton School

const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Holberton School');
}
);
app.listen(1245);
