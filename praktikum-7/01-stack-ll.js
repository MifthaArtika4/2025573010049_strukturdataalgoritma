class Node { constructor(d){this.data=d;this.next=null;} }
class Stack {
    constructor() { this.top = null; this.size = 0; }
    push(data) {
        const node = new Node(data);
        node.next = this.top;
        this.top = node;
        this.size++;
    }
    pop() {
        if (this.isEmpty()) return null;
        const val = this.top.data;
        this.top = this.top.next;
        this.size--;
        return val;
    }
    peek()    { return this.top ? this.top.data : null; }
    isEmpty() { return this.size === 0; }
    print() {
        let s = 'TOP ->', cur = this.top;
        while (cur) { s += ` ${cur.data} `; cur = cur.next; }
        console.log(' ', s.trim());
    }
}

function validasiKurung(ekspresi) {
    const stack = new Stack();
    const buka  = '({[';
    const tutup = ')}]';
    const pasangan = { ')': '(', '}': '{', ']': '[' };
    for (const ch of ekspresi) {          // ✅ Fix #1
        if (buka.includes(ch)) { stack.push(ch); }
        else if (tutup.includes(ch)) {
            if (stack.isEmpty() || stack.pop() !== pasangan[ch]) return false;
        }
    }
    return stack.isEmpty();
}

function evaluasiPostfix(ekspresi) {
    const stack  = new Stack();
    const tokens = ekspresi.split(' ');   // ✅ Fix #2
    for (const token of tokens) {         // ✅ Fix #2
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        }
    }
    return stack.pop();
}

console.log('=== Validasi Kurung ===');
['{[()]}', '(2+3)*[4-1]', '((a+b)', ')(', '{{{}}}'].forEach(e => {
    console.log(` '${e}' -> ${validasiKurung(e) ? 'Valid' : 'Tidak Valid'}`); // ✅ Fix #3
});

console.log('\n=== Evaluasi Ekspresi Postfix ===');
console.log(' 3 4 + 2 * ->',         evaluasiPostfix('3 4 + 2 *'));
console.log(' 5 1 2 + 4 * + 3 - ->', evaluasiPostfix('5 1 2 + 4 * + 3 -'));
console.log(' 2 3 4 * + ->',         evaluasiPostfix('2 3 4 * +'));  // ✅ Fix #4