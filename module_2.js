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

// //Example 2 Refactoring code
// function calculateEngravingPrice(message, priceWord) {
//   return message.split(" ").length * priceWord;
// }
// //test
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); //160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); //80

//13/32 module 2 JS

// function slugify(title) {
//   return title.toLowerCase().split(" ").join("-");
// }
// //tests
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));

// //14/32 module 2 JS
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls); // масив із перших двох елементів: ["apple", "plum"]

// const nonExtremeEls = fruits.slice(1, -1);
// console.log(nonExtremeEls); //масив з усіх елементів, крім першого та останнього: ["plum", "pear", "orange"]

// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls); // масив із трьох останніх елементів: ["pear", "orange", "banana"]

//15/32 module 2 JS
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

//16/32 monule 2 JS
// function makeArray(firstArray, secondArray, maxLength) {
//   const concatArry = firstArray.concat(secondArray);
//   if (concatArry.length > maxLength) {
//     return concatArry.slice(0, maxLength);
//   }
//   return concatArry;
// }

// // 16/32 monule 2 JS Refactoring code
// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
// }
// ///tests
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); //["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); //["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); //["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); //["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); //[]

//17/32 module 2 JS
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {

//   console.log(i);
// }

// //18/32 module 2 JS
// function calculateTotal(number) {
//   let sumaNumbrs = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sumaNumbrs += i;
//   }
//   return sumaNumbrs;
// }
// //tests
// console.log(calculateTotal(1)); //1
// console.log(calculateTotal(3)); //6
// console.log(calculateTotal(7)); //28
// console.log(calculateTotal(18)); //171
// console.log(calculateTotal(24)); //300
// console.log(calculateTotal()); //Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// //19/32 module 2 JS
// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// //20/32 module 2 JS
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }
// //tests
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// console.log(calculateTotalPrice([1000, 4]));

// 21/32 module 2 JS
/*
function findLongestWord(string) {
  // Change code below this line
  const stringSplit = string.split(" ");
  console.log("Array after metchod slpit: ", stringSplit);

  let r;
  for (let i = 0; i < stringSplit.length; i += 1) {
    const element = stringSplit[i];
    r = element.length; //length for one elements N1
    // console.log("length for one elements N1:", r);

    for (let j = 0; j < stringSplit.length; j += 1) {
      const element = stringSplit[j];
      const r2 = element.length; //length for one elements N2
      // console.log("length for one elements N2:", r2);
      if (r2 >= r) {
        r = r2;
        // console.log(r);
      }
    }
    for (let i = 0; i < stringSplit.length; i += 1) {
      const element = stringSplit[i];
      // console.log("Arry 3:", element);
      if (element.length === r) {
        return element;
      }
    }

    return r;
    // console.log(element.length);
  }

  // Change code above this line
}
//tests

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //jumped
console.log(findLongestWord("Google do a roll")); //Google
console.log(findLongestWord("May the force be with you")); //force
console.log(findLongestWord("Java Script")); //Виклик функції findLongestWord() з випадковим рядком повертає правильне значення
*/
