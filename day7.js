// let head=document.getElementById("name")
// head.onblur = function(){
//     console.log("blur is execute")
//     alert("blur is execute")
// }

// let a=[1,2,3,4,5,6]
// a.splice(0,2,1,2)
// a.splice(1,0,10)
// console.log(a)
// let b = a.slice(0,3)
// console.log(b)

// let a = ["mango","apple","banana"]
// a.sort()
// console.log(a)

// let a = [3,2,5,7,8,4,9,10]
// a.sort((a,b)=>a-b)
// a.sort((a,b)=>b-a)

// console.log(a)

// let a = [1,2,3,4,5]
// a.map(function(element,index,array){
//     // console.log(element,index,array)
//     console.log(element**2)
// })

// console.log(a)

// a.forEach(function(element,index,array){
//     console.log(element**2)
    
// })
// console.log(a)

// let even = a.filter(function(num){
//     return num % 2 == 0
// })
// console.log(even)


let a = [1,2,3,4,5]
let b = [...a]
console.log(b)