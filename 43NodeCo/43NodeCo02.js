const axios = require('axios');
const co = require('co');

/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];

var readData = co.wrap(function*(urls){
  return yield urls.map((url)=>axios.get(url).then((response)=>response.data));
})

readData(urls).then((value)=>{
  console.log(value);
})


// /**
//  * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
//  */
// var co = require('co');
// var axios = require('axios');


// var urls = [
//   'https://jsonplaceholder.typicode.com/todos/1',
//   'https://jsonplaceholder.typicode.com/todos/2',
//   'https://jsonplaceholder.typicode.com/todos/3',
//   'https://jsonplaceholder.typicode.com/todos/4',
//   'https://jsonplaceholder.typicode.com/todos/5'
// ];

// let load = path => {
//   return axios.get(path)
//           .then(res => res.data)
//           .catch(error => error);
// }

// // Cách 1: Sử dụng vòng lặp for
// function loadUrls(urls){
//   let arr = [];
//   for (url of urls){
//     arr.push(load(url));
//   }
//   return Promise.all(arr);
// }

// loadUrls(urls).then(v => console.log(v))
// // Cách 2: Sử dụng array.map
// // Gợi ý: Có thể yield 1 array các Promise

// // cách 1 : 
// // co(function*() {
// //   var value = yield [
// //     load('https://jsonplaceholder.typicode.com/todos/1'),
// //     load('https://jsonplaceholder.typicode.com/todos/2'),
// //     load('https://jsonplaceholder.typicode.com/todos/3'),
// //     load('https://jsonplaceholder.typicode.com/todos/4'),
// //     load('https://jsonplaceholder.typicode.com/todos/5')
// //   ]
// // }).then(value => console.log(value))
// //     .catch(error => console.log(error));

// //cách 2 : 
// // var readPath = co.wrap(function*(arr) {
// //   // var newArr = arr.map(item => {
// //   //   return load(item);
// //   var value = yield arr.map(item => {
// //     return load(item);
// //   });
// //   return value;
// //   });
// // readPath(urls)
// //   .then(value => console.log(value))
// //   .catch(error => console.log(error));
