"use strict"


const fahrenheitinput = document.getElementById("fahrenheitinput");
const convertBtn = document.getElementById("convertBtn");
const celsiusoutput = document.getElementById("celsiusoutput")

window.onload = init;

function init(){
  
  convertBtn.onclick = onconvertBtnClicked;
  }

function onconvertBtnClicked(){
  
  //get the values I know
  let fahrenheit =Number("fahrenheitinput.value");
 

  //to convert fahrenheit to celsius
 let celsius = (fahrenheit - 32)* (5/9);
    //display the result.
     celsiusoutput.value= celsius;
}