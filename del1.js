function nagaRaju(){
  var date = new Date();
 
 var h = date.getHours();
 var m = date.getMinutes();
 var s = date.getSeconds();

 var session = "Am";
 if(h==0){
     h = 12;
 }
 if(h>12){
     h = h-12; // 1
     session = "pm"; // 1pm
 }
 if(h<10){
     h = "0"+h;
 }
 if(m<10){
     m = "0"+m;
 }
 if(s<10){
     s = "0"+s;
 }




 document.getElementById("MyClock").innerHTML = h + ":" + m + ":" + s;
 setTimeout(nagaRaju, 1000)
}
nagaRaju()