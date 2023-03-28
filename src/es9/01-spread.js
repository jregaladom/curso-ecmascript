const user = {
    name: 'John',
    age: 30,
    country: 'USA',
    city: 'New York',
};

const { name, ...rest } = user;
console.log(name);
console.log(rest);