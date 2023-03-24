function newUser(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Ricardo', '23', 'CO');

// ES6
function newUser2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

newUser2();
newUser2('Ricardo', '23', 'CO');