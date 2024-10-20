const display = document.getElementById('display')


function appendtoDisplay(input){
    display.value += input
}


function clearDisplay(){
    display.value = ''
}

function Calculate(){
    let answer = eval(display.value)
    display.value = answer
}






