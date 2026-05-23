//doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log('Index di luar batas!'); return;
        }
        if (index === 0) { this.prepend(data); return; }
        if (index === this.size) { this.append(data); return; }
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        const prevNode = current.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = current;
        current.prev = newNode;
        this.size++;
    }
    delete(data) {
        if (!this.head) return ;
        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    this.head = current.next;
                    this.head.prev = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {    
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return;
            }
            current = current.next;
        }
        console.log('Data tidak ditemukan!');
    }
    reverse() {
        let current = this.head;
        let temp = null;
        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }
        temp = this.head;
        this.tail = this.head;
        this.head = temp.prev;
    }
    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log('(head)' + values.join(' <-> ') + ' (tail)', `(size: ${this.size})`);
    }
    printReverse() {
        const values = [];
        let current = this.tail;
        while (current) {
            values.push(current.data);
            current = current.prev;
        }
        console.log('(tail)' + values.join(' <-> ') + ' (head)', `(size: ${this.size})`);
    }
}
const dll = new DoublyLinkedList();
console.log('\n=== append === ');
dll.append(10);
dll.append(20);
dll.append(30);
dll.print(); // (head)10 <-> 20 <-> 30 (tail) (size: 3)
console.log('head:', dll.head.data, 'tail:', dll.tail.data);

console.log('\n=== prepend === ');
dll.prepend(5);
dll.print();
console.log('head:', dll.data);

console.log('\n=== insertAt (15, 2) === ');
dll.insertAt(15, 2);
dll.print();

console.log('\n=== delete (20)=== ');
dll.delete(20);
dll.print();

console.log('\n=== delete head  (5)=== ');
dll.delete(5);
dll.print();
console.log('head:', dll.head.data);

console.log('\n=== delete tail (30)=== ');
dll.delete(30);
dll.print();
console.log('tail:', dll.tail.data);
console.log('\n=== print dari belakang=== ');
dll.printReverse();

console.log('\n=== reverse === ');
dll.reverse();
dll.print();
console.log('head:', dll.head.data);
console.log('tail:', dll.tail.data);

console.log('\nsize:', dll.size);
