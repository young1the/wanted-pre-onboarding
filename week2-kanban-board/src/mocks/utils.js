class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor(type) {
    let init = new Node(type);
    this.head = init;
    this.tail = init;
    this.length = 0;
  }

  unshift(data) {
    let _prevTop = this.head.next;
    let _newNode = new Node(data, _prevTop);
    this.head.next = _newNode;
    return true;
  }

  append(data) {
    let _newNoode = new Node(data);
    this.tail.next = _newNoode;
    this.tail = _newNoode;
    this.length++;
    return true;
  }

  toArray() {
    let _newArray = [];
    for (
      let _current = this.head.next;
      _current != null;
      _current = _current.next
    ) {
      _newArray.push(_current.data);
    }
    return _newArray;
  }

  _compare(nodeA, id) {
    return nodeA.data.id === id;
  }

  find(id) {
    for (
      let _current = this.head.next;
      _current != null;
      _current = _current.next
    ) {
      if (this._compare(_current, id)) return _current;
    }
    return false;
  }

  changeData(data, id) {
    this.find(id).data = { ...data };
  }

  _findPrev(id) {
    for (let _prevNode = this.head; _prevNode.next != null; _prevNode = _prevNode.next)
    {
      let _current = _prevNode.next;
      if (this._compare(_current, id)) {
        return (_prevNode);
      }
    }
    return false;
  }

  swipe(a_id, b_id) {
    let aPrev = this._findPrev(a_id);
    let aNode = this.find(a_id);
    let bNode = this.find(b_id);
    let bPrev = this._findPrev(b_id);
    let tempNode = bNode.next;
    aPrev.next = bNode;
    bNode.next = aNode.next;
    bPrev.next = aNode;
    aNode.next = tempNode;
  }

  put(data, id) {
    if (this.length === 0) {
      return this.append(data);
    }
    let _newNode = new Node(data);
    let _prev = this.head;
    let _at;
    for (; _prev.next != null; _prev = _prev.next) {
      _at = _prev.next;
      if (this._compare(_at, id)) {
          _prev.next = _newNode;
          _newNode.next = _at;
          this.length++;
          return true;
        }
      }
    return this.append(data);
  }

  delete(id) {
    if (this.length === 0) {
      return false;
    }
    let _prev = this.head;
    let _at = this.head.next;
    for (; _prev.next != null; _prev = _prev.next) {
      _at = _prev.next;
      if (this._compare(_at, id)) {
        if (_at === this.tail) {
          this.tail = _prev;
        }
        _prev.next = _at.next;
        this.length--;
        return true;
      }
    }
    return false;
  }
}
