// "use strict"

var randomNumber = function () {
  var random = Math.round((Math.random())*2)+1
  return random
}
class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._produceMangoes = randomNumber()*10
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._harvested = 0
    this._alive = true
    this._maxAge = randomNumber()*30

  }

  // Get current states here

  set age(value){
    this._age = value
  }
  get age(){
    return this._age
  }

  set height(value){
    this._height = value
  }

  get height(){
     return this._height
   }

  set fruits(value){
     this._fruits = value
   }

  get fruits(){
     return this._fruits
   }

  set harvested(value){
    this._harvested = value
  }
  get harvested(){
    return this._harvested
  }

  // Grow the tree
  grow() {
    this._age += 1
      this._height += Math.round((Math.random())*6)/10
    if (this._age >= this._maxAge){
      return this._alive = false
    }return grow()
  }
  // Produce some mangoes
  produceMangoes() {
    var produce = new Mango(3)
    var x = produce.produceMango()
    return x
  }

  // Get some fruits
  harvest() {
    while (this._harvested <= this._age && this._harvested >= 0) {
      this.harvested +=1
    }
}

class Mango {
  // Produce a mango
  constructor(value) {
    this._produce = value
  }
  produceMango(){
    return this._produce
  }
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`);

do{
  tree.grow()
  tree.produceMangoes()
  console.log(`[Year ${tree._age} Report] Height = ${tree._height += getRandomNumber()} m | Fruits harvested = ${tree._harvested + getRandomNumber()} | produceMangoes = ${tree.produceMangoes}`);
} while (tree._alive != false)
