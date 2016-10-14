"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, height, fruits, harvestedFruits, healthyStatus) {
    this._age = age || 0;
    this._height = height || 0;
    this._fruits = fruits || 0;
    this._harvestedFruits = harvestedFruits || 0;
    this._healthyStatus = true;
  }

  // Grow the tree
  grow() {
    this._age += 1;
    if (this._age < 25) {
      this.harvest()
      this._height += Math.round(getRandomNumber())
    } else {
      this._healthyStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits += getRandomNumber() * 10;
  }

  // Get some fruits
  harvest() {
    this._harvestedFruits = 0;
    this._harvestedFruits += (this._fruits - (getRandomNumber()*(this._fruits/10)));
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

function getRandomNumber() {
  return Math.round(Math.random());
}

var tree = new MangoTree();
console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceMangoes();

  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvestedFruits}`);
} while (tree._healthyStatus != false);

console.log("The tree has met its end. :'(");
