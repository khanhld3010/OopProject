function Temperature(celsius){
    this.celsius = celsius;

    //F = (°C × 1.8) + 32
    this.Fahrenheil = function (){
        return this.celsius * 1.8 + 32;
    }

    //K = °C + 273.15
    this.Kelvin = function (){
        return this.celsius + 273.15;
    }
}

let temp = new Temperature(25);
document.write(`Fahrenheil = ${temp.Fahrenheil()} \nKelvin = ${temp.Kelvin()}`)