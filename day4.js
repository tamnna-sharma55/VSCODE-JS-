//ARITHMETIC OPERATOR
// a=5
// b=4
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)

// sum =0
// sum+=3 //sum=sum+3
// sum -=3
// sum*=3
// console.log(sum)

//COMPARISON OPERATOR
// console.log(5=="5")
// console.log(5==="5")
// console.log(5 != "5")
// console.log(5 !== "5")
// console.log(5>5)
// console.log(5>=5)
// console.log(5<5)
// console.log(5<=5)

//check the type of any variable
// let a=10;
// let b="number"
// let c=true
// let d=null
// let e;

// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))
// console.log(typeof(e))

//LOGICAL OPERATOR
// console.log(true&&true)
// console.log(false&&true)
// console.log(false&&false)

// console.log(10&&12)
// console.log(0&&56)
// console.log(-1&&44)

// console.log(true || true)
// console.log(false || true)
// console.log(false || false)

// console.log(!true)
// console.log(!false)

// const a=10;
// if(!!a){
//     console.log("a is true")
// }
// else{
//     console.log("a is false")
// }


//EVENT
// let button = document.getElementById("button")
// button.onclick = function(){
//     alert("using javascript property")

// }

// button.addEventListener("click",function(event){
//     console.log("javascript")
//     console.log(event.target)
//     console.log(event.type)
//     console.log(event.key)
// })

// const input=document.getElementById("input")
// input.addEventListener("keydown",function(event){
//     console.log(event.target)
//     console.log(event.type)
//     console.log(event.key)
//     console.log(input.value)
// })

// button.addEventListener("click",pressButton)
// // const pressButton =function
// function pressButton(){
//     alert("javascript")
// }

// const cont=document.getElementById("container")
// cont.addEventListener("mouseover",function(){
// cont.addEventListener("mousedown",function(){
// cont.addEventListener("mouseenter",function(){
// cont.addEventListener("mousemove",function(){
// cont.addEventListener("mouseup",function(){
    
    // cont.style.backgroundColor="red"
// })

const btn= document.getElementById("btn")
const ctn= document.getElementById("ctn")
btn.addEventListener("click",function(event){
    alert("button is clicked")
    event.stopPropagation()
})

ctn.addEventListener("click",function(){
    alert("container is clicked")
})