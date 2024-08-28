//  var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);

age = 31;

console.log(age);

let score = 1;

console.log(score);

if (true) {
    score = score + 1
}

console.log(score);

const x = 100;

// x = 200; not allowed


const arr = [1,2,3,4]
arr.push(5);
console.log(arr)

const person = {
    name: 'Brad',
};

person.name = 'John';
person.email = 'xya!@abk.com';

console.log(person);
