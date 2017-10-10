//dollarAmount is getting incorrectly rounded to 4.09 when defined as 4.10.... the code works fine with other tested floats though

const dollarAmount = 4.1
const piggyBank = {}

// piggyBank.key = quarters

//defining the amount of quarters / inserting the quarters property and value into the piggyBank object

let quarters = Math.floor(dollarAmount/.25);
piggyBank.quarters = quarters;
let remainingAmount = dollarAmount - (quarters * .25);
// dollarAmount -= quarters * .25; // this is to subtract the amount of quarters from the total dollarAmount left for following calculations, but it doesnt work with the const variable!...

let dimes = Math.floor(remainingAmount/.10);
piggyBank.dimes = dimes;
remainingAmount -= dimes * .10;

let nickels = Math.floor(remainingAmount/.05);
piggyBank.nickels = nickels;
remainingAmount -= nickels * .05;

let pennies = Math.floor(remainingAmount/.01);
piggyBank.pennies = pennies;
remainingAmount -= pennies * .01;
console.log(piggyBank);


// let coinAmount = 0
// for ( i = 0; coinAmount <= dollarAmount; i++ )  {
//     let coinAmount = dollarAmount % .25;
//     piggyBank.push("quarters": coinAmount)
// }



// I TRIED CHANGING EVERYTHING TO WHOLE NUMBERS
////// AND ALTERED THE CODE,
////// BUT IT STILL GAVE ME INCORRECT ROUNDING OF $4.10 to $4.09?!
////// below is that code....

//////defining the amount of quarters / inserting the quarters property and value into the piggyBank object
//////trying multiplying by 100 because the floats are rounding improperly somehow
// let remainingAmount = dollarAmount * 100 
// let quarters = Math.floor(remainingAmount / 25);
// piggyBank.quarters = quarters;
// remainingAmount -= quarters * 25;
////// dollarAmount -= quarters * .25; // this is to subtract the amount of quarters from the total dollarAmount left for following calculations, but it doesnt work with the const variable!...

// let dimes = Math.floor(remainingAmount / 10);
// piggyBank.dimes = dimes;
// remainingAmount -= dimes * 10;

// let nickels = Math.floor(remainingAmount / 5);
// piggyBank.nickels = nickels;
// remainingAmount -= nickels * 5;

// let pennies = Math.floor(remainingAmount / 1);
// piggyBank.pennies = pennies;
// remainingAmount -= pennies * 1;
// console.log(piggyBank);