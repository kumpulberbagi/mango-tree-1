"use strict"

function ramdomHeight() {
    return Math.random() * 1
}

function ramdomFruits() {
    return Math.floor(Math.random() * 15)
}

class MangoTree {
    constructor() {
        this._heigth = ramdomHeight();
        this._getFruits = ramdomFruits();
        this._status = true;
        this._age = 0;
    }

    grow() {
        this._age++
            if (this._age <= 10) {
                this._heigth += ramdomHeight();
            } else
        if (this._age == 20) {
            this._status = false;
        }
    }


    produceMangoes() {
        this._getFruits = ramdomFruits();
    }

    getHealtyStatus() {
        if (this._age == 20) {
            this._status = false;
        }
    }

}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

do {
    tree.grow();
    tree.produceMangoes();

    console.log(`[Year ${tree._age} Report] Height = ${tree._heigth.toFixed(2)} Meter | Fruits Harvested = ${tree._getFruits}`);
} while (tree._status != false)

console.log(`The tree has met its end. :sad:`);
