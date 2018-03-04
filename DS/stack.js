class stack{

    constructor(size = 10){
        this.maxSize = size;
        this.storage = {};
        this.count = 0;
    }

    push(value){
        if(this.count < this.maxSize){
            this.storage[this.count++] = value;
            return this.count;
        } else {
            return 'Max size reached, cant insert more elements';
        }
    }

    pop(){
        if(this.count === 0){
            return 'Nothing to pop'
        } 

        let value = this.storage[--this.count];
        delete this.storage[this.count];
        if(this.count<0){
            this.count = 0;
        }

        return value;
    }

    stackLength(){
        return this.count;
    }

    peek(){
        return this.storage[this.count-1];
    }
}

let callStack = new stack(5);
console.log(callStack.pop()); //nothing to pop
console.log(callStack.push(1)); //1
console.log(callStack.push(2)); //2
console.log(callStack.push(3)); //3
console.log(callStack.push(4)); //4
console.log(callStack.push(5)); //5
console.log(callStack.push(6)); //stack full
console.log(`popped value is ${callStack.pop()}`); //5
console.log(callStack.push(6)); //5
console.log(`value at top of stack is ${callStack.peek()}`); //6
console.log(`current stack length is ${callStack.stackLength()}`); //5