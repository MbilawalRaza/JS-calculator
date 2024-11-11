


var input = document.getElementById('inp')
console.log(input)

function getnum(num){
    console.log('number', num)
    input.value += num
    console.log('cklick')
}

function Ac(){
    input.value = ""
}


function calculate(){
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