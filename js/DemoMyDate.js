let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function (){
        return this.day;
    }
    this.getMonth = function (){
        return this.month;
    }
    this.getYear = function (){
        return this.year;
    }
    this.setDay = function (day){
        this.day = day;
    }
    this.setMonth = function (month){
        this.month = month;
    }
    this.setYear = function (year){
        this.year = year;
    }

    this.setDate = function (dd,mm,yy){
        this.day = dd;
        this.month = mm;
        this.year = yy;
    }

    this.toString = function (){
        return this.day + "/" + this.month + "/" + this.year;
    }
}


let date = new MyDate(2, 2, 2007);

date.setDay(date.getDay()+1);
date.setMonth(date.getMonth()-1);
date.setYear(date.getYear()+3);

date.setDate(19, 3,2026)
alert(date.toString())


let day = date.getDay(); // 2

let month = date.getMonth(); // 2

let year = date.getYear(); // 2007




//alert(day + "/" + month + "/" + year);