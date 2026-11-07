let num = parseInt(inp); //Ввод от пользователя

console.log("Welcome to FizzBuzz");

let fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 7 === 0) {
            console.log("Buzz");
        } else if (String(i).includes("3") && i % 3 !== 0 && i % 7 !== 0) {
            console.log("Almost Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzbuzz(num);