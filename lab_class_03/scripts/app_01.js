'use sctrict';

console.log('Hello, world!');

let butter = prompt('Want buttahh? (yeah/no)');
console.log('The butter variable is:', butter);

if (butter === 'yeah') {
  alert('Good!');
}

if (butter === 'no') {
  alert('Why not!');
}

//  logical OR example
if (butter === 'yeah' || butter === 'no') {
  alert('You ordered a bagel with, or without, butter.');
}

alert('You answered ' + butter + ' to buttahh. ');

// console.log(butter);

let cream_cheese = prompt('Want cream cheese? (yeah/no)');
console.log('The cream cheese variable is:', cream_cheese);

if (cream_cheese === 'yeah') {
  alert('Aright, aright. Relax!');
}

if (cream_cheese === 'no') {
  alert('Good!');
}

//  logical OR example
if (cream_cheese === 'yeah' || cream_cheese === 'no') {
  alert('You ordered a bagel with, or without, cream cheese.');
}

alert('You answered ' + butter + ' to buttahh; ' + cream_cheese + ' to cream cheese. ');

// console.log(cream_cheese);

let toested = prompt('Wanit toested? (yeah/no)');
console.log('The toested variable is:', toested);

if (toested === 'yeah') {
  alert('Good!');
}

if (toested === 'no') {
  alert('Cumahhhnnn!!!');
}

//  logical OR example
if (toested === 'yeah' || cream_cheese === 'no') {
  alert('You ordered a toasted, or untoasted, bagel.');
}

alert('You answered ' + butter + ' to buttahh; ' + cream_cheese + ' to cream cheese; ' + toested + ' to toested. ');

// console.log(toested);

let cough_ee = prompt('Jooo want some cough-ee? (yeah/no)');
console.log('The coffee variable is:', cough_ee);

if (cough_ee === 'yeah') {
  alert('aright, aright! Relax!');
}

if (cough_ee === 'no') {
  alert('fuggedaboutit!');
}

//  logical OR example
if (cough_ee === 'yeah' || cough_ee === 'no') {
  alert('You ordered coffee, or you did not.');
}

alert('You answered ' + butter + ' to buttahh; ' + cream_cheese + ' to cream cheese; ' + toested + ' to toested and; ' + cough_ee + ' to cough-ee. ');

// console.log(cough_ee);

// STRETCH GOALS!
let order = '';

if (butter === 'yeah' || butter === 'no') {
  order = 'You want ' + butter + 'butter on the bagel.';
} else {
  order = 'Gimme that orduh, again!?';
}

if (toested === 'yeah') {
  order = toested + ' toasted bagel with butter.';
}

if (cough_ee === 'yeah') {
  order = order + ' and cough-ee (Good choice!).';
}

alert(order);

let attempts = 4;
let correct_answer = 5;
let answered_correctly = false;

// TODO comment in and run the next 9 lines of code. what happens?
while (attempts && !answered_correctly) {
  let response = prompt(`You get  ${attempts} attempts. I'm thinking of a number between 0 and 9. How many bagels are ya gonna buy?!`);
  if (response === correct_answer) {
    alert('Correct!');
    answered_correctly = true;
  }
  attempts--;
}
