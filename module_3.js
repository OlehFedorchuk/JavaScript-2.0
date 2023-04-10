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
