const array = ['Juan', 'Pedro', 'Luis', 'Maria', 'Jose', ['Juan', 'Pedro', 'Luis', 'Maria', 'Jose', ['Juan', 'Pedro', 'Luis', 'Maria', 'Jose']]];
console.log(array.flat(3));

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));