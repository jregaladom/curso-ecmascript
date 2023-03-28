const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        (false) ? setTimeout(() => resolve('Hey!'), 3000) : reject('Whoooooooooooops!')
    });
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizo'));
