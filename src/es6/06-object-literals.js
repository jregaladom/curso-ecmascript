function newUser(name, age, country, Uid) {
    return {
        name,
        age,
        country,
        id: Uid,
    }
}

let oscar = newUser('Oscar', 32, 'MX', '33434');
console.log(oscar);