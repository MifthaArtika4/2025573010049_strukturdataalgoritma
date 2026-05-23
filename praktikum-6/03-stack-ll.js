class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList { 
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    remove() {
        if (!this.head) return null;
        const removedData = this.head.data;
        this.head = this.head.next;
        this.size--;
        return removedData;
    }
    peekHead() {
        return this.head ? this.head.data : null;
    }
    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log('[top]' + values.join (' -> ') + ' -> null');
    }
}
class stack {
    constructor() {
        this.list = new LinkedList();
    }
    push(data) {
        this.list.append(data);
    }
    pop() {
        if (this.isEmpty()) {
            console.log('Stack kosong, tidak bisa pop.');
            return null;
        }
        return this.list.remove();
    }
    peek(){
        return this.list.peekHead();
    }
    isEmpty() {
        return this.list.size === 0;
    }
    getSize() {
        return this.list.size;
    }
    print() {
        this.list.print();
    }
}
console.log('=== Stack Dasar ===' );
const stack1 = new stack();
console.log('isEmpty:', stack1.isEmpty());
stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log('peek:', stack1.peek());
console.log('size:', stack1.getSize());
stack1.print();
console.log('pop:', stack1.pop());
stack1.print();
console.log('size:', stack1.getSize());
stack1.pop();
console.log('isEmpty:', stack1.isEmpty());
stack1.pop();

console.log('\n=== Simulasi Undo/Redo');
const aksi = ['ketik "Hello"', 'ketik "World"', 'hapus "World"', 'ketik "JavaScript"'];
const undoStack = new stack();
const redoStack = new stack(); 

console.log('\nLakukan aksi:');
aksi.forEach(a => {
    undoStack.push(a);
    console.log('Aksi:', a);
});
console.log('\nUndo aksi:');
undoStack.print();

console.log('\nUndo 3 kali:');
for (let i = 0; i < 3; i++) {
    const dibatalkan = undoStack.pop();
    if (dibatalkan) {
        redoStack.push(dibatalkan);
        console.log('Redo:', dibatalkan);
    }
}
console.log('\n redo 1 kali:');
const redone = redoStack.pop();
if (redone) {
    undoStack.push(redone);
    console.log('Undo:', redone);
}
console.log('\nStatus akhir:');
console.log('Undo Stack:');
undoStack.print();
console.log('Redo Stack:');
redoStack.print();