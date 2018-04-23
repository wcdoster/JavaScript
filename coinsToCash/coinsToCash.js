const piggyBank = {
    quarters: 93,
    nickels: 23,
    dimes: 98,
    pennies: 35
}
let dollarAmount = piggyBank.quarters * .25;
dollarAmount += (piggyBank.nickels * .05);
dollarAmount += (piggyBank.dimes * .1);
dollarAmount += (piggyBank.pennies * .01);

console.log(dollarAmount);