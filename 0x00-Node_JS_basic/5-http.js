// this script creates a small server using the http module
// it should be assigned to a variable named app
// it should listen on port 1245
// it should respond to GET requests with a body of Holberton School

const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = http
    .createServer(async (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.statusCode = 200;
        res.write('This is the list of our students\n');

        await countStudents(process.argv[2])
        .then((data) => {
            const fields = Object.keys(data);

            const total = fields.reduce(
                (acc, curr) => acc + data[curr].numStudents,
                0,
            );

            res.write(`Number of students: ${total}\n`);
            for (let i = 0; i < fields.length; i += 1) {
                res.write(
                    `Number of students in ${fields[i]}: ${
                        data[fields[i]].numStudents
                    }. `,
                );
                res.write(`List: ${data[fields[i]].names.join(', ')}`);

                if (i !== fields.length - 1) {
                    res.write('\n');
                }
            }
        })
        .catch((err) => {
            res.write(err.message);
        });
        .finally(() => {
            res.end();
        }
    });
    .listen(port);

module.exports = app;
