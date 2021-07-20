function getNum(num){
    var inputType= document.getElementById('result');
    inputType.value +=num;
}
function clr()
{
    var inputType= document.getElementById('result');
    inputType.value =""
}
function getFinalResult(){
    var inputType= document.getElementById('result');
inputType.value = eval(inputType.value)
}