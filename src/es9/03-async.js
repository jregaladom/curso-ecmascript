async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = asyncGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('End');

async function arrayOfNames(array) {
    for await (let name of array) {
        console.log(name);
    }
}

const names = ['Luis', 'Juan', 'Pedro', 'Maria', 'Jose'];
arrayOfNames(names);
console.log('End');