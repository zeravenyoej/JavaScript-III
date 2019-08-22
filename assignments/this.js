/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" refers to the window at-large when it's not pointing to or bound towards anything more specific.


* 2. In implicit binding only occurs when objects have methods (which are functions within objects). 
When that method is called with dot notation, to the left of the dot will be the name of the object. 
The 'this' will refer to that object.


* 3. When we want to make a template for an object (aka a constructor function), we capitalize the name. The keys in that constructor function will all have this.keyname, 
(as well as use a '=', not a ':', and they're offset by semicolons, not commas.)
Then, to make a new object, we make a new variable and assign it to a new object (by using the keyword "new"). 
We write a specific parameter that will pass into the parameter of the constructor function. The 'this' (which is found in the constructor function) points to the new object.



* 4. Explicit binding refers to using the words "call", "apply", or "bind" to point toward a specific value. 
"Call" and "apply" can be used to refer to any value (but "call" passes a single argument, whereas "apply" passes an array). 
"Bind" is used to permanently bind a new function to a specific value.
*
* write out a code example of each explanation above
*/





// Principle 1 // code example for Window Binding

// "use strict";
// function charlesDickens() {
//     console.log(this.book);
// }
// const book='A Tale of Two Cities';
// charlesDickens();

// Principle 2 // code example for Implicit Binding

let movieGenre={
    horror: 'Scream',
    romance: 'Titanic',
    action: 'Speed',
    feelingScared: function () {
        console.log(`I want to watch ${this.horror} tonight.`)
    }
}

movieGenre.feelingScared();


// Principle 3 // code example for New Binding

function Television (title) {
    this.comedy = title;
    this.drama = title;
};

let myFavShow = new Television('30 Rock');

console.log(`My favorite show to watch these days is ${myFavShow.comedy}.`);



// Principle 4 // code example for Explicit Binding

let olympics = {
    summer: 'trampoline',
    winter: 'skiing',
};

function getExcited() {
    console.log(`I can't wait to watch the ${this.winter} event soon.`)
}

let pickaSeason = getExcited.bind(olympics);

pickaSeason();