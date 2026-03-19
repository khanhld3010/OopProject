var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//vẽ đường thẳng
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
//vẽ hình tròn
ctx2.beginPath();
ctx2.arc(95,50,40,0,2*Math.PI);
ctx2.stroke();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
//viết chữ
ctx3.font = "30px Arial";
ctx3.fillText("Hello World",10,50);
//tùy chọn
//ctx3.strokeText("Hello World",10,50);

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
// Create gradient
var grd = ctx4.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx4.fillStyle = grd;
ctx4.fillRect(10,10,150,80);


var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");

// Create gradient
var grd1 = ctx5.createRadialGradient(75,50,5,90,60,100);
grd1.addColorStop(0,"red");
grd1.addColorStop(1,"white");

// Fill with gradient
ctx5.fillStyle = grd1;
ctx5.fillRect(10,10,150,80);