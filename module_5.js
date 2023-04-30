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
/*
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
console.log(ancestor.isPrototypeOf(parent)); //true
console.log(parent.isPrototypeOf(child)); //true
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
*/
//6/20
//++++++++++++++++++++++++
//Example
// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
//+++++++++++++++++++++++++++++
// class Car {}
// console.log(new Car());

//7/20
/*
class Car {
  // Change code below this line
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
//tests
console.log(new Car("Audi", "Q3", 36000));
console.log(new Car("BMW", "X5", 58900));
console.log(new Car("Nissan", "Murano", 31700));
*/
//8/20
/*
class Car {
  // Change code below this line
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}
console.log(new Car("Audi", "Q3", 36000));
console.log(new Car("BMW", "X5", 58900));
console.log(new Car("Nissan", "Murano", 31700));
*/
//9/20
/*
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  // Change code below this line
  getPrice() {
    this.price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
  // Change code above this line
}
*/
//10/20
/*
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    const index = this.items.indexOf(itemToRemove);
    this.items.splice(index, 1);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
*/
//11/20
/*

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue(value) {
    return this.value;
  }
  padEnd(str) {
    //const f = `"${this.value}${str}"`;
    this.value += str;
  }
  padStart(str) {
    this.value = str += this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/
//12/20
/*
class Car {
  // Change code below this line
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  // Change code above this line
}

// //tests
// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan", "Murano", 31700));
// console.log(getBrand());
// console.log(changeBrand("Honda"));
const car1 = new Car({ brand: "Audi", model: "Q3", price: 36000 });
console.log(car1.getBrand()); // Audi

const car2 = new Car({ brand: "BMW", model: "X5", price: 58900 });
console.log(car2.getBrand()); // BMW

const car3 = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
console.log(car3.getBrand()); // Nissan

const car4 = new Car({ brand: "Toyota", model: "Camry", price: 22000 });
console.log(car4.getBrand()); // Toyota
car4.changeBrand("Honda");
console.log(car4.getBrand()); // Honda

console.log(car1.brand);
*/
//13/20
/*
class Storage {
  // Change code below this line
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
*/
//14/20
/*
class StringBuilder {
  // Change code below this line
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
*/
//15/20
/*
class Car {
  // Change code below this line
  #brand;
  #model;
  #price;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}
const mango = new Car({ brand: "Audi", model: "Q3" });
console.log(mango.model); // Q3
mango.model = "Q5";
console.log(mango.model); // Q5
*/
//16/20
/*
class Car {
  // Change code below this line
  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice < Car.MAX_PRICE) {
      this.#price = newPrice;
    }
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
*/
//17/20
/*
class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
*/
//++++++++++++++++++++++++++++++++++++++++++++++++
//Example
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));
//++++++++++++++++++++++++++++++++++++++++++++++++
//18/20
/*
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line
class Admin extends User {
  static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
}
console.log(Admin.AccessLevel.BASIC); //"basic"
console.log(Admin.AccessLevel.SUPERUSER); //"superuser"
*/
//19/20
/*
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"
*/
//+++++++++++++++++++++++++++
//Example
/*
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Виклик конструктора батьківського класу User
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
*/
//+++++++++++++++++++++++++++++++
//20/20
/*
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
  blacklistedEmails = [];

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
*/
