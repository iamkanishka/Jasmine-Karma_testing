
describe('calculator.js', () => {
    //Todo Test or Specs
    //todisable the spec use xit
    it('Should add number to the total', function () {
        // expect 5+5 = 10;
        // expect(5+5).toBe(10);

        const calculator = new Calculator();
        expect(calculator.add(8)).toBe(8);
        expect(calculator.total).toBe(8);

    })
    it('Should subtract number from the total', function () {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);

    })

    it('Should multiply number from the total', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply(2);
        expect(calculator.total).toBe(20);

    })

    it('Should divide number from the total', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.divide(2);
        expect(calculator.total).toBe(5);
    })


    it('Should initializethe total', function () {
        const calculator = new Calculator();
        expect(calculator.total).toBe(0);
        
        // let person = {name: "kannu"}
        //let person2 = {name: "kannu"}
        //expect(person).toBe(person1);
    })

});
