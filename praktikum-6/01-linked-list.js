class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) current = current.next;
            current.next = newNode;
        }
        this.size++;
    }
    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    insertAt(data, index){
        if(index < 0 || index > this.size) {
            console.log(' Index di luar batas!'); return;
        }
        if(index === 0) { this.prepend(data); return; }
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) current = current.next;
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
    delete(data) {
        if(!this.head) return false;
        if(this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        while(current.next) {
            if(current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }
    search(data){
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    print(){
        if(!this.head) { console.log('Linked list kosong!'); return; }
        let result = '';
        let current = this.head;
        while(current) {
            result += current.next ? `[${current.data}] -> ` : `[${current.data}]`;
            current = current.next;
        }
        console.log('', result, `(size: ${this.size})`);
    }
    reserve(){
        let prev = null;
        let current = this.head;
        while(current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    toArray(){
        const arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
    reverse(){
        let prev = null;
        let current = this.head;
        while(current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    //method baru
    getAt(index){
        if(index < 0 || index >= this.size)  return null;
        let current = this.head;
        let i = 0;
        while(i < index) {
            if (i === index) return current.data;
            current = current.next;
            i++;
        }
        return null;
    }
    deleteAt(index){
        if(index < 0 || index >= this.size) return ;
        if(index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        let i = 0;
        while(current.next) {
            if(i === index - 1) {
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
            i++;
        }
    }

    indexOf(data){
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    isEmpty(){
        return this.size === 0;
    }
    clear(){
        this.head = null;
        this.size = 0;
    }
}



const ll = new LinkedList();

console.log('=== isEmpty ===');
console.log(ll.isEmpty());
console.log('=== Append ===');
ll.append(10); ll.append(20); ll.append(30); ll.append(40);
ll.print();
console.log('\n=== Prepend ===');
ll.prepend(5);
ll.print();
console.log('\n=== Insert di index 2 ===');
ll.insertAt(15, 2);
ll.print();
console.log('\n=== Search ===');
console.log('Index 20:', ll.search(20));
console.log('Index 99:', ll.search(99));

console.log('\n=== Delete ===');
ll.delete(20);
ll.print();

console.log('\n=== Reverse ===');
ll.reverse();
ll.print();

console.log('\n=== Get At ===');
console.log('Data di index 2:', ll.getAt(2));
console.log('Data di index 10:', ll.getAt(10));

console.log('\n=== indexOf ===');
console.log('Index 30:', ll.indexOf(30));
console.log('Index 99:', ll.indexOf(99));   

console.log('\n=== Delete At ===');
ll.deleteAt(2);
ll.print();
console.log('\n=== isEmpty ===');
console.log(ll.isEmpty());
console.log('\n=== Clear ===');
ll.clear();
ll.print();
console.log('size:', ll.size);
console.log('isEmpty:', ll.isEmpty());