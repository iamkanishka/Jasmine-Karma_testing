
describe('calculator.js', () => {
 //Todo Test or Specs
 it('Should add number to the total',function(){
    // expect 5+5 = 10;
    // expect(5+5).toBe(10);

    const calculator = new Calculator();
    expect(calculator.add(8)).toBe(8);
    expect(calculator.total).toBe(8);

 })
 it('Should subtract number from the total',function(){
    // const calculator = new Calculator();
    // expect(calculator.subtract(4)).toBe(4);
 })

 it('Should multiply number from the total',function(){
    // const calculator = new Calculator();
    // expect(calculator.subtract(4)).toBe(16);
 })

 it('Should divide number from the total',function(){
    // const calculator = new Calculator();
    // expect(calculator.subtract(4)).toBe(4);
 })

});
