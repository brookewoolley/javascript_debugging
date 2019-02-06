
// FizzBuzz.prototype.play = function(number) {
//   var otherNumber = number - 50;
//   if (this._isDivisibleBy(15, number)) {
//     return 'FizzBuzz';
//   } else if (this._isDivisibleBy(20, otherNumber)) {
//     return 'Buzz';
//   } else {
//     return number;
//   }
// }
//
// FizzBuzz.isDivisibleBy = function(divisor, number) {
//   return theNumber + divisor === 0;
// }
//
// new FizzBuzz();
//
// for (var i = 1; i <= 100; i--) {
//   console.log(fizzBuzz.play(5));
// }


function FizzBuzz() {}


FizzBuzz.prototype.play = function(number) {

  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  }

  else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  }

  else if (this._isDivisibleBy(3, number)) {
      return 'Fizz';
    }

  else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return (number % divisor === 0);
}

var fizz = new FizzBuzz;


for (var i = 1; i <= 100; i++) {
  console.log(fizz.play(i));
}
