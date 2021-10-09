class Stack {
    constructor(){
        this.item = [];
        this.result = 0
    }
    push(number){
        this.item[this.result] = number;
        this.result++;
        console.log(this.item)
        return this.result-1
    }
    pop(){
        let popStack = this.item[this.result-1]
        this.result--;
        console.log(popStack)
        return popStack
    }
    size(){
        console.log(this.result)
        return this.result
    }
}

const myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop()
myStack.size()