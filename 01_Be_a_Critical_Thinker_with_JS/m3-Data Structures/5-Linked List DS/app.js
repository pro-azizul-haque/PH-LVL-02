class Node {
  constructor(value) {
    this.value = value;
    this.nextLink = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return node.value;
    }
    this.head.nextLink = node;
    this.tail = node;
    this.length++;
    return node.value;
  }

  insert(index, value) {}
  remove(index) {}
  print() {}
}

const list = new LinkedList();
// list.append(10);
console.log(list.append("b"));
console.log(list.prepend("a"));
console.log(list.prepend("1"));
console.log(list);
