// reads database.csv and returns the subjects asyncronously

const fs = require('fs');

const countStudents = (path) => {
    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            throw new Error('Cannot load the database');
        }
        const students = data.toString().split('\n');
        students.shift();
        students.pop();
        console.log(`Number of students: ${students.length}`);
        const subjects = {};
        for (const row of students) {
            const student = row.split(',');
            if (!subjects[student[3]]) subjects[student[3]] = [];
            subjects[student[3]].push(student[0]);
        }
        for (const subject in subjects) {
            if (subject) {
                console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
            }
        }
    });
}
module.exports = countStudents;