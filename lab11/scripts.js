function getvalue(){

var value=document.getElementById("smile").value;
console.log(value);

for (i=0;i<=value;i++){
    console.log(i);
    document.getElementById("happy").innerHTML += i+ "<br />";
  }
}
