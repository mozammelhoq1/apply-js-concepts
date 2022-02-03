/* let factorial = 1;
for (let i = 1; i <= 5; i++){
    factorial = factorial * i;
}
console.log(factorial); */


const myNumber = 10;
const herNumber = 20;

const myNumber2 = 15;
const herNumber2 = 5;

function factorial (number){
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}
const myFactorial = factorial(myNumber);
console.log("My factorial count is  : " , myFactorial);

const herFactorial = factorial(herNumber);
console.log("Her factorial count is  : " , herFactorial);

function factorial2 (number) {
    let fact = 1;
    for( let i = number; i >= 1; i--){
        fact = fact * i;
    }
    return fact;
}

const myFactorial2 = factorial(myNumber2);
console.log("My factorial two count is  : " , myFactorial2);

const herFactorial2 = factorial(herNumber2);
console.log("Her factorial count is  : " , herFactorial2);