// var input = document.getElementById('inp')
// console.log(input)

// function getnum(num){
//     console.log('number', num)
//     input.value += num
// }

// function allClear(){
//     input.value = ""
// }

// function calc(){
   
//     const validExpression = /^[\d+\-*/.]+$/;
            
//     if (validExpression.test(input.value)) {
        
//        var value = input.value 
//        input= eval(value)
//     } else {
       
//         input.value = "Error";
// }}


var input = document.getElementById('inp')
console.log(input)

function setANumber(num){
    console.log('number', num)
    input.value += num
}

function allClear(){
    input.value = ""
}

function deleteLast() {
    const display = document.getElementById("inp");
    display.value = display.value.slice(0, -1) || "0";
}

function calc(){
    console.log(input.value)
    var output = eval(input.value)
    console.log(output)
    input.value = output
}


function del() {
    var inputvalue = input.value;
    let newStr = inputvalue.slice(0, -1);
    input.value = newStr;
}