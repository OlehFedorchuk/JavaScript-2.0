console.log("hi");

const buttonRef = document.querySelector(".js-button");
const handleBtnClick = function () {
  console.log("Click on Button:" + Date.now());
};
buttonRef.addEventListener("click", handleBtnClick);
