let readlineSync = require('readline-sync');
let fs = require('fs');

let students = [];

function loadData() {
    let fileContent = fs.readFileSync('./dataStudents.json', {'encoding': 'utf8'});
    students = JSON.parse(fileContent);
}

function showStudents() {
    for (student of students) {
        console.log(student.name, student.age);
    }
}

function createStudent() {
    let name = readlineSync.question('Name: ');
    let age =  readlineSync.question('Age: ');
    let student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
    let content = JSON.stringify(students);
    fs.writeFileSync('./dataStudents.json', content, {encoding: 'utf8'});
}

function showMenu() { // Hàm hiển thị danh mục
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Exit');
    console.log('What\'s your choice?')
    let option = readlineSync.question('> ');
    switch (option) {
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            createStudent();
            showMenu();
            break;
        case '3':
            break;
        default:
            console.log('Wrong Option!');
            showMenu();
            break;
    }
}

function main() { // Hàm chính
    loadData();
    showMenu();
}
main();