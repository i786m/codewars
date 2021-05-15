// Please research the following methods:
// Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!


// map : creates a new array and populates it based on the callback function passed into it 
//time complexity O(N)
let arr = [1,4,5,2,3,6]

arr.map(e=>e*2) // expected output [2,8,10,4,6,12]
arr.map(e=>e**2) // expected output [1,16,25,4,9,36]
arr.map(e=>e+'ab') // expected output ['1ab','4ab','5ab','2ab','3ab','6ab']

// reduce : uses a callback function that reduces the array to a single value
//time complexity O(N)
let arr = [1,4,5,2,3,6]

arr.reduce((acc,c)=>acc + c ,0) // 21
arr.reduce((acc,c)=>acc * c ,0) // 720
arr.reduce((acc,c)=>acc + c ,'') // '145236'

// filter : creates a new array based on elements that prove true for a test condition that is passed into it
//time complexity O(N)
let arr = [1,4,5,2,3,6]

arr.filter(num => num%2===0)//expected output [4,2,6]
arr.filter(num => num%2!==0)//expected output [1,5,3]
arr.filter(num => num<3)//expected output [1,2]

// forEach: loops through the array and runs a callback function once for each of the elements
//time complexity O(N)
let arr = [1,4,5,2,3,6] , res = []

arr.forEach(e=>e%2==0 ? res.push(e): e) // res = [4,2,6]
arr.forEach(e=> console.log(e)) // 1,4,5,2,3,6 printed to the console
arr.forEach((e,i,array)=>array[i] = e*2) // [2,8,10,4,6,12]

// sort : sorts the elements based on a callback function(aka compare function). if no function is passed in it will sort based on a string evaluation in ascending order(default behavior)
//time complexity O(N log N)
let arr = [1,4,5,2,3,6]

arr.sort() // [1,2,3,4,5,6]
arr.sort ((a,b)=>a-b) // [1,2,3,4,5,6]
arr.sort ((a,b)=>b-a) // [6,5,4,3,2,1]

// slice: provides a shallow copy of the array based on the values passed into it which are the start index and the end index(can also take negative numbers which reference the index number from the end of the array)
//time complexity O(N)
let a = [1,2,3,4,5,6]

a.slice(0,2)// [1, 2]
a.slice(3)//  [4, 5, 6]
a.slice(-4)//  [3, 4, 5, 6]

// pop : removes last element of the array (at index array.length -1) 
//time complexity O(1)
let a = [1,2,3,4,5,6]

a.pop()//6
a.pop()//5
a.pop()//4

// shift: removes first element of the array(0th index) 
//time complexity O(N)
let a = [1,2,3,4,5,6]

a.shift()//1
a.shift()//2
a.shift()//3

// push : adds an element to the end of the array
//time complexity O(1)
let a = [1,2,3,4,5,6]

a.push(7) //   [1,2,3,4,5,6,7]
a.push([8]) // [1,2,3,4,5,6,7,[8]]
a.push('bananas') // [1,2,3,4,5,6,7,[8],'bananas']

// unshift : adds an element at the start of an array
//time complexity O(N)
let a = [1,2,3,4,5,6]

a.push(7) //   [7,1,2,3,4,5,6]
a.push([8]) // [[8],1,2,3,4,5,6,7]
a.push('bananas') // ['bananas',[8],1,2,3,4,5,6,7]

// includes :  checks if an array includes a certain value; returns a boolean 
//time complexity O(N)
let a = [1,2,3,4,5,6,1,2,3]

a.includes(1)// true
a.includes(7)// false
a.includes(5)// true

// indexOf : finds the index of the first occurrence of whatever is being check, if it does not exist within the array -1 is the output
//time complexity O(N)
let a = [1,2,3,4,5,6,1,2,3]

a.indexOf(1)// 0
a.indexOf(7)//-1
a.indexOf(5)//4

// every :  checks that every element of the element meets a test condition returns a boolean
//time complexity O(N)
let a = [1,2,3,4,5,6]

a.every(e=>typeof e =='number') // true
a.every(e=>e<10) // true
a.every(e=>e%2==0) // false

