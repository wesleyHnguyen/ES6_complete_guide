// const promise = new Promise((resolve, reject) => {
//    resolve();
// });

// promise.then(() => {
//     console.log('finally finished');
// })
// promise.catch()


url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then(response => response.json())
    .then(data => console.logdata(data));