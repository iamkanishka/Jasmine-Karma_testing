class ArithmeticError extends Error{
 constructor(message){
    super(message);
    this.name='ArithmeticError';

 }
}

class BadrequestError extends Error{
    constructor(message){
       super(message);
       this.name='BadrequestError';
       
    }
   }

function Calculator(){
    this.total=0
}

Calculator.prototype.add = function(number){
 return (this.total += number)
}

Calculator.prototype.subtract =function(number){
 return (this.total -= number)
    
}

Calculator.prototype.multiply =function(number){
 return (this.total *= number)
    
}
Calculator.prototype.divide =function(number){
    if(number===0){
        throw new  ArithmeticError('Number Should not be zero')
    }
 return (this.total /= number)
    
}



Object.defineProperty(Calculator.prototype, 'version',{
    get:function(){
        return '0.1';
    },
    configurabe:true,
    enumerable:true
    
})