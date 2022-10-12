
describe('calculator.js', () => {
    //Todo Test or Specs
    //todisable the spec use xit

    describe('Calculator', () => {
        let calculator 
        let calculator2

        beforeEach(function () {
            // executes before execution of each spec in the suite
             calculator = new Calculator();
             calculator2 = new Calculator();

        })

        afterEach(function () {
            // executes after execution of each spec in the suite
            //clean up after execution

        })


        //toBe Matcher
        it('Should initializethe total', function () {
      
            expect(calculator.total).toBe(0);
            expect(calculator.total).toBeFalsy();


            // let person = {name: "kannu"}
            //let person2 = {name: "kannu"}
            //expect(person).toBe(person1);
        });


        //toEqual matcher
        it('Should initialize the constructor', function () {
             
           
            //calculator.total = '0'
            expect(calculator).toBeTruthy();
            expect(calculator2).toBeTruthy();
            expect(calculator).toEqual(calculator2);

        });


        //not matcther
        it('Should have unique calculator object', function () {
             
           
            expect(calculator).not.toBe(calculator2);
        });



        //toBeUndefined  and tobeDefined
        it('Should have common methods', function () {
             
            expect(calculator.add).not.toBeUndefined();
            expect(calculator.subtract).not.toBeUndefined();
            expect(calculator.multiply).not.toBeUndefined();
            expect(calculator.divide).toBeDefined();
        });





        //toBeNull
        it('Should overwrite total value', function () {
             
            calculator.total = null;
            expect(calculator.total).toBeNull()

        })

        //toContain
        it('Should have the calculator constructor', function () {
             
            let arr = [1, 2, 3, 4, 5];
            expect(arr).toContain(4);
            let constructorName = calculator.constructor.name;
            expect(constructorName).toContain('Cal');
        });


        //any Matcher      
        it('Should be an instance', function () {
            jasmine.addMatchers(customMatcher);
             
            calculator.total = 10;
            expect(calculator).toEqual(jasmine.any(Object));
            expect(calculator).toEqual(jasmine.any(Calculator));
            expect(calculator.total).toEqual(jasmine.any(Number));
            expect(calculator).toBeCalculator()


        })

        it('Should contain total as key', function () {
             
            calculator.total = 10;
            expect(calculator).toEqual(jasmine.objectContaining({
                total: 10
            }))
            expect(typeof calculator.total).toEqual(jasmine.stringContaining('num'))


        });



        //jasmine.anytyhing Matcher      
        it('Should return a total as value', function () {
             
            calculator.total = 10;
            expect(calculator.total).toEqual(jasmine.anything());
            //   expect(undefined).toEqual(jasmine.anything());
        })



        describe('add()', () => {
            it('Should add number to the total', function () {
                // expect 5+5 = 10;
                // expect(5+5).toBe(10);

                 
                expect(calculator.add(8)).toBe(8);
                expect(calculator.total).toBe(8);

            });

            //tomatch Matcher      
            it('Should return a total Number', function () {
                 
                calculator.total = 10;
                expect(calculator.add(10)).toBe(20);
                expect(calculator.total).toMatch(/-?\d+/);
                expect(typeof calculator.total).toMatch('ber');
            });
        });
        describe('subtract()', () => {

            it('Should subtract number from the total', function () {
                 
                calculator.total = 30;
                calculator.subtract(5);
                expect(calculator.total).toBe(25);

            })
        });
        describe('multiply()', () => {

            it('Should multiply number from the total', function () {
                 
                calculator.total = 10;
                calculator.multiply(2);
                expect(calculator.total).toBe(20);

            });



            //toBeNaN
            it('Doesnt handle Nan For multiply', function () {
                 
                calculator.total = 10;
                calculator.multiply('a');
                expect(calculator.total).toBeNaN()
            })


            //toBeNaN
            it('Doesnt handle Nan For multiply', function () {
                 
                calculator.total = 10;
                calculator.multiply('a');
                expect(calculator.total).toBeNaN()
            });


        });
        describe('divide()', () => {

            it('Should divide number from the total', function () {
                 
                calculator.total = 10;
                calculator.divide(2);
                expect(calculator.total).toBe(5);
            });





            //toThrow Matcher      
            it('Should throw error when divide by zero', function () {
                 
                calculator.total = 10;
                expect(function () { calculator.divide(0) }).toThrow()

                expect(function () { calculator.divide(0) }).toThrow(new Error('Number Should not be zero'))

            })


            //toThrowError Matcher      
            it('Should throw error with message when divide by zero', function () {
                 
                calculator.total = 10;
                expect(function () { calculator.divide(0) }).toThrowError();

                expect(function () { calculator.divide(0) }).toThrowError('Number Should not be zero')
                expect(function () { calculator.divide(0) }).toThrowError(ArithmeticError, 'Number Should not be zero')
            })

        });




        describe('get Version', function () {
            it('fetches version from external source', function (done) {
              calculator.version.then(function (version) {
                expect(version).toBe('0.4');
                done();
              });
            });





        })







    });
});