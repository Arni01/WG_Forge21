class Node {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(position) {
    if (position < 0 || position >= this.length) throw 'Incorrect position';

    let item = this.head;

    for (let i = 0; i < position; i++) {
      item = item.next;
    }

    return item;
  }

  _addToTheEnd(item) {
    let node = new Node(item);

    if (this.length === 0) {
      this.head = node;
    } else {
      let item = this.head;

      while (item.next) {
        item = item.next;
      }

      item.next = node;
    }

    this.length++;
  }

  _addToThePosition(item, position) {
    if (position < 0 || position >= this.length) throw 'Incorrect position';

    let node = new Node(item);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let item = this.head;
      let prev = null;

      for (let i = 0; i < position; i++) {
        prev = item;
        item = item.next;
      }

      node.next = item;
      prev.next = node;
    }

    this.length++;
  }

  add(item, position) {
    if (position == null) {
      this._addToTheEnd(item);
    } else {
      this._addToThePosition(item, position);
    }
  }

  remove(position) {
    if (position < 0 || position >= this.length) throw 'Incorrect position';

    if (this.length === 0) {
      throw 'The list is empty';
    }

    let item = this.head;

    if (position === 0) {
      this.head = item.next;
    } else {
      let prev = null;

      for (let i = 0; i < position; i++) {
        prev = item;
        item = item.next;
      }
      prev.next = item.next;
    }

    this.length--;
  }

  *[Symbol.iterator]() {
    if (this.length < 0) {
      yield this.head;
      return;
    }

    let item = this.head;
    for (let i = 0; i < this.length; i++, item = item.next) {
      yield item.value;
    }
  }
}

// const myList = new LinkedList();
// myList.add(2);
// myList.add(1);
// myList.add(9, 1);
// myList.add(4);
// myList.add(8, 5);
// myList.remove(0);

// const result = [];
// for (let i of myList) {
//   result.push(i);
//   console.log(i);
// }

// console.log(result);
// console.log(myList.get(0));
// console.log(myList.head);

module.exports = LinkedList;
