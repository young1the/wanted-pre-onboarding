class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {
    constructor (type) {
        let init = new Node(type);
        this.head = init;
        this.tail = init;
        this.length = 0;
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
        for (let _current = this.head.next; _current != null; _current = _current.next) {
            _newArray.push(_current.data);
        }
        return _newArray; 
    }

    _compare(nodeA, id) {
        return (nodeA.data.id === id);
    }

    find(id) {
        for (let _current = this.head.next; _current != null; _current = _current.next) {
            if (this._compare(_current, id))
                return _current;
        }
        return false;
    }

    changeData(data, id) {
        this.find(id).data = {...data};
    }

    put(data, id) {
        if (this.length === 0) {
            return this.append(data);
        }
        let _newNoode = new Node(data);
        let _prev = this.head;
        let _at = this.head.next;
        for (; _prev.next != null; _prev = _prev.next) {
            _at = _prev.next;
            if (this._compare(_at, id))
            {
                _prev.next = _newNoode;
                _newNoode.next = _at;
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
            if (this._compare(_at, id))
            {
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

export const manager = [
    { name: "백광천" },
    { name: "박준하" },
    { name: "유제원" },
    { name: "류지창" },
    { name: "조영일" },
    { name: "정세연" },
  ];

// const test = new LinkedList("hello");
// test.append({id: 1});
// test.append({id: 2});
// console.log(test.toArray(), test.length);
// test.put({id: 3}, 1);
// test.put({id: 4}, 0);
// console.log(test.toArray(), test.length);
// test.delete(2);
// console.log(test.toArray(), test.length);
// console.log(test.delete(1));
// console.log(test.delete(0));
// console.log(test.toArray(), test.length);
// console.log(test.find(3));

export const todoList = new LinkedList("todo");
export const progressList = new LinkedList("progress");
export const completeList = new LinkedList("complete"); 
