export class FlatArray {
    constructor(tab) {
        this.value = [];
        this.tab = tab;
    }
    verifyIsArray = array => Array.isArray(array);
    recursiveArray = val => {
        if(this.verifyIsArray(val)) {
            this.runArray(val);
        }
        else {
            if(this.verifyIsArray(val)){
                this.runArray(val);
            }
            else {
                this.value[this.value.length] = val;
            }
        }

    }
    runArray = array => {
        for (let i = 0; i < array.length; i++) {
            this.recursiveArray(array[i]);
        }
    }

    flat() {
        for (let i = 0; i < this.tab.length; i++) {
            if(Array.isArray(this.tab[i])) {
                this.runArray(this.tab[i]);
            }
        }
        return this.value;
    }
}