// Q. (1)
// const f2 = random("apple")
// f2() ➞ "apple"

// function random(a){
//   function result(){
//     console.log(a);
//   }
//   return result;
// }
// const f2 = random("apple")
// f2()


// Q. (2)
// find the sum of all the array of array
//  let arr = [[1,2,3],[4,5,6],[7,8,9,10]]
//  function findSum(arr,sum=0){
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             sum += findSum(arr[i])
//         }else{
//             sum +=arr[i]
//         }
//     }
//     return sum;
// }
// console.log(findSum(arr))


// Q. (3)
//Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.
// function myfunction(str,n){
//     let s= "";
//     for(let i=0;i<str.length;i++){
//         if(i==n){
//             s += str[i-1]
//         }
//     }
//     return s;
// }
// console.log(myfunction("abcd",2))


// Q. (4)
// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result
// function removeStr(str,n){
//     let s= "";
//     for(let i=n;i<str.length;i++){
//         s += str[i]
//     }
//     return(s);
// }
// console.log(removeStr("abdc",3))
// console.log(removeStr("1234",3))

// let str = 'abcd'
//  let r =str.slice(3)
// console.log(r)


// Q. (4)
//Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
// function myFunction(str){
//     let s = "";
//     for(let i = str.length-3 ;i<str.length;++i){
//         s += str[i]
//     }
//     return  s      
// }
// console.log(myFunction("abdcghf"))
// console.log(myFunction("123456789"))

// let str = 'abcdefgh'
// let r = str.slice(-3)
// console.log(r)


// Q. (5)
//Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
// function myFunction(a,n){
// let s = "";
// for(let i = 0;i<n;i++){
//     s +=a[i]
// }
// return s;
// }
// console.log(myFunction("abdcghf",3))
// console.log(myFunction("123456789",3))

// let str = 'abcdggg';
// let r = str.slice(0,3)
// console.log(r)


// Q. (6)
// Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'
// function myFunction(a){
//     let substr = "is";
//     let result = a.indexOf(substr);
//     return result;
// }
// console.log(myFunction("pramodisma"))
//  console.log(myFunction("ashisch"))


// Q. (7)
//Write a function that takes a string (a) as argument. Extract the first half a. Return the result
// function myFunction(str){
//     let s = "";
//     for(let i =0;i<str.length/2;i++){
//         s += str[i]
//     }
//     return s;
// }
// console.log(myFunction("pramodisma"))
//  console.log(myFunction("ashisch"))

// let s = 'abcdffff'
// let r = s.slice(0,s.length/2)
// console.log(r)


// Q. (8)
//Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result
// function myFunction(str){
//     let s= "";
//     for(let i=0;i<str.length-3;i++){
//         s += str[i]
//     }
//     return s
// }
// console.log(myFunction("pramodisma"))
//   console.log(myFunction("ashisch"))

// function myFunction(str){
//     let r= str.slice(0,-3)
//     return r;
// }
// console.log(myFunction("pramodisma"))
//   console.log(myFunction("ashisch"))


// Q. (9)
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.
// function myFunction(a, b, c, d, e, f) {
//     return (((a + b - c) * d) / e) ** f;
//  }
//  console.log(myFunction(6,5,4,3,2,1))
//  console.log(myFunction(6,2,1,4,2,3))


// Q. (10)
//Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Tipp: you might want to change the type of the number for the splitting
// function myFunction(num){
//     let str = String(num)
//     let arr = str.split('').map(Number)
//     return arr;
// }
// console.log(myFunction(123))


// Q. (11)
// Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation
// function myFunction(a, b) {
    //     return a.indexOf(b) === -1 ? a + b : b + a
    //   }
    //    console.log(myFunction('cheese', 'cake'))
    //  console.log(myFunction('lips', 's'))


// Q . (12)
//Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
// function myFunction(a, n){
//     for(let i=0;i<a.length;i++){
//         if(i+1 == n){
//         return a[i]
//         }
//     }
// }
// console.log(myFunction([1,2,3,4,5],3))
// console.log(myFunction([10,9,8,7,6],5))
// console.log(myFunction([7,2,1,6,3],1))

// function myFunction(a, n) {
//     return a[n - 1];
//  }
//  console.log(myFunction([1,2,3,4,5],3))
//  console.log(myFunction([10,9,8,7,6],5))
//  console.log(myFunction([7,2,1,6,3],1))


// Q. (12)
//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result
// function myFunction(a,n){
//     let result = [];
//     for(let i=n;i<a.length;i++){
//         result.push(a[i])
//     }
//     return  result;
// }
// console.log(myFunction([1,2,3,4],3))
// console.log(myFunction([5,4,3,2,1,0],3))
// console.log(myFunction([5,4,3],3))

// function myFunction(a) {
//     return a.slice(3);
//  }
//  console.log(myFunction([1,2,3,4]))
//  console.log(myFunction([5,4,3,2,1,0]))


// Q. (13)
//Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
// function myFunction(a){
//     let result = [];
//     for(let i = a.length-3; i<a.length;i++){
//         result.push(a[i])
//     }
//     return result;
// }
// console.log(myFunction([1,2,3,4]))
// console.log(myFunction([5,4,3,2,1,0]))

// function myFunction(a) {
//     return a.slice(-3);
//  }
//   console.log(myFunction([1,2,3,4]))
//   console.log(myFunction([5,4,3,2,1,0]))


// Q. (14)
//Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array
// function myFunction(a,n){
//     let result = [];
//     for(let i=0;i<n;i++){
//         result.push(a[i])
//     }
//     return result;
// }
// console.log(myFunction([1,2,3,4],3))
// console.log(myFunction([5,4,3,2,1,0],3))

// function myFunction(a) {
//     return a.slice(0, 3);
//  }
//   console.log(myFunction([1,2,3,4]))
//  console.log(myFunction([5,4,3,2,1,0]))


// Q. (15)
//Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
// function myFunction(a, n){
//     let result = [];
//     for(let i=a.length-n;i<a.length;i++){
//         result.push(a[i])
//     }
//     // return  a.slice(-n);
//     return result
// }
// console.log(myFunction([1, 2, 3, 4, 5], 2))
// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3))


// Q. (16)
// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
// function myFunction(a, b){
//     return a.filter((item)=>{
//     return item!==b
//     })
// }
// console.log(myFunction([1,2,3], 2))
// console.log(myFunction([1,2,'2'], '2'))

// function myFunction( a, b ) {
//     return a.filter(cur => cur !== b)
//   }
//   console.log(myFunction([1,2,3], 2))
//  console.log(myFunction([1,2,'2'], '2'))


// Q. (17)
//reverse an array decending order 
// function myFunction(arr){
// let result = arr.sort((a,b)=>a-b)
// return result.reverse()
// }
// console.log(myFunction([10,3,5,20,2]))


//Q. (18)
// return maxlength string 
// function myFunction(arr){
//     let max = arr[0].length;
//     let str = arr[0];
//     for(let i=0; i<arr.length;i++){
//         if(arr[i].length>max){
//         max = arr[i].length;
//         str = arr[i]
//         }
//     }
//     return str;
// };
// console.log(myFunction(['help', 'me']))
// console.log(myFunction(['In', 'neeeed', 'candy']))


//Q. (19)
//Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
// function myFunction(arr){
//     let first = arr[0];
//     for(let i = 0;i<arr.length; i++){
//         if(arr[i] !==first){
//             return false;
//         }
//     }
//     return true; 
// }
// console.log(myFunction([true, true, true, true]))
// console.log(myFunction(['test', 'test', 'test']))
// console.log(myFunction([1,1,1,2]))
// console.log(myFunction(['10',10,10,10]))

// function myFunction( arr ) {
//     return new Set(arr).size === 1
//   }
//    console.log(myFunction([true, true, true, true]))
//  console.log(myFunction(['test', 'test', 'test']))
//  console.log(myFunction([1,1,1,2]))
//  console.log(myFunction(['10',10,10,10]))


// Q. (20)
//Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
// function myFunction(...arr){
//     let result = [];
//     for(let value of arr){

//         result.push(...value)
//     }
//     return result;
// }
// console.log(myFunction([1, 2, 3], [4, 5, 6]))

// function myFunction( ...arrays ) {
//     return arrays.flat()
// }
// console.log(myFunction([1, 2, 3], [4, 5, 6]))


// Q. (21)
//Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
// function myFunction(a, n){
//     let result = [];
//     if(n>a.length) return a
//     for(let i = a.length-n; i<a.length; i++){
//         result.push(a[i]);
//     }
//     return result;
// }
// console.log(myFunction([1, 2, 3, 4, 5], 2))
// console.log(myFunction([1, 2, 3], 6))
// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3))


// Q. (22)
// // Example to demonstrate Sorting an array of objects by numbers
// let students = [
//     {
//       "name": "Isabella Williams",
//       "roll": 38,
//     },
//     {
//       "name": "Sophia Heels",
//       "roll": 45,
//     },
//     {
//       "name": "Ava Benjamin",
//       "roll": 17,
//     },
//     {
//       "name": "Amelia Brown",
//       "roll": 8,
//     },
//   ]
//   let sortedRolls = students.sort((r1, r2) => ( r1.roll - r2.roll) )
//   console.log(sortedRolls);


// Q. (23)
//Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
// function myFunction(arr) {
//     const sort = (x, y) => x.b - y.b;
//     return arr.sort(sort);
//  }
//  console.log(myFunction([{a:2,b:10},{a:5,b:4}]))
//    console.log(myFunction([{a:1,b:7},{a:2,b:1}]))


// Q. (24)
//Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array
// function myFunction(a, b){
//     let result = [];
//     for(let num of a){
//         if(!result.includes(num)){
//             result.push(num)
//         }
//     }
//     for(let value of b){
//         if(!result.includes(value)){
//         result.push(value)
//         }
//     }
//     return result.sort((a,b)=>a-b);
// }
// console.log(myFunction([1, 2,20,15, 3], [3, 40,25, 5]))

// let arr = [4,70,1,5,44,55,11]
// let result = arr.sort((a,b)=>a-b)
// console.log(result)

// function myFunction(a, b) {
//     return [...new Set([...a, ...b])].sort((x, y) => x - y);
//   }
//   console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))


// Q. (25)
//Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string
// function myFunction(obj, key){
// return obj[key];
// }
// console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'))


// Q.  (26)
//Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.
// function myFunction(a, b){
//     //return a.hasOwnProperty(b)
//      return b in a;
    
// }
// console.log(myFunction({a:1,b:2,c:3},'b'))
// console.log(myFunction({x:'a',y:'b',z:'c'},'a'))
// console.log(myFunction({x:'a',y:'b',z:undefined},'z'))


// Q (27)
//Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
// function myFunction(a, b){
//     let result = a[b]
//     if(result) return true;
//     return false; 
// }
// console.log(myFunction({a:1,b:2,c:3},'b'))
// console.log(myFunction({x:'a',y:null,z:'c'},'y'))
// console.log(myFunction({x:'a',b:'b',z:undefined},'z'))

// function myFunction(a, b) {
//     return Boolean(a[b]);
//  }
//  console.log(myFunction({a:1,b:2,c:3},'b'))
// console.log(myFunction({x:'a',y:null,z:'c'},'y'))
//  console.log(myFunction({x:'a',b:'b',z:undefined},'z'))


// Q .(28);
//Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.
// function myFunction(a){
// return {key:a}
// }
// console.log(myFunction('a'))
// console.log(myFunction('z'))
// console.log(myFunction('b'))


// Q . (29);
//Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.
// function myFunction(a, b){
// return {[a] : b};
// }
// console.log(myFunction('a','b'))
// console.log(myFunction('z','x'))
// console.log(myFunction('b','w'))


// Q . (30)
//Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
// function myFunction(a, b){
//     if(a.length!==b.length) return false;
//     let obj = {}
//     a.forEach((c,d)=>{
//         { obj[c]=b[d]}
//     })
//     return obj;
//     }
//     console.log(myFunction(['a','b','c'],[1,2,3]))

// function myFunction(a, b){
//     if(a.length!==b.length) return false;
//     let obj = {}
//     for(let i=0;i<a.length;i++){
//         {obj[a[i]]=b[i]}
//     }
//     return obj;
// }
// console.log(myFunction(['a','b','c'],[1,2,3]))

// Q. (31)
//Write a function that takes an object (a) as argument. Return an array with all object keys.
// function myFunction(a){
//     //return Object.keys(a)
//     return Object.entries(a)
// }
// console.log(myFunction({a:1,b:2,c:3}))

// Q. (32)
//Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined
// function myFunction(obj){
    
//     return obj?.a?.b;
// }
// console.log(myFunction({a:{b:{c:3}}}))
//  console.log(myFunction({b:{a:1}}))
//  console.log(myFunction({a:2}))


// Q . (33)
//Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'
// function myFunction(obj){
//      delete obj?.b
//      return obj;
//     // const { b, ...rest } = obj;
//     // return rest;
//  }
//  console.log(myFunction({ a: 1, b: 7, c: 3 }))
//  console.log(myFunction({ e: 0, a: 7, d: 8 }))
//  console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }))


// Q . (34)
//Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'

// function myFunction(x,y){
//     let {b,...rest} = y;
    
//     return {...x, ...rest, ...b?{d:b}:{}}
// }
// console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))

// Q .(35)
// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.
// function myFunction(a,b){
//     for(let key in a){
//         a[key] = a[key]*b
//     }
//     return a
// }
// console.log(myFunction({a:1,b:2,c:3},3))


// Q. (36)
// Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.
// function myFunction(a,b){
//     // return a.getTime()==b.getTime()
//     return a-b===0

// }
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))
// console.log(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')))


// Q. (37);
// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.
// function myFunction(a,b){
//     const dif = Math.abs(a - b);
//     return dif / 1000 / 60 / 60 / 24

// }
// console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')))

// Q . (38)
// Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.
// function myFunction(a,b){
//     return a.getDay() == b.getDay()
// }
// console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01')))
// console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/02')))
// console.log(myFunction(new Date('2001/01/01'), new Date('2000/01/01')))
// function myFunction(a, b) {
//     return a.getFullYear() === b.getFullYear() &&
//            a.getMonth() === b.getMonth() &&
//            a.getDate()=== b.getDate()
//   }


// Q. (39)
//  Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year.Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

// class Book {
//     constructor(title,author,year){
//       this.Title = title;
//       this.Author = author;
//       this.Year = year
//     }
//     bookDetail(){
//       return `${this.Title} ${this.Author} ${this.Year}`;
//     }
//   }
//   class Ebook extends Book {
//     constructor(title,author,year,prise){
//       super(title,author,year);
//       this.BookPrise = prise
//     }
//     bookDetail(){
//       return `${super.bookDetail()} ${this.BookPrise}`
//     }
//   }
//   let book = new Ebook("javascript","john",2022,"Rs.250")
//   console.log(book)
//   console.log(book.bookDetail())


// Q . (40)
// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches
// class Bank {
//   constructor(bName){
//     this.BankName = bName;
//     this.Branches = []
//   }
//   add(ad){
//     return `${this.Branches.push(ad)}`
//   }
//   remove(value){
//     this.Branches = this.Branches.filter((item)=>{
//       if(item==value){
//         return false;
//       }
//       return true;
//     })
//   }
//   displayAll(){
//     return ` Bank Name ${this.BankName} and branches => ${this.Branches}`
//   }
// }
// const ob = new Bank("hdfc")
// ob.add("Delhi")
// ob.add("kota")
// ob.add("mumbai")
// ob.remove("mumbai")
// console.log(ob.displayAll())


// Q. (41)
// / replacerFunction("Random sentense", "e", "#")
// "Random s#nt#ns#"
// function replacerFunction(a,b,c){
//   let str = ""
//   for(let i =0;i<a.length;i++){
//     if(a[i]==b){
//       str += c
//     }else{
//       str +=a[i]
//     }
//   }
//   return str
// }
// console.log(replacerFunction("sentense","e","#"))


// Q. (42);
// convert vinary to decimal
// let binary = "101101"
// let output = parseInt(binary,2)
// console.log(output)

// function dTob(str){
//   let decimal =0;
//   for(let i = str.length-1;i>=0;--i){
//     if(str[i]=="1"){
//       decimal += Math.pow(2,str.length-1-i)
//     }
//   }
//   return decimal;
// }
// console.log(dTob("101"))
// console.log(dTob("1011"))
// console.log(dTob("101011"))


// Q. (43)
// 25=>2^1+5^2= 27 (false),25 (true)
// function check(str,){
//   let sum = 0;
//   for(let i =0;i<str.length;i++){
//     sum += Math.pow(Number(str[i]),i+1);
//     if(sum===Number(str)){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(check("123"))
// console.log(check("135"))


// Q. (44)
// / input:[2,3,8] ,[5,10,3] output:[7,3,12] // 
// let arr1 = [2,3,8]
// let arr2 = [5,10,3]
// function addArr(arr1,arr2){
//     let result = [];
//     let carry = 0;
//     for(let i =0;i<arr1.length;i++){
//         let sum = (arr1[i]+arr2[i])+carry
//         carry = parseInt(sum/10)
//         result[i] = ((i+1)<arr1.length) ? sum%10 :sum;
//     }
//     return result;
// }
// console.log(addArr(arr1,arr2))

// let arr1 = [2,3,8]
// let arr2 = [5,10,3]
// function add(arr1,arr2){
//     let result = []
//     let carry = 0;
//     for(let i = arr1.length-1;i>=0;i--){
//         let sum = (arr1[i]+arr2[i])+carry;
//         carry = parseInt(sum/10)
//         result[i] = i>0?sum%10 :sum;
//     }
//     return result;
// }
// console.log(add(arr1,arr2))


// Q. (45)
// Custom slice methode //
// Array.prototype.built = function(start,end){
//     let data = this;
//     let stop = data.length-1;
//     let resultArr = [];
//     if(start==undefined && end==undefined){
//       return data
//     }
//     if(start === undefined || start ==0){
//       return resultArr;
//     };
//     if(start<0){
//       start = start+data.length;
//     };
//     if(end!==undefined && end>0){
//       stop = end-1;
//     }
//     if(end>data.length){
//       stop = data.length-1
//     }
//     for(let i =start;i<=stop;i++){
//        let el = data[i]
//         resultArr.push(el)
//     }
//     return resultArr;
//   };
//   let arr = [1,2,3,4,5,6,7,8,9,10]
//   console.log(arr.built(2,15))
//   console.log(arr.built())


// Q. (46);
// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary

// class Employee {
//   constructor(name,salary){
//     this.Name = name;
//     this.salary = salary;
//   }
//   annual(){
//     return this.salary*12
//   }
// }
// class Manager extends Employee{
//   constructor(name,salary,dep){
//     super(name,salary)
//     this.Department = dep
//   }
//   annual(bonus){
//     return bonus+super.annual()
//   }
// }
// let a = new Manager("parmod",1000,"mechanical")
// let b = new Manager("sanju",2000,"mechanical")
// console.log(a)
// console.log(b)
// console.log(a.annual(200))
// console.log(b.annual(400))


// Q. (47);
// find a number is present in an array with the help of recursion //
// function searchNumber(arr,tar,i=0){
//   if(i>arr.length) return -1;
//   if(arr[i]==tar) return i+1;
//   return searchNumber(arr,tar,++i)
// }
// console.log(searchNumber([1,2,3,4,0,6,5,8],5))


// Q. (48);
// find prime numbers in an array with help of recursion 
// function findPrime(num,i=2){
//   if(i>=num) return true;
//   if(num%i==0)return false; 
//   return findPrime(num,++i)
// }
// console.log(findPrime(11))

// function findPrime(arr,call,i=0){
//     if(i>=arr.length) return;
//     call(arr[i])
//     return findPrime(arr,call,++i)
// }
// function checkPrime(n){
//   let isprime = true;
//     for(let j=2;j<=n/2;j++){
//       if(n%j==0){
//         isprime = false;
//       }
//     }
//     if(isprime){
//       console.log(n)
//     }
// }
// let result = findPrime([1,2,3,4,5,6,7,8,9],checkPrime)


// Q. (48);
// check a string is palindrome or not with recursion //
// function checkstr(str,i=0){
//   if(i>=str.length) return true;
//   if(str[i]!==str[str.length-1-i]) return false;
//   return checkstr(str,++i)
// }
// console.log(checkstr("abcba"))


// Q. (49);
// Find the sum of square all numbers from 1 to n
// function sum(n,total=0){
//     if(n<=0) return total;
//     total += n**2
//     return sum(--n,total)
// }
// console.log(sum(5))

// Q. (50);
// REturn arr of between two numbers
// function returnArr(a,b,arr=[]){
//     if(a>=b-1) return arr;
//     arr.push(++a)
//     return returnArr(a,b,arr)
// }
// console.log(returnArr(5,10))

// Q. (51);a.
// fibonacci serires //
// function fibonacci(num){
//     let x = 0;
//     let y = 1;
//     let fn = x+y;
//     console.log(x)
//     while(fn<num){
//         console.log(fn)
//         fn = x+y;
//         x = y;
//         y = fn
//     }
// }
// fibonacci(10)

//b.
// function fibonacci(num){
//     let x = 0;
//     let y = 1;
//     let tem;
//     let arr = []
//     while(arr.length<num){
//         arr.push(x)
//         tem = x+y;
//         x = y;
//         y = tem;
//     }
//     return arr;
// }
// console.log(fibonacci(10))

//c.
// function fibonacci(num){
//         let y = 1;
//         let tem;
//         for( let x=0;x<num;y){
//             console.log(x)
//             tem = x+y;
//             x = y;
//             y = tem;
//         }
// }
// fibonacci(50)

//d
// find the nth fibonacc number
// function fibonaccinth(n){
//     if(n<2) return n;
//     return fibonaccinth(n-1) + fibonaccinth(n-2)
// }
// console.log(fibonaccinth(6))
// console.log(fibonaccinth(5))


//  Q. (52)
// find the the odd number with the hepl of helperercursion //
// function findOdd(arr){
//     let result = [];
//     function checkOdd(arr){
//         if(arr.length==0) return;
//         if(arr[0]%2!==0){
//             result.push(arr[0])
//         }
//         return checkOdd(arr.slice(1))
//     }
//     checkOdd(arr)
//     return result;
// }
// console.log(findOdd([1,2,3,4,5,6,7,8,9]))


// Q. (53)
// reverse arr with the help of recursion
// function reverce(arr,i=0,result=[]){
//     if(i>=arr.length) return result;
//     result.push(arr[arr.length-1-i])
//     return reverce(arr,++i,result)
// }
// console.log(reverce([4,2,5,7]))


// Q. (54)
// find the length of arr 
// function getLebgth(arr){
//     let length = 0;
//     for(let i=0;i<arr.length;i++){
//         let length2 =1
//         if(Array.isArray(arr[i])){ 
//             length2 = getLebgth(arr[i])
//         }
//         length += length2
//     }
//     return length;
// }
// console.log(getLebgth([2,[1,3]]))
// console.log(getLebgth([2,[1,3,[5,4]]]))


// Q. (55)
// count unique letters in string
// function cntDistinct(str){
//     let s = new Set();
//     for (let i = 0; i < str.length; i++) {
//             s.add(str[i]);
//      }
//      return s.size;
//  }
// console.log((cntDistinct("abababacdc")));

// function countUnique(str){
//     let s = "";
//         for(let j =0;j<str.length;j++){
//             if(!s.includes(str[j])){
//                 s += str[j]
//             }
//         }
//     return s.length;
// }
// console.log(countUnique("abababacdc"))


// Q. (56);
// function topLeter(arr){
//     let s= "";
//     for(let i=0;i<arr.length;i++){
//             s += arr[i][0]   
//     }
//     return s

// }
// console.log(topLeter(["appropriate", "knowledge", "algorithm"]))


// Q. (57);
// shifft zero to the rigth side
// function shiftZero(arr){
//     for(let i =arr.length;i>=0;i-- ){
//         for(let j=0;j<i-1;j++){
//             if(arr[j]==0){
//                 [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
//             }
//         }
//     }
//     console.log(arr)
// }
// shiftZero([4,5,9,0,4,0,1,3,0,6])


// Q. (58)
// generate the paranthesis
// function parethesis(n){
//     let result = [];
//     function generate(open=0,close=0,string=""){
//       if(open==n && close==n){
//         result.push(string);
//         return;
//       }
//       if(open<n)  generate(open+1,close,string +"(");
//       if(open>close) generate(open,close+1,string +")")
//     }
//     generate();
//     return result;
//   }
//   console.log(parethesis(3))


// Q. (59);
// function getAllSubsets(array) {
//     const subsets = [[]];
//     for (const el of array) {
//         const last = subsets.length-1;
//         for (let i = 0; i <= last; i++) {
//             subsets.push( [...subsets[i], el] );
//         }
//     }
//     return subsets;
// }
// console.log(getAllSubsets([1,2,3]))

// function powerSet(numbers) {
//     const subsets = [[]]
//     for (const number of numbers) {
//         subsets.forEach(subset => subsets.push([...subset, number]))
//     }
//     return subsets
// }
// console.log(powerSet([1,2,3]))


// Q. (60)
// break string into the substr
// function breakWord(str,n){
//     if(str.length%n!==0) return false;
//     let result = []
//     let s = "";
//     let run = (str.length/n)
//     let value = 0;
//     for(let i=0;i<str.length;i++){
//         if(value===run){
//             result.push(s)
//             s = "";
//             value = 0;
//             i--;
//         }else{
//             s += str[i]
//             value++;
//         }
//     }
//     if(s.length==run)
//     result.push(s)
//     return result;
// }
// console.log(breakWord("abcdefghih",5))


// Q. (61)
// let arr1 = [5, 6, 2, 0, 1, 3]
// function odd(item){
//     return (item%2==1);
// }
// let result1 =  arr1.filter(odd)
// console.log(result1)

// let arr1 = [5, 6, 2, 0, 1, 3];
// function num(item){
//     let a  = 5;
//     if(item==a){
//         return true;
//     }
//     return false;
// }
// let result = arr1.filter(num)
// console.log(result)


// Q. (61)
// [{name: “fred”},{age:90},{name:”John”},…
// convert an givin array in to the object

//  let arr1 = ["fred", 90, "John", "hill", 8];
//   let result =arr1.map((item)=>{
//     if(typeof item=='string'){
//         return {name: item}
//     }if(typeof item=='number'){
//         return {age: item}
//     }
//  });
//  console.log(result)

// Q. (62);
//let arr = [{name: 'fred'},{age:90},{name:'John'}, {age:190}]; // [[“fred”,90],[“John”,190]]
//  let arr = [{name: 'fred'},{age:90},{name:'John'}, {age:190}];
// function convert(arr){
//     let result = [];
//     for(let i=0;i<arr.length;i++){
//         let tmp = [];
//         if(arr[i].name!=undefined){
//             tmp.push(arr[i].name);
//         }
//         if(arr[i].age!=undefined){
//             tmp.push(arr[i].age);
//         }
//         else if(i<arr.length-1 && arr[i+1].age!=undefined){
//             tmp.push(arr[i+1].age);
//             i++;
//         }
//         result.push(tmp);
//     }
//     return result;
// };
// console.log(convert(arr));


// Q. (63)
// “Hg5f78ddf89”   --   [[“Hgfddf”],[“57889”]]
// let str = "Hg5f78ddf89";
// function diffrent(str){
//     var arr = [];
//     let s = ""
//     let n = ""
//     for(let i =0;i<str.length;i++){
//         if(isNaN(str[i])==true){
//             s+=str[i]    
//         }else{
//             n+=str[i]
//         }
//     }
//     arr.push([s],[n])
//     return arr;
// };
// console.log(diffrent(str));


// Q. (64);
// let obj = {
//     name: 'pramod',
//     age: 36,
//     phone:558553,
//     address: "delhi"
// };
// let arr = [];
// for(let i in obj){
//     console.log(i)   //key
//     console.log(obj[i]) // value
//     arr.push([i,obj[i]]) //array of object
// };
// console.log(arr)

// let obj = {
//     name: 'pramod',
//     age: 36,
//     phone:558553,
//     address: "delhi"
// };
// let arr = Object.entries(obj);
// console.log(arr)
// let arrToobj = Object.fromEntries(arr);
// console.log(arrToobj)


// Q (65)
// add all odd and count all even number from 0 to 100
// var i = 0;
// var count =0;
// var addodd= 0;
// while(i<=100){
//     if(i%2==0){
//         count = count+1;
//     }else{
//         addodd+=i;
//     }
//     i++;
// }
// console.log(count,addodd); //51, 2500;


// Q (66);
// callback function
// function sum(funA){
//     return funA(5,6)
// }
// function add(a,b){
//     return a+b;
// }
// console.log(sum(add))

// function sumVal(funA,funB){
//     return funA(4- funB(3,4),8);
// };
// function sumA(a,b){
//     return a-b;
// };
// function sumB(c,d){
//     return c*d;
// };
// var total = sumVal(sumA,sumB)
// console.log(total);


// Q. (66);
// ARRRAY METHODE

// forEach
// var arr = [5,6,8,2,10,20,25,16];
// var count = 0;
// function counteven(item){
//     if(item%2===0){
//         count+=1;
//     }
// }
// arr.forEach(counteven);
// console.log(count,);

// var arr = [1,2,5,4,8,6,7,9,3];
// var sum = 0;
// function add(item){
//     if(item%2==0){
//         sum+=item;
//     }
// }
// arr.forEach(add);
// console.log(sum);

// var veggig = ["patoto",'tamato',"onion"];
// veggig.forEach(simplefun);
// function simplefun(item,index){
//     console.log(index+ " "+item)// 0 patoto, 1 tamato, 2 onion
// }

// item add by itself by forEach methode
// var number = [2,4,5,6,7,8,6];
// var sqare = [];
// number.forEach(num);
// function num(item){
//  sqare.push(item*item);
// }
// console.log(sqare);//4,16,25,36,49,64,36//

// // OUTPUT NAME INDEX
// var name = ["pramod","ashutosjh","akash","sunil"];
// name.forEach(withind);
// function withind(item, index){
//     console.log(item, "has index",index )
// }
    
// var name = ["pramod","akash","sunil","ashu"];
// name.forEach(addindex);
// function addindex(item,index){
//     console.log("item: " + item + " at index: " + index + name);
// };

// var even = [2,4,6,-1];
// alleven = true;
// even.forEach(detect);
// function detect(item){
//     if(item%2!=0){
//         alleven = false;
//     }
// }
// console.log(alleven);

// var arr = [2,4,6,1,32,4];
// function num(item){
//     return item>5 && item %2==0;
// }
//     let result   = arr.filter(num);
//     console.log(result);

// var arr = [2,4,6,1,32,4];
// function num(item){
//     if(item%2==0) return true;
//     return false;
// }
// let result = arr.filter(num);
// console.log(result)

// var arr = [1,2,3,2,4,5,6];
// let result= arr.map(function(item){
//     return item+10;
// });
// console.log(result)

// var arr =[1,2,3,2,4,5,6];
// let result = arr.map(function(item){
//     if(item%2==0){
//         return item+10;
//     }
//     return item;
// });
// console.log(result);

// var arr = [1,2,3];
// var total= arr.reduce(function(total,current){
//     return total+current;
// },10)
// console.log(total)


// Q. (67)
// Print the multiplication table with 7
// function table(){
//     for(let i=1;i<=10;i++){
//          console.log("7 "+"* "+i+" => "+7*i+" \t "+ "8 "+" * "+ i+ "=> "+8*i);
//     }
// }
// table();

// Q. (68)
// Calculate 10!//factorial of 10
// function facto(nr){
//   if(nr==0){
//     return 1;
//   }
//   return nr*facto(--nr);
// };
// console.log(facto(10))//3628800//
// console.log(facto(5))//120//

// let fact = 1;
// for(let i=1;i<=10;i++){
//     fact*=i;
// }console.log(fact) //3628800



// Q. (69)
// Calculate the sum of even numbers greater than 10 and less than 30
// function evenSum(a,b){
//   let sum =0;
//   for(let i=a;i<=b;i++){
//     if(i%2==0){
//       sum+=i;
//     }
//   }
//   console.log(sum)
// };
// evenSum(10,30)//220//


// Q. (70)
// a. Create a function that will convert from Celsius to Fahrenheit//
// function convert(C){
//     let  forenheight = (1.8*C)+32;//FORMULA f= 1.8c+32//
//     return forenheight;
// };
// console.log(convert(2)) //35.6//

// b. Create a function that will convert from Fahrenheit to Celsius
// function convert(f){
//     let Celsius = (f-32)/1.8;//formula c= (f-32)/1.8
//     return Celsius;
// };
// console.log(convert(2))// -16.67//


// Q. (71)
// Calculate the sum of numbers in an array of numbers
// let arr = [10,20,30,40,50];
// let sum = 0;
// function sumNumber(arr){
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     };
//     console.log(sum)
// };
// sumNumber(arr)


// Q. (72)
// Calculate the average of the numbers in an array of numbers
// let arr = [10,20,30,40,50];
// function average(arr){
//     let sum =0;
//     let n = arr.length;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum/n;
// }console.log(average(arr))


// Q. (73)
// Create a function that receives an array of numbers as argument and returns an 
//array containing only the positive numbers
// let arr1 =  [1,0,2,-5,-6,4,-7,8,-9,10];
// let arr2 = [];
// function receive(arr1){
//     for(let i=0;i<arr1.length;i++){
//         let num =arr1[i];
//         if(num>=0){
//            arr2.push(num)
//         }
//     }
// };
// receive(arr1);
// console.log(arr2)


// Q. (74);
// create a function to check given  string is palindrome or not.
// function  checkstr(str){
//     let len = str.length;
//     for(let i =0;i<len/2;i++){
//       if(str[i] !==str[len-1-i]){
//         return false;
//       }
//     }
//     return true;
//   };
//   console.log(checkstr("abba"))
//   console.log(checkstr("hello")) 
//   console.log(checkstr("abbcbba"))


// Q. (75)'
// let arr = [0, 2, 1, 2, 0];
// arr.sort((a,b)=>a-b)
// console.log(arr)


// Q. (76);
// Find the maximum number in an array of numbers?//large number //
// let arr = [2,5,-9,8,-4,45,28,70];
// function findmax(arr){
//     let max = arr[0];
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     } 
//     return max;
// };
//  console.log(findmax(arr));


// Q. (77);
// Create a function that will return a Boolean specifying if a number is prime
// function checkPrime(num){
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkPrime(11))


// Q. (78)
/// Create a function that will return in an array the first “p” prime numbers 
// greater than “n”
//  function check(a,b){
//         let arr = [];
//         for(let i  = a;i<=b;i++){
//             let isPrime = true;
//             for(let j = 2; j<i;j++){
//                 if(i%j==0){
//                     isPrime = false;
//                     break;
//                 }
//             }
//             if(isPrime){
//                 arr.push(i)
//             }
//         }
//         return arr;
//     };
//     console.log(check(2,50))


// Q. (79)
//a. Rotate an array to the left 1 position
// let arr = [1,2,3,4,5];
// function rotate(arr){
//     let first = arr.shift();
//     arr.push(first);
//     return arr;
// }
// console.log(rotate(arr))

//b.  Rotate an array to the right 1 position
// let arr = [1,2,3,4,5];
// function rotate(arr){
//     let last = arr.pop();
//     arr.unshift(last);
//     return arr;   
// };
// console.log(rotate(arr))


// Q (80);
//a Reverse an array
// let arr = [1,2,3,4,5]
// function reverse(arr){
//     let tem = [];
//     for(let i =0;i<arr.length;i++){
//         tem.push(arr[arr.length-1-i])
//     }
//     return tem;
// }
// console.log(reverse(arr))

//b
// let arr = [1,2,3,4,5]
// function reverse(arr){
//     let tem = [];
//     for(let i =0;i<arr.length;i++){
//         tem[i] = arr[arr.length-1-i];
//     }
//     return tem;
// }
// console.log(reverse(arr))
//c
// let arr = [1,2,3,4,5]
// function reverse(arr){
//     let tem = [];
//     for(let i =arr.length-1;i>=0;i--){
//         tem.push(arr[i])
//     }
//     return tem;
// }
// console.log(reverse(arr))


// Q. (81)
//Reverse a string//
// let str = "pramod mahaur";
// function reverce(str){
//     let string = "";
//     for(let i = str.length-1;i>=0;i--){
//         string+=str[i]
//     }
//     return string;
// };
// console.log(reverce(str))


//Q. (82)
//Create a function that will merge two arrays and return the result as a new  array
// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10]
// function merge(arr1,arr2){
//     let result = []
//     for(let el of arr1){
//         result.push(el)
//     }
//     for(let el of arr2){
//         result.push(el)
//     }
//     return result;
// }
// console.log(merge(arr1,arr2))


// Q. (83)
/*Create a function that will receive two arrays of numbers as arguments and 
return an array composed of all the numbers that are either in the first array 
or second array but not in both */
// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,7,2,9,5,6];
// function merge(ar1,ar2){
//     let arr = []
//     for(let el of ar1){
//         if(!arr2.includes(el))
//         arr.push(el)
//     }
//     for(let el of ar2){
//         if(!arr1.includes(el))
//         arr.push(el)
//     }
//     return arr
// }
// console.log(merge(arr1,arr2))


// Q. (84)
/*Create a function that will receive two arrays and will return an array with 
elements that are in the first array but not in the second*/
// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,7,2,9,5,6];
// function check(arr1,arr2){
//     let arr = []
//     for(let el of arr1){
//         if(!arr2.includes(el))
//         arr.push(el)
//     } 
//     return arr;  
// }
// console.log(check(arr1,arr2))


// Q. (85)
/*Create a function that will receive an array of numbers as argument and will return a 
new array with distinct elements*/
// let arr = [2,3,5,6,4,8,5,5,8]
// function distinct(item,index){
//     for(let i=index+1;i<arr.length;i++){
//         if(arr[i]==item){
//             return false;
//         }
//     }
//     return true;
// }
// let result = arr.filter(distinct)
// console.log(result)


// Q. (86)
// Converet a sentence into a array without using inbuilt method //
// let input = " JS   stands for Javascript  ";
// function strTOarr(ar){
//     let arr = [];
//     let s = "";
//     for(let i = 0;i<ar.length;i++){
//         if(ar[i]==" "){
//             if(s=="") continue;
//             arr.push(s)
//             s= "";
//         }else{
//             s+= ar[i]
//         }
//     }
//     if(s!=""){
//         arr.push(s)
//     }
//     return arr
// }
// console.log(strTOarr(input))


// Q. (87);
// Count white space in the string;
//  let str = "pramod mahur ashu tosh"
//  function find(str){
//     let sum = 0;
//     for(let i = 0;i<str.length;i++){
//         if(str[i]==" "){
//             sum+=1;
//         }
//     }
//     return sum;
//  }
//  console.log(find(str))


// Q. (88);
// find the count of all the special carecter in string with there over all count;
// let str = "arr!@r!@!";
//  let result = str.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)
//  let count = 0;
//  for(let i = 0;i<result.length;i++){
//     count+=1;
//  }
//  console.log(count,result)


// Q. (89)
//a. find the missing number in array//
// let arr = [5,7,9,11,15,17,21]; // output 13//
// function  find(arr){
//     let small = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<small){
//             small = arr[i]
//         }
//     }
//     let check = small
//     for(let val of arr){
//         if(arr.includes(check)){
//             check+=2;
//         }else{
//             return check;
//         }
//     }   
// }
// console.log(find(arr))

//b.
// let arr = [5,1,3,4,8];
// function find(arr){
//     let result = []
//     let large = Math.max(...arr)
//     let small = Math.min(...arr)
//     for(let i = small;i<=large;i++){
//         if(arr.indexOf(i)<0){
//             result.push(i)
//         }
//     }
//     return result;
// }
// console.log(find(arr))


// Q. (90)
//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
// function pas(calback){
//     for(let i=1;i<=10;i++){
//         console.log(i ) 
//         calback(i)
//     }
// }
// function printTable(n){
//     for(let i=1;i<=10;i++){
//       let result= (n +" * "+" "+ i+ " => " + n*i);
//         console.log(result)
//     }
// }
// pas(printTable)


// Q. (91)
//custom slice methode
// Array.prototype.buitl = function(start,end){
//     let data = this;
//     var stop = data.length-1;
//     var resultArr = [];
//     if (start === undefined) {
//         return resultArr
//     };
//     if(start<0){
//         start = start + data.length
//     };
//     if (end !== undefined && end > 0) {
//         stop = end - 1
//     };
//     for (var index = start; index <= stop; index++) {
//         var element = data[index];
//         resultArr.push(element)
//     }
//     return resultArr;
// };
// let arr = [1,2,3,4,6,7,5,2]
// console.log(arr.buitl(5))


// Q. (92)
// make all odd number true and even false// 
// var arr = [5, 6, 2, 0, 1, 3];
// function check(item){
//     return !(item%2==0);
// }; let result = arr.map(check);
// console.log(result)


// Q. (93)
// write a function thats take an array and another is value and printarray up to the value index
// var arr = [5, 6, 2, 0, 1, 3];
// function check(arr,value){
//     var newarr = [];
//     for(let i=0;i<=value;i++){
//         newarr.push(arr[i]);
//     }
//     return newarr;
// }
// let result = check(arr,2)
// console.log(result)


// Q. (94) symbol count in arr
 // var arr = ['g', 'g', 'r',' h', 'g', 'l', 'p', 'p']
// [['g', 3], ['r', 1], ['h', 1], ['l', 1], ['p', 2]]//answer
// function symbolCount(arr){
//     var result= [];
//     let symCount= {};
//     for(let i=0;i<arr.length;i++){
//         if(symCount[arr[i]]==undefined){
//             symCount[arr[i]]=0;
//         }
//         symCount[arr[i]]++;
//     }

//     for(let key in symCount){
//         var currArr = [key, symCount[key]];
//         result.push(currArr);
//     }
//     return result;
// }
// console.log(symbolCount(['g', 'g', 'r',' h', 'g', 'l', 'p', 'p']))


// Q. (95)
 // count string in arr
// function checkString(arr){
//     let sumStr = 0;
//     for(let i =0;i<arr.length;i++){
//         if(typeof arr[i]=='string'){
//             sumStr+=1;
//         }
//     }
//     return sumStr;
// };
// console.log(checkString(['g', 'g', 3,' h', 'g', 56, 'p', true, 'false']))


// Q. (96); Remove the similar word from the arr
//  var arr = ['god', 'bat', 'rat', 'hat' , 'lamp', 'pat', 'pat']
// //  ['god', 'bat', 'rat',' hat',  'lamp',  'pat']
// function adjest(item, index){
//     for(let i=index+1;i<arr.length;i++){
//         if(arr[i]==item){
//             return false;
//         }
//     }
//     return true;
// }
// let newArr = arr.filter(adjest);
// console.log(newArr)


// Q. (97);
// check number is prime or note
//  function checkPrime(num){
//         for(let i=2; i < num; i++){
//             if(num%i==0){
//                 return ("number is not a prime")
//             }
//         }
//         return ("number is  prime")
//     };
//     console.log(checkPrime(12))


// Q. (98);'
// check Primenumber and return an arary//
// let arr = [4,5,8,6,9,7,12];
// function checkPrime(item){
//     for(let i=2;i<=item/2;i++){
//     if(item %i==0){
//         return false;
//     }
//     }
//     return true;  
     
// };
// let result= arr.filter(checkPrime);
// console.log(result);


// Q. (99);
// function createPhoneNumber(arr){
//    const arr1 =  `(${arr.slice(0,3).join('')})  ${arr.slice(3,6).join('')}-${arr.slice(6,10).join('')} `;
//    console.log(arr1)
// };
// createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);

// var arr = [1,2,3,4,5,6,7,8,9,0]
// function createPhoneNumber(arr){
//    let number = '(xxx) xxx-xxxx';
//    arr.forEach(item=>{
//     number = number.replace("x",item);
//    });
//    console.log(number); 
// };
// createPhoneNumber(arr)


// Q. (100)
// add array values in arr and update the object
// let obj = {
//     name: 'Peter',
//        addr: {
//      location : [3, 4, 5], 
//          place: [3], 
//          city: 'Bangalore'
//        },
//     countryCode: [4, 1, 23]
// };
// function addArray(obj){
//     for(let key in obj){
//         if(typeof obj[key] == 'object' && obj[key]!=null){
//             for(let key2 in obj[key]){
//                 if( Array.isArray(obj[key][key2])){
//                     obj[key][key2] = obj[key][key2].reduce((a,b)=>{
//                         return a+b;
//                     })
//                 }                
//             }
//         }
//         if( Array.isArray(obj[key])){
//             obj[key] = obj[key].reduce((a,b)=>{
//             return a+b;
//         })

//         }
//     }
//     return obj
// };
// console.log(addArray(obj))


// Q. (101)
// 4 - FirstName, lastName, age, Marks, Result (pass/fail)
// Use Factory function
// Use Constructor function

// factory function
// function creatBio(fName,lName,age,marks){
//     const  Result = marks <33 ? 'fail' : 'pass';
//     return {
//         FirstName:fName,
//         LastName: lName,
//         Age: age,
//         Marks:marks,
//         Result,
//     }
// }
// const pramod = creatBio('anuj','mahaur',22,41,);
// const akash = creatBio('ashu','kumar',25,42);
// const suman = creatBio('suman', 'chaudhary',22,25);
// const rohit = creatBio('rohit','kumar',23,32)
// console.log(pramod)
// console.log(akash)
// console.log(suman)
// console.log(rohit)


// construction function
// function creatBio(fName,lName,age,marks){
    //     this.firstNmae = fName;
    //     this.lastname= lName;
    //     this.age =     age;
    //     this.marks = marks;
    //     this.result = marks<33 ? 'fall' : 'pass';
    // }
    // const pramod = new creatBio('anuj','mahaur',22,35,);
    // const akash = new creatBio('ashu','kumar',25,22,);
    // const suman = new creatBio('suman', 'chaudhary',22,36,)
    // const rohit = new creatBio('rohit','kumar',23,31,);
    // console.log(pramod)
    // console.log(akash)
    // console.log(suman)
    // console.log(rohit)


// Q. (102)
// //Print the prime numbers from 1 to n and their factorial respectivly//
// let arr = []
// function checkPrime(num){
//     for(let i =2;i<=num;i++){
//         let isPrime = true;
//         for(let j =2;j<i;j++){
//             if(i%j==0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime){
//             arr.push(i)
//         }
//     } 
// }
// checkPrime(10)
// let result = arr.map((item)=>{
//     let fact =1;
//     for(let i = 1; i<=item;i++){
//         fact*=i
//     }
//     return fact;
// })
// console.log(result)


// Q. (103);
//Create a custom method and add it to the Array base function
// Array.prototype.countEven = function(){
//     let count = 0;
//     for(let i =0;i<this.length;i++){
//         if(this[i]%2==0){
//             count+=1
//         }
//     }
//     return count;
// }
// let arr = [53,6,3,6,1,2]
// console.log(arr.countEven()) 


// q. (104)
// 2. customMap // must behave exactly like inbuild map function
// Array.prototype.modify = function(mymap){
//     let result = []
//     for(let i=0;i<this.length;i++){
//         result.push(mymap(this[i]))
//     }
//     return result;   
// }
// let arr = [53,6,3,6,1,2]
// console.log(arr.modify((item)=>{
//     return item+2
// }))  


// Q. (105)
// 3. customFilter // must behave exactly like inbuild filter function
// Array.prototype.filt = function(myfilteer){
//     let result = [];
//     for(let i =0;i<this.length;i++){
//         let status = myfilteer(this[i])
//         if(status){
//             result.push(this[i])
//         }
//     }  return result;
// }
// let arr = [4,5,8,2,7,6,5,8];
// console.log(arr.filt((item)=>{
//     return item>5
// }))


// Q. (106);
// let arr = [1,2,3,4,5,6];
// let result = arr.map((item)=>{
//     return item**3;
// });
// let newresult = result.filter((item,)=>{
//     return (item>18 && item<500)
// });
// let total = newresult.reduce((item,value)=>{
//         return item+value;
// },0)
// console.log(total)


// Q. (107)
// write a function to search a value in the array if it is present return the position of the value
// if not prent in return -1;
// let arr = [1,5,8,7,9,10,22];
// function checkValue(arr,value){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==value){
//             return i+1;
//         }
//     }
//     return -1;
// };
// console.log(checkValue(arr,10))


// Q. (108);
//write a function that take an array and vlaue and return a new arr of  the element  which add up to the value//
// let arr = [1,5,7,8,9,2,23,15];
// function addValue( arr,value){
//     let result =  [];
//     for(let i=0;i<arr.length;i++){
//         for(let j =i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==value){
//                 result.push([arr[i],arr[j]])
//             }
//         }
//     };
//     return result;
// };
// console.log(addValue(arr,10))


// Q. (109);
// to write a function to check the number id division by 3,5 and both or not//
// function checkNumber(num){
//     if(num%3==0 && num%5==0){
//         console.log("number is divided by 3 and 5")
//     }else if(num%5==0){
//         console.log("number is divided by 5");
//     }else if(num%3==0){
//         console.log("number is divided by 3")
//     }else{
//         console.log("number is not divided by 3 and 5")
//     }
// };
// checkNumber(10);
// checkNumber(15);
// checkNumber(17)


// Q. (110);
// add all even number and add or odd number//
// function evenOdd(num){
//     let i =0;
//     let addeven =0;
//     let addodd = 0;
//     while(i<num){
//         if(i%2==0){
//             addeven+=i;
//         }else{
//             addodd+=i;
//         }
//         i++;
//     };
//     console.log(addeven,addodd)
// };
// evenOdd(10)


// Q. (111);
// let arr = [[1,2,3],[4,5,[1,2],6],[7,8,9]]
// function add(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             sum += add(arr[i])
//         }else{
//             sum += arr[i]
//         }
//     }
//     return sum;
// }
// console.log(add(arr))


// Q. (112)
// Print arr into subarr but subarr length depend on the the given value //
// function print(arr,value){
//     let result = [];
//     let subarr= []
//     let count = 0
//     for(let i=0;i<arr.length;i++){    
//         if(count==value){
//             result.push(subarr);
//             count=0;
//             subarr=[];
//         }
//         count++;
//          subarr.push(arr[i]);    
//     }
//     result.push(subarr);
//     return result;
// }
// console.log(print([1,2,3,4,5,6,7,8,9,2,4,],3))


// Q. (113)
// custom methode of arr for summetin ;;
// Array.prototype.sumetion = function(){
//     let sum = 0;
//     for(let i =0;i<this.length;i++){
//         sum += this[i]
//     }
//     return sum;
// }
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.sumetion())


// Q. (114);
// custom methode of arr for multiplication ;;
// Array.prototype.mult = function(){
//     let mul = 1;
//     for(let i=0;i<this.length;i++){
//         mul *= this[i]
//     }
//     return mul;
// }
// let arr = [1,2,3]
// console.log(arr.mult())


// Q. (115)
// replace every second letter with any other letter which is not present in string//
// let str = "javascript";
// function replace(str,r){
//     let s = " ";
//     for(let i=0;i<str.length;i++){
//         if(i%2!==0){
//             s += r;
//         }else{
//             s += str[i]
//         }
//     }
//     return s;
// }
// console.log(replace(str,"D"))


// Q. (116);
// count the last word  elemwnt in the swntence //
// let sentence = " jjjj jj hhhhh hhhh  hhh "
// function countLast(str){
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==""){
//             continue;
//         }
//         if(i>0 && str[i-1]==" "){
//             count =0;
//         }else{
//             count +=1
//         }
        
//     }
//     return count;
// }
// console.log(countLast(sentence))
    

// Q. (117)
//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
//Input: nums = [0,1,1]
//Output: []
//Input: nums = [0,0,0]
//Output: [[0,0,0]]
// function findtriple(arr){
//     let result = [];
//     let obj = {}
//     for(let i=0;i<arr.length;i++){
//         for(let j =i+1;j<arr.length;j++){
//             for(let k = j+1;k<arr.length;k++){
//                 if(arr[i]+arr[j]+arr[k]===0){
//                     let temparr = [arr[i],arr[j],arr[k]]
//                     temparr = temparr.sort((a,b)=>a-b)
//                     let key = temparr.join(" ")
//                     if(obj[key]===true)continue;
//                         obj[key] = true;
//                     result.push(temparr)
//                 }
//             }
//         }
//     }
//     return result;
// }
// console.log(findtriple([-1,0,1,2,-1,-4]))


// Q. (118)
// merge 2-D matrix in spiral form
// function spiralOrder(matrix) {
//     let result = [];
//     let rowcount = matrix.length;
//     let colcount = matrix[0].length;
//     let rowstart = 0;
//     let rowend = rowcount-1;
//     let colstart = 0;
//     let colend = colcount-1;
//     while(rowend>=rowstart && colend>=colstart){
//       for(let row =rowstart;row<=colend;row++ ){
//         result.push(matrix[rowstart][row])
//       }
//       rowstart++;
//       for(let col = rowstart;col<=rowend;col++){
//         result.push(matrix[col][colend])
//       }
//       colend--;
//       if(rowend>=rowstart){
//         for(let col = colend;col>=colstart;col--){
//           result.push(matrix[rowend][col])
//         }
//       }
//       rowend--;
//       if(colend>=colstart){
//         for(let row =rowend;row>=rowstart;row-- ){
//           result.push(matrix[row][colstart])
//         }
//       }
//       colstart++;
//     }
//     return result;
//   }
//   //spiralOrder([[1, 2, 3],[4, 5, 6],[7, 8, 9]])
//    //spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
//    console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]))



// Q. (119);
//reverce a srtring word by word //
// let str = "this is a javascript code";
// let arr = str.split(' ')
// function revece(arr){
//     let rs = "";
//     for(let i=0;i<arr.length;i++){
//         for(let j= arr[i].length-1;j>=0;j--){
//             rs += arr[i][j]
//         }
//         rs+=' '
//     }
//     return rs
// }
// console.log(revece(arr))  // siht si a tpircsavaj edoc 

//b.
// let str = "this is a javascript code";
// function revecestr(str){
//     let arr = str.split(" ")
//     return arr.reverse().join(' ')
// }
// console.log(revecestr(str)) // code javascript a is this


//Q. (120)
/*Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".
firstRepeat("legolas") ➞ "l"
firstRepeat("Gandalf") ➞ "a"
firstRepeat("Balrog") ➞ "-1"*/
// function firstRepeat(str){
//     for(let i =0;i<str.length;i++){
//       for(let j = i+1;j<str.length;j++){
//         if(str[i]===str[j]){
//           return str[i]
//         }
//         }
//       }
//       return -1
//     }
    
//     console.log(firstRepeat("legolas"))
//     console.log(firstRepeat("Gandalf"))
//     console.log(firstRepeat("Balrog"))


//Q . (121);
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.
// function singleNumber(nums,obj = {}) {
//     for(let val of nums){
//       obj[val] = (obj[val] ||0)+1
//     }
//     for(let key in obj){
//       if(obj[key]===1){
//         return key
//       }
//     }
//   }
//   console.log(singleNumber([2,2,1]));
//   console.log(singleNumber([4,1,2,1,2]));
//   console.log(singleNumber([2,4,3,2,4]));


// Q. (122);
// reverce a number 
// function revece(num){
//     let rev =0, temp = num;
//     while(temp!==0){
//         let ld = temp%10
//         rev = rev*10+ld
//         temp = Math.floor(temp/10)
//     }
//     return rev;
// }
// console.log(revece(123))

// b.
// function revece(num){
//     let rev ="", temp = num;
//     while(temp!==0){
//         let ld = temp%10
//         rev += ld
//         temp = Math.floor(temp/10)
//     }
//     return rev;
// }
// console.log(revece(100))


// Q. (123)
// reverse the string word by word
// function revec(str){
//     let arr = str.split(" ").reverse().join(" ")
//     console.log(arr)
// }
// revec("this is a syk blue red")

// function re(str){
//     let arr = str.split(" ")
//     let result = "";
//     for(let i = arr.length-1;i>=0;i--){
//         result+= arr[i]+" "
//     }
//     return result;
// }
// console.log(re("this is a javascript"))


// Q. (124);
/*Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).
vowelLinks("a very large appliance") ➞ true
vowelLinks("go to edabit") ➞ true
vowelLinks("an open fire") ➞ false */
// function vowelLinks(str){
//     let arr = str.split(' ');
//     for(let i=0;i<arr.length-1;i++){
//       if(arr[i][arr[i].length-1].match(/[a,e,i,o,u]/i) &&
//         arr[i+1][0].match(/[a,e,i,o,u]/i)){
//         return true; 
//       }
//     }
//     return false;
//   } 
//   console.log(vowelLinks("a very large appliance"))
//   console.log(vowelLinks("go to edabit"))
//   console.log(vowelLinks("an open fire"))


// Q. (125);
// function game(nums){
//     let arr = nums
//     let player1 = 0;
//     let player2 = 0;
//     let i =0
//     while(i<arr.length){
//         player1 += arr[i]
//         arr.splice(i,1) 
//         if(arr.length===0) break;
//         player2 +=arr[i] 
//         arr.splice(i,1)   
//     }
//     console.log("player1",player1,"player2",player2) 
//     if(player1>player2 || player1==player2) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(game([1,5,2]))
// console.log(game([1,5,233,7]))
// console.log(game([1,243,233,7]));


// Q. (126)
/*Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.
Examples*/
// function findNum(num1,num2,arr){
//     let result = arr.filter((item)=>{
//         if(item>num1 && item<num2){
//             return true;
//         }
//     })
//     return result;
// }
// console.log(findNum(3, 8, [1, 5, 95, 0, 4, 7]))
// console.log(findNum(1, 10, [1, 10, 25, 8, 11, 6]))
// console.log(findNum(7, 32, [1, 2, 3, 78]));


// Q. (127);
/*Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ []*/

// function objToarr(obj){
//     let result = Object.entries(obj)
//     return result;
// }
// console.log(objToarr(({ a: 1, b: 2 })))
// console.log(objToarr(({ shrimp: 15, tots: 12 })))


//  function arrToObj(arr){
//          let result = Object.fromEntries(arr)
//         return result;
//     }
//      console.log(arrToObj([['name', 'John'], ['age', 30], ['city', 'New York']]))

// let array = ['apple', 'banana', 'cherry'];
// let object = Object.assign({}, array);

// console.log(object);


// Q (128);
/*Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true */

// function changeEnough(arr,bill){
//     let quater = arr[0]*(6.5/25)
//     let dimes = arr[1]*(2/20)
//     let nickels = arr[2]*(0.25/5)
//     let pennies = arr[3]*(1)
//     if(quater+dimes+nickels+pennies>=bill){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(changeEnough([2, 100, 0, 0], 14.11)) //f
// console.log(changeEnough([0, 0, 20, 5], 0.75))   // t
// console.log(changeEnough([30, 40, 20, 5], 12.55) ) //t


// Q. (129);
//Create a function that returns the sum of missing numbers.
//sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// 2 + 4 + 6 + 8 + 9
//sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29
//sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575

// function sumMissingNumbers(arr){
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)
//     let sum = 0;
//     for(let i=min;i<=max;i++){
//         if(arr.indexOf(i)<0){
//             sum +=i
//         }
//     }
//     return sum;
// }
// console.log(sumMissingNumbers([1, 3, 5, 7, 10]))
// console.log(sumMissingNumbers([10, 7, 5, 3, 1]))
// console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]) )


// Q. (130);
//  let str = "hav2e i2 app3le" // i have apple
// function arrange(str){
//     let word = '',strArr = [];
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==" " && !isNaN(str[i])) continue;
//         if(str[i]==" "){
//             strArr.push(word)
//             word='';
//         }else{
//             word += str[i]
//         }
//     }
//     strArr.push(word);
//     strArr.sort((a,b)=>{
//         return a.length - b.length
//     });
//     return strArr.join(' ')
// }
// console.log(arrange(str))


// Q. (131);
/*You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
Examples
points(1, 1) ➞ 5
points(7, 5) ➞ 29
points(38, 8) ➞ 100*/

// function points (two_point, three_point){
//     return two_point*2 + three_point*3;
// }
// console.log(points(1,1))
// console.log(points(7,5))
// console.log(points(38,8))


// function check(str){
//     let result = ""
//     for(let i =0;i<str.length;i++){
//         if(!result.includes(str[i])){
//             result += str[i]
//         }
//     }
//     return result.length
// }
// console.log(check("abcabcbb"))


// Q. (132)
// binary seafrch 
// function binarsearch(arr,tar){
//     let start = 0;
//     let end = arr.length-1;
//     while(start<=end){
//         let mid = Math.floor((start+end)/2)
//         if(arr[mid]===tar){
//             return mid;
//         }else if(arr[mid]<tar){
//             start = mid+1
//         }else{
//             end = mid-1
//         }
        
//     }
//     return -1
// }
// console.log(binarsearch([1,2,3,4,5,6,7,8,9],4))


// Q. (133)
// Binary serach  with the help og recursion
// function binarySearch(arr,find,start=0,end=arr.length-1){
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]==find) return mid+1;
//     if(arr[mid]<find) return binarySearch(arr,find,mid+1,end);
//     else{
//         return binarySearch(arr,find,start,mid-1)
//     }
// }
// console.log(binarySearch([1,2,3,4,5,6],4))


// Q. (134);
// bubbol sort 
// function bubbolSort(arr){
//     for(let i=arr.length; i>=0;i--){
//         for(let j =0; j<i-1; j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]] 
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbolSort([5,2,4,7,9,10,3,6])) //   [2, 3, 4, 5,6, 7, 9, 10]


// Q. (135);
//mergeSort 
// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let result = [];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             result.push(left.shift())
//         }else{
//             result.push(right.shift())
//         }
//     }
//     return [...result, ...left, ...right]
// }
// console.log(mergeSort([5,2,4,7,9,10,3,6]))  //   [2, 3, 4, 5,6, 7, 9, 10]



// Q. (136);
//  QuickSort 
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot = arr[arr.length-1], left = [], right = []
//     for(let i =0; i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }
// console.log(quickSort([5,2,4,7,9,10,3,6]))


// Q. (137);
// check a string palindrom or not with reacursion;
// function checkPalindrom(str,i=0){
//     if(i>str.length){
//         return true;
//     }
//     if(str[i]!==str[str.length-1-i]){
//         return false;
//     }
//     return checkPalindrom(str, ++i)
// }
// console.log(checkPalindrom("bcdab"))
// console.log(checkPalindrom("abcba"))


// Q. (138);
// find a number in arr with recursin 
// function findNum(arr,tar,i=0){
//     if(i>arr.length) return -1;
//     if(arr[i]===tar) return i+1;
//     return findNum(arr, tar,++i)
// }
// console.log(findNum([4,5,3,7,8,9,6,2],9))



// Q. (139)
// function checkAnagaram(str1,str2){
//     if(str1.length!==str2.length){
//         return false;
//     }
//     let counter = {};
//     for(let i=0;i<str1.length;i++){
//         counter[str1[i]] = (counter[str1[i]] || 0) +1
//     }
//     for(let letters of str2){
//         if(!counter[letters]){
//             return false;
//         }
//         counter[letters]--
//     }
//     return true;
// }
// console.log(checkAnagaram("hello", "llohe"))


// Q. (140)
// Reverse an arr with the help of recursion
// function reverseArr(arr, result =[], i=0){
//     if(i>=arr.length) return result;
//     result.push(arr[arr.length-1-i]);
//     return reverseArr(arr, result, ++i)
// }
// console.log(reverseArr([1,2,3,4,5,6]))


// Q. (141)
// Reverse an arr with the help of recursion
// function reverseArr(arr, result =[], i=0){
//     if(i>=arr.length) return result;
//     result.push(arr[arr.length-1-i]);
//     return reverseArr(arr, result, ++i)
// }
// console.log(reverseArr([1,2,3,4,5,6]))


// Q. (142);
// check arr1 element's aquare prent in arr2 
// function checkSquare(arr1,arr2){
//     let count = {}
//     for(let i=0;i<arr1.length;i++){
//         count[arr1[i]**2] = (count[arr1[i]**2] || 0) +1  
//     }
//     for(let value of arr2){ 
//         if(!count[value]){ 
//             return false
//         } 
//         count[value]-- 
//     }
//     return true; 
// }
// console.log(checkSquare([6,5,3,6],[9,25,36,36])) 


// Q. (143)
// find the sum of 0 with o(n) compalsity 
// function findPair(arr){
//     let left =0;;
//     let right = arr.length-1;
//     while(left<right){
//         sum = arr[left] + arr[right]
//         if(sum===0){
//             return [arr[left],arr[right]]
//         }else if(sum>0){
//             right--
//         }else{
//             left++
//         }
//     }

// }
// console.log(findPair([-5.-4,-3,-2,-1,0,1,2,3,4,5]))


// Q. (144);
// count the unique numbe in the array or lengthh of array;
// function countUnique(arr){
//     if(arr.length>0){
//         let i =0;
//         for(let j=1;j<arr.length;j++){
//             if(arr[i]!==arr[j]){
//             i++;
//             arr[i] = arr[j]
//             }
//         }
//         return i+1
//     }else{
//         throw new Error("empty err")
//     }
// }
// console.log(countUnique([1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]))


// Q. (145);
// find the largest sum of cosecutive digits in array //
// function findLarget(arr,num){
//     if(num>arr.length){
//         throw new Error("number is greter than array")
//     }else{
//         let max =0;
//         for(let i=0;i<arr.length-num+1;i++){
//             let tem =0;
//             for(let j=0;j<num;j++){
//                 tem += arr[i+j]
//             }
//             if(tem>max){
//                 max = tem
//             }
//         }
//         return max;
//     }
// }
// console.log(findLarget([1,2,3,4,5,6,7,8,9],3))


// Q. (146)
// Q= array sorting with the help of recursion //
// function sort(arr,i=arr.length-1){
//     let temp;
//     if(i==0) return arr;
//     for(let j =i;j>=0;j--){
//         if(arr[j-1]>arr[i]){
//             temp = arr[j-1];
//             arr[j-1] = arr[i];
//             arr[i] = temp;
//         }
//     }
//     return sort(arr, i-1)
// }
// console.log(sort([5,2,7,3,1,6,0,8,9]))


// Q. (147);
// lenear serch searching user in array //
// let user = [{username:"a",mail:"peben@g.com"},
//             {username:"b",mail:"asb55@ff.com"},
//             {username:"c",mail:"san@hma.com"}
//            ]
// function searchUser(arr,u){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].username===u){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(searchUser(user,"b"))

// let user = [{username:"a",mail:"peben@g.com"},
//             {username:"b",mail:"asb55@ff.com"},
//             {username:"c",mail:"san@hma.com"}
//            ]
// function searchUser(arr,u){
//     for(let item of arr){
//         if(item['username']===u){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(searchUser(user,"b"))


// Q. (148);
// find the length of the arr
// function getLebgth(arr){
    //     let length = 0;
    //     for(let i=0;i<arr.length;i++){
    //         let length2 =1
    //         if(Array.isArray(arr[i])){ 
    //             length2 = getLebgth(arr[i])
    //        }
    //     length += length2
    //     }
    //     return length;
    // }
    // console.log(getLebgth([2,[1,3]]))
    // console.log(getLebgth([2,[1,3,[5,4]]]))



// Q. (149);
// Q create a function to convert roman to integer //
// const romanObj = {
//     I : 1,
//     V : 5,
//     X : 10,
//     L : 50,
//     C : 100,
//     M : 500,
//     D : 1000
// }
// function romanToInt(str){
//     let integer = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==="I" && str[i+1]==="V"){
//             integer += 4;
//             i++;
//         }else if(str[i]==="I" && str[i+1]==="X"){
//             integer += 9;
//             i++;
//         }else if(str[i]==="X" && str[i+1]==="L"){
//             integer += 40;
//             i++;
//         }else if(str[i]==="X" && str[i+1]==="C"){
//             integer += 90;
//             i++;
//         }else if(str[i]==="C" && str[i+1]==="M"){
//             integer += 400;
//             i++;
//         }else if(str[i]==="C" && str[i]==="D"){
//             integer += 900;
//             i++;
//         }else{
//             integer += romanObj[str[i]]
//         }
//     }
//     return integer;

// }
// console.log(romanToInt("XXCX"))
// console.log(romanToInt("XXCCM"))


// Q. (150);
// function breakWord(str,n){
//     if(str.length%n!==0) return false;
//     let result = []
//     let s = "";
//     let run = (str.length/n)
//     let value = 0;
//     for(let i=0;i<str.length;i++){
//         if(value===run){
//             result.push(s)
//             s = "";
//             value = 0;
//             i--;
//         }else{
//             s += str[i]
//             value++;
//         }
//     }
//     if(s.length==run)
//     result.push(s)
//     return result;
// }
// console.log(breakWord("abcdefghih",5))

// Q. (151);
// find the sum of n numbers
// function sum(n){
//     return n*(n+1)/2
// }
// console.log(sum(3)) // 6


// Q. (152);
// count the digit in a number 
// function count(x){
//     let result = 0;
//     while(x>0){
//         x = Math.floor(x/10)
//         result++
//     }
//     return result;
// }
// console.log(count(45702))


// Q. (153);
// check a given number is palindrome or not
// function checkPal(n){
//     let rev = 0, temp= n;
//     while(temp!==0){
//         let ld = temp%10;
//         rev = rev*10+ld;
//         temp = Math.floor(temp/10)
//     }
//     return (rev===n)

// }
// console.log(checkPal(12521)) // true;
// console.group(checkPal(546)) // false


// Q. (154)
// function fact(n){
//     if(n===0) return 1;
//     return n*fact(--n)
// }
// console.log(fact(4))
// console.log(fact(5))

// count zeros in factorial of n 
// function countzeros(n){
//     let fact = 1;
//     for(let i=2;i<=n;i++){
//         fact *= i;
//     }
//     //console.log(fact)
//     result = 0;
//     while(fact%10==0){
//         result++
//         fact = Math.floor(fact/10)
//     }
//     return result;
// }
// console.log(countzeros(5))
// console.log(countzeros(20))


// Q. (154);
// Spread operator //
// let arr1 = [1.2,3,5];
// let arr2 = [6,7,8,9,10]
// let arr3 = [...arr1, ...arr2]
// arr3.push("pr")
// console.log(arr3)

// let obj = {
//     name:"pr",
//     age:22,
//     add:{
//         vill:"nand",
//         dist:"math"
//     }
// }

// let obj2 =  {...obj}
// console.log(obj2)
// obj.add.house = "home"
// console.log(obj)
// obj2.add.number = 16686;


// Q. (155);
// Set timeout //
// console.log("hi there")
// setTimeout(function(){
//     console.log("it is settimeout")
// },3000)
// console.log("after settime out")
// console.log("afrte set time out")


// Q. (156);
// callback hell
// function getcheej(callback){
//     setTimeout(()=>{
//         const cheese = "🍻"
//         console.log("here is cheese",cheese)
//         callback(cheese)
//     },2000)
// }
// function makedough(cheese, callback){
//     setTimeout(()=>{
//         const dough = cheese + "🍩";
//         console.log("here is dow",dough)
//         callback(dough)
//     },2000)
// }
// function backpizza(dough, callback){
//     setTimeout(()=>{
//         const pizza = dough + "🍕";
//         console.log("here is pizaa",pizza)
//         callback(pizza)
//     },2000)
// }
// getcheej((cheese)=>{
//     makedough(cheese,(dough)=>{
//         backpizza(dough,(pizza)=>{
//             console.log("get my pizza",pizza)
//         })
//     })
// })


// function getEnail(callback){
//     callback(getAge, {email:'acb@gmail.com'})
// }
// function getName(callback,data){
//     const datafinal = {...data,name:"john"};
//     callback(getAddr, datafinal)
// }
// function getAge(callback, data){
//     const datafinal = {...data, age:22}
//     callback(getPhone,datafinal)
// }
// function getAddr(callback, data){
//     const datafinal = {...data,addr:'delhi'}
//     callback(printValue,datafinal)
// }
// function getPhone(callback,data){
//     const datafinal = {...data, phone:"+58585665"}
//     callback(datafinal)
// }
// function printValue(data){
//     console.log(data)
// }
// getEnail(getName)


// Q. (156)
// Promises
// function getEmail(){
//     return new Promise(resolve=> resolve({Email:"abc@gmail.com"}))
// }
// function getName(data){
//     return new Promise(resolve=>resolve({...data,name:'jack'}))
// }
// function getAge(data){
//     return new Promise(resolve=>resolve({...data,age:22}))
// }
// function getAddr(data){
//     return new Promise( resolve=>resolve({...data,addr:"delhi"}))
// }
// function getPhone(data){
//     return new Promise(resolve=>resolve({...data,phone:'+2255226'}))
// }
// function printValue(data){
//     console.log(data)
// }
// getEmail()
//           .then(data=>getName(data))
//           .then(data=>getAge(data))
//           .then(data=>getAddr(data))
//           .then(data=>getPhone(data))
//           .then(data=>printValue(data))


//b.
// const getEmail = () => new Promise(resolve => resolve({ email: 'abc@gmail.com' }))
// const getName = data => new Promise((resolve, reject) => reject({...data, name: 'Jack'}))
// const getAge = data => new Promise(resolve => resolve({...data, age: 12}))
// const getAddr = data => new Promise(resolve => resolve({...data, addr: 'London'}))
// const getPhone = data => new Promise(resolve => resolve({...data, phone: '+44 4473748223'}))
// const printValue = data => console.log(data) // obj
// getEmail()
//     .then(data => getName(data))
//     .then(data => getAge(data))
//     .then(data => getAddr(data))
//     .then(data => getPhone(data))
//     .then(data => printValue(data))
//     .catch(err => console.log(err))


// Q. (157);
// prototype
// function PersonCreater(fname,lname,age){
    //     this.firstName = fname;
    //     this.lastName = lname;
    //     this.age = age;
    // }
    // PersonCreater.prototype.fullname = function(){
    //     return `${this.firstName}  ${this.lastName}`
    // }  
    // let ashu = new PersonCreater("shutosh","chadhary",55) 
    // let pramod  = new  PersonCreater("pramod","mahaur",33)
    // console.log(ashu.fullname(),pramod.fullname())



// Q. (158)
// Promises //a.
// let promise = new Promise(function(resolve,reject){
//     let x = 10;
//     if(x>10){
//         resolve("number is grater than 10")
//     }else {
//         reject("number is less")
//     }
// }) 
// promise.then(function(value){
//     console.log(value)
// }).catch(function(eror){
//     console.log(eror)
// })
    
//b.
// then() is a promise itself
// const promice = new Promise((resolve,resject)=>{
//     resolve("data success")
// })
// promice.then((value)=>{
//     console.log(value)
//     return "next promise"
// }).then((data)=>{
//     console.log(data)
//     return " another next promise"
// }).then((data)=>{
//     console.log(data)
// })

//c.
// practice exercise  13.2// 
// const mypromise = new Promise((resolve)=>{
//     resolve("start counting")
// })
// function counter(value){
//     console.log(value)
// }
// mypromise.then((value)=>{
//     counter(value);
//     return "one"
// }).then((value)=>{
//     counter(value)
//     return "two"
// }).then((value)=>{
//     counter(value);
//     return "three"
// }).then((value)=>{
//     counter(value)
// })

//d.

// function check(val){
//     try {
//         if(isNaN(val)){
//             throw "it is not a number"
//         }else{
//             console.log("get number")
//         }
//     } catch(e){
//         console.error(e)
//     }finally{
//         console.log("done",val)
//     }
// }
// // check(100)
// check("n")


// Q. (158);
// find number in array and return their poition if not fount return -1
// function findvalue(arr,num){
//     for(let i=0;i<arr.length; i++){
//         if (arr[i]==num){
//             return i+1;
//         }
//     }
//     return -1;
// }
    
//   var result =findvalue([2,3,5,6,8,10,20],10);
//   console.log(result)


// Q. (159);
//In this problem, you have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.
// function findsum(arr,value){
//     let pair= [];
//   for(let i = 0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if((arr[i]+arr[j])==value){
//         pair.push(arr[i],arr[j]);
//         return pair;
//       }
//     }
//   }
//    return false;  
// }
// let result = findsum([1,21,3,14,5,60,7,6],81);
// console.log(result);


// Q. (160);
// You need to use the concept of polymophism. You need to create a parent class 'shape' which returns the area. Create different classes circle,rectangle, sqaure and triangle which extend the parent class shape and calculate the area. 

//create  a method allShapes that receives an array of shapes and returns cumulative area value of all passed shapes.
// class  Shape {
//     area(){
//       return 0;
//     }
//   }
//   class Circle extends Shape {
//    constructor(r){
//      super()
//      this.radius = r
//    }
//     area(){
//       return Math.PI*(this.radius**2)
//     }
//   }
//   class Rectangle extends Shape{
//     constructor(len,wid){
//       super()
//       this.length = len;
//       this.width = wid;
//     }
//     area(){
//       return this.length*this.width;
//     }
//   }
//   class Sqaure extends Shape {
//     constructor(a){
//       super()
//       this.side = a;
//     }
//     area(){
//       return this.side*this.side
//     }
//   }
//   class Triangle  extends Shape{
//     constructor(h,b){
//       super()
//       this.heigth = h;
//       this.breath = b;
//     }
//     area(){
//       return (this.heigth*this.breath)/2
//     }
//   }
//   let a = new Circle(5)
//   let b = new Rectangle(2,5)
//   let c = new Sqaure(5)
//   let d = new Triangle(4,5)
//   console.log(a,a.area().toFixed(2))
//   console.log(b,b.area())
//   console.log(c,c.area())
//   console.log(d,d.area())
//   let arr = [a,b,c,d];
//   function allShapes(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//       sum+=arr[i].area()
//     }
//     return sum;
//   }
//   console.log(allShapes(arr).toFixed(2))
  

// Q. (161);
// Find the Prime numbers from the given array and return the array of prime numbers in the console if no prime number in the array return the empty array 
// var arr1 = [4,5,8,6,9,7,12];
// var arr2 = [4,8,6,9,12,3,11,13]
// function checkPrime(item){
//   for(var i =2;i<item; i++){
//     if(item%i==0){
//       return false;
//     }
//   }
//   return true;
// };
// let result = arr1.filter(checkPrime);
// console.log(result);
// console.log(arr2.filter(checkPrime))


// Q. (162);
//Write a Program to find even number in an array using while loop
// const ar = [3,17,12,5,4,1,9,6,4,16];
// let j=0;
// while(j<ar.length){
//   if(ar[j]%2==0){
//     console.log(ar[j]);
//   }
//   j++;
// }


// Q. (163);
//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
// function sum(a,b){
//     var sum=a+b;
//     if(a==b){
//       sum *=3; 
//     }      return sum;
//   }
//    console.log(sum(2,2));
//    console.log(sum(2,3))


// Q. (164);
//create  a custom method just like splice using prototype
// Array.prototype.splice2 = function(position,noOfDeletes,...args){
//     let tempArr = [];
//     let iniialLength = this.length;
//     if((position+noOfDeletes)>= iniialLength){
//       noOfDeletes = iniialLength-position
//     }
//     if(noOfDeletes<0) noOfDeletes=0;
//     for(let i = iniialLength-1;i>(position+noOfDeletes-1);i--){
//       tempArr.unshift(this[i])
//       this.pop()
//     }
//     for(let i =0;i<noOfDeletes;i++){
//       this.pop()
//     }
//     for(let i =0;i<args.length;i++){
//       if(args[i]!=undefined) this.push(args[i])
//     }
//     for(let i=0;i<tempArr.length;i++){
//       if(tempArr[i]!=undefined) this.push(tempArr[i])
//     }
//   }
//   let arr = [0,1,2,3,4,5,6,7,8,9]
//       arr.splice2(2,2)
//   console.log(arr)


// Q. (165);
//Create a function that finds the highest integer in the array using recursion.
// function findHigest(arr,i=0,max=[0]){
//     if(i>=arr.length) return max;
//     if(arr[i]>max){
//       max = arr[i];
//     }
//     return findHigest(arr,++i,max)
//   }
//   console.log(findHigest([-1,100, 3, 5, 6, 99, 12, 2]))
//   console.log(findHigest([0, 12, 4, 87]))
//   console.log(findHigest([6,7,8]))


// Q. (166)
//Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
// let  arr = [1,2,3,5];
// let arr2 = [6,1,2,8,3,4,7,10,5]
// function findmisNum(arr){
//   let small = arr[0];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]<small){
//       small = arr[i]
//     }
//   }
//   let check = small;
//   for(let val of arr){
//     if(arr.includes(check)){
//       check++;
//     }else{
//       return check;
//     }
//   }
// }
// console.log(findmisNum(arr2))


// Q. (167); using the concept of closure
//find the sum of values in an array, but you have to strore previous values also
/*example : sumAll([1,2,3])
          sumAll([2,5,6,1])
          sumAll([4,5,6])
output: [6]
        [6,14]
        [6,14,15] */

        // let arr1 = [1,2,3];
        // let arr2 = [2,5,6,1];
        // let arr3 = [4,5,6]
        // function addAll(){
        //   let result = [];
        //   function sumAll(arr){
        //     let sum =0;
        //     for(let i=0;i<arr.length;i++){
        //       sum+=arr[i]
        //     }
        //     result.push(sum)
        //     console.log(result)
        //   }
        //   return sumAll;
        // }
        
        // let sumFunc = addAll();
        // sumFunc(arr1)
        // sumFunc(arr2)
        // sumFunc(arr3)


// Q. (68);
//Give a string, and replace the every second letter with any other letter which is not present in the String. Assume there are no space.
// function convrt(str){
//     var result="";
//     for(var i=0;i<str.length;i++){
//       if(i%2!==0){
//          result+="Z"
//       }
//       else{
//         result+=str[i];
//       }
//     }
//     return result;
//   };
//   console.log(convrt("javascript"))


// Q. (169);
//create a function to remove vowels from the string
//input: umbrella
//output:mbrlla
// function vowels(str){
//   let s = "";
//   for(let i=0;i<str.length;i++){
//     if(!str[i].match(/[aeoui]/i)){
//     s+= str[i]
//     }
//   }
//   return s;  
// }
// console.log(vowels("umbrellA"))


// Q. (170)
//create a function to add sum of values of an array  with each element
// let arr = [1,2,3,4]
// function addArr(arr){
//   let sum = 0;
//   for(let i=0;i<arr.length;i++){
//     sum += arr[i];
//   } 
//   return arr.map((item)=>{
//     return item+sum;
//   })
// }
// console.log(addArr(arr))


// Q. (171);
//you have to check charcter of string1 is present in string2 or not
// let str1 = "abdc";
// let str2 = "ahjbhjhd";
// function check(s1,s2){
//   for(let i =0;i<s1.length;i++){
//     if(!s2.includes(s1[i])){
//       return false
//     }
//   }
//   return true
// }
//   console.log(check(str1,str2))
