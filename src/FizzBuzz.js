function FizzBuzz() {
};
FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  }
  if (this.isDivisibleBy(3, number)) {
    return 'Fizz';
  }
  if (this.isDivisibleBy(5, number)) {
    return 'Buzz';
  }
  return number;
};


FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}


fizzbuzz = new FizzBuzz();

for(var x = 1; x < 101; x++) { console.log(fizzbuzz.play(x)); }
