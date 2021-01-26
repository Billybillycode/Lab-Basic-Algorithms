console.log("I am ready");

// Iteration 1: Names and Input
let hacker1;
hacker1 = "Billy";
let hacker2;
hacker2 = "Random";

// Iteration 2: Conditionals
let hacker1Length = hacker1.length;
console.log(hacker1Length);
let hacker2Length = hacker2.length;
console.log(hacker2Length);
let driver;
let navigator;
if (hacker1Length > hacker2Length) {
    driver = hacker1;
    navigator = hacker2;
    console.log(
    `The driver has the longest name, it has ${driver} characters`
  );
} else if (hacker2Length > hacker1Length) {
    driver = hacker2;
    navigator = hacker1;
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}
console.log('-----');
console.log(driver);
console.log(navigator);
// Iteration 3: Loops
console.log('----')
// for (let i = 0; i <driver.length; i++) {
//     console.log(driver[i]);
// };
console.log('----')
let arrayLetter = [];
for (let i = 0; i < driver.length; i++) {
    let driverLetter = driver.charAt(i)
    console.log(driverLetter);
    console.log(typeof(driverLetter))
    arrayLetter.push(driverLetter);
    console.log(arrayLetter)
}
console.log('----')
// let driverLetterCapital = driverLetter.toUppperCase();
// console.log(driverLetterCapital)

