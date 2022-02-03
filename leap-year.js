const myYear = 2340;

function leapYear ( year ) {
    if (year % 4 == 0){
        return true;
    }
    else {
        return false;
    }
}

const isLeapYear = leapYear(myYear);
console.log( 'is leap year is : ' , isLeapYear);