"use strict"

const celsiusinputinput = document.getElementById("celsiusinput");
const convertBtn = document.getElementById("convertBtn");
const fahrenheitoutputoutput = document.getElementById("fahrenheitoutput")

window.onload = init;

function init(){
  
  convertBtn.onclick = onconvertBtnClicked;
  }

function onconvertBtnClicked(){
  
  //get the values I know
  let celsius =Number("celsiusinput.value");
 

  //to convert fahrenheit to celsius
 let fahrenheit = 5/9(celsius + 32);
    //display the result.
     fahrenheitoutput.value= fahrenheit;
  }