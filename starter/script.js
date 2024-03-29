'use strict';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours,   -----Before ES6
  // ES6 enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:80', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`
    .trimStart(' ')
    .padStart(40);
  console.log(output);
}

/*
// Coding Challenge 4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const textrow = text.split('\n');

  for (const [index, value] of textrow.entries()) {
    const [first, second] = value.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(index + 1)}`);
  }
});

// btn.addEventListener('click', function () {
//   let text = document.querySelector('textarea').value;
//   let t = text.split('\n');
//   console.log(t);
//   for (const [i, n] of t.entries()) {
//     const [first, second] = n.toLocaleLowerCase().trim().split('_');
//     const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
//     console.log(`${output.padEnd(20, '')}${'✅'.repeat(i + 1)}`);
//   }
// });

// STrings Method
const airline = 'TAP Air Nigeria';
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Emmanuel Adebayo'.split(' '));
const [firstName, lastName] = 'Emmanuel Adebayo'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' '); //Converting to array
  const namesUpper = []; //Creating an empty array to push the iterations
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

// const capitalizeName = items => {
//   const names = items.split(' ');
//   const namesUpper = [];
//   for (const name of names) {
//     namesUpper.push(name[0].toUpperCase() + name.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

capitalizeName('jessica ann smith davis');
capitalizeName('emmanuel adebayo');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Emmanuel'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; //Converting number to string
  const last = str.slice(-4); //Getting the last 4 characters
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64685678));
console.log(maskCreditCard(43378463864647384));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = n =>
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);

planesInLine(5);
planesInLine(3);
planesInLine(12);

console.log(airline.toLowerCase());
console.log(airline.toLocaleUpperCase());

// Fix capitalization in name
const passenger = 'eMmaNuel';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// const names = function (passenger) {
//   const inputName = passenger;
//   const lowerCaseName = inputName.toLocaleLowerCase();
//   const correctName = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
//   console.log(correctName);
//   return correctName;
// };

// names('daNiel');

// const names = function (passenger) {
//   const inputName = passenger;
//   return inputName;
// };

// const lowerCaseName = prompt(names('Enter name')).toLocaleLowerCase();
// const correctName = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
// console.log(correctName);

// Comparing email
const email = 'hello@daniel.io';
const loginEmail = '   Hello@Daniel.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23.Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// Using regular expression
console.log(announcement.replace(/door/g, 'gate'));
// The new replaceAll() method
console.log(announcement.replaceAll('door', 'gate'));

// Booleans

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT welcome aboard');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop,some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// indexOf, lastIndexOf, slice()
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// String methods
// indexOf
console.log(airline.indexOf('r'));
// lastIndexOf
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Nigeria'));

//slice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = seat => {
  // B and E are middle seat
  const seats = seat.slice(-1);
  if (seats === 'B' || seats === 'E') console.log('You got the middle seat 😢');
  else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Emmanuel'));
console.log(typeof new String('Emmanuel'));

console.log(typeof new String('Emmanuel').slice(1));

// Coding Challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? '[FIRST' : '[SECOND';
  console.log(`${half} HALF] ${min}: ${event}`);
}

const questions = new Map([
  ['question', 'What is the best programming language in the World?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🎉'],
  [false, 'Try again'],
]);

console.log(questions);

// Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3    //Number(prompt('Your answer'));
console.log(answer);

console.log(questions.get(answer === questions.get('correct')));

// Convert Map to array
console.log([...questions]);

// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :)');

console.log(rest.get('name'));
console.log(rest.get(true));
// console.log(rest);

const time = 21;

console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Sets
const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Emmanuel'));

//Checking for size of Sets => .size
console.log(ordersSet.size);
// Checking if a certain element is in a Sets => .has()
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
// To add new element t a set => .add()
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
// To delete in a set .delete()
ordersSet.delete('Pasta');
// ordersSet.clear()
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

Coding Challenge 2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const scored = game.scored.entries();
console.log(scored);

for (const [key, value] of scored) {
  console.log(`Goal ${key + 1}: ${value}`);
}

// 2.
let average = 0;

const odd = Object.values(game.odds);
for (const avg of odd) {
  average += avg;
}
average /= odd.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${str}: ${odd}`);
}

// 4.
// const scorers = {};
// for (const player of game.scored) {
// if (scorers[player]){
// scorers[player]++}
// else{
// scorers[player] = 1}
// }
// console.log(scorers)


// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
  console.log(day);
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

for (const days of values) {
  console.log(days);
}

// Property ENTRIES
const entries = Object.entries(openingHours);
console.log(entries);

// Destructuring
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// With Optional Chaining

// console.log(restaurant?.openingHours?.mon.open);
// console.log(restaurant.openingHours.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  {
    name: 'Emmanuel',
    email: 'hello@emm.io',
  },
];

console.log(users.length);
console.log(users[0]?.email ?? 'User array empty');
if (users.length > 0) console.log(users[0].email);
else console.log('user array empty');

// Looping over array - for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// Odl way of writing for loop
// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

for (const [item] of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

// CODING CHALLENGE 1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
// const { team1, x: draw, team2 } = game.odds;

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = (...scorers) => {
  console.log(scorers);
  console.log(`${scorers.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 wins');
team2 < team1 && console.log('Team 2 wins');

restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

// Nullish Coalescing Operator
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

console.log('------- OR -------');
// Use Any  data type, return ANY data type, short-circuiting
console.log(3 || 'Emmanuel');
console.log('' || 'Emmanuel');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('------- AND -------');
console.log(0 && 'Emmanuel');
console.log(7 && 'Emmanuel');

console.log('Hello' && 23 && null && 'Emmanuel');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


////////////////////////////////////////////////////////// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD because on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3); 
add(5, 3, 7, 2);
add(6, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gracci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Emmanuel';
const letters = [...str, ' ', 'A.'];
console.log(letters);
console.log(...str);

//Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name, restaurantCopy.name);

///////////////////////////////////
////// Destructuring Object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Destructuring nested obj
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Real world example of  Object Destructuring
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// ////////////////////////////////////////////////////////// Array destructuring

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant['categories'];
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return vales from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
console.log(restaurant.order(2, 0));

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default value
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);
*/
