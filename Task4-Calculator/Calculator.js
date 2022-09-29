var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
// var operand1 = 0;
// var operand2 = null;
// var operator = null;

for(var i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        if(value == '+'){
            display.innerText += value;

        } else if(value == '-'){
            display.innerText += value;

        } else if(value == '/'){
            display.innerText += value;

        } else if(value == '*'){
            display.innerText += value;

        } else if(value == 'A/C'){
            display.innerText = '';

        } else if(value == '&larr'){
            display.innerText = display.innerText.slice(0, -1);

        } else if(value == "="){
            try{
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error!!'
            }

        } else{
            display.innerText += value;
        }
    });
}