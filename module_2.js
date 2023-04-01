/*
console.log("Hi");
let arry = [1, 2, "3", 4, 5];
console.log(arry);
for (const i of arry) {
  if (i === "3") {
    console.log(`i is: ${i}`);
  }
  console.log(i);
}*/
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
//   // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
//   // іменем клієнта. Якщо збігається - записуємо в message повідомлення
//   // про успіх і робимо break, щоб далі не шукати
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }

//   // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }

// console.log(message);
// let a = 5;
// let b = a;
// console.log(a);
// console.log(b);
// a = 10;
// console.log(a);
// console.log(b);
// const ae = [1, 2, 3];
// console.table(ae);
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;

for (let i = 0; i < numbers.length; i += 1) {
  //   console.log(numbers[i]);
  if (numbers[i] % 2 === 0) {
    // console.log(numbers[i]);
    total += numbers[i];
  }
}
console.log("Total is:", total);

// // the same Example
// for (const number of numbers) {
//   //   console.log(number);
//   //   console.log("------");
//   if (numbers[number] % 2 === 0) {
//     console.log(numbers[number]);
//     total += numbers[number];
//   }
// }
// console.log("Total is 'forof':", total);

// Truthy і Falsy - терміни, які використовуються для тих значень, які в логічній операції приводяться до true або false, хоча спочатку не були булями.

// ЦІКАВО
// Запам'ятайте 6 хибних (falsy) значень, що приводяться до false у логічному перетворенні:
// 0, NaN, null, undefined, порожній рядок і false.
// Абсолютно все інше приводиться до true.

//Тобто, логічне && «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// console.log(NaN || undefined);
// console.log(undefined || NaN);

// console.log(NaN && undefined);
// console.log(undefined && NaN);

// //Example
// console.log(true && 3); //3
// console.log(false && 3); //false
// console.log(true && 4 && "kivi"); //kivi
// console.log(true && 0 && "kivi"); //0
// console.log(true || 3); //true
// console.log(true || 3 || 4); //true
// console.log(true || false || 7); //true
// console.log(null || 2 || undefined); //2
// console.log((1 && null && 2) > 0); //false
// console.log(null || (2 && 3) > 4); //false
// console.log("" && 1); //""

// //Need faund correct login
// const logins = ["sdcedc", "cfececvevc", "efwefwef3224", "4f4fwf"];
// const loginToFind = "4f4fwf";
// let message = "Don`t faund login!";

// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     message = `Login is: ${logins[i]}`;
//   }
// }
// console.log(message);

// // Another example for (Need faund correct login)
// const loginsUser = ["sdcedc", "cfececvevc", "efwefwef3224", "4f4fwf"];
// const loginToFindUser = "4f4fwf";

// const messageUser = loginsUser.includes(loginToFindUser)
//   ? `User ${loginToFindUser} is found.`
//   : `User ${loginToFindUser} no't found.`;
// console.log(messageUser);

//Another example for (Need faund correct login) USING FUNCTION
// const logUser = ["sdcedc", "cfececvevc", "efwefwef3224", "4f4fwf"];

// const findLogin = function (allLogins, lToFind) {
//   return allLogins.includes(lToFind)
//     ? `User ${lToFind} is found.`
//     : `User ${lToFind} no't found.`;
// };
// // tests
// console.log(findLogin(logUser, "3234f4fwf"));
// console.log(findLogin(logUser, "4f4fwf"));
// console.log(findLogin(logUser, "efwefwef3224"));
// console.log(findLogin(logUser, "234f4fwfe"));

//3/32 module 2 JS
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }
// //Tests
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// //8/32 module 2 JS
// // Індекс останнього елемента масиву fruits через довжина_масиву - 1
// // Значення останнього елемента масиву
// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);
// console.log(fruits[lastElementIndex]);
// 9/32 module 2 JS
//don`t works correctly
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const lengthArry = array.length - 1;
//   const lastElement = array[lengthArry];

//   return `${firstElement} ${lastElement}`;
// }
//9/32 module 2 JS
// Works correctly
// function getExtremeElements(array) {
//   array.splice(1, array.length - 2);
//   return array;
// }
//tests
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// 10/32 module 2 JS
// example 1 if
// function splitMessage(message, delimiter) {
//   // console.log(delimiter);
//   let words;
//   if (delimiter === "_") {
//     words = message.split(["_"]);
//     return words;
//   } else if (delimiter === "") {
//     words = message.split([""]);
//     return words;
//   }
//   return (words = message.split([" "]));
// }
//------same is up
//Example 2 Switch
//   switch (delimiter) {
//     case "_":
//       return message.split(["_"]);

//     case "":
//       return message.split([""]);

//     default:
//       words = message.split([" "]);
//   }
//   return words;
// }

//Example 3 Refactoring code
// function splitMessage(message, delimiter) {
//   return message.split(delimiter);
// }
// //tests
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

// 11/32 module 2 JS
// function calculateEngravingPrice(message, priceWord) {
//   const splitSrting = message.split(" ");
//   const lengthArry = splitSrting.length;
//   const totalPrice = lengthArry * priceWord;
//   return totalPrice;
// }

//Example 2 Refactoring code
function calculateEngravingPrice(message, priceWord) {
  return message.split(" ").length * priceWord;
}
//test
console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //100
console.log(calculateEngravingPrice("Web-development is creative work", 40)); //160
console.log(calculateEngravingPrice("Web-development is creative work", 20)); //80
