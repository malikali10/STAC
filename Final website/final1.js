function renderTime(){
  var mydate = new Date();
  var year = mydate.getyear();
  if(year <1000){
    year +=1900
  }
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate
  var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday")
  var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"


var currenTime = new Date();
var h = currenTime.getHours();
var m = currentTime.getminutes();
var s = currentTime.getseconds();
if(h == 24){
  h = 0;
} else if(h > 12){
  h = h - 0;
}
}
