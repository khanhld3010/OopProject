function Circle(x,y,radius) {
    this.x =x
    this.y =y
    this.radius = radius
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}
function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random()*80);
    let color = getRandomColor()
    let x = Math.floor(Math.random()*500)
    let y = Math.floor(Math.random()*500)
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}
for (let i = 0; i<30;i++){
    createCircle();
}