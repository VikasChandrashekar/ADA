class Queue{
    constructor(size = 10){
        this.maxSize = size;
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }
    count(){
        return this.tail - this.head;
    }

    enqueue(value){
        if(this.count() < this.maxSize){
            this.storage[this.tail++] = value;
            return `${value} : postion in queue is ${this.count()}`;
        } else {
            return 'Queue is full'
        }
    }

    dequeue(){
        let value = this.storage[this.head];
        delete this.storage[this.head];
        if(this.head < this.tail){
            this.head++;
        }
        return `${value} is dequeued now`;
    }

    peek(){
        return `Next in queue is ${this.storage[this.head]}`
    }

}

let line = new Queue(3);
console.log(line.enqueue(3));//1
console.log(line.enqueue(2));//2
console.log(line.enqueue(1));//3
console.log(line.enqueue(4));//Queue is full
console.log(line.dequeue());//3
console.log(line.peek());//2