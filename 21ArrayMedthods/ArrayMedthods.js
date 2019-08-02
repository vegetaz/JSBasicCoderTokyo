let users = [
    { name: 'Tom', gender: 'male' },
    { name: 'Maria', gender: 'female' },
    { name: 'Jason', gender: 'male' },
    { name: 'Sora', gender: 'female' },
    { name: 'Tèo', gender: 'male' }
];

let userList = $('#userList');
let genderFilter = $('#genderFilter');

render(userList, users);

genderFilter.on('change', function () {
    let selectedGender = this.value;
    let filteredUsers = users.filter(function (user) {
        return user.gender === selectedGender;
    });
    render(userList, filteredUsers);
});

function render(container, items) {
    let htmlItems = items.map(function (item) {
        return '<li class="list-group-item">' + item.name + '</li>';
    });
    let html = htmlItems.join('');
    container.html(html);
}