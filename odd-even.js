const myNumber = 1234;
const herNumber = 12356;

function evenNumber (number){
    if( number % 2 == 0){
        return true;
    }
    return false;
}

const isEven = evenNumber(myNumber);
console.log("my number is :" , isEven);



function oddNumber (number){
    if ( number % 2 != 0 ){
        return true;
    }
    return false;
}

const isOdd = oddNumber(herNumber);
console.log("her number is :" , isOdd);