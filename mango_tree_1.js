"use strict"

class MangoTree {
  
  // Initialize a new MangoTree
  constructor(umur, tinggi, kapasitas, jumlah, status) { // pakasi "=" di laptop saya error
    this.umur = 0;
    this.tinggi = 0;
    this.kapasitas = 0;
    this.jumlah = 0;
    this.status = true;
    this.batas = 100;
  }

  // Get current states here

  getAge() {
    return this.umur;
  }

  getHeight() {
    return this.tinggi;
  }

  getFruits() {
    return this.jumlah;
  }

  getHealthStatus() {
    return this.status;
  }

  // Grow the tree
  grow() {
    this.umur = this.umur + 1;
    if(this.tinggi < this.batas) {
      this.tinggi = this.tinggi + getRandomNumber();
    }
    else {
      this.tinggi = this.tinggi;
    }



    console.log("umur: " + this.umur + " tinggi: " + this.tinggi + " harverst: " + this.kapasitas);
    this.harvest();


    return this;
  }

  // Produce some mangoes
  produceMangoes() {

    if(this.tinggi < this.batas) {
      this.kapasitas = this.kapasitas + getRandomNumber();

    }
    else {
      this.kapasitas = this.kapasitas;
    }
  }

  // Get some fruits
  harvest() {
    this.jumlah = getRandomNumber();
    if(this.kapasitas > 0) {
      if(this.umur < 2) {
        if(this.kapasitas > this.jumlah) {
          this.kapasitas = this.kapasitas - this.jumlah;
        }
      }
      else {
        this.kapasitas = this.kapasitas - this.jumlah;
        if(this.kapasitas<0) {
          this.kapasitas = 0;
        }
      }
    }
    else if(this.kapasitas <= 0 && this.umur > 1) {
      this.status = false;
    }
  }
}

class Mango {
  // Produce a mango
  constructor(kualitas) {
    this.kualitas = kualitas;
  }
}

function getRandomNumber() {
  return Math.round((Math.random() * 10) + 1);
}


var tree = new  MangoTree();
console.log("The tree is alive");

do {
  tree.grow();
  tree.produceMangoes();

}while (tree.status != false);

console.log("The tree dead");

