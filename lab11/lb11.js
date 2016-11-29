function smile(){
var coolstuff = new Array();
coolstuff = ["tigers", "laptops", "popcorn", "man", "girl"];

var happystuff = new Array();
happystuff = ["kick", "run", "throw", "swim", "smile"]

var mumberone = Math.floor(Math.random()*4);
var numbertwo = Math.floor(Math.random()*4);
document.getElementById("happy").innerHTML= happystuff[mumberone] + " " +coolstuff[numbertwo];


}
