console.log("i'm ready!");
// Iteration 1: Names and Input
let hacker1 = "massi";
console.log(`the driver's name is ${hacker1}.`);
let hacker2 = "lolod";
console.log(`the navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;
if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name,it has ${driverLength} characters`
  );
} else if (driverLength < navigatorLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorLength} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigatorLength} characters!`
  );
}
// Iteration 3: Loops
let character = "";
for (let i = 0; i < driverLength; i++) {
  if (i === driverLength - 1) {
    character += hacker1[i].toUpperCase();
  } else {
    character += hacker1[i].toUpperCase() + " ";
  }
}
console.log(character)

let characterInvers = "";
for (let i =driverLength; i >= 0; i--) {
  
    characterInvers += hacker1[i];
}
console.log(character)

let resultOrder=hacker1.localeCompare(hacker2);
if(resultOrder===-1){
console.log("The driver's name goes first.")
}else if(resultOrder===1){
    console.log("Yo, the navigator goes first definitely");
}else{
    console.log("What?! You both have the same name?")
}