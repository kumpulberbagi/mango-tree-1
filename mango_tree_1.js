"use strict"
class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = 0
    this._healty = true
    this._harvested = 0
  }
  // Get current states here
  getAge () {
    return this._age +=1
  }
  getHeight(){
    return this._height
  }
  getFruits(){
    return this._fruits
  }
  getHealty(){
    return this._healty
  }
  // Grow the tree
  grow() {
    if(this._age < 20){
      this.produceMangoes()
      console.log(this.getHeight());
      this._age++
    }
    if (this._age == 20){
      this._healty = false
    }

  }
  // Produce some mangoes
  produceMangoes() {
     this._height += getRandomNumber()
      this._fruits += getRandomNumber()
    //  return this._height
  }
  // Get some fruits
  harvest() {
    if(this._fruits > 0){
      this._harvested = this._fruits
    }
    return this._harvested
  }
}
class Mango {
  // Produce a mango
  constructor() {
  }
}
function getRandomNumber() {
  return Math.floor(Math.random()*2)
}

var poon = new MangoTree()
// // console.log(poon.produceMangoes());
// poon.grow()
// poon.harvest()

do {

  poon.grow()
  poon.produceMangoes()
  poon.harvest()
  console.log(`[Year ${poon._age} Report] Height = ${poon._height} | Fruits harvested = ${poon._harvested} | Health Status = ${poon._healty}`)}
while (poon._healty != 0)
console.log(`The tree has met its end. :sad:`)
