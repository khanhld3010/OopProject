let apple = new Apple();
let human1 = new Human("Adam","male","70");
let human2 = new Human("Eva","female","52");

human1.say(`Tao la ${human1.name}`)
human2.say(`Tao la ${human2.name}`)

human1.eat(apple)
console.log(human1.checkApple(apple))
human2.eat(apple)
console.log(human2.checkApple(apple))