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
        let node = new Node(value);
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

    remove(value){
        let currentNode = this.head;
        let previousNode;
        if(currentNode.value === value){
            this.head = currentNode.next
        } else {
        while(currentNode.value !== value){
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
            previousNode.next = currentNode.next;
        }

    }

    indexOf(value){
        let currentNode = this.head;
        let index = -1;
        while(currentNode){
            index += 1;
            if(currentNode.value === value){
                return index
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    elementAt(index){
        let i = 0;
        let currentNode = this.head;
        while(i < index){
            i += 1;
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }


    
}

let li = new linkedList();
li.add(4);
li.add(5);
li.add(6);
li.add(3); 
li.add(6);
li.add(7);
li.add(8);
li.add(9);


console.info(JSON.stringify(li));
console.log(li.indexOf(7));
console.log(li.elementAt(5));