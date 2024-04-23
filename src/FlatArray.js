export class FlatArray {
    constructor(tab) {
        this.tab = tab !== undefined ? tab : [];
    }
    flat() {
        console.log(this.tab.length %2 === 0);
    }
}