// const name = "Oleh";
const lastName = "Fedorchuk";
const full = `My name is ${name}, and surname is ${lastName}`;
console.log(full);

fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then((response) => response.json())
  .then((data) => {
    console.log("Курс долара (USD): " + data.rates.UAH);
    console.log("Курс євро (EUR): " + data.rates.EUR);
    console.log("Курс британського фунта стерлінгів (GBP): " + data.rates.GBP);
    console.log("grivna " + data.rates.UAH);
  })
  .catch((error) => {
    console.log("Сталася помилка: " + error);
  });
