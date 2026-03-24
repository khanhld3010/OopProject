function Cat(name,weight,maxSpeed){
    this.name = name
    this.weight = weight
    this.maxSpeed = maxSpeed

    this.say = function() {
        console.log(`${this.name} Meo Meo`)
    }
    this.catchRat = function(rat){
        if (this.maxSpeed <= rat.speed){
            console.log(`${this.name} khong bat duoc ${rat.name}`)
        }else {
            console.log(`${this.name} da bat duoc ${rat.name}`)
        }
    }
    this.eatRat = function(rat){
        if(rat.status === true){
            console.log(`${this.name} an chuot ${rat.name}`)
            this.weight += rat.weight
            console.log(`Can nang hien tai cua meo la ${this.weight}`)
        }else{
            console.log(`${this.name} khong an chuot ${rat.name} vi da chet`)
        }
    }


}