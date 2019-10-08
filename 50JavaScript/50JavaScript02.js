// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"

// cách 1
function capitalize(str) {
    var value = [];
    var arr = str.split(" ");
    for (var word of arr) {
        value.push(word[0].toUpperCase() + word.slice(1))
    };
    return value.join(' ');
}


//cách 2

function capitalize(str) {
    var result = str[0].toUpperCase();
    for (var i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

capitalize('hi! my name is lem');