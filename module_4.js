// console.log("hi");

// const buttonRef = document.querySelector(".js-button");
// const handleBtnClick = function () {
//   console.log("Click on Button:" + Date.now());
// };
// buttonRef.addEventListener("click", handleBtnClick);

// const onGetPositionSuccsess = function (posotion) {
//   console.log(posotion);
// };
// const onGetPosotionError = function (error) {
//   console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccsess,
//   onGetPosotionError
// );
//1/48
/*
function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;
console.log(result);
console.log(pointer);
*/
//2/48
/*
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
//tests
console.log(makeMessage("Royal Grand", makePizza)); //"Pizza Royal Grand is being prepared, please wait..."
console.log(makeMessage("Ultracheese", deliverPizza)); //"Delivering Ultracheese pizza."
*/
//3/48
/*
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});
*/

/*
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.
*/
//calculator
//higher order function
/*
function calc(firstNumber, secondNumder, callback1, callback2) {
  const amount = callback1(firstNumber, secondNumder);
  const difference = callback2(firstNumber, secondNumder);
  return `Amount: - ${amount}, Difference ${difference}`;
}

function amount(firstNumber, secondNumder) {
  return firstNumber + secondNumder;
}

function difference(firstNumber, secondNumder) {
  return firstNumber - secondNumder;
}

function multiplication(firstNumber, secondNumder) {
  return firstNumber * secondNumder;
}
function division(firstNumber, secondNumder) {
  return firstNumber / secondNumder;
}
function reminderFromDivision(firstNumber, secondNumder) {
  if (firstNumber < secondNumder) {
    return secondNumder % firstNumber;
  }
  return firstNumber % secondNumder;
}
console.log(calc(20, 3, amount, difference));
// console.log(calc(7, 2, difference));
// console.log(calc(5, 9, difference));
// console.log(calc(4, 5, multiplication));
// console.log(calc(9, 2, division));
// console.log(calc(2, 9, division));
// console.log(calc(10, 30, reminderFromDivision));
// console.log(calc(9, 4, reminderFromDivision));
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//4/48
/*
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    } else {
      return onError(pizzaName);
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! There is no pizza with a name ${error} in the assortment.`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
*/
//5/48
/*
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }
  orderedItems.forEach((number) => {
    totalPrice += number;
  });

  // Change code above this line
  return totalPrice;
}
//tests
console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([164, 48, 291])); //503
*/
//6/48
/*
function filterArray(numbers, value) {
  let filteredNumbers = [];
  // Change code below this line

  // for (let i = 0; i < numbers.length; i += 1) {
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i]);
  //   }
  numbers.forEach((index) => {
    if (index > value) {
      filteredNumbers.push(index);
    }
  });

  // Change code above this line
  return filteredNumbers;
}

//tests
console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]
*/
/*
//++++++++++++++++++++++++++++++++++++++++++++

//Example
const summa = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

summa(3, 5, add);

//Example
console.log("Wait 3 second plaase!...");
function wait() {
  console.log("Hi, Oleh!");
}
setTimeout(wait, 3000);
//----
*/
//+++++++++++++++++++++++++++++++++++++++++++++
//7/48
/*
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) {
  //   if (secondArray.includes(firstArray[i])) {
  //     commonElements.push(firstArray[i]);
  //   }
  // }
  firstArray.forEach((elem) => {
    if (secondArray.includes(elem)) {
      commonElements.push(elem);
    }
  });

  return commonElements;
  // Change code above this line
}
//tests
console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]
*/
//8/48
/*
// Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
};
console.log(calculateTotalPrice(2, 4));
*/
//9/48
/*
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//tests
console.log(calculateTotalPrice(5, 100)); //500
// Change code above this line
*/
//10/48
/*
// Change code below this line
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
// Change code above this line
console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([164, 48, 291])); //503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
*/
//11/48
/*
// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
};
//tests
console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4,5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]
*/
//12/48
/*
// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
};
//tests
console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1,2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12,27,3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10,20,40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]
*/
//13/48
/*
function changeEven(numbers, value) {
  const updatedNumbers = numbers.map((num) => {
    if (num % 2 === 0) {
      return num + value;
    }
    return num;
  });
  return updatedNumbers;
}

//tests
console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); //[17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //[144, 13, 81, 192, 136, 154]
*/
//14/48
/*
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => planet.length);

//tests
console.log(planets);
console.log(planetsLengths);
*/
//15/48
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const titles = books.map((book) => book.title);
//tests
console.log(titles); //["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
*/
//16/48
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
// Change code below this line

const genres = books.flatMap((book) => book.genres);
//tests
console.log(genres); //[ "adventure", "history", "fiction", "horror", "mysticism" ]
*/
//17,18/48
/*
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
console.table(users);
// Change code below this line
function getUserBalance(balance) {
  // console.log(balance);
  return balance.map((bala) => bala.balance);
}
const getUserNames = (users) => users.map((user) => user.name);
const getUserEmail = (email) => email.map((user) => user.email);
console.log(getUserNames(users));
console.log(getUserEmail(users));
console.log(getUserBalance(users));
// Change code above this line
*/
//19/48
/*
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
//tests
console.log(evenNumbers); //[24, 82, 36, 18, 52]
console.log(oddNumbers); //[17, 61, 47, 73];
*/
//20/48
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genres, index, books) => books.indexOf(genres) === index
);

//tests
console.table(allGenres); //["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
console.table(uniqueGenres); //["adventure", "history", "fiction", "mysticism", "horror"]
//Example
// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);
*/
//21/48
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books;
const booksByAuthor = books;
