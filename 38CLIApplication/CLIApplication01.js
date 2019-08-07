let readlineSync = require('readline-sync');
let fs = require('fs');

let students = [];

function loadData() {
    let fileContent = fs.readFileSync('./data.json', 'utf8');
    students = JSON.parse(fileContent);
}

function showMenu() { // Hàm hiển thị danh mục
    console.log('1. Show all students');
    console.log('2. Create a new student');
    console.log('3. Save & Exit');
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
            saveAndExit();
            break;
        default:
            console.log('Wrong Option!');
            showMenu();
            break;
    }
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
}

function saveAndExit() {
    let content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, 'utf8');
}

function main() { // Hàm chính
    loadData();
    showMenu();
}
main();