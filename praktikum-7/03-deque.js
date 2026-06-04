class Node { 
    constructor(d){ this.data=d; this.next=null; this.prev=null; } // ✅ Fix #2
}
class Deque {
    constructor(){ this.front = null; this.back = null; this.size = 0; } // ✅ Fix #1
    addFront(data) {
        const n = new Node(data);
        if (!this.front) { this.front = this.back = n; }
        else { n.next = this.front; this.front.prev = n; this.front = n; }
        this.size++;
    }
    addBack(data) {
        const n = new Node(data);
        if (!this.back) { this.front = this.back = n; }
        else { n.prev = this.back; this.back.next = n; this.back = n; }
        this.size++;
    }
    removeFront() {
        if (this.isEmpty()) return null;                  // ✅ Fix #3
        const v = this.front.data;
        this.front = this.front.next;                     // ✅ Fix #4
        if (this.front) this.front.prev = null; else this.back = null;
        this.size--; return v;
    }
    removeBack() {                                        // ✅ Fix #6
        if (this.isEmpty()) return null;
        const v = this.back.data;
        this.back = this.back.prev;
        if (this.back) this.back.next = null; else this.front = null;
        this.size--; return v;
    }
    peekFront() { return this.front ? this.front.data : null; }
    peekBack()  { return this.back  ? this.back.data  : null; }
    isEmpty()   { return this.size === 0; }
    print() {
        let s = '', cur = this.front;
        while (cur){ s+=cur.next?`[${cur.data}]->`:'['+cur.data+']'; cur=cur.next; } // ✅ Fix #5
        console.log(' FRONT ->', s, '<- BACK');
    }
}

function slidingWindowMax(arr, k) {
    const dq = new Deque();
    const hasil = [];
    for (let i = 0; i < arr.length; i++) {
        if (!dq.isEmpty() && dq.peekFront() < i - k + 1) { dq.removeFront(); }
        while (!dq.isEmpty() && arr[dq.peekBack()] < arr[i]) { dq.removeBack(); }
        dq.addBack(i);
        if (i >= k - 1) { hasil.push(arr[dq.peekFront()]); }
    }
    return hasil;
}

const dq = new Deque();
dq.addBack(1); dq.addBack(2); dq.addFront(3);
dq.addBack(0);
dq.print();
console.log('Remove back :', dq.removeBack());
console.log('Remove front:', dq.removeFront());
dq.print();

console.log('=== Sliding Window Maximum ===');
const arr = [1,3,-1,-3,5,3,6,7];
console.log('Array :', arr);
console.log('k=3 :', slidingWindowMax(arr, 3));