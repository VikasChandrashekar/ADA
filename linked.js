class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
     this.head = null;
    }

    add(value){
        let node = {value, next: null};
        if(this.head == null){
            this.head = node;
        } else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
    }
}

let li = new linkedList();
li.add('vikas');
li.add('mazda');

console.log(li);