describe('main.js', function () {
    describe('main()', function () {
        it('validate Expression if the first  number is valid', function () {
            spyOn(window, 'updateResult').and.stub();
            Calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
          });

          it('validate Expression if the second number is valid', function () {
            spyOn(window, 'updateResult').and.stub();
            Calculate('3+b');
            expect(window.updateResult).toHaveBeenCalled();
          });

          
          it('validate Expression if the operation is valid', function () {
            spyOn(window, 'updateResult').and.stub();
            Calculate('3_3');
            expect(window.updateResult).toHaveBeenCalled();
          });


        xit('Calls add');
        xit('Calls subtract');
        xit('Calls multiply');
        xit('Calls divide');
        xit('validate Operation');
        xit('Calls updateResult');
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
});