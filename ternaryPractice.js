// refactor the code below using a ternary check the age to determine the eligibility to vote
let age = 15;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

// const result = age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet."

//Write a function called numberId with a nested ternary that checks if a number is positive, negative or zero
//it returns "positive" when the number is positive
//it returns "negative" when the number is negative
//it returns "zero" when the number is 0

function numberId(number){
    return number >=0 
        ? number === 0 
            ? "zero" 
            : "positive"
        : "negative"
}

console.log(numberId(1))
console.log(numberId(-2))
console.log(numberId(0))