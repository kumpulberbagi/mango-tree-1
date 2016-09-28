"use strict"

function getRandomNumber() {
  var random = Math.round((Math.random())*8)
  return random
}

class MangoTree {

  // Initialize a new MangoTree
  constructor(property = {}) {
    this._name = property
    this._maxAge = getRandomNumber()
    this._age = 0
    this._height = getRandomNumber()
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
    this._age += 1
    while(!this._height){
      this._height = this._height + Math.round((Math.random())*6)/10
    }
    if (this._age >= this._maxAge){
      this._alive = false
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
  constructor(property) {
    this._mango = property
  }
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`);

do{
  tree.grow()
  tree.produceMangoes()

  console.log(`[Year ${tree._age} Report] Height = ${tree._height += getRandomNumber()} m | Fruits harvested = ${tree._harvested + getRandomNumber()}`);
} while (tree._alive != false)

console.log(`The tree has met its end. :sad:`);
