//1/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);
//2/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// console.table(apartment);
//3/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
//4/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
//5/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
//6/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// console.table(apartment);
// apartment.price = 500;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.table(apartment);
//7/41
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// console.table(apartment);
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };
// console.table(apartment);
//8/41
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];
// // Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему,
// //дозволяючи використовувати ім'я змінної як ім'я властивості,
// //а її значення як значення властивості.
// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.table(product);
//9/41
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };
// console.table(credentials);

//*************************************************
/*
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}
*/
//*************************************************
//10/41
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log(keys);
console.log(values);
*/
//11/41
/*
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) keys.push(key);
  values.push(apartment[key]);

  // Change code above this line
}
console.log(apartment);
*/
/*
//****************************************** 
const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog); // {name: 'Mango'}
console.log(dog.name); // 'Mango'
console.log(dog.legs); // 4

// ❌ Повертає true для всіх властивостей
console.log("name" in dog); // true
console.log("legs" in dog); // true

// ✅ Повертає true тільки для власних властивостей
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hasOwnProperty("legs")); // false
*/
//12/41
/*
function countProps(object) {
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  return propCount;
}
//tests
console.log(countProps({ name: "Mango", age: 2 })); //2
console.log(countProps({})); //0
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3
*/
//13/41
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
let values = [];
const keys = Object.keys(apartment);

for (const key of keys) {
  console.log(key);
  values.push(apartment[key]);
}
console.log(values);
*/
//14/41
/*
function countProps(object) {
  return Object.keys(object).length;
}
//tests
console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 })); //2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3
*/
//15/41
/*
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

//tests
console.log(keys);
console.log(values);
*/
//16/41
/*
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  //   console.log(values);
  for (const value of values) {
    totalSalary += value;
  }
  // Change code above this line
  return totalSalary;
}
//tests
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //400
*/
//17/41
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
// const values = Object.values(colors);
// console.log(values);
for (const color of colors) {
  //   console.log(color.hex);
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
//tests
console.log(hexColors);
console.log(rgbColors);
*/
//18/41
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    
    if (productName === product.name) {
      return product.price;
    }
  }
  return null;
}
//tests
console.log(getProductPrice("Radar")); //1300
console.log(getProductPrice("Grip")); //1200
console.log(getProductPrice("Scanner")); //2700
console.log(getProductPrice("Droid")); //400
console.log(getProductPrice("Engine")); //null
*/
//19/41
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
const nameArray = [];
const priceArray = [];
const quantityArray = [];

function getAllPropValues(propName) {
  for (const product of products) {
    if (propName === "name") {
      return returnName(propName);
    } else if (propName === "price") {
      return returnPrice(propName);
    } else if (propName === "quantity") {
      return returnQuantity(propName);
    } else {
      return [];
    }
  }
}
function returnName(propName) {
  for (const product of products) {
    nameArray.push(product.name);
  }
  return nameArray;
}
function returnPrice(propName) {
  for (const product of products) {
    priceArray.push(product.price);
  }
  return priceArray;
}
function returnQuantity(propName) {
  for (const product of products) {
    quantityArray.push(product.quantity);
  }
  return quantityArray;
}
*/
//Refactoring
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let propValues = [];
  for (let i = 0; i < products.length; i += 1) {
    if (propName in products[i]) {
      propValues.push(products[i][propName]);
    }
  }
  return propValues;
}

//tests
console.log(getAllPropValues("name")); //повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); //повертає [4, 3, 7, 9]
console.log(getAllPropValues("price")); //повертає [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); //повертає []
*/
//20/41
/*
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  for (const product in products) {
    const element = products[product];

    if (productName === element.name) {
      return element.price * element.quantity;
    }
  }
  return 0;
}
//tests
console.log(calculateTotalPrice("Blaster")); //0
console.log(calculateTotalPrice("Radar")); //5200
console.log(calculateTotalPrice("Droid")); //2800
console.log(calculateTotalPrice("Grip")); //10800
console.log(calculateTotalPrice("Scanner")); //8100
*/
//21/41
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

//Диструктуризація об'єта
const { yesterday, today, tomorrow } = highTemperatures;

const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);
console.log(highTemperatures);
*/
//22/41
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
// const icon = highTemperatures.icon;

//Диструктуризація об'єта + значення по замовчуванню...
const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;
console.log(meanTemperature);
*/
//23/41
/*
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;
// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//tests
console.log(meanTemperature);
*/
//24/41
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

// Диструктуризація об'єта в циклі
for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
//tests
console.log(hexColors);
console.log(rgbColors);
*/
//25/41
/*
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;
//Глибока диструктуризація об'єта + зміна значення по замовчуванню...
const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;
console.table(forecast);
*/
//26/41
/*
function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  // Деструктуризація в тілі функції
  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
//tests
console.log(
  calculateMeanTemperature({
    today: { low: 28, high: 32 },
    tomorrow: { low: 25, high: 29 },
  })
);
*/
//27/41
/*
const temps = [14, -4, 25, 8, 11];

// В консолі буде масив
console.log(temps);
// ❌ Так не спрацює, тому що передаємо цілий масив
console.log(Math.max(temps)); // NaN

// В консолі буде набір окремих чисел
console.log(...temps);
// ✅ Розподілимо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25
*/
/*
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
console.log(bestScore);
console.log(worstScore);
*/
//28/41
/*
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

//tests
console.log(firstGroupScores);
console.log(secondGroupScores);
console.log(thirdGroupScores);
console.log(allScores);
console.log(bestScore);
console.log(worstScore);
*/
//29/41
/*
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings);//{theme: 'light', public: false, withPassword: true, minNumberOfQuestions: 10, timePerQuestion: 30}

//tests
console.log(finalSettings.theme); //light
console.log(finalSettings.public); //false
console.log(finalSettings.withPassword); //true
console.log(finalSettings.minNumberOfQuestions); //10
console.log(finalSettings.timePerQuestion); //30
*/
//30/41
/*
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  let res = {
    completed, // variant 1. Но только если не подразумевается, что в аргументе функции пользователь не может задавать completed, иначе значение по умолчанию перезапишет пользовательское.
    category,
    priority,
    ...data,
  };
  return res; // variant 2. return { ...{ completed, category, priority }, ...data };
  // Change code above this line
}
//tests
console.log(
  makeTask({ category: "General", priority: "Normal", completed: false })
);
console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);
console.log(
  makeTask({
    category: "Finance",
    text: "Take interest",
  })
);
console.log(
  makeTask({
    priority: "Low",
    text: "Choose shampoo",
  })
);
console.log(makeTask({ text: "Buy bread" }));
*/
//31/41
// Change code below this line
/*
//Example 1 for
function add(...rest) {
  const total = [...rest];
  let element = 0;
  for (let i = 0; i < total.length; i += 1) {
    element += total[i];
  }
  return element;
  // Change code above this line
}
*/
//Example 2 for of
/*
function add(...args) {
  let total = 0;
  for (const i of args) {
    total += i;
  }
  return total;
}
//tests
console.log(add(15, 27));
console.log(add(12, 4, 11, 48));
console.log(add(32, 6, 13, 19, 8));
console.log(add(74, 11, 62, 46, 12, 36));
*/
//32/41
/*
// Change code below this line
function addOverNum(firstParameter, ...args) {
  let total = 0;
  for (const arg of args) {
    if (arg > firstParameter) {
      total += arg;
    }
  }
  return total;
  // Change code above this line
}
//tests
console.log(addOverNum(50, 15, 27)); //0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218
*/
//33/41
/*
function findMatches(firstElement, ...args) {
  const matches = [];
  for (const arg of args) {
    if (firstElement.includes(arg)) {
      matches.push(arg);
    }
  }
  return matches;
}
//tests
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // [17, 89, 2]
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // [24, 9, 41]
console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // []
*/
//34/41
/*
const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`;
  },

  // Change code above this line
};
//tests
console.log(bookShelf.getBooks());
console.log(bookShelf.addBook("Haze"));
console.log(bookShelf.removeBook("Red sunset"));
console.log(bookShelf.updateBook("Sands of dune", "Dune"));
*/
//35/41
/*
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    const bookIndex = this.books.indexOf(oldName);
    console.log(bookIndex);
    this.books.splice(bookIndex, 1, newName);
    console.log(this.books);

    // Change code above this line
  },
};
//tests
console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
console.log(bookShelf.updateBook("The last kingdom", "Dune"));
console.log();
console.log();
*/
//36/41
/*
const atTheOldToad = {
  // Change code below this line
  potions: [],
  // Change code above this line
};
console.log(atTheOldToad.potions);
*/
//37/41
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};
//tests
console.log(atTheOldToad);
console.log();
console.log();
*/
//38/41
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    return this.potions;
    // Change code above this line
  },
};
//tests
console.log(atTheOldToad.addPotion("Invisibility"));//["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
console.log(atTheOldToad.addPotion("Power potion"));//["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]
*/
//39/41
/*
const atTheOldToad1 = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const indexElement = this.potions.indexOf(potionName);
    this.potions.splice(indexElement, 1);
    return this.potions;
    // Change code above this line
  },
};
//tests
console.log(atTheOldToad1.removePotion("Dragon breath"));
console.log(atTheOldToad1.removePotion("Speed potion"));
*/
//40/41
/*
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
    const indexElement = this.potions.indexOf(oldName);
    this.potions.splice(indexElement, 1, newName);
    return this.potions;
    // Change code above this line
  },
};
//tests
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); //["Speed potion", "Polymorth", "Stone skin"]
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility")); //["Speed potion", "Polymorth", "Invisibility"]
console.log();
*/
// //41/41
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (
      this.potions.some(
        (item) => item.name === newPotion.name && item.age === newPotion.age
      )
    ) {
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    this.potions = this.potions.filter((potion) => potion.name !== potionName);
    if (this.getPotions().some((potion) => potion.name === potionName)) {
      return `Potion ${potionName} is removed from inventory!`;
    } else {
      return `Potion ${potionName} is not in inventory!`;
    }
  },
  updatePotionName(oldName, newName = "") {
    const potionIndex = this.potions.findIndex(
      (potion) => potion.name === oldName
    );
    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
    this.potions[potionIndex].name = newName;
    return `Potion ${oldName} is renamed to ${newName}!`;
  },
  // Change code above this line
};

//tests
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 780 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// console.log("-------------------");
// const array = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Bob", age: 40 },
// ];
// const obj = { name: "Jane", age: 25 };
// const v = Object.values(obj);

// // console.log(v);
// for (const ar of array) {
//   const b = Object.values(ar);
//   // console.log(b);
//   if ((b[0] === v[0]) & (b[1] === v[1])) {
//     console.log("Масив містить об'єкт", v);
//   } else {
//     console.log("Масив не містить об'єкт");
//   }
// }

// const array = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Bob", age: 40 },
// ];
// const object = { name: "Jane", age: 25 };

// if (
//   array.some((item) => item.name === object.name && item.age === object.age)
// ) {
//   console.log("Масив містить об'єкт");
// } else {
//   console.log("Масив не містить об'єкт");
// }
