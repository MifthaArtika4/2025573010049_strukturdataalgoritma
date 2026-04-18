// 2. Class Stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// 3. Function cekKurungSeimbang
function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let i = 0; i < ekspresi.length; i++) {
        let char = ekspresi[i];

        if (char === '(') {
            stack.push(char);
        } 
        else if (char === ')') {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

// 4–9. Pengujian
const test = [
    "(2 + 3) * (4 - 1)",
    "((a + b)",
    ")(",
    "((()))",
    "(a+(b*c)-(d/e))"
];

test.forEach(item => {
    console.log(`'${item}' → Seimbang: ${cekKurungSeimbang(item)}`);
});