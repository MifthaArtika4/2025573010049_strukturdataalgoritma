class Node {
    constructor(data) {   // FIX 1: "construktor" → "constructor"
        this.data = data;
        this.next = null;
    }
}                         // FIX 2: kurung kurawal penutup class Node yang hilang

function buatList(arr) {
    if (!arr.length) return null;
    const head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return head;
}

function cetakList(head) {
    const values = [];
    let current = head;
    while (current) {
        values.push(current.data);
        current = current.next;
    }
    console.log(values.join(' -> ') + ' -> null');
}

// FIX 3: fungsi ini namanya "reverseList" tapi isinya logika palindrom
//         → diganti nama jadi palindromLL agar sesuai penggunaannya
function palindromLL(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }
    let left = 0, right = arr.length - 1;
    while (left < right) {
        // FIX 4: "[arr[left] !== arr[right]] return false" → syntax salah
        //         seharusnya pakai if (...)
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true;
}

function hapusDariAkhir(head, n) {
    const dummy = new Node(0);
    dummy.next = head;
    let slow = dummy, fast = dummy;
    for (let i = 0; i <= n; i++) {
        if (!fast) {
            console.log('n lebih besar dari panjang list!');
            return head;
        }
        fast = fast.next;
    }
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next ? slow.next.next : null;
    return dummy.next;
}

function tengahLinkedList(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// ── Pengujian ────────────────────────────────────────────────

console.log('=== palindromLL ===');

let l1 = buatList([1, 2, 3, 2, 1]);
console.log('List 1:');          // FIX 5: print() tidak ada → pakai console.log
cetakList(l1);                   // FIX 6: tambah cetakList agar list tercetak
console.log('palindrome?', palindromLL(l1)); // FIX 7: palindrome() → palindromLL()

let l2 = buatList([1, 2, 2, 1]);
console.log('List 2:');
cetakList(l2);                   // FIX 8: printList(12) → cetakList(l2)
console.log('palindrome?', palindromLL(l2));

let l3 = buatList([1, 2, 3, 4, 5]);
console.log('List 3:');
cetakList(l3);
console.log('palindrome?', palindromLL(l3));

let l4 = buatList([1]);
console.log('List 4:');
cetakList(l4);
console.log('palindrome?', palindromLL(l4));

console.log('\n=== hapusDariAkhir ===');

let h1 = buatList([1, 2, 3, 4, 5]);
process.stdout.write('sebelum 1: '); cetakList(h1); // FIX 9: Process → process (huruf kecil)
h1 = hapusDariAkhir(h1, 2);
process.stdout.write('sesudah 1: '); cetakList(h1);

let h2 = buatList([1, 2, 3, 4, 5]);
process.stdout.write('sebelum 2: '); cetakList(h2);
h2 = hapusDariAkhir(h2, 5);
process.stdout.write('sesudah 2: '); cetakList(h2);

let h3 = buatList([1, 2, 3]);
process.stdout.write('sebelum 3: '); cetakList(h3);
h3 = hapusDariAkhir(h3, 3);
process.stdout.write('sesudah 3: '); cetakList(h3);

let h4 = buatList([50]);
process.stdout.write('sebelum 4: '); cetakList(h4);
h4 = hapusDariAkhir(h4, 1);
process.stdout.write('sesudah 4: '); cetakList(h4);

console.log('\n=== tengahLinkedList ===');

let t1 = buatList([1, 2, 3, 4, 5]);
console.log('List 1:');          // FIX 10: print() → console.log()
cetakList(t1);
console.log('tengah:', tengahLinkedList(t1).data);

let t2 = buatList([1, 2, 3, 4]);
console.log('List 2:');
cetakList(t2);                   // FIX 11: cetakList(t2) ditambah agar konsisten
console.log('tengah:', tengahLinkedList(t2).data);

let t3 = buatList([1]);
console.log('List 3:');
cetakList(t3);
console.log('tengah:', tengahLinkedList(t3).data);

let t4 = buatList([33]);
console.log('List 4:');
cetakList(t4);                   // FIX 12: tambah cetakList
console.log('tengah:', tengahLinkedList(t4).data);