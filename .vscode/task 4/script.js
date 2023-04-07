
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function bool(a,b){
    if(a != b){
        return "a and b are not same";
    }
    else {
        return "a and b are same";
    }
}
function Name() {
    return "Bhabesh";
}
function array(a,b){
    return [a,b];
}
const Add= add(35,15);
const Subtract= subtract(35,15);
const Bool= bool(5,10);
const MyName= Name();
const Array= array(5,15);


console.log(Add);
console.log(Subtract);
console.log(Bool);
console.log(MyName);
console.log(Array);
