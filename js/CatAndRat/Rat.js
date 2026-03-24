function Rat(name,weight,speed,status){
    this.name = name;
    this.weight = weight
    this.speed = speed
    this.status = status

    this.say = function() {
        console.log(`${this.name} chít chít`)
    }


}