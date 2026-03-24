
function Human(name,gender,weight){
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.say = function(str){
        console.log(str)
    }
    this.eat = function(apple){
        if(apple.weight > 0){
            apple.weight -=1;
            this.weight +=1;
            console.log(`${this.name} vừa ăn một miếng táo`);
        }
    }
    this.checkApple = function(apple){
        if (apple.weight > 0){
            return `${this.name} kiểm tra Quả táo còn lại ${apple.weight} miếng`
        }else {
            return "${this.name} kiểm tra Quả táo không thể ăn được nữa"
        }
    }
    this.getName = function(){
        return this.name;
    }
    this.setName = function(name){
        this.name = name;
    }
    this.getGender = function(){
        return this.gender;
    }
    this.setGender = function(gender){
        this.gender = gender;
    }
    this.getWeight = function(){
        return this.weight;
    }
    this.setWeight = function(weight){
        this.weight = weight;
    }
}