"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(umur=0, tinggi=0.8, kapasitas=0, buah=0, sehat=true) {
    this._umur = umur;
    this._tinggi = tinggi;
    this._kapasitas = kapasitas;
    this._buah = buah;
    this._sehat = sehat;
  }

  // Get current states here
  get getUmur(){
    return this._umur
  }
  get getTinggi(){
    return this._tinggi
  }
  get getKapasitas(){
    return this._kapasitas
  }
  get getBuah(){
    return this._buah
  }
  get getSehat(){
    return this._sehat
  }
  // Grow the tree
  grow() {
    this._umur = this._umur + 1
    if (this._tinggi < 50){
      this._tinggi = this.tinggi + getRandomNumber()
      this._sehat = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this._tinggi > 5){
      this._kapasitas = this._kapasitas + (getRandomNumber()*2)
    }
  }

  // Get some fruits
  harvest() {
    if (this._kapasitas > 0){
      this._petik = this._kapasitas;
      this._kapasitas = 0
    }
  }
}

class Mango {
  // Produce a mango
  constructor(tree) {
    var mangoku = new MangoTree();
    do {
      mangoku.grow();
      mangoku.produceMangoes();
      mangoku.harvest();
      console.log("--------")
    } while (this.sehat)  }
}

function getRandomNumber() {
  return Math.floor(Math.random()*4)
}

var mangoku = new Mango()

console.log(mangoku);
