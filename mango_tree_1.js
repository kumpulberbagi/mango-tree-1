"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.fruits = 0
    this.panen = Math.floor(this.fruits*0.5)
  }
  // Get current states here

    getAge(){
      return this.age
    }
    getHeight(){
      return this.height
    }
    getFruits(){
      return this.fruits
    }

  // Grow the tree
  grow() {
    this.age = this.age +1
    if (this.age<20){
      this.height = this.height + Math.floor(Math.random()*10)
    }
    this.produceMangoes()
    this.harvest()
  }

  // Produce some mangoes
  produceMangoes() {
    this.fruits = this.fruits + Math.floor(Math.random()*20)
  }

  // Get some fruits
  harvest() {
    this.panen = Math.floor(this.fruits *0.5)
    this.fruits = this.fruits - this.panen
  }
}


let tree = new MangoTree()
console.log("The tree is alive! :smile:");
for (let i=0;i<=20;i++){
  console.log("Year ",i," report. Umur pohon: ", tree.age, ". Tinggi pohon: ", tree.height, "Jumlah buah: ",tree.fruits, "Jumlah di panen: ", tree.panen)
  tree.grow()
}
console.log("The tree has met its end.. :sad:");
