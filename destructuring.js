/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30,26,27];
// let john = ages[0];
// let jane = ages[1];
// let jean = ages[2];
let [john, jane, jean] = ages;

console.log('john:', john, 'jane:', jane, 'jean:', jean);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'developer',
    alice: 'accountant',
};
let {mike, jill, alice} = jobs;
console.log(mike, jill, alice);

// Destructuring subsets
// arrays
let languages = ['english', 'french', 'spanish', 'germen', 'japanese'];
let [johnNative, johnSecondary] = languages;
let [, , maryNative, marySecondary] = languages;

console.log(johnNative, johnSecondary);
console.log(maryNative, marySecondary);

// objects
let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'spanish',
};
let {thirdLanguage, firstLanguage} = languages2;
console.log('first language:', firstLanguage, 'second language:', thirdLanguage);

// Using rest parameter syntax
let fruits = ['oranges', 'apples', 'pears', 'bananas' ];
let [favouriteFruie, secondFavourite, ...others] = fruits;
console.log(favouriteFruie);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegan',
    andrea: 'steak'
};
let {brian, anna, ...rest} = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);