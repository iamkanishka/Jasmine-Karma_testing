
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


    //toBe Matcher
    it('Should initializethe total', function () {
        const calculator = new Calculator();
        expect(calculator.total).toBe(0);
        expect(calculator.total).toBeFalsy();


        // let person = {name: "kannu"}
        //let person2 = {name: "kannu"}
        //expect(person).toBe(person1);
    });


    //toEqual matcher
    it('Should initialize the constructor', function () {
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        //calculator.total = '0'
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);

    });

    //not matcther
    it('Should have unique calculator object', function () {
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator).not.toBe(calculator2);
    });

    //toBeUndefined  and tobeDefined
    it('Should have common methods', function () {
        const calculator = new Calculator();
        expect(calculator.add).not.toBeUndefined();
        expect(calculator.subtract).not.toBeUndefined();
        expect(calculator.multiply).not.toBeUndefined();
        expect(calculator.divide).toBeDefined();
    })

    //toBeNull
    it('Should overwrite total value', function () {
        const calculator = new Calculator();
        calculator.total = null;
        expect(calculator.total).toBeNull()

    })

    //toContain
    it('Should have the calculator constructor', function () {
        const calculator = new Calculator();
        let arr = [1, 2, 3, 4, 5];
        expect(arr).toContain(4);
        let constructorName = calculator.constructor.name;
        expect(constructorName).toContain('Cal');
    })


    //toBeNaN
    it('Doesnt handle Nan For multiply', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply('a');
        expect(calculator.total).toBeNaN()
    })


    //toBeNaN
    it('Doesnt handle Nan For multiply', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply('a');
        expect(calculator.total).toBeNaN()
    });

    //toThrow Matcher      
    it('Should throw error when divide by zero', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        expect(function() {calculator.divide(0)}).toThrow()

        expect(function() {calculator.divide(0)}).toThrow(new  Error('Number Should not be zero'))

    })


      //toThrowError Matcher      
      it('Should throw error with message when divide by zero', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        expect(function() {calculator.divide(0)}).toThrowError();

        expect(function() {calculator.divide(0)}).toThrowError('Number Should not be zero')
        expect(function() {calculator.divide(0)}).toThrowError(ArithmeticError,'Number Should not be zero')
    })

       //tomatch Matcher      
       it('Should return a total Number', function () {
        const calculator = new Calculator();
        calculator.total = 10;
        expect(calculator.add(10)).toBe(20);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('ber');
   });

          //tomatch Matcher      
          it('Should return a total as value', function () {
            const calculator = new Calculator();
            calculator.total = 10;
        expect(calculator.total).toEqual(jasmine.anything());
      //   expect(undefined).toEqual(jasmine.anything());

           
     })
 

});
