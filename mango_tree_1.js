'use strict'
class MangoTree {
  constructor(age,height,fruits,harvestedFruit,isHealthy) {
    this._age = age || 0
    this._height = height || 0.8
    this._fruits = fruits || 0
    this._harvestedFruit = harvestedFruit || 0
    this._isHealthy = isHealthy || false
  }
  // Get current states here
  getAge(){
    return this._age += 1;
  }

  getHeight(){
    if(this._age % 2 == 0)
    {
      return this._height += getRandomNumber()
    }
    else{
      return this._height;
    }
  }
  getFruits(){
    return this._fruits;
  }

  getHealtyStatus(){
    if(this._age > 20)
    {
      return false;
    }else if(this._age < 20){
      return true;
    }
  }

  // Grow the tree
  grow() {
    this._age = this.getAge()
    this._height = this.getHeight()
    this._isHealthy = this.getHealtyStatus()
    this.produceMangoes()
    this.harvest()
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits += getRandomNumber();
  }

  // Get some fruits
  harvest() {
    this._harvestedFruit = Math.floor(Math.random()*5)+1;
    this._fruits -= this._harvestedFruit;
  }
}

class Mango {
  // Produce a mango
  constructor() {
    var tree = new MangoTree();
    console.log("The tree is alive! :smile:");

    do {
      tree.grow();
      console.log(`[Year ${tree._age} Report] Height = ${tree._height} m | Fruits harvested = ${tree._harvestedFruit}`);
    } while (tree._isHealthy);
    console.log("The tree has met its end. :sad:");
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

var mango = new Mango();
