//here create the variable with the help of var.
// var a=10;
// var a=20; //var can redeclare and reassign the value.
// console.log(a)

//here create the variable with the help of let.
// let a=10;
// // let a=20; //let can reassign the value not redeclare the value.
// a=30;
// console.log(a)

//here create the variable with the help of const.
// const a=20; //const can't redeclare and reassign the value
// console.log(a) 


//function declaration(hoisting)
// let xyz = abc(2,4)
// console.log(xyz)

// function abc(a,b){
//     return a+b
// }

// let xyz=abc(2,4)
// console.log(xyz)

//function expression(hoisting)
// const xyz = abc(8,4)
// console.log(xyz)

// const abc = function(a,b){
//     return a+b
// }

// const xyz = abc(8,4)
// console.log(xyz)

//arrow function(hoisting)
// const abc=() =>{
//     return a+b
// }

// const xyz =abc(10,20)
// console.log(xyz)

//hoisting in variables(var)
// console.log(a)
// var a=10;
// console.log(a)

//hoisting in variables(let)
// console.log(a)
// let a=10;

//hoisting in variables(const)
// console.log(a)
// const a=10;

// var a=10;
// function abc(){
//     var a=20;
//     console.log(a)
// }
// console.log(a)
// abc()

//var
// var a=10;
// if(a==10){
//     var b=20;
//     console.log(b)
// }
// console.log(b)
// console.log(a)

//let
// let a=10;
// function abc(){
//     // let a=10;
//     console.log(a)
// }
// abc()
// console.log(a)

// let a=10;

// if(a==10){
//     let b=20;
//     console.log(b)
// }
// console.log(b)

//const
// function abc(){
//     const a=10;
//     console.log(a)
// }
// abc()
// console.log(a)

const a=10;
if(a==10){
    const b = 20;
    console.log(b)
}
console.log(b)