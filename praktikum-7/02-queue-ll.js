class Node { constructor(d){this.data=d;this.next=null;} }
class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(data) {
        const node = new Node(data);
        if (!this.tail) { this.head = this.tail = node; }
        else { this.tail.next = node; this.tail = node; }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) return null;
        const val = this.head.data;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
        return val;
    }
    front()   { return this.head ? this.head.data : null; }
    isEmpty() { return this.size === 0; }
    print() {
        let s = 'FRONT ->', cur = this.head;
        while (cur){ s+=`[${cur.data}]`; cur=cur.next; }
        console.log('', s.trim(), '<- BACK');
    }
}

function bfs(graph, startR, startC) {
    const rows = graph.length, cols = graph[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const queue = new Queue();
    const arah = [[-1,0],[1,0],[0,-1],[0,1]];

    queue.enqueue([startR, startC]);
    visited[startR][startC] = true;

    let level = 0;
    while (!queue.isEmpty()) {
        const levelSize = queue.size;
        process.stdout.write(`Level ${level}: `);
        for (let i = 0; i < levelSize; i++) {
            const [r, c] = queue.dequeue();
            process.stdout.write(`(${r},${c}) `);
            for (const [dr, dc] of arah) {
                const nr = r + dr, nc = c + dc;
                if (nr>=0&&nr<rows&&nc>=0&&nc<cols&&!visited[nr][nc]&&graph[nr][nc]!=='#') { // ✅ Fix #1
                    visited[nr][nc] = true;
                    queue.enqueue([nr, nc]);
                }
            }
        }
        console.log('');
        level++;
    }
}

console.log('=== Queue Demonstrasi ===');
const q = new Queue();
['Pelanggan-A', 'Pelanggan-B', 'Pelanggan-C'].forEach(p => q.enqueue(p));
q.print();
console.log(' Dilayani :', q.dequeue());
q.enqueue('Pelanggan-D');
q.print();

console.log('\n== BFS pada grid ===');  // ✅ Fix #2
const grid = [
    ['.','.','.','#','.'],
    ['.','#','.','#','.'],
    ['.','#','.','.','.'],
    ['.','.','#','.','.'],
];
bfs(grid, 0, 0);