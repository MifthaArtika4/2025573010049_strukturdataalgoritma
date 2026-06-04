// ============================================================
//  MinStack — Stack dengan getMin() O(1)
//  Menggunakan dua stack:
//    - stack utama : menyimpan semua data
//    - stackMin    : menyimpan nilai minimum saat ini
// ============================================================

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top  = null;
        this.size = 0;
    }

    // O(1) — hanya ubah pointer
    push(data) {
        const node = new Node(data);
        node.next  = this.top;
        this.top   = node;
        this.size++;
    }

    // O(1) — hanya ubah pointer
    pop() {
        if (this.isEmpty()) return null;
        const val  = this.top.data;
        this.top   = this.top.next;
        this.size--;
        return val;
    }

    // O(1) — langsung baca node teratas
    peek() {
        return this.top ? this.top.data : null;
    }

    // O(1)
    isEmpty() {
        return this.size === 0;
    }
}

// ============================================================
//  MinStack
// ============================================================
class MinStack {
    constructor() {
        this.stack    = new Stack(); // stack data utama
        this.stackMin = new Stack(); // stack khusus nilai minimum
    }

    // O(1) — push ke stack utama, dan kondisional push ke stackMin
    push(val) {
        this.stack.push(val);

        // Push ke stackMin jika:
        //   - stackMin kosong, ATAU
        //   - nilai baru <= minimum saat ini
        if (this.stackMin.isEmpty() || val <= this.stackMin.peek()) {
            this.stackMin.push(val);
        }

        console.log(`  push(${val})  → stack: ${this._stackToStr()} | min: ${this.getMin()}`);
    }

    // O(1) — pop dari stack utama, kondisional pop dari stackMin
    pop() {
        if (this.stack.isEmpty()) return null;

        const val = this.stack.pop();

        // Jika elemen yang dihapus adalah minimum saat ini,
        // hapus juga dari stackMin
        if (val === this.stackMin.peek()) {
            this.stackMin.pop();
        }

        console.log(`  pop()  → ${val} dikeluarkan | min sekarang: ${this.getMin() ?? '-'}`);
        return val;
    }

    // O(1) — hanya baca puncak stackMin
    getMin() {
        return this.stackMin.peek();
    }

    // O(1)
    isEmpty() {
        return this.stack.isEmpty();
    }

    // Helper tampilan (O(n) — hanya untuk debug)
    _stackToStr() {
        const arr = [];
        let cur = this.stack.top;
        while (cur) { arr.push(cur.data); cur = cur.next; }
        return `[${arr.reverse().join(', ')}]`;
    }
}

// ============================================================
//  Pengujian sesuai soal
//  push(5) → push(3) → push(7) → push(2)
//  getMin()=2 → pop() → getMin()=3 → pop() → getMin()=3
// ============================================================

console.log('=== Pengujian MinStack ===\n');

const ms = new MinStack();

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

console.log(`\n  getMin() = ${ms.getMin()}`);   // ekspektasi: 2
console.log('');

ms.pop();                                         // keluarkan 2
console.log(`  getMin() = ${ms.getMin()}`);      // ekspektasi: 3
console.log('');

ms.pop();                                         // keluarkan 7
console.log(`  getMin() = ${ms.getMin()}`);      // ekspektasi: 3

// ============================================================
//  Ringkasan Big O
// ============================================================
console.log(`
=== Ringkasan Big O ===

  Operasi   | Waktu | Ruang
  ----------|-------|------
  push()    | O(1)  | O(n) — worst case semua nilai turun terus
  pop()     | O(1)  | O(1)
  getMin()  | O(1)  | O(1)
  peek()    | O(1)  | O(1)
  isEmpty() | O(1)  | O(1)

  Space overall: O(n) untuk stack utama + O(n) worst case stackMin
`);