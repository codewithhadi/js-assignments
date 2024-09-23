let first = Number(prompt())
let sign1 = prompt("enter the sign like +, -, * and /") 
let second = Number(prompt())


let plus = "+"
let minus = "-"
let multiply = "*"
let divide = "/"

if(sign1 = plus){
    alert(first+second)
}
else if(sign1 = minus){
    alert(first-second)
}
else if(sign1 = multiply){
    alert(first*second)
}
else{
    alert(first/second)
}