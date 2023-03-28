// console.log("Hi");
// let arry = [1, 2, "3", 4, 5];
// console.log(arry);
// for (const i of arry) {
//   if (i === "3") {
//     console.log(`i is: ${i}`);
//   }
//   console.log(i);
// }
const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // На кожній ітерації будемо перевіряти чи збігається елемент масиву з
  // іменем клієнта. Якщо збігається - записуємо в message повідомлення
  // про успіх і робимо break, щоб далі не шукати
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }

  // Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
  message = "Клієнт з таким ім'ям відсутній в базі даних!";
}

console.log(message);
