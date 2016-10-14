"use strict"

function getRandomNumber() {
  let random = Math.floor( (Math.random() * 10) + 1 )
  return random;
}

class MangoTree {  // Initialize a new MangoTree

 constructor() {
   this._age = 0;
   this._height = 0;
   this._harvested = 0;
   this._healthy = true;
   this._fruit = 0;
 }

 // Set states here

 set setAge(x){
   this._age = this._age + x
 }

 set setHeigth(random){
   if(this._height <= 5){
     this._height = this._height + random
   }
 }

 set setFruits(random){
   this._fruit = random
 }

 set setHealthyStatus(i){
   if( i == 20){
     this._healthy = false;
   }
 }

 // Get current states here

 get getAge(){
   return this._age
 }

 get getHeigth(){
   return this._height
 }

 get getFruits(){
   return this._fruit
 }

 get getHealthyStatus(){
   return this._healthy
 }  // Grow the tree

 grow() {
   let hightGrow
   hightGrow = getRandomNumber();
   if(hightGrow < 3){
     hightGrow = 0.3;
   }else if(hightGrow > 3 && hightGrow < 7){
     hightGrow = 0.5
   }else{
     hightGrow = 0.7
   }
   this.setHeigth = hightGrow;
 }  // Produce some mangoes

 produceMangoes() {
   if(this.getAge > 3 && this.getAge < 20){
     console.log("umur" + this.getAge );
     this.setFruits = getRandomNumber();
   }else{
     this.setFruits = 0;
   }
 }  // Get some fruits

 harvest() {
   let get = getRandomNumber()
   if( this.getFruits > 0 ){
     if(this.getFruits < get){
       return this.getFruits
     }else{
       if(this.getFruits - get == undefined){
         return this.getFruits
       }else{
         return this.getFruits - get
       }
     }
   }else{
     return 0
   }// first if

 }

}

class Mango {

 // Produce a mango
 constructor() {
   this._quality = "Good"
 }

}
// obejk
var tree = new MangoTree()

// main function
console.log(`The tree is alive! :smile: `);
var i = 1;do{
 tree.grow()
 tree.produceMangoes()
 console.log("Year " + i + " Report");
 console.log("Height : " + tree.getHeigth);
 console.log("Fruits : " + tree.getFruits);
 console.log("Harvest Fruits : " + tree.harvest());
 console.log("\n");
 tree.setAge = 1
 tree.setHealthyStatus = i
 i++
}while(tree.getHealthyStatus != false)

console.log("The tree has met its end. :sad: ")
