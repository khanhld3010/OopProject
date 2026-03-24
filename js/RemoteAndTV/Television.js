function Television(channel,volume){
    this.channel = channel;
    this.volume = volume;
    this.status = false;

    this.changeChannel = function (number){
        if (this.status === false){
            console.log("Tv dang tat")
            return
        }
        this.channel = number;
        console.log(`Kenh hien tai la ${this.channel}!`);
    }
    this.changeVolume = function (number){
        if (this.status === false){
            console.log("Tv dang tat")
            return
        }
        this.volume += number;
        console.log(`Am luong hien tai la ${this.volume}`);
    }
    this.turnOff = function(){
        this.status = false;
    }
    this.turnOn = function(){
        this.status = true;
    };
}