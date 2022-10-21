'use sctrict';

// Ask what sized pizza the user wants
// let size = prompt('What sized pizza do you want?');
// console.log('the size variable is:', size);

// let butter = prompt('Do you want pepperoni on your pizza?');
// console.log('pepperoni answer is:', butter);

// let cream_cheese = prompt('Do you want anchovies?');
// console.log('anchovies answer is:', cream_cheese);

// String concatenation
// alert('You answered ' + butter + ' to the pepperoni question');

let butter = prompt('Want buttahh? (yeah/no)');
console.log('The butter variable is:', butter);

if (butter === 'yeah') {
  alert('Good!');
}

if (butter === 'no') {
  alert('Why not!');
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

alert('You answered ' + butter + ' to buttahh ' + cream_cheese + ' to cream cheese. ');

// console.log(cream_cheese);

let toested = prompt('Wanit toested? (yeah/no)');
console.log('The toested variable is:', toested);

if (toested === 'yeah') {
  alert('Good!');
}

if (toested === 'no') {
  alert('Cumahhhnnn!!!');
}

alert('You answered ' + butter + ' to buttahh ' + cream_cheese + ' to cream cheese ' + toested + ' to toested. ');

// console.log(toested);

let cough_ee = prompt('Jooo want some cough-ee? (yeah/no)');
console.log('The coffee variable is:', cough_ee);

if (cough_ee === 'yeah') {
  alert('aright, aright! Relax!');
}

if (cough_ee === 'no') {
  alert('fuggedaboutit!');
}

alert('You answered ' + butter + ' to buttahh ' + cream_cheese + ' to cream cheese ' + toested + ' to toested and ' + cough_ee + ' to cough-ee. ');

// console.log(cough_ee);

//  logical OR example
// if (size === 'large' || size === 'medium') {
//   alert('you ordered a large or medium pizza');
// }

// STRETCH GOALS!
// let order = '';

// if (size === 'large' || size === 'medium' || size === 'small') {
//   order = 'You want a ' + size + ' sized pizza.';
// } else {
//   order = 'You want a ??? sized pizza.';
// }

// if (answer1 === 'yes') {
//   order = order + ' With pepperoni.';
// }

// if (answer2 === 'yes') {
//   order = order + ' With anchovies (gross)';
// }

// alert(order);