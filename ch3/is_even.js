function isEven(n) {
    if(n < 0) return isEven(-n);
    else if(n == 0) return "even";
    else if(n == 1) return "odd";
    else return isEven(n-2);
}

console.log("50 is " + isEven(50));
console.log("75 is " + isEven(75));
console.log("-1 is " + isEven(-1));
