describe("FizzBuzz", function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("when number is divisible by 3", function() {

    it("should print 'Fizz' for the number 3", function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz')
    });

    it("should print 'Fizz' for the number 6", function() {
      expect(fizzbuzz.play(6)).toEqual('Fizz')
    });

    it("should print 'Fizz' for the number 9", function() {
      expect(fizzbuzz.play(9)).toEqual('Fizz')
    });

  });

  describe("When number is divisible by 5", function() {

    it("should print 'Buzz' for the number 5", function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz')
    });

    it("should print 'Buzz' for the number 10", function() {
      expect(fizzbuzz.play(10)).toEqual('Buzz')
    });

    it("should print 'Buzz' for the number 20", function() {
      expect(fizzbuzz.play(20)).toEqual('Buzz')
    });

  });

  describe("When number is divisible by both 3 and 5", function() {

    it("should print 'FizzBuzz' for the number 15", function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz')
    });

    it("should print 'FizzBuzz' for the number 30", function() {
      expect(fizzbuzz.play(30)).toEqual('FizzBuzz')
    });

    it("should print 'FizzBuzz' for the number 45", function() {
      expect(fizzbuzz.play(45)).toEqual('FizzBuzz')
    });

  });

  describe("otherwise if it isn't a multiple of 3 and 5", function() {

    it("should return the number provided if 1", function() {
      expect(fizzbuzz.play(1)).toEqual(1)
    });

    it("should return the number provided if 7", function() {
      expect(fizzbuzz.play(7)).toEqual(7)
    });

    it("should return the number provided if 11", function() {
      expect(fizzbuzz.play(11)).toEqual(11)
    });

  });

});
