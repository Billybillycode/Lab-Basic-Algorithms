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

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters`
  );
} else if (hacker2Length > hacker1Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`)
}
// Iteration 3: Loops
