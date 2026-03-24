/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }

  this.moveDown = function(){
      this.top += this.speed;
  }
  this.moveUp = function(){
      this.top -= this.speed;
  }
  this.moveLeft = function(){
      this.left -= this.speed;
  }
    // this.moveLeft = function(){
    //     this.left += 20;
    //     console.log('ok: ' + this.left);
    // }

}

var hero = new Hero('image/pikachu.png', 20, 30, 200 ,100);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
    hero.moveDown();
      hero.moveUp();
      hero.moveLeft();
  }else {

  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();