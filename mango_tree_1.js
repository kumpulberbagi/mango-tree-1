"use strict"

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0.0
    this._fruits = []
    this._healthyStatus = true
    this._harvested = 0
  }

  // Get current states here
  getAge(){
    return this._age
  }

  getHeight(){
    return this._height.toFixed(1)
  }

  getFruits(){
    return this._fruits
  }

  getHealtyhyStatus(){
    return this._healthyStatus
  }

  // Grow the tree
  grow() {
    this._age += 1

    if(this._age <= 10){
      this._height += getRandomNumber()+1 / 10
    }

    if(this._age === 20){
      this._healthyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    for(var i = 0 ; i < getRandomNumber(); i++){
      this._fruits.push(new Mango())
    }
    return this._fruits
  }

  // Get some fruits
  harvest() {
    this._harvested = this._fruits.length
    this._fruits = []
    return this._harvested
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this._fruitQuality =  getRandomNumber()
  }
}

function getRandomNumber() {
  //untuk variabel pertumbuhan, jumlah buah, dll
  return Math.floor(Math.random()*10)
}

var tree = new MangoTree()
console.log("This Tree is alive !");

do{
  tree.grow()
  tree.produceMangoes()
  console.log("[Year " + tree.getAge() + " Report] Height = "
   + tree.getHeight() + "| Fruits Harvested = " + tree.harvest())
 console.log("\n=====================================================\n")
}while(tree.getHealtyhyStatus() != false)
