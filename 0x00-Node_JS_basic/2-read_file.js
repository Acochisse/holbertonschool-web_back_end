// Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js
// Create a function named countStudents. It should accept a path in argument
// The script should attempt to read the database file synchronously
// If the database is not available, it should throw an error with the text Cannot load the database
// If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
// It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines (at the end) - and they are not a valid student!

const fs = require('fs');

const countStudents = (file) => {
    if (!fs.existsSync(file)) {
        throw new Error('Cannot load the database');
    }
    const students = fs.readFileSync(file, 'utf8');
    let lines = students.split('\n');
    lines = lines.filter((line) => !== '').slice(1);
    console.log(`Number of students: ${lines.length}`);

    const fields = lines.map((line) => line.split(',')[3]);
    const uniqueFields = [...new Set(fields)];
    
    uniqueFields.forEach((field) => {
        const studentsInField = lines
            .filter((line => line.endsWith(field)))
            .map((line) => {
                const student = line.split(',');
                return student[0];
            });
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
    });
};
