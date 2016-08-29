import { ok } from 'assert';

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

export default function() {
    var poly = new Polygon(50, 50);
    ok(poly.width === 50);
    ok(poly.height === 50);
}