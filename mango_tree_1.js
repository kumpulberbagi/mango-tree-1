"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(age = 0, height = 0.6, fruits = 0, health = true) {
    this._age = age
    this._height = height
    this._fruits = fruits
    this._health = health
  }

  getAge(){
    return this._age
  }

  getHeight(){
    return this._height
  }

  getFruits(){
    return this._fruits
  }

  getHealth(){
    return this._health
  }

  grow() {
    this._age = this._age + 1
    while(this._height < 4.5){
      this._height = this._height + (Math.floor(Math.random() * 6) / 10)
    }
    if(this._age = 20){
      this._health = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    while (this._health = true)
    this._fruits = Math.floor((Math.random() * 12))
  }

  // Get some fruits
  harvest() {
    var temp = this._fruits
    this._fruits = 0
    return temp
  }
}

class Mango {
  // Produce a mango
  constructor(fruit) {
    this._fruit = fruit
  }
}



var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do{
  tree.grow()
  tree.produceMangoes()

  console.log(`[Year ${tree._age} Report] Height = ${tree._height} m | Fruits harvested = ${tree._harvested}`)

}while (tree._health != false)

console.log(`The tree has met its end. :sad:`)
