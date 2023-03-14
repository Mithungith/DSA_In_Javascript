/*--------My solution---------- */
/*
let a = prompt('Enter a number');
let arr =[];

function fibonacci(n){
        if(n===1){
            arr=[0];
            console.log(arr);
        }
        else if(n===2){
            arr=[0,1];
            console.log(arr);
        }
        else{
            arr=[0,1];
            for(let i=2;i<n;i++){
                arr.push(arr[i-2]+arr[i-1]);
            }
            console.log(arr.join(','));
        }

}
fibonacci(a);
*/
/*-----------sir's solution---------- */
/*
function fibonacci(n){
    const fib = [0,1];
    for(let i=2;i<n;i++){
        fib[i]=fib[i-2]+fib[i-1];
    }
}
console.log(fibonacci(1)); // Time complexity is O(n) liner
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
*/
/*----------factorial of a number -----------*/
/*
function factorial(n){
    let val=1;
    for(let i=1;i<=n;i++){
    val *=i;
    }
    return val;
}

console.log(factorial(0)); // Big-O Time complexity is O(n) linear
console.log(factorial(1));
console.log(factorial(6));
*/
/*--------Prime Number ----------*/
/*
function isPrime(n){
    if(n<2){
        return false;
    }
    else if(n===2){
        return true;
    }
    for(let i=3;i<n;i++){
     if(n%i===0){
        return false;
     }
    }
    return true;
}

console.log(isPrime(1)); // Big-O = O(n); Linear
console.log(isPrime(2));
console.log(isPrime(15));
console.log(isPrime(17));
*/

//More optimal solution
// function isPrime(n){
//     if(n<2){
//         return false;
//     }
//     else if(n===2){
//         return true;
//     }
//     for(let i=3;i<Math.sqrt(n);i++){
//      if(n%i===0){
//         return false;
//      }
//     }
//     return true;
// }

// console.log(isPrime(1)); // Big-O = O(sqrt(n)); more optimal solution
// console.log(isPrime(2));
// console.log(isPrime(15));
// console.log(isPrime(17));

/*----------Power of 2----------- */
//Determine whether a numbe
/*r is a power of 2
//Big-O Time complexity is O(n)
function powerTwo(n){
   for(let i=0;i<n;i++){
    if(n===2**i){
       return true;
    }
   }
   return false;
}
console.log(powerTwo(190));
console.log(powerTwo(16));
*/

/*
// Second method
//Big-O Time complexity is O(logn)
function powerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
           return false;
        }
        n/=2;
    }
    return true;
 }
 console.log(powerOfTwo(19));
 console.log(powerOfTwo(16));
 */

/*
//Third Method
//By Bitwise operator
//Big-O Timecomplexity is O(1)
function isPowerOfTwoBitWise(n){
    if(n<1){
        return false
    }
    return (n & (n-1))===0
}

console.log(isPowerOfTwoBitWise(19)); // 10011 & 10010 it will not return 0
console.log(isPowerOfTwoBitWise(16)); // 10000 & 01111 it will return 0 always
*/

/*
//Fibonacci by recursion
// Big-O Time complexity will be O(2^n) --> Horrible
function recursiveFibonacci(n){
    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1)+ recursiveFibonacci(n-2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
*/

/*
//Factorial by recursion
//Big-O Time Complexity will be O(n)
function recursiveFactorial(n){
    if(n<2){
        return 1
    }
    return n*recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
*/

// Linear Search
//Big-O O(n)
/*
function linearSearch(arr,n){
    for(let i=0;i<n;i++) {
        if(arr[i]===n){
            return i
        }
    }
    return -1;
}
console.log(linearSearch([1,2,3,4,5],3));
console.log(linearSearch([1,2,3,4,5],9));

//Prebuild in javascript
console.log([1,2,3,4,5].indexOf(5));
*/

// Binary search is for sortrd array only
/*
//sorting array
const arr = [-2,40,1,7,3];
console.log(arr.sort((a,b)=>a-b));
*/

/*
//Big-O O(logn)
function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2);
        if(target===arr[middleIndex]){
            return middleIndex;
        }
        if(target < arr[middleIndex]){
           rightIndex= middleIndex-1;
        }
        else{
            leftIndex= middleIndex+1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5],5));
console.log(binarySearch([1,2,3,4,5],1));
console.log(binarySearch([1,2,3,4,5],4));
*/

/*
//Binary search by recursion
//Big-O O(logn)
function recursiveBinarySearch(arr,target){
    return search(arr, target,0,arr.length-1);
}

function search(arr,target,leftIndex,rightIndex){
   if(leftIndex>rightIndex){
    return -1;
   }
   let middleIndex = Math.floor((leftIndex+rightIndex)/2);
   if(target === arr[middleIndex]){
    return middleIndex;
   }
   if(target<arr[middleIndex]){
    return search(arr,target,leftIndex,middleIndex-1);
   }
   if(target>arr[middleIndex]){
    return search(arr,target,middleIndex+1,rightIndex);
   }
}

console.log(recursiveBinarySearch([-5,2,4,6,10],10));
console.log(recursiveBinarySearch([-5,2,4,6,10],6));
console.log(recursiveBinarySearch([-5,2,4,6,10],20));
console.log(recursiveBinarySearch([-5,2,4,6,10],-8));
*/

//Sorting Algorithm
//Ascending order
//Bubble sort is a poor sorting algorithm
//Big-O = O(n^2)
//We know do while loop is always runs for first time
/*
function bubbleSort(arr){
   let swapped;
   do{
    swapped=false;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i];
            arr[i]= arr[i+1];
            arr[i+1]= temp;
            swapped=true;
        }
    }
   }
   while(swapped);
   return arr;
}

console.log(bubbleSort([-20,4,1,5,9,6]));
*/
//Descending order
/*
function bubbleSort(arr){
    let swapped;
    do{
     swapped=false;
     for(let i=0;i<arr.length;i++){
         if(arr[i]<arr[i+1]){
             let temp = arr[i];
             arr[i]= arr[i+1];
             arr[i+1]= temp;
             swapped=true;//
         }
     }
    }
    while(swapped);
    return arr;
 }
 
 console.log(bubbleSort([-20,4,1,5,9,6]));
 */
//Insertion sort
//Big-O O(n^2)
/*
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){ //i=4
        let numberToInsert =arr[i]; //-6
        let j=i-1; //3
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]; //[-2,-2,4,8,20]
            j=j-1; //-1
        }
        arr[j+1]= numberToInsert //[-6,-2,4,8,20]
    }
}
const arr = [8,20,-2,4,-6];
insertionSort(arr);
console.log(arr);
*/
// write also for descendinding order

//quick sort
//Big-O O(n) when array is already sorted
//average case O(nlogn) 
/*
function quickSort(arr){
   if(arr.length<2){
    return arr;
   }
   let pivot = arr[arr.length -1];
   let left = [];
   let right =[];
   for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i]);
    }else{
        right.push(arr[i]);
    }
   }
   return [...quickSort(left),pivot,...quickSort(right)];
}
const arr = [8,20,-2,4,-6];
console.log(quickSort(arr));
*/

//Merge sort
//Big-O O(nlogn) -- best in all sort
/*
function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid= Math.floor(arr.length/2);
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sortedArr= [];
    while(leftArr.length&&rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

const arr = [8,20,-2,4,-6];
console.log(mergeSort(arr));
*/

//Cartesian product
//Big-O  O(n^2) quadratic if array not same length O(m*n)
/*
function cartesianProduct(arr1,arr2){
    let newArr=[];
   for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr2.length;j++){
       let val=[arr1[i],arr2[j]];
       newArr.push(val);
    }
   }
   return newArr;
}
console.log(cartesianProduct([1,2,3],[4,5]));
*/
//Climbing stair case problem
//climb 1 step 1 way
//climbing 2 step 2 way (1,1 | 2)
//climbing 3 step 3 way
// climbing 4 step 5 way
// it is same as fibonacci series
/*
function climbingStairCase(n){
    const noOfWays =[1,2];
    for(let i=2;i<n;i++){
        noOfWays[i]= noOfWays[i-1]+noOfWays[i-2];
    }
    return noOfWays[n-1];
}

console.log(climbingStairCase(1));
console.log(climbingStairCase(2));
console.log(climbingStairCase(16));
console.log(climbingStairCase(7));
*/
//Tower of Hanoi
//Big-O O(2^n-1) == O(2^n)
/*
function towerOfHanoi(n,fromRod,toRod,usingRod){
    if(n==1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return
    }
    towerOfHanoi(n-1,fromRod,usingRod,toRod);
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1,usingRod,toRod,fromRod);
}

towerOfHanoi(3,'A','C','B');
*/

// Stack Implementation (LIFO)
/*
class Stack{
    constructor(){
     this.item=[];
    }
    push(element){
        this.item.push(element)
    }
    pop(){
       return this.item.pop();
    }
    peek(){
       return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.length ===0;
    }
    size(){
        return this.item.length;
    }
    print(){
        console.log(this.item.toString());
    }
}
const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.print()
stack.pop(4)
stack.print()
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size(4));
stack.print();
*/

//Queue implementation (FIFO)
/*
class Queue{
    constructor(){
        this.item=[];
    }
    enqueue(element){
        this.item.push(element)
    }
    dequeue(){
        return this.item.shift(); // Big-O O(n) //not good
    }
    peek(){
        if(!this.isEmpty()){
         return this.item[0]
        }
        return null;
    }
    isEmpty(){
        return this.length ===0;
    }
    size(){
        return this.item.length;
    }
    print(){
        console.log(this.item.toString());
    }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();
queue.dequeue(4);
queue.print()
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size(4));
queue.print();
*/

//Implement queue by object
// So that the both enqueue and dequeue have same time complexity Big-O -O(1)
/*
let i=0;
class Queue{
    constructor(){
        this.items={};
        this.rear= 0;
        this.front=0;
    }
    enqueue(element){ 
        this.items[this.rear]=element; 
        this.rear++;
    }
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front]; // Big-O of dequeue is O(1)
        this.front++; 
        return item
    }
    peek(){
       return this.items[this.front];
    }
    isEmpty(){
        return this.rear-this.front===0;
    }
    size(){
        return this.rear-this.front;
    }
    print(){
        console.log(this.items);
    }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.dequeue());
console.log(queue.size());
queue.print();
console.log(queue.peek());
queue.dequeue();
queue.print()
*/

//Circular queue implementation
/*
class CircularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.rear = -1;
      this.front = -1;
      this.currentLength = 0;
      this.capacity = capacity;
    }
  
    isFull() {
      return this.currentLength === this.capacity;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    size() {
      return this.currentLength;
    }
  
    enqueue(item) {
      if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = item;
        this.currentLength += 1;
        if (this.front === -1) {
          this.front = this.rear;
        }
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.front];
      }
      return null;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
      } else {
        let i;
        let str = "";
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
          str += this.items[i] + " ";
        }
        str += this.items[i];
        console.log(str);
      }
    }
  }
  
  const queue = new CircularQueue(5);
  console.log(queue.isEmpty());
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);
  queue.enqueue(50);
  console.log(queue.size());
  queue.print();
  console.log(queue.isFull());
  console.log(queue.dequeue());
  console.log(queue.peek());
  queue.print();
  queue.enqueue(60);
  queue.print();
*/

//Linked-list implementaion
/*
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size ===0;
    }
    getSize(){
        return this.size;
    }
    prepend(value){ //Big-O O(1)
      const node = new Node(value);
      if(this.isEmpty()){
        this.head = node
      }else{
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
    append(value){ //Big-O O(n) can be make liner time complexity by introducing a tail pointer
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
              prev= prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }
    insert(value,index){
       if(index<0 || index>this.size){
        console.log('index not valid')
       }
       if(index ===0){
        this.prepend(value)
       }
       else{
         const node = new Node(value);
         let prev = this.head;
         for(let i=0; i<index-1;i++){
            prev = prev.next;
         }
         node.next = prev.next;
         prev.next = node;
         this.size++;
       }
    }

    removeFrom(index){
       if(index<0||index>=this.size){
        return "Index not valid";
       }
       let removeNode;
       if(index===0){
        removeNode = this.head;
        this.head = this.head.next;
       }else{
        let prev = this.head;
        for(let i=0;i<index-1;i++){
            prev=prev.next;
        }
        removeNode= prev.next;
        prev.next = removeNode.next;
       }
       this.size--;
       return removeNode.value;
    }

    removeValue(value){
       if(this.isEmpty()){
        return 'Invalid value'
       }
       if(this.head.value===value){
         this.head = this.head.next;
         this.size--;
         return value;
       }else{
        let prev = this.head;
        while(prev.next && prev.next.value != value){
            prev = prev.next;
        }
        if(prev.next){
            const removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return value;
        }
        return null;
       }
    }

    search(value){ // returning index
        if(this.isEmpty()){
            return 'Empty node'
        }
        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value===value){
                return i
            }
            curr = curr.next;
            i++
        }
        return 'Value not found';
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        while(curr){
           let next = curr.next;
           curr.next = prev;
           prev = curr;
           curr = next;
        }
        this.head = prev;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }else{
            let curr = this.head;
            let listValue='';
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue);
        }
    }
}

const list= new LinkedList();
console.log('List is empty', list.isEmpty());
console.log('List size',list.getSize());
list.print();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.print();

// list.append(10);
// list.append(20);
// list.append(30);
// list.print();

list.insert(10,0);
list.print()

list.insert(20,0)
list.print()

list.insert(30,1);
list.print()

list.insert(40,2);
list.print();
// console.log(list.getSize());

// console.log(list.removeFrom(10));

// console.log(list.removeFrom(0));
// list.print();

// console.log(list.removeFrom(1));
// list.print();


// console.log(list.getSize());
// console.log(list.removeValue(40));
// list.print();
// console.log(list.removeValue(20));
// list.print();
// console.log(list.getSize());

// console.log(list.search(20));
// console.log(list.search(60));

list.reverse();
list.print();
*/

//Linked list implementation by tail pointer
//only removal from end has linear time complexity and rest of all has constant time complexity therefore stacks and queue can be implemented through Linkedlist
/*
class Node{
    constructor(value){
        this.value= value;
        this.next = null;
    }
}

class LinkedList{
   constructor(){
    this.head = null;
    this.tail = null;
    this.size =0
   }

   isEmpty(){
    return this.size ===0;
   }
   getSize(){
    return this.size;
   }
   print(){
    if(this.isEmpty()){
        console.log("List is empty")
    }else{
        let curr = this.head;
        let listValues =''
        while(curr){
            listValues += `${curr.value} `
            curr= curr.next
        }
        console.log(listValues);
    }
   }
   prepend(value){
     const node = new Node(value);
     if(this.isEmpty()){
        this.head= node;
        this.tail= node;
     }else{
        node.next = this.head;
        this.head = node;
     }
     this.size++;
   }
   append(value){
     const node = new Node(value);
     if(this.isEmpty()){
        this.head = node;
        this.tail = node;
     }else{
        this.tail.next = node;
        this.tail=node;
     }
     this.size++;
   }
   removeFromFront(){
     if(this.isEmpty()){
        return null;
     }
     const value = this.head.value;
     this.head = this.head.next;
     this.size--;
     return value;
   }
   removeFromEnd(){
     if(this.isEmpty()){
        return null;
     }
    const value = this.tail.value;
    if(this.size === 1){
      this.head = null;
      this.tail = null;
    }else{
        let prev = this.head;
        while(prev.next !== this.tail){
            prev = prev.next;
        }
        prev.next = null;
        this.tail = prev;
    }
    this.size--;
    return value;
   }
}


const list= new LinkedList();
console.log('List is empty', list.isEmpty());
console.log('List size',list.getSize());
list.print();

list.append(1);
list.append(2);
list.append(3);
list.append(0);
list.print();

console.log('List size ', list.getSize());

list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();
*/
//Stack implemented using  Linkedlsit

// class LinkedListStack {
//     constructor(){
//         this.list = new LinkedList();
//     }
//     push(value){
//         this.list.prepend(value);
//     }
//     pop(){
//         return this.list.removeFromEnd();
//     }
//     peek(){
//         return this.head.value
//     }
//     isEmpty(){
//         return this.list.isEmpty();
//     }
//     getSize(){
//         this.list.getSize();
//     }
//     print(){
//         return this.list.print();
//     }
// }

// const stack = new LinkedListStack();

// console.log(stack.isEmpty());
// stack.push(20);
// stack.push(10);
// stack.push(30);

// console.log(stack.getSize());
// stack.print();
/*
class LinkedListStack {
    constructor() {
      this.list = new LinkedList();
    }
  
    push(value) {
      this.list.prepend(value);
    }
  
    pop() {
      return this.list.removeFromFront();
    }
  
    peek() {
      return this.list.head.value;
    }
  
    isEmpty() {
      return this.list.isEmpty();
    }
  
    getSize() {
      return this.list.getSize();
    }
  
    print() {
      return this.list.print();
    }
  }
  
  const stack = new LinkedListStack();
  console.log(stack.isEmpty());
  console.log(stack.getSize());
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.print();
  console.log(stack.peek());

  // Queue implimantation using Linkedlist

  class LinkedListQueue{
    constructor(){
       this.list = new LinkedList();
    }
    enqueue(value){
        this.list.append(value);
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value;
    }
    isEmpty(){
        this.list.isEmpty();
    }
    getSize(){
        return this.list.getSize();
    }
    print(){
        return this.list.print();
    }
  }

  const queue = new LinkedListQueue();
  console.log(queue.isEmpty());

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.enqueue(40);

  console.log(queue.getSize());
  queue.print();
  queue.dequeue();
  queue.print();
  console.log(queue.peek());
*/
//Doubly linkedlist code 
/*
  class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.size++;
    }
  
    removeFromFront() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  
    removeFromEnd() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return value;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}<->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  
    printReverse() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.tail;
        let list = "";
        while (curr) {
          list += `${curr.value}<->`;
          curr = curr.prev;
        }
        console.log(list);
      }
    }
  }
  
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.print();
  list.printReverse();
  list.removeFromEnd();
  list.print();
  list.removeFromFront();
  list.print();
*/

//Hash implementation
/*
class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size =size;
    }
    hash(key){
        let total = 0;
        for(let i=0; i< key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value){
      const index = this.hash(key);
      this.table[index] = value;
    }
    get(key){
        const index = this.hash(key);
        return this.table[index];
    }
    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }
    display(){
        for(let i=0; i< this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50);
table.set("name", "Bruce");
table.set("age",25);
table.display(); // 1 25, 17 'Bruce'

console.log(table.get("name"));
table.remove("name");
table.display();

table.set("anme", "Mithun");
table.display(); //17 'Mithun' erroe data lose at index 17 (collision)
*/
//---------------------------||--------------------------//
// For removal of collision in hash table

/*
class HashTable{
  constructor(size){
      this.table = new Array(size);
      this.size =size;
  }
  hash(key){
      let total = 0;
      for(let i=0; i< key.length; i++){
          total += key.charCodeAt(i);
      }
      return total % this.size;
  }
  set(key, value){
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if(!bucket){
      this.table[index] = [[key,value]];
    }
    else{
      const sameKeyItem = bucket.find(item=> item[0]=== key);
      if(sameKeyItem){
        sameKeyItem[1]= value;
      }
      else{
        bucket.push([key,value]);
      }
    }
  }
  get(key){
      const index = this.hash(key);
      const bucket = this.table[index];
      if(bucket){
        const sameKeyItem = bucket.find(item=> item[0]=== key)
        if(sameKeyItem){
          return sameKeyItem[1]
        }
      }
      return undefined;
  }
  remove(key){
      const index = this.hash(key);
      const bucket = this.table[index];
      if(bucket){
        const sameKeyItem = bucket.find(item=> item[0]=== key);
        if(sameKeyItem){
          bucket.splice(bucket.indexOf(sameKeyItem),1);
        }
      }
  }
  display(){
      for(let i=0; i< this.table.length;i++){
          if(this.table[i]){
              console.log(i, this.table[i]);
          }
      }
  }
}

const table = new HashTable(10);
table.set("name", "Bruce");
table.set("age",25);
table.display();

console.log(table.get("name"));

table.set("mane", "Clark");
table.set("name", "Diana");
console.log(table.get("mane"));
table.remove("name");
table.display();
*/

//Binary search tree

/*
class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  contructor(){
    this.root = null;
  }
  isEmpty(){
    return this.root == null;
  }

  insert(value){
    const newNode = new Node(value);
    if(this.isEmpty()){
      this.root = newNode;
    }else{
       this.insertNode(this.root,newNode)
    }
  }

  insertNode(root,newNode){
    if(newNode.value < root.value){
      if(root.left == null){
        root.left = newNode;
      }else{
        this.insertNode(root.left,newNode)
      }
    }else{
      if(root.right === null){
        root.right = newNode;
      }else{
        this.insertNode(root.right,newNode);
      }
    }
  }
  search(root,value){
     if(!root){
      return false;
     }else{
      if(root.value == value){
        return true;
      }else if(value < root.value){
        return this.search(root.left,value)
      } else{
        return this.search(root.right,value);
      }
     }
  }
  /*
tree traversing (visiting each node)
two widely used method are there
1) Depth first search(DFS)
a)Preordered traversal
b)Inorder traversal
c)PostOrder traversal
2) Breadth first search (BFS)

/*
  preOrder(root){
    if(root){
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root){
     if(root){
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right);
     }
  }
  postOrder(root){
    if(root){
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value);
    }
  }
  
  levelOrder(){
    const queue = [];
    queue.push(this.root);
    while(queue.length){
      let curr = queue.shift();
      console.log(curr.value);
      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right){
        queue.push(curr.right)
      }
    }
  }
  min(root){
    if(!root.left){
      return root.value;
    }
    else{
      return this.min(root.left);
    }
  }
  max(root){
    if(!root.right){
      return root.value;
    }else{
      return this.max(root.right);
    }
  }
  delete(value){
    this.root = this.deleteNode(this.root,value);
  }

  deleteNode(root,value){
    if(root === null){
      return root;
    }
    if(value < root.value){
      root.left= this.deleteNode(root.left,value);
    }
    else if(value > root.value){
      root.right = this.deleteNode(root.right,value);
    }
    else{
      if(!root.left && !root.right){
        return null;
      }
      if(!root.left){
        return root.right;
      }
      else if(!root.right){
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right,root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?",bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,20));
// console.log(bst.search(bst.root,30));
// console.log(bst.search(bst.root,40));

// bst.preOrder(bst.root);
// bst.inOrder(bst.root);
// bst.preOrder(bst.root);
// bst.levelOrder()

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

bst.levelOrder();
console.log('------------')
bst.delete(10);
bst.levelOrder();


*/

//Graph 2 way to implement 
//a) Adjecency Matrix
//b) Adjecency List

/*
const matrix = [
  [0,1,0],
  [1,0,1],
  [0,1,0],
]

console.log(matrix[0][0]);
console.log(matrix[1][2]);

const adjecencyList={
  "A":['B'],
  "B": ['A','C'],
  "C":['B']
}

console.log(adjecencyList["B"]);
*/

class Graph{
   constructor(){
    this.adjacencyList ={}
   }
   addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set();
    }
   }

   addEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
       this.addVertex(vertex1);
    }
    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
   }
   hasEdge(vertex1,vertex2){
      return (
        this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1)
      )
   }
   removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
   }

   removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return
    }
    for(let adjecentVertex of this.adjacencyList[vertex]){
      this.removeEdge(vertex,adjecentVertex);
    }
    delete this.adjacencyList[vertex];
   }

   dispaly(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
   }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A","B");
graph.addEdge("B","C");
graph.dispaly();
console.log(graph.hasEdge("A","B"));
console.log(graph.hasEdge("A","C"));
// graph.removeEdge("A","B");
graph.removeVertex("B");
graph.dispaly();

//1234
