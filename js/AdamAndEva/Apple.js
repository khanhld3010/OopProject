function Apple(){
    this.weight = 10;


    this.decreaseWeight = function (){
        this.weight -= 1;
    }
    this.isEmpty = function (){
        return this.weight === 0;
    }
    this.getWeight = function (){
        return this.weight;
    }
}