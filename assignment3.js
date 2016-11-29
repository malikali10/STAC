var numberone;
var numbertwo;
var numarray= ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twentyone", "twentytwo", "twentythree", "twentyfour", "twentyfive"];
function calculator(){
  numberone =document.getElementById('num1').value;
  numbertwo =document.getElementById('num2').value;
if (numberone =="one"){
  numberone=1;
}
if (numberone =="two"){
  numberone=2;
}

if (numberone =="three"){
  numberone=3;
}
if (numberone =="four"){
  numberone=4
}
if (numberone =="five"){
  numberone=5;
}

if (numbertwo =="one"){
  numbertwo=1;
}
if (numbertwo =="two"){
  numbertwo=2;
}

if (numbertwo =="three"){
  numbertwo=3;
}
if (numbertwo =="four"){
  numbertwo=4
}
if (numbertwo =="five"){
  numbertwo=5;
}
}
function add(){
  calculator();
  console.log(numberone);
  var total=numberone+numbertwo;
  document.getElementById('output').innerHTML=numarray[total];
}
function subtract(){
  var total=numberone-numbertwo;
  document.getElementById('output').innerHTML=numarray[total];
}

function multiply(){
  var total=numberone*numbertwo;
  document.getElementById('output').innerHTML=numarray[total];
}

function divide(){
  var total=numberone/numbertwo;
  document.getElementById('output').innerHTML=numarray[total];
}
