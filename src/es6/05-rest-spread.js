let fruits = ['apple', 'banana', 'orange'];
let [a, b] = fruits;
console.log(a, b);

let user = { username: 'oscar', age: 32, country: 'MX' };
let { username, age, country } = user;
console.log(username, age, country);

let users = [
    { username: 'oscar', age: 32, country: 'MX' },
    { username: 'yesica', age: 27, country: 'CO' },
];
let [user1, user2] = users;
console.log(user1, user2);


//spread operator
let person = { name: 'oscar', age: 32 };
let country2 = 'MX';
let data = { id: 1, ...person, country2 };
console.log(data);

//rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0])
    return num + values[0];
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);