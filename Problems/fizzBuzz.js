const fizzOrBuzz = () => {
    for (let i = 1; i <= 100; i++) { //run through 1 to 100
        let fizz = i % 3 == 0, //for numbers divisible by 3
            buzz = i % 5 == 0; //for numbers divisible by 5
        console.log(fizz ? buzz ? "FizzBuzz" : "Fizz" : buzz ? "Buzz" : i); //terenary comparision 
    }
}

fizzOrBuzz();