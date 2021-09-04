/*
var a=parseInt(prompt("Enter a number "))
var b=parseInt(prompt("Enter another number "))

if(a>b){
    alert(a+ " is greater than "+b)
}
else if(b>a){
    alert(b+" is greater than "+a)
}
else{
    alert("both are same")
}
*/
var grade=parseInt(prompt("Enter your marks"))

if(grade<100 && grade>=90){
    alert("your grade is A")
}
else if(grade<90 && grade>=80){
    alert("your grade is B")
}
else if(grade<80 && grade>=70){
    alert("your grade is C")
}
else if(grade<70 && grade>=60){
    alert("your grade is D")
}
else if(grade<60 && grade>=51){
    alert("your grade is E")
}
else if(grade<51){
    alert("You are fail")
}
else{
    alert("Enter correct marks")
}