function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Juan', 'Pedro', 'Luis', 'Maria', 'Jose']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);