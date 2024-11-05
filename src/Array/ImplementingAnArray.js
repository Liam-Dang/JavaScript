class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(something) {
        this.data[this.length] = something;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
       // return lastItem;
    }

    delete(index) {  //O(n)
        const item = this.data[index];
        this.shiftItems(index);
    }


    shiftItems(index) {
        for(var i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;

    }

    removeFirst() {
        const firstItem = this.data[0];
        delete this.data[0];
        this.shiftItems(0);
    }

}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
console.log(newArray);
newArray.removeFirst();
console.log(newArray);