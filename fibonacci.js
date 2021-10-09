//fibonacci sequence numbers:
//0,1,1,2,3,5,8,13,21,34,55,89...


 //fibonacci with for loop
function fibonacci(number){
    if(number<1) return 0;
    var a,b,fib
    a = 1;
    b = 0;
    fib = b;
    for (let i = 0; i<number; i++) {
        fib = a+b;
        a = b;
        b = fib;  
    } 
    return b
}
console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))


//fibonacci with recursion
function fibonacciRecurcion(num){
    if(num<2){
        return num
    }
    else{
        return fibonacciRecurcion(num-1) + fibonacciRecurcion(num-2)
    }
}

console.log(fibonacciRecurcion(0))
console.log(fibonacciRecurcion(1))
console.log(fibonacciRecurcion(2))
console.log(fibonacciRecurcion(3))
console.log(fibonacciRecurcion(4))







