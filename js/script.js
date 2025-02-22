// Task 1
// const showMessage = () => console.log("Hello World!");
// showMessage();

// Task 2
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// const checkGuess = (userGuess) => {
//     return userGuess == randomNumber ? "Правильно!" : "Неправильно.";
// };
// console.log(checkGuess(50));

// Task 3
// let clickCount = 0;
// const countClicks = () => {
//     clickCount++;
//     console.log(`Кількість кліків: ${clickCount}`);
// };
// countClicks();

// Task 4
// const applyCallbackToEachElement = (arr, callback) => arr.map(callback);
// const arr = [1, 2, 3, 4, 5];
// const squareCallback = num => num * num;
// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); // [1, 4, 9, 16, 25]

// Task 5
const calculateDiscountedPrice = (price, discount, callback) => {
    let discountedPrice = price - (price * discount / 100);
    callback(discountedPrice);
};
const showDiscountedPrice = price => console.log(`Discounted price: ${price}`);
calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90