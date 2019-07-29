/**
* Sử dụng vòng lặp for để tính tích của các phần tử của array a với các phần tử của array b. Kết quả mong muốn:
* 10
* 20
* 30
* ...
* 20
* 40
* 60
* ...
* Gợi ý: Dùng nested for loops (các vòng lặp lồng nhau)
*/
let a = [1, 2, 3, 4, 5];
let b = [10, 20, 30];
for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 2; j++) {
        console.log(a[i] * b[j]);
    }
}