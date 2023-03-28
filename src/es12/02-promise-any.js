const promise1 = new Promise((resolve, reject) => reject('Reject 1'));
const promise2 = new Promise((resolve, reject) => resolve('Resolve 2'));
const promise3 = new Promise((resolve, reject) => resolve('Resolve 3'));
const promise4 = new Promise((resolve, reject) => reject('Reject 4'));

Promise.any([promise1, promise2, promise3, promise4]).then((results) => { console.log(results); });

