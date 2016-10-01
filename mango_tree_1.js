"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._totalPicked = 0
    this._healthyStatus = true
    this._fruitsCollection = 0
    this._harvested = 0
    this._lastFruits = 0;
  }

  // Get current states here

  get age(){
    return this._age
  }

  get height(){
    return this._height.toFixed(1)
  }

  get fruitsCollection(){
    return this._fruitsCollection
  }

  get healtyhyStatus(){
    return this._healthyStatus
  }

  get harvested(){
    return this._harvested
  }

  get lastFruits(){
    return this._lastFruits
  }
  // Grow the tree
  grow() {
    this._age += 1
    this._height += Math.floor(getRandomNumber()*10)+1 / 10
    this.produceMangoes()
    this.harvest()

    this._lastFruits = this._fruitsCollection - this._harvested

    //this._fruitsCollection -= this._harvested

    if(this._lastFruits === 0){
      this._healthyStatus = false
    }else{
      this._healthyStatus = true
    }
  }

  // Produce some mangoes
  produceMangoes() {
      this._fruitsCollection = this.lastFruits + Math.floor(getRandomNumber()*10)
  }

  // Get some fruits
  harvest() {
    this._harvested = Math.floor(getRandomNumber()*this._fruitsCollection+1)
  }
}

class Mango {
  // Produce a mango
  constructor(fruitQuality) {
    this._fruitQuality = fruitQuality
  }
}

function getRandomNumber() {
  //untuk variabel pertumbuhan, jumlah buah, dll
  return Math.random()
}

var tree = new MangoTree()
console.log("This Tree is alive !");
// console.log(getRandomNumber());
// console.log(tree.harvest());
// console.log(tree.fruitsCollection);
// console.log(tree.fruitsCollection);
// console.log(tree.fruitsCollection);
// console.log(tree.fruitsCollection);
//var a = 0
do{
  tree.grow()
  //tree.produceMangoes()
  //a++
  console.log("[Year " + tree._age + " Report] Height = "
   + tree.height + "| \nFruits Harvested = " + tree.harvested +
   " Fruits Collection = " + tree.fruitsCollection +
 " Last Counted Fruits = " + tree.lastFruits)
 console.log("\n=====================================================\n")
}while(tree.healtyhyStatus != false)
