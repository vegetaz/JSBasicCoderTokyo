/**
* Sort an array from shortest string to longest
*/

function lengthSort(arr) {
    return arr.sort(function (s1, s2) {
        return s1.length - s2.length;
    });
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));
        // ["by", "dog", "wolf", "eaten", "family"]
        // Gợi ý: độ dài của 1 string = string.length, thử chạy "abc".length