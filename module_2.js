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
