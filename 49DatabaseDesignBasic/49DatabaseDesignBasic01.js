/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
var bookshelves = [{
        id: 0,
        books: [0, 1, 3, 4]
    },
    {
        id: 1,
        books: [2, 5, 6]
    }
];

var books = [{
        id: 0,
        title: 'Coders-Tokyo',
        author: 'Thinh Pham',
        shelfId: 0
    },
    {
        id: 1,
        title: 'JavaScript',
        author: 'Thinh Pham',
        shelfId: 0
    },
    {
        id: 2,
        title: 'CSS-Thinh Pham',
        author: 'Thinh Pham',
        shelfId: 1
    },
    {
        id: 3,
        title: 'Conan',
        author: 'Aoyama Gosho',
        shelfId: 0
    },
    {
        id: 4,
        title: 'Naruto',
        author: 'Masashi Kishimoto',
        shelfId: 0
    },
    {
        id: 5,
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        shelfId: 1
    }
];

var users = [{
        id: 0,
        userName: 'Lem Điêng',
        password: '042019',
        borrowedBooks: [1, 5]
    },
    {
        id: 1,
        userName: 'Sứt Ngáo',
        passWord: '042019',
        borrowedBooks: [2, 3]
    },
    {
        id: 2,
        useName: 'Nhi Đồng',
        passWord: '671993',
        borrowedBooks: [2, 4]
    }
];

var borrowedBooks = [{
        id: 1,
        borrowFor: 3,
        dayLeft: -2,
        user: 0,
        borrowedAt: 'Sep 8 2018 07:20'
    },
    {
        id: 5,
        borrowFor: 2,
        dayLeft: 1,
        user: 0,
        borrowedAt: 'Sep 9 2018 07:21'
    },
    {
        id: 2,
        borrowFor: 5,
        dayLeft: -1,
        user: 1,
        borrowedAt: 'Sep 10 2018 09:20'
    },
    {
        id: 3,
        borrowFor: 3,
        dayLeft: -2,
        user: 1,
        borrowedAt: 'Sep 10 2018 09:20'
    }
];

var history = [{
    id: 0,
    bookId: 1,
    user: 0,
    borrowedAt: 'Sep 8 2018 07:20',
    returnedAt: 'Sep 10 2018 9:20'
}];

function getDaysOverdue(userName) {
    var getUser = users.find(x => {
        return x.userName === userName;
    });


    var books = borrowedBooks.filter(x => {
        return getUser.id === x.user && x.dayLeft < 0;
    });


    var dayLeft = books.reduce((x, y) => {
        return x + Math.abs(y.dayLeft);
    }, 0);
    console.log(`Sách được mượn bởi ${userName}, đã quá hạn ${dayLeft} ngày`);
}

getDaysOverdue('Lem Điêng');
getDaysOverdue('Sứt Ngáo');

function getHistory() {
    for (let data of history) {
        var book = data.bookId;
        dataBook = books.find(x => {
            return x.id === book;
        });

        var user = data.user;
        dataUser = users.find(x => {
            return x.id === user;
        });

        console.log(`${dataUser.userName} đã mượn 1 cuốn sách có tên là '${dataBook.title}' vào ngày ${data.borrowedAt} và đã trả lại vào ngày ${data.returnedAt}.`);
    }

}

getHistory();