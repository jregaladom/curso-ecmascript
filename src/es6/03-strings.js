let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n' + 'Otra frase epica que necesitamos.';
console.log(lorem);

let lorem2 = `Otra frase epica que necesitamos.
Ahora es otra frase epica.`;

console.log(lorem2);