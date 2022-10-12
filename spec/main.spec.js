describe('main.js', function () {
    describe('calculate()', function () {
        it('validate Expression if the first  number is valid', function () {
            spyOn(window, 'updateResult');// and.stub is the default one and can be ommitted
            Calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression Not recogniced');
            expect(window.updateResult).toHaveBeenCalledTimes(1);


        });

        it('validate Expression if the second number is valid', function () {
            spyOn(window, 'updateResult');// and.stub is the default one and can be ommitted
            Calculate('3+b');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression Not recogniced');
            expect(window.updateResult).toHaveBeenCalledTimes(1);


        });


        it('validate Expression if the operation is valid', function () {
            spyOn(window, 'updateResult');// and.stub is the default one and can be ommitted
            Calculate('3_3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression Not recogniced');
            expect(window.updateResult).toHaveBeenCalledTimes(1);


        });


        it('Calls add', function () {
            const spy = spyOn(Calculator.prototype, 'add');

            Calculate('3+2');
            //TODO Expectation

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(2);
            expect(spy).toHaveBeenCalledWith(3);

        });
        it('Calls subtract', function () {
            const spy = spyOn(Calculator.prototype, 'subtract');

            Calculate('3-2');
            //TODO Expectation
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(2);
            expect(spy).not.toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledTimes(1);


        });
        it('Calls multiply', function () {
            const spy = spyOn(Calculator.prototype, 'multiply');

            Calculate('4*5');
            //TODO Expectation

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).not.toHaveBeenCalledWith(4);
            expect(spy).toHaveBeenCalledWith(5);

        });
        it('Calls divide', function () {
            const spy = spyOn(Calculator.prototype, 'divide');

            Calculate('6/3');

            //TODO Expectation

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).not.toHaveBeenCalledWith(6);

        });

        it('Calls updateResult(exmaple for callThrough)', function () {
            spyOn(window, 'updateResult');
            const spy = spyOn(Calculator.prototype, 'multiply').and.callThrough();

            Calculate('3*3');
            expect(spy).toHaveBeenCalled();

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(9);


        });


        it('Calls updateResult(exmaple for callFake)', function () {
            spyOn(window, 'updateResult');
            const spy = spyOn(Calculator.prototype, 'multiply').and.callFake(function () {
                return 'Fake Call'
            });

            Calculate('3*3');
            expect(spy).toHaveBeenCalled();

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Fake Call');


        });

        it('Calls updateResult(exmaple for returnValue)', function () {
            spyOn(window, 'updateResult');
            const spy = spyOn(Calculator.prototype, 'multiply').and.returnValue('returns a value')

            Calculate('3*3');
            expect(spy).toHaveBeenCalled();

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('returns a value');


        });

        it('Calls updateResult(exmaple for returnValues)', function () {
            spyOn(window, 'updateResult');
            const spy = spyOn(Calculator.prototype, 'add').and.returnValues(null, 'second call')

            Calculate('3+3');
            expect(spy).toHaveBeenCalled();

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('second call');
        });

        it('does not handle Errors', function () {
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error');
            expect(function () { Calculate('3*3') }).toThrowError('some error')


        })


    });

    describe('updateResult()', function () {

        beforeAll(function () {
            const element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
            this.element = element
        })
        afterAll(function () {

            document.body.removeChild(this.element);

        })
        it('add result to the DOM Element', function () {
            updateResult('5');
            expect(this.element.innerText).toBe('5')

        });

    });

     xdescribe('showVersion()', function () {
        it('should call the showversion method', function () {
          spyOn(document, 'getElementById').and.returnValue({
            innerText: null
          });
          const spy = spyOnProperty(Calculator.prototype, 'version', 'get').and.returnValue('0.9');
    
          showVersion();
          expect(spy).toHaveBeenCalled();
          expect(spy).toHaveBeenCalledTimes(1);
          expect(spy()).toEqual('0.9');
        });
      });

      




});