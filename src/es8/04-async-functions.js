const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Async'), 3000) : reject(new Error('Error'));
    });
}

const anotherFn = async () => {
    const resp = await fnAsync();
    console.log(resp);
    console.log('Hello');
}


console.log('Before');
anotherFn();
console.log('After');
