let Circle = function (radius){
    this.radius = radius;
    this.getRadius = function (){
        return this.radius;
    }
    this.setRadius = function (radius){
        this.radius = radius;
    }
    this.getArea = function (){
        return Math.PI * this.radius * this.radius;
    }
    this.getPerimeter = function (){
        return 2 * Math.PI * this.radius;
    }
}

let hinhtron = new Circle(3);
console.log(hinhtron.getRadius());
console.log(hinhtron.getArea());
console.log(hinhtron.getPerimeter());