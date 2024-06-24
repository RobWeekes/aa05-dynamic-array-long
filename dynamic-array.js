class DynamicArray {

  constructor(defaultSize = 4) {
      this.capacity = defaultSize;
      this.length = 0;
      this.data = new Array(defaultSize);
  }

  read(index) {
      return this.data[index];
  }

  push(val) {
      this.data[this.length] = val;
      this.length++;
  }

  pop() {
      if(this.length === 0) return undefined;  // edge case for empty arr
      let popped = this.data[this.length - 1];
      console.log(popped);
      this.data[this.length - 1] = undefined;
      this.length--;
      return popped;
  }

  shift() {
      
  }

  unshift(val) {
      
  }

  indexOf(val) {
      
  }

  resize() {

  }

}

// testing code
let array = new DynamicArray();
console.log(array);

// array.data[0] = 3;
// console.log(array.data[0]);
// array.length = 1;
// console.log(array.length);

array.push(1);
console.log(array.read(0));
console.log(array.length);
array.push(2);
console.log(array.read(1));
console.log(array.length);
array.push(3);
console.log(array.read(2));
console.log(array.length);

console.log(array.pop());
// console.log(array.read(2));  // undef
console.log(array.length);
console.log(array.pop());
// console.log(array.read(1));  // undef
console.log(array.length);
console.log(array.pop());
// console.log(array.read(0));  // undef
console.log(array.length);
console.log(array.pop());


module.exports = DynamicArray;
