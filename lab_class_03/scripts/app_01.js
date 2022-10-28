'use sctrict';

//proof of life
console.log('Hello, world!');

let butter = prompt('Want buttahh? (yeah/no)');
console.log('The butter variable is:', butter);

if (butter === 'yeah') {
  alert('Good!');
} else if (butter === 'no') {
  alert('Why not!');
}

//  logical OR example
if (butter === 'yeah' || butter === 'no') {
  console.log('You ordered a bagel with, or without, butter.');
}
console.log('You answered ' + butter + ' to buttahh. ');
// console.log(butter);
let cream_cheese = prompt('Want cream cheese? (yeah/no)');
console.log('The cream cheese variable is:', cream_cheese);

if (cream_cheese === 'yeah') {
  alert('Aright, aright. Relax!');
} else if (cream_cheese === 'no') {
  alert('Good!');
}

//  logical OR example
// if (cream_cheese === 'yeah' || cream_cheese === 'no') {
//   alert('You ordered a bagel with, or without, cream cheese.');
// }

// console.log('You answered ' + butter + ' to buttahh; ' + cream_cheese + ' to cream cheese. ');

// console.log(cream_cheese);
let toested = prompt('Wanit toested? (yeah/no)');
console.log('The toested variable is:', toested);

if (toested === 'yeah') {
  alert('Good!');
} else if (toested === 'no') {
  alert('Cumahhhnnn!!!');
}
//  logical OR example
if (toested === 'yeah' || cream_cheese === 'no') {
  alert('You ordered a toasted, or untoasted, bagel.');
}

// alert('You answered ' + butter + ' to buttahh; ' + cream_cheese + ' to cream cheese; ' + toested + ' to toested. ');

// console.log(toested);
let cough_ee = prompt('Jooo want some cough-ee? (yeah/no)');
console.log('The coffee variable is:', cough_ee);

if (cough_ee === 'yeah') {
  alert('aright, aright! Relax!');
} else if (cough_ee === 'no') {
  alert('fuggedaboutit!');
}

//  logical OR example
if (cough_ee === 'yeah' || cough_ee === 'no') {
  alert('You ordered coffee, or you did not.');
}

// alert('You answered ' + butter + ' to buttahh; ' + cream_cheese + ' to cream cheese; ' + toested + ' to toested and; ' + cough_ee + ' to cough-ee. ');

// console.log(cough_ee);
// STRETCH GOALS!
let order = '';
if (butter === 'yeah' || butter === 'no') {
  order = 'You want ' + butter + 'butter on the bagel';
} else {
  order = 'Gimme that orduh, again!?';
}
if (toested === 'yeah') {
  order = toested + ' toasted bagel with butter';
}
if (cough_ee === 'yeah') {
  order = order + ' and cough-ee (Good choice!).';
}

alert(order);

let guessing_game_result = 0;
let attempts = 4;
let correct_answer = '5';

// whether the user answered the question incorrectly
let answered_correctly = false;

while (attempts && !answered_correctly) {
  // assigning an input to another variable
  let response = prompt(`You get ${attempts} attempts. I'm thinking of a number between 0 and 9. How many bagels are ya gonna buy?!`);
  if (response <= 4) {
    alert('Too low, pal!');
  } else if (response >= 6) {
    alert('Cumaahhnnn! I\'m not gonna make ya buy that much! Lower!');
  } else if (response === correct_answer) {
    alert('Correct!');
    answered_correctly = true;
    guessing_game_result++;
    break;
  }
  attempts--;
}
//When the code gets to here, the user got the right answer, or ran out of attempta
alert('The ansah wuz 5, pal! Now go pay for em!');


let best_selling_bagels = ['everything', 'plain', 'egg', 'salt', 'cinnamon raisin'];
let second_question_guessing_game = false;
let bagel_question_attempts = 0;

while (!second_question_guessing_game && bagel_question_attempts < 6) {
  // assigning an input to another variable
  let response = prompt('What bagel flavors are the best selling? Please pick one: Sugar, Onion, Plain, Salt, Sesame Seeds, Everything, Poppy Seeds, Wheat, Egg, French Toast, Cinnamon Raisin').toLowerCase();
  // i represents index
  for (let i = 0; i < best_selling_bagels.length; i++) {
    if (response === best_selling_bagels[i]) {
      // if (bagel_question_attempts === best_selling_bagels[i]) {
      second_question_guessing_game = true;
    }
  }
  if (second_question_guessing_game) {
    alert('That\'s right! It took ' + bagel_question_attempts + ' attempts');
    guessing_game_result++;
  }
  else {
    alert('Nah, man!');
    bagel_question_attempts++;
  }
}
if (guessing_game_result < 1) {
  alert('You guessed ' + guessing_game_result + ' out of 2 right.');
} else if (guessing_game_result > 1) {
  alert('You got both questions right!');
} else {
  alert('You guessed ' + guessing_game_result + ' out of 2 right.');
}
