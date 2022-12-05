// calculator terminal

let operant = prompt("enter your operation");
let a = Number(prompt("enter your var a "))
let b = Number(prompt("enter your var b "))

if(operant == "+"){
    console.log(a + b);
} else  if(operant == "-"){
    console.log(a - b);
} else if(operant == "*"){
    console.log(a * b);
} else if(operant == "/"){
    console.log(a / b);
} else{
    console.assertlog("sorry not valid ")
}