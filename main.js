
// tweem


class Calculator{
    constructor(){
        this.range =[];
        this.primes =[];
    }
    getPrime(endNum){
        for(let i =2; i<=endNum;i++){
            this.range.push(i);
        }
        while(this.range.length>0){
            let nextPrime = this.range.shift();
            this.primes.push(nextPrime);
            this.range = this.range.filter(function (num){
                return num % nextPrime !== 0;
            })
        }
console.log(`prime number ${this.primes}`);
    }
}
let test = new Calculator();
test.getPrime(50)


