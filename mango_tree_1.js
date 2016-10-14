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
      mango.harvest()
      this._height += Math.round(getRandomNumber())
    } else {
      this._healthyStatus = false;
    }
  }
}

class Mango {
  // Produce a mango
  // Produce some mangoes
  produceMangoes() {
    tree._fruits += getRandomNumber() * 10;
  }

  // Get some fruits
  harvest() {
    tree._harvestedFruits = 0;
    tree._harvestedFruits += (tree._fruits - (getRandomNumber()*(tree._fruits/10)));
  }
}

function getRandomNumber() {
  return Math.round(Math.random());
}

var mango = new Mango();
var tree = new MangoTree();
console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  mango.produceMangoes();

  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvestedFruits}`);
} while (tree._healthyStatus != false);

console.log("The tree has met its end. :'(");
