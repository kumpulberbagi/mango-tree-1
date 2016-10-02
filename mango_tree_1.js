"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = 0;
    this._harvested = 0;
    this._healty = true;
  }


  set age(value) {
    this._age += value;
  }

  set height(value) {
    this._height += getRandomNumber() * 3;
  }

  set fruits(value) {
    this._fruits += getRandomNumber() * 3;
  }

  set harvested(value) {
    this._harvested += Math.floor(getRandomNumber() * 3);
  }
  // Get current states here
  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healty() {
    return this._healty;
  }


  // Grow the tree
  grow() {
    this._age += 1;
    this.harvest();
    this.produceMangoes();
    if (this._age < 20) {
      this._fruits += this._harvest;
      this._height += Math.floor(getRandomNumber()*10)
    } else {
      this._healty = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits += getRandomNumber() * 5;
  }

  // Get some fruits
  harvest() {
    this.harvested += this._fruits;
  }
}

class Mango {
  // Produce a mango
  constructor() {

  }
}

function getRandomNumber() {
  return Math.random() * 0.5
}

var tree = new MangoTree();
console.log("The tree is alive! :)");
do {
  tree.grow()
  tree.produceMangoes();

  console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`);
} while (tree._healty !== false);

console.log("The tree has met its end. :'(");
