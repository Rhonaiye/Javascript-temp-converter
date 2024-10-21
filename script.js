const firstSelect = document.getElementById('slct1')
const secondSelect = document.getElementById('slct2')
const input = document.getElementById('input')
const btn = document.getElementById('Changebtn')
const answerTxt = document.getElementById('answer-text')


btn.onclick = function(){
    
    if(firstSelect.value == 'Fahrenheit' && secondSelect.value == 'Celsius'){
        console.log('its is Fahrenheit and Celsius')

        const Fahinput = input.value
        let answer = (Fahinput - 32) * 5/9
        let limitedDec = answer.toFixed(2)
        
        answerTxt.textContent = `°${limitedDec}C`
    }
    

    if(firstSelect.value == 'Celsius' && secondSelect.value == 'Fahrenheit'){

        const Celinput = input.value
        let answer = (9/5 * Celinput ) + 32
        let limitedDec = answer.toFixed(2)
        
        answerTxt.textContent = `°${limitedDec}F`
    }

    if(input.value == ''){
        answerTxt.textContent = 'Input a number'
    }

    if(firstSelect.value == secondSelect.value){
        answerTxt.textContent = `Please select different units ${firstSelect.value} to ${secondSelect.value} does not require a conversion`
    }

}






