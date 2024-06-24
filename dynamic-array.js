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
      if(this.length === this.capacity) this.resize();
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

  unshift(val) {
      if(this.length === this.capacity) this.resize();
      // shift all the values to the right
      for(let i = this.length + 1; i >= 0; i--) {
          this.data[i + 1] = this.data[i];
      }
      this.data[0] = val;
      this.length++;
  }

  shift() {
      if(this.length === 0) return undefined;  // edge case for empty arr
      let shifted = this.data[0];
      console.log(shifted);
      for(let i = 1; i < this.length; i++) {
          this.data[i - 1] = this.data[i];
      }
      this.length--;
      return shifted;
  }

  indexOf(val) {
      for(let i = 0; i < this.length; i++) {
          if(this.data[i] === val) return i;
      }
      return -1;  // if val not found
  }

  resize() {
      this.capacity *= 2;
      this.data.length *= 2;
  }

}

// testing code
let array = new DynamicArray();
console.log(array);

// array.data[0] = 3;
// console.log(array.data[0]);
// array.length = 1;
// console.log(array.length);

// array.push(1);
// console.log(array.read(0));
// console.log(array.length);
// array.push(2);
// console.log(array.read(1));
// console.log(array.length);
// array.push(3);
// console.log(array.read(2));
// console.log(array.length);

// console.log(array.pop());
// // console.log(array.read(2));  // undef
// console.log(array.length);
// console.log(array.pop());
// // console.log(array.read(1));  // undef
// console.log(array.length);
// console.log(array.pop());
// // console.log(array.read(0));  // undef
// console.log(array.length);
// console.log(array.pop());

array.unshift(1);
console.log(array.length); // 1
console.log(array.read(0)); // 1
console.log(array.read(1)); // undefined

array.unshift(2);
console.log(array.length); // 2
console.log(array.read(0)); // 2
console.log(array.read(1)); // 1
console.log(array.read(2)); // undefined

array.unshift(3);
console.log(array.length); // 3
console.log(array.read(0)); // 3
console.log(array.read(1)); // 2
console.log(array.read(2)); // 1 was getting 2 until I looped backwards!
console.log(array.read(3)); // undefined

// array.push(10);
// array.push(11);
// console.log(array.length) // 2;
// array.push(12);
// array.push(13);
// console.log(array.length) // 4;
// console.log(array.data.length) // 4
// array.resize();
// console.log(array.capacity) // 8;
// console.log(array.data.length) // 8;
// console.log(array.length) // 4;
// console.log(array.read(0)) // 10;
// console.log(array.read(1)) // 11;
// console.log(array.read(2)) // 12;
// console.log(array.read(3)) // 13;
// console.log(array.read(4)) // 13;

array.push(10);
array.push(11);
array.push(12);
array.push(13);

console.log(array.length) // actual length with values -- 4
console.log(array.capacity) // 4
console.log(array.data.length) // 4

array.push(14);

console.log(array.length) // 5
console.log(array.capacity) // 8
console.log(array.data.length) // 8

array.unshift(9);
array.unshift(8);
console.log(array.length) // 7
console.log(array.data.length) // 8

array.unshift(7);
console.log(array.length) // 7
console.log(array.data.length) // 8

array.unshift(6);

console.log(array.capacity) // 16
console.log(array.data.length) // 16
console.log(array.length) // 9

console.log(array)


module.exports = DynamicArray;
