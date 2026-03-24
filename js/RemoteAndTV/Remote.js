function Remote(code){
    this.code = code;
    this.television = null

    this.connectToTv = function (television){
        this.television = television;
    }
    this.changeChannelButton = function(number){
        this.television.changeChannel(number);
    }
    this.changeVolumeButton = function(number){
        this.television.changeVolume(number);
    }
    this.turnOff = function(){
        this.television.turnOff();
    }
    this.turnOn = function(){
        this.television.turnOn();
    }

}