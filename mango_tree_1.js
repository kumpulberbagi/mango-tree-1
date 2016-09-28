"use strict"

function getRandomNumber() {
  var random = Math.round((Math.random()+0.5)*8)
  return random
}

class MangoTree {

  // Initialize a new MangoTree
  constructor(property = {}) {
    this._name = property
    this._age = getRandomNumber()
    this._height = property
    this._fruits = getRandomNumber()
    this._harvested = getRandomNumber()
    this._alive = true
  }

  // Get current states here
  set name(value){ this._name = value }
  get name(){ return `This is "${this._name}" Mango Tree` }

  set age(value){ this._age = value }
  get age(){ return `${this._name} have ${this._age} years to alive` }

  set height(value){ this._height = value }
  get height(){ return this._height }

  set fruits(value){ this._fruits = value }
  get fruits(){ return `${this._name} will produce ${this._fruits} fruits` }

  set harvested(value){
  }
  get harvested(){ return this._harvested }

  // Grow the tree
  grow() {
    for(var i=0; i <= this._age; i++){
      console.log(`Year ${i} ${this._name} | fruits produce : ${this._fruits * getRandomNumber()} | fruits harvested : ${this._harvested* getRandomNumber()}`);
    }
  }

  // Produce some mangoes
  produceMangoes() {

  }

  // Get some fruits
  harvest() {
    if(this._harvested > this._fruits){
      console.log(`You cannot harvest more than produced fruits`);
    } else {
      this._harvested = getRandomNumber()
      console.log(`You are harvesting ${this._harvested} fruit`);
    }
  }
}

class Mango {
  // Produce a mango
  constructor() {

  }
}

var mango = new MangoTree("mangga")
console.log(mango.name);
console.log(mango.age);
console.log(mango.fruits);
mango.harvest()
mango.grow()
