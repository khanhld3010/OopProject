function ElectricLamp() {
    this.status = false;

    this.turnOnElectricLamp = function (){
        this.status = true;
        console.log("Đèn đã được bật")
    }
    this.turnOffElectricLamp = function (){
        this.status = false;
        console.log("Đèn đã được tắt")
    }
}