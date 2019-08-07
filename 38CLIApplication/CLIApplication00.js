/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
let readlineSync = require('readline-sync');
let fs = require('fs');

let contacts = [];

function loadData() {
    let readData = fs.readFileSync('./dataContacts.json', 'utf8');
    contacts = JSON.parse(readData);
}

function showContact() {
    for (contact of contacts) {
        console.log(contact.name, contact.number);
    }
}

function addNewContact() {
    let name = readlineSync.question('Name: ');
    let number = readlineSync.question('Number: ');
    contact = {
        name: name,
        number: number
    };
    contacts.push(contact);
    let content = JSON.stringify(contacts);
    fs.writeFileSync('./dataContacts.json', content, 'utf8');
}

function editContact() {
    console.log('Input a name to edit:');
    let input = readlineSync.question('> ');
    let newContact = map.contacts(function(name, number) {

    });
}

function deleteContact() {

}

function findAContact() {

}

function showMenu() {
    console.log('1. Add new contact');
    console.log('2. Edit a contact value');
    console.log('3. Delete a contact');
    console.log('4. Find a contact');
    console.log('5. Show all contacts');
    console.log('6. Exit');

    console.log('What\'s your choice?');
    let choice = readlineSync.question('> ');
    switch (choice) {
        case '1':
            addNewContact();
            showMenu();
            break;
        case '2':
            editContact();
            showMenu();
            break;
        case '3':
            deleteContact();
            showMenu();
            break;
        case '4':
            findAContact();
            showMenu();
            break;
        case '5':
            showContact();
            showMenu();
            break;
        case '6':
            break;
        default:
            console.log('Wrong Option!');
            showMenu();
            break;
    }
}

function main() {
    loadData();
    showContact();
    showMenu();
}
main();