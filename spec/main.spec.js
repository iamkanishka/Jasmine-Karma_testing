describe('main.js', function () {
    describe('main()', function () {
        xit('validate Expression');
        xit('Calls add');
        xit('Calls subtract');
        xit('Calls multiply');
        xit('Calls divide');
        xit('validate Operation');
        xit('Calls updateResult');
    });

    describe('updateResult()', function () {
        let element
        beforeAll(function () {
             element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
        })
        afterAll(function () {
            let element = document.getElementById('result');
            document.body.removeChild(element);

        })
        it('add result to the DOM Element', function () {
            updateResult('5');
            expect(element.innerText).toBe('5')

        });

    });
});