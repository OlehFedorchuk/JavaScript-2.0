// //1/20
/*
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },

  //tests

  // Change code above this line
};
console.log(pizzaPalace.order("Smoked")); //"Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order("Four meats")); //"Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order("Big Mike")); //"Sorry, there is no pizza named «Big Mike»"
console.log(pizzaPalace.order("Viennese")); //"Sorry, there is no pizza named «Viennese»"
*/
//+++++++++++++++++++++++++++++++++++++
//Example

// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
//++++++++++++++++++++++++++++++++++++++
//2/20
/*
const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
*/
//3/20
/*
const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
  // Change code above this line
};

//tests
console.log(historyService.getOrdersLog()); //orders
console.log(historyService.getEmails()); // orders
console.log(historyService.getOrdersByEmail("solomon@topmail.net")); // [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); //[{ email: "artemis@coldmail.net", dish: "Pizza" }]
*/
//4/20
/*
const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line
const child = Object.create(parent);
// const child = {};
child.name = "Jason";
child.age = 27;
console.log(child);
// Change code above this line
//tests
console.log(parent.hasOwnProperty("surname")); //true
console.log(parent.hasOwnProperty("heritage")); //true
console.log(child.hasOwnProperty("name")); //true
console.log(child.name); //"Jason"
console.log(child.hasOwnProperty("age")); //true
console.log(child.age); //27
console.log(child.hasOwnProperty("surname")); //false
console.log(child.surname); //"Moore"
console.log(child.hasOwnProperty("heritage")); //false
console.log(child.heritage); //"Irish"
console.log(parent.isPrototypeOf(child)); //true
*/
//Example
/*
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // { name: 'Mango', __proto__: animal }
console.log(animal.isPrototypeOf(dog)); // true
*/
//5/20
const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

// console.log(parent);
// console.log(child);
// Change code above this line
console.log(ancestor.isPrototypeOf("parent")); //true
console.log(parent.isPrototypeOf("child")); //true
console.log(ancestor.hasOwnProperty("surname")); //true
console.log(ancestor.surname); //"Dawson"
console.log(parent.hasOwnProperty("surname")); //true
console.log(parent.surname); //"Moore"
console.log(child.hasOwnProperty("surname")); //false
console.log(child.surname); //"Moore"
console.log(ancestor.hasOwnProperty("heritage")); //true
console.log(ancestor.heritage); //"Irish"
console.log(parent.hasOwnProperty("heritage")); //false
console.log(parent.heritage); //"Irish"
console.log(child.hasOwnProperty("heritage")); //false
console.log(child.heritage); //"Irish"
