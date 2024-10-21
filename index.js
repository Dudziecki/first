"use strict"

let calculator = {
    sum(a,b) {
        return this.a + this.b;
      },
    
      mul(a,b) {
        return this.a * this.b;
      },
    
     
  };
  
  
  console.log( calculator.sum(4,5) );
  console.log( calculator.mul(4,5) );