class Stack {
    constructor() {
        this._stack = {};
        this._length = 0;
    }

    push(value) {
        this._stack[this._length] = value;
        this._length++;
    }

    pop() {
        const value = this._stack[this._length - 1];
        delete this._stack[this._length - 1];

        this._length--;
        return value;
    }

    peek() {
        const value = this._stack[this._length - 1];
        return value;
    }
}

export default Stack;