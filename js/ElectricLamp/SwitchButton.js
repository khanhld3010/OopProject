function SwitchButton() {
    this.status = true;
    this.electricLamp = null

    this.connectToLamp = function (lamp){
        this.electricLamp = lamp;
    }
    this.switchOff = function (){
        console.log("Bạn vừa tắt đèn")
        this.electricLamp.turnOffElectricLamp();

    }
    this.switchOn = function (){
        console.log("Ban vừa bật đèn")
        this.electricLamp.turnOnElectricLamp();
    }

}