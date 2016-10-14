"use strict"

function acak(){
  var random = Math.ceil((Math.random())*20)
  return random
}
function acakTinggi(){
  var random = Math.ceil((Math.random())*2)/4
  return random
}

class MangoTree {

  constructor() {
    this._maxAge = acak()
    this._age = 0
    this._height = acakTinggi()
    this._fruits = acak()
    this._harvested = acak()
    this._alive = true;
  }

  grow() {

    this._age +=1
    while(!this._height){
        this._height
    }
    if(this._age>= this._maxAge){
      this._alive = false
    }
  }



  harvest() {
      if(this._harvested > this.fruits){
        console.log("Pohon Sudah Tidak Menghasilkan Buah ");
      }else{
        this._harvested = acak()
        console.log(`Menghasilkan ${this._harvested} Buah`);
      }
  }
}


var pohon = new MangoTree()
console.log(`Pohon Mangga Mulai Tumbuh`);
do{
  pohon.grow()
  console.log(`[Tahun ${pohon._age}] Tinggi Pohon = ${pohon._height += acakTinggi()} Meter | Menghasilkan Buah = ${pohon._harvested + acak()}`);
} while (pohon._alive != false)
console.log("Pohon Mati");
